import React from "react";

export default function login() {
  return (
    <section>
      <h2>로그인</h2>
      <form action="#">
        <label htmlFor="">이메일</label>
        <input type="email" />
        <label htmlFor="">비밀번호</label>
        <input type="password" />
        <button type="submit">로그인</button>
      </form>
    </section>
  );
}
