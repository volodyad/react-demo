import React, { useEffect } from "react";
import styles from "./ListingsPage.module.scss";
import { Map } from "../components/Map";
import { ListingsList } from "../components/ListingsList";
import { fetchListings, selectFilteredItems } from "../reducers/listings";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Loader } from "../components/Loader";

interface ListingsPageProps {}

export const ListingsPage: React.FC<ListingsPageProps> = () => {
  const filteredListings = useAppSelector((state) =>
    selectFilteredItems(state.listings)
  );
  const loadingStatus = useAppSelector((state) => state.listings.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <Map />
      </div>
      <div className={styles.list}>
        {loadingStatus === "loading" ? (
          <Loader />
        ) : (
          <ListingsList listings={filteredListings} />
        )}
      </div>
    </div>
  );
};
