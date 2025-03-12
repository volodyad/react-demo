import React from "react";
import styles from "./ListingsList.module.scss";
import { ListingsCard } from "../ListingsCard";
import { Listing } from "../../types";
import { Banner } from "../Banner";
import { Filters } from "../Filters";

interface ListingsListProps {
  listings: Listing[];
  positionAfterListingIndex?: number;
}

export const ListingsList: React.FC<ListingsListProps> = ({
  positionAfterListingIndex = 1,
  listings,
}) => {
  const renderListings = () => {
    return listings.map((listing, index) => (
      <React.Fragment key={listing._id}>
        <ListingsCard listing={listing} />
        {index === positionAfterListingIndex && <Banner />}
      </React.Fragment>
    ));
  };
  return (
    <div className={styles.container}>
      {listings.length ? (
        <>
          <Filters></Filters>
          {renderListings()}
        </>
      ) : (
        <span className={styles.noDataMessage}>
          No matches in this area at the moment
        </span>
      )}
    </div>
  );
};
