export interface Address {
  location: [number, number];
  googlePlaceId: string;
  formattedAddress: string;
  state: string;
  stateCode: string;
  streetNumber: string;
  route: string;
  locality: string;
  county: string;
  zipcode: string;
  kind: string;
  friendlyUrl: string;
}

export interface UserData {
  inspectionAvailability: string[];
  askingPrice: number;
  wastewaterType: string;
  foundationIssues: boolean;
  hoaFee: number | null;
  hoaPeriod: string | null;
  linkToPhotos: string | null;
  updatedAskingPrice: any[];
}

export interface ListingSubType {
  is_FSBA: boolean;
  is_newHome: boolean;
  is_FSBO: boolean;
  is_pending: boolean;
  is_bankOwned: boolean;
  is_openHouse: boolean;
  is_forAuction: boolean;
  is_comingSoon: boolean;
  is_foreclosure: boolean;
}

export interface ZillowData {
  yearBuilt: number;
  lotSize: number;
  zestimate: number;
  rentZestimate: number;
  livingAreaValue: number;
  homeType: string;
  bedrooms: number;
  bathrooms: number;
  homeStatus: string;
  hdpUrl: string;
  dateSold: number;
  listing_sub_type: ListingSubType;
  hoaFee: number | null;
  schoolRating: number;
  parkingSpaces: number;
  hasPool: boolean | null;
}

export interface Listing {
  address: Address;
  userData: UserData;
  zillowData: ZillowData;
  _id: string;
}
