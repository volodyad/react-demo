import { FC } from "react";
import styles from "./Filters.module.scss";
import Select from "react-select";
import { useAppDispatch } from "../../app/hooks";
import { sortListings, SortProp } from "../../reducers/listings";

export const Filters: FC = () => {
  const dispatch = useAppDispatch();
  const onSort = (option: any) => {
    const sortProp: SortProp = {
      order: option.value,
      prop: "zillowData.dateSold",
    };
    dispatch(sortListings(sortProp));
  };
  const soldOptions = [
    { label: "Sold", value: "asc" },
    { label: "Active", value: "desc" },
  ];
  return (
    <div className={styles.container}>
      <Select
        className={styles.soldFilter}
        defaultValue={soldOptions[0]}
        onChange={onSort}
        options={soldOptions}
      />
    </div>
  );
};
