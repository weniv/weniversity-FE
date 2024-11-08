import LogoWeniv from "@/svg/LogoWeniv";
import styles from "./Logo.module.scss";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <h1>
        <LogoWeniv />
        <span className="a11y-hidden">Weniversity</span>
      </h1>
    </Link>
  );
}
