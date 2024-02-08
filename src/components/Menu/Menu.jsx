import ScheduleToggle from "../ScheduleToggle";
import styles from "./index.module.scss";

export default function Menu() {
  return (
    <div className={styles.container}>
      <ScheduleToggle />
    </div>
  );
}
