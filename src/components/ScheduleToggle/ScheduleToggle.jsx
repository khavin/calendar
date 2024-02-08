import styles from "./index.module.scss";

export default function ScheduleToggle() {
  return (
    <div className={styles.container}>
      <span className="selected frost_button">Day</span>
      <span className="frost_button">Week</span>
      <span className="frost_button">Month</span>
    </div>
  );
}
