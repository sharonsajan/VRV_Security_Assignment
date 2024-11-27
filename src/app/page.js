import { getSession } from "../../lib/actions";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }
  return (
    <div className="container">
      <h1 className="title">VRV Security</h1>
      <Link href="/dashboard" className="link">
        Go to Dashboard
      </Link>
    </div>
  );
}
