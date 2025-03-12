import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { getListings } from "../services/listings";
import { Listing } from "../types";
import _ from "lodash";

export type SortProp = {
  order: "asc" | "desc";
  prop: "zillowData.dateSold";
};

export interface ListingsState {
  items: Listing[];
  searchCriteria: string;
  status: "idle" | "loading" | "failed";
  sortProp: SortProp;
}

const initialState: ListingsState = {
  items: [],
  searchCriteria: "",
  status: "idle",
  sortProp: {
    order: "desc",
    prop: "zillowData.dateSold",
  },
};

export const fetchListings = createAsyncThunk(
  "listings/fetchListings",
  async () => {
    const deals = await getListings();
    return deals;
  }
);

export const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    searchListings: (state, action: PayloadAction<string>) => {
      state.searchCriteria = action.payload;
    },
    sortListings: (state, action: PayloadAction<SortProp>) => {
      state.sortProp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(fetchListings.rejected, (state) => {
        state.status = "failed";
      });
  },
});

function filterItems(
  listings: Listing[],
  search: string,
  sort: SortProp
): Listing[] {
  return _.chain<Listing>(listings)
    .filter(
      (prop: Listing) =>
        prop.address.formattedAddress.includes(search) ||
        prop.address.state.includes(search)
    )
    .orderBy(sort.prop, sort.order)
    .value();
}

const selectItems = (state: ListingsState) => state.items;
const selectSearchCriteria = (state: ListingsState) => state.searchCriteria;
const selectSortProp = (state: ListingsState) => state.sortProp;

export const selectFilteredItems = createSelector(
  [selectItems, selectSearchCriteria, selectSortProp],
  (items, searchCriteria, sortProp) =>
    filterItems(items, searchCriteria, sortProp)
);

export const { searchListings, sortListings } = listingsSlice.actions;

export const listingsReducer = listingsSlice.reducer;
