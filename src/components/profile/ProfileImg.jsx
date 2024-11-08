import Image from "next/image";
import React from "react";
import defaultProfileImg from "../../../public/images/404.png";
import styles from "./ProfileImg.module.scss";

export default function ProfileImg(props) {
  const { width, height, outline, src } = props;

  return (
    <Image
      src={src || defaultProfileImg}
      alt="프로필 이미지"
      width={width || "40"}
      height={height || "40"}
      className={styles.outline}
    />
  );
}
