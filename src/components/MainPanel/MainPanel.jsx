import Menu from "../Menu";
import styles from "./index.module.scss";

export default function MainPanel() {
  return (
    <div className={styles.container}>
      <Menu />
      <div></div>
    </div>
  );
}
