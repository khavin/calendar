import { useState, useEffect } from "react";
import styles from "./index.module.scss";

export default function ScheduleToggle() {
  let schedules = ["Day", "Week", "Month"];
  // Default schedule - "Day"
  let [selectedSchd, setSelectedSchd] = useState("Day");
  let [scheduleElements, setScheduleElements] = useState([]);

  // handle toggle select action
  const selectToggle = (index) => {
    setSelectedSchd(schedules[index]);
  };

  // Create schedule elements array
  useEffect(() => {
    let elements = [];
    schedules.forEach((value, index) => {
      // CSS classes to add for the toggle
      let classes = styles.toggle;
      // Decide if the selected CSS class should be added
      if (value === selectedSchd) classes += " " + styles.selected;

      // Add HTML elements
      elements.push(
        <span
          className={classes}
          onClick={() => {
            selectToggle(index);
          }}
          key={value}
        >
          {value}
        </span>
      );

      setScheduleElements(elements);
    });
  }, [selectedSchd]);

  return <div className={styles.container}>{scheduleElements}</div>;
}
