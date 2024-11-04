import React from "react";

export default function signup() {
  return (
    <section>
      <h2>회원가입</h2>
      <form action="#">
        <label htmlFor="">이메일</label>
        <input type="email" />
        <label htmlFor="">비밀번호</label>
        <input type="password" />
        <label htmlFor="">비밀번호 확인</label>
        <input type="password" />
        <button type="submit">회원가입</button>
      </form>
    </section>
  );
}
