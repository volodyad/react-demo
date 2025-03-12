import React from "react";
import styles from "./ListingsCard.module.scss";
import { Address, Listing, ZillowData } from "../../types";

interface ListingsCardProps {
  listing: Listing;
}

export const ListingsCard: React.FC<ListingsCardProps> = ({ listing }) => {
  const dummyImageUrl =
    "https://images.opendoor.com/source/s3/cabinet-assets/production/storage/63c9809a-c25d-4437-bcc7-8f75a016111c.jpg?service=buyer&token=e8bc7ac3f13255ff51e75c12e52173ac9953c445eb7dbc0881369b22114992ed&w=768";

  function renderPropertyInfo(zillowData?: ZillowData) {
    if (!zillowData) return null;
    const { bedrooms, bathrooms, livingAreaValue } = zillowData;
    return (
      <span className={styles.zillow}>
        {bedrooms && `${bedrooms}bd `}
        {bathrooms && `${bathrooms}ba `}
        {livingAreaValue && `${livingAreaValue} ft`}
        <sup>2</sup>
      </span>
    );
  }

  function renderAddress(address: Address) {
    return (
      <>
        <span className={styles.address}>
          {address.streetNumber} {address.route}
        </span>
        <span className={styles.address}>
          {address.state} {address.stateCode}
        </span>
      </>
    );
  }

  return (
    <div className={styles.card}>
      <img
        src={dummyImageUrl}
        alt={listing.address.formattedAddress}
        className={styles.image}
      />
      <div className={styles.info}>
        {listing.userData.askingPrice && (
          <span className={styles.price}>{listing.userData.askingPrice}$</span>
        )}
        {renderPropertyInfo(listing.zillowData)}
        {renderAddress(listing.address)}
      </div>
    </div>
  );
};
