import Link from "next/link";
import React, { useState } from "react";
import ProfileImg from "./ProfileImg";
import styles from "./ProfileButton.module.scss";
import classnames from "classnames";

export default function ProfileButton() {
  return (
    <div className={styles.wrap}>
      <button>
        <ProfileImg outline="true" width="42" height="42" />
      </button>
      <ul className={styles.modal}>
        <li>
          <Link href="/dashboard">대시보드</Link>
        </li>
        <li>
          <button>로그아웃</button>
        </li>
      </ul>
    </div>
  );
}
