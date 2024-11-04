import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";

import styles from "./PCHeader.module.scss";
import Search from "./Search";
import UserModal from "./UserModal";

export default function PCHeader({ type }) {
  const isLogin = true;

  return (
    <>
      <Logo />
      {type !== "notfound" && (
        <>
          <Nav className={styles.nav} />
          <Search />
          <Link href="/cart">장바구니</Link>
          {isLogin ? <UserModal /> : <Link href="/login">로그인</Link>}
        </>
      )}
    </>
  );
}
