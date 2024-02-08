import CreateEventButton from "../CreateEventButton";
import styles from "./index.module.scss";
export default function SidePanel() {
  return (
    <div className={styles.container}>
      <CreateEventButton />
    </div>
  );
}
