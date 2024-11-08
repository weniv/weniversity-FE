import React from "react";

export default function layout({ children }) {
  return (
    <div>
      메뉴
      <ul>
        <li>홈</li>
        <li>강의자료(강사의 공지사항)</li>
        <li>커리큘럼</li>
        <hr />
        <li>강의목록</li>
      </ul>
      {children}
    </div>
  );
}
