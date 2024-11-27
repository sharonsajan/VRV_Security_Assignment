import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

// Sample mock data for roles (Replace this with your API call)
const roles = [
  {
    id: 1,
    name: "Admin",
    description: "Has full access to all features",
    assignedUsers: 5, // Adjusted the assigned users to a more reasonable number
    createdAt: "26.01.2024",
    status: "Active",
    canEdit: false, // Admin role cannot be edited or deleted by other admins
  },
  {
    id: 2,
    name: "Moderator",
    description: "Can moderate user content and manage reports",
    assignedUsers: 5,
    createdAt: "20.01.2024",
    status: "Active",
    canEdit: true, // Moderator can be edited by admin
  },
  {
    id: 3,
    name: "User",
    description: "Regular user with limited access",
    assignedUsers: 50, // Updated to realistic count
    createdAt: "15.01.2024",
    status: "Inactive",
    canEdit: true, // Users can be edited by admin
  },
];

export default function RolesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a role...." />
        <Link href="/dashboard/roles/add">
          <button className={styles.addButton}>Add New Role</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Role Name</td>
            <td>Description</td>
            <td>Assigned Users</td>
            <td>Created At</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>
                <div className={styles.role}>
                  <Image
                    src={"/noavatar.png"} // Placeholder image for role icon
                    alt="Role Icon"
                    width={40}
                    height={40}
                    className={styles.roleImage}
                  />
                  {role.name}
                </div>
              </td>
              <td>{role.description}</td>
              <td>{role.assignedUsers}</td>
              <td>{role.createdAt}</td>
              <td>{role.status}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/roles/test`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  {role.canEdit && (
                    <Link href={`/dashboard/roles/edit/${role.id}`}>
                      <button className={`${styles.button} ${styles.edit}`}>
                        Edit
                      </button>
                    </Link>
                  )}
                  {/* Prevent deletion of admin role */}
                  {role.id !== 1 && (
                    <form>
                      <input type="hidden" name="id" value={role.id} />
                      <button
                        className={`${styles.button} ${styles.delete}`}
                        type="submit"
                      >
                        Delete
                      </button>
                    </form>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
