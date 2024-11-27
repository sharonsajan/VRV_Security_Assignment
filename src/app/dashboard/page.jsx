import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Transactions from "../ui/dashboard/transactions/transactions";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import styles from "../ui/dashboard/dashboard.module.css";
import { getSession } from "../../../lib/actions";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card
            item={{
              title: "Total Users",
              value: "10,273",
              trend: "12% more than last week",
            }}
          />
          <Card
            item={{
              title: "Total Roles",
              value: "15",
              trend: "5% increase this month",
            }}
          />
          <Card
            item={{ title: "Total Permissions", value: "120", trend: "Stable" }}
          />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}
