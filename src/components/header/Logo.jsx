import LogoWeniv from "@/svg/LogoWeniv";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <a href="/" className={styles.logo}>
      <h1>
        <LogoWeniv />
        <span className="a11y-hidden">Weniversity</span>
      </h1>
    </a>
  );
}
