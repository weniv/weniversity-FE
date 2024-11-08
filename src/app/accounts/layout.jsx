import Link from "next/link";
import React from "react";

export default function AccountLayout({ children }) {
  return (
    <>
      <header>
        <Link href="/">
          <h1>weniv</h1>
        </Link>
      </header>
      <main>{children}</main>
    </>
  );
}
