import {
  MdSupervisedUserCircle,
  MdOutlineAdminPanelSettings,
  MdOutlineSettings,
} from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  // Destructure props for clarity
  const { title, value, trend } = item;

  // Select icon dynamically based on the card title
  const getIcon = (title) => {
    switch (title) {
      case "Total Users":
        return <MdSupervisedUserCircle size={24} />;
      case "Total Roles":
        return <MdOutlineAdminPanelSettings size={24} />;
      case "Total Permissions":
        return <MdOutlineSettings size={24} />;
      default:
        return <MdSupervisedUserCircle size={24} />;
    }
  };

  return (
    <div className={styles.container}>
      {getIcon(title)}
      <div className={styles.texts}>
        <span className={styles.title}>{title}</span>
        <span className={styles.number}>{value}</span>
        {trend && (
          <span className={styles.detail}>
            <span className={styles.positive}>{trend}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
