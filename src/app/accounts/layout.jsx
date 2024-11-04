import React from "react";

export default function AccountLayout({ children }) {
  return (
    <>
      <header>
        <a href="/">
          <h1>weniv</h1>
        </a>
      </header>
      <main>{children}</main>
    </>
  );
}
