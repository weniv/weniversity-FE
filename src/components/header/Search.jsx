import SVGSearch from "@/svg/SVGSearch";
import styles from "./Search.module.scss";

export default function Search() {
  return (
    <form className={styles.form}>
      <label htmlFor="search" className="a11y-hidden">
        검색
      </label>
      <input
        className={styles.input}
        type="text"
        id="search"
        name="search"
        placeholder="어떤 강좌를 찾고 계신가요?"
      />
      <button type="button" className={styles.button}>
        <SVGSearch width="24" height="24" />
        <span className="a11y-hidden">검색</span>
      </button>
    </form>
  );
}
