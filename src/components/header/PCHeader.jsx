import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";

import styles from "./PCHeader.module.scss";
import Search from "./Search";
import ProfileButton from "../profile/ProfileButton";
import SVGCheckFill from "@/svg/SVGCheckFill";

export default function PCHeader({ type }) {
  const isLogin = true;

  return (
    <>
      <Logo />
      {type !== "notfound" && (
        <>
          <Nav className={styles.nav} />
          <Search />
          <Link href="/cart">
            <SVGCheckFill />
            <span className="a11y-hidden">장바구니</span>
          </Link>
          {isLogin ? <ProfileButton /> : <Link href="/login">로그인</Link>}
        </>
      )}
    </>
  );
}
