import { FC, useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import { throttle } from "lodash";
export interface SearchBarProps {
  onSearch: (query: string) => void;
}
export const SearchBar: FC<SearchBarProps> = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const handleSearch = throttle((query: string) => {
    onSearch(query);
  }, 500);
  useEffect(() => {
    handleSearch(query);
  }, [query, handleSearch]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <span role="img" aria-label="search" className={styles.icon}>
        🔍
      </span>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};
