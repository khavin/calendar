import styles from "./index.module.scss";

export default function ScheduleToggle() {
  return (
    <div className={styles.container}>
      <span className={`${styles.selected} ${styles.toggle}`}>Day</span>
      <span className={styles.toggle}>Week</span>
      <span className={styles.toggle}>Month</span>
    </div>
  );
}
