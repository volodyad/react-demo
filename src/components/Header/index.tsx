import React from "react";
import styles from "./Header.module.scss";
import { SearchBar } from "../SearchBar";
import { useAppDispatch } from "../../app/hooks";
import { searchListings } from "../../reducers/listings";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const onSearch = (searchString: string) => {
    dispatch(searchListings(searchString));
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};
