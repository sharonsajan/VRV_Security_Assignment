"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
const Search = () => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder="search" className={styles.input} />
    </div>
  );
};

export default Search;
