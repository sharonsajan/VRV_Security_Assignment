import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      {/* Item 1: Role Management Tutorial */}
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            Manage roles and permissions in the new RBAC system
          </h3>
          <span className={styles.subtitle}>5 minutes to learn</span>
          <p className={styles.desc}>
            Learn how to assign roles and manage permissions in the updated
            system.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      {/* Item 2: Upcoming RBAC Features */}
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            Dynamic permission updates and more features!
          </h3>
          <span className={styles.subtitle}>Stay tuned</span>
          <p className={styles.desc}>
            New features like real-time permission updates will be available
            soon.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
