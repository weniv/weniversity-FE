import Link from "next/link";
import styles from "./ProfileCard.module.scss";

export default function ProfileCard(props) {
  return (
    <section className={styles.card}>
      <h3 className="a11y-hidden">사용자 정보</h3>
      <img src="#" alt="" />
      <p className={styles.name}>HATI</p>
      <p>위니브와 함께한지 +3412일 💙</p>
      <Link href="/dashboard">대쉬보드로 이동</Link>
    </section>
  );
}
