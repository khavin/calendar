import styles from "./index.module.scss";

export default function CreateEventButton() {
  return (
    <div
      className={`${styles.create_event_button} ${styles.black_button} black_button`}
    >
      +<span className={`${styles.create_event_text}`}>&nbsp;Create Event</span>
    </div>
  );
}
