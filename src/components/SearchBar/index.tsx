import { FC, useEffect, useState, useCallback } from "react";
import styles from "./SearchBar.module.scss";
import { debounce } from "lodash";
export interface SearchBarProps {
  onSearch: (query: string) => void;
}
export const SearchBar: FC<SearchBarProps> = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const onSearchDebounced = useCallback(debounce(onSearch, 500), [onSearch]);
  useEffect(() => {
    onSearchDebounced(query);
    return () => {
      onSearchDebounced.cancel();
    };
  }, [query, onSearchDebounced]);

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
