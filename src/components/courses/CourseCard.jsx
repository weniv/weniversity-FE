import styles from "./CourseCard.module.scss";

export default function CourseCard(props) {
  const { id, title, teacher, type, price, discount } = props.data;
  return (
    <section className={styles.card}>
      <h3>{title}</h3>
      <p>{teacher}</p>
      <p>{type}</p>
    </section>
  );
}
