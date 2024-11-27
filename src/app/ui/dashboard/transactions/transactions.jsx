import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Role & Permission Updates</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>User</td>
            <td>Action</td>
            <td>Date</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>Assigned Role: Admin</td>
            <td>14.02.2024</td>
            <td>
              <span className={`${styles.status} ${styles.success}`}>
                Success
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Alice Smith
              </div>
            </td>
            <td>Removed Role: Editor</td>
            <td>13.02.2024</td>
            <td>
              <span className={`${styles.status} ${styles.failed}`}>
                Failed
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Robert Brown
              </div>
            </td>
            <td>Granted Permission: View Reports</td>
            <td>12.02.2024</td>
            <td>
              <span className={`${styles.status} ${styles.success}`}>
                Success
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Sarah Lee
              </div>
            </td>
            <td>Revoked Permission: Delete Records</td>
            <td>11.02.2024</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
