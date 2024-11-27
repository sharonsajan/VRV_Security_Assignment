import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/permissions/permission.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

// Sample mock data for permissions (Replace this with your API call)
const permissions = [
  {
    id: 1,
    name: "Read Access",
    description: "Allows viewing of content",
    assignedRoles: 5,
    createdAt: "26.01.2024",
    status: "Active",
  },
  {
    id: 2,
    name: "Write Access",
    description: "Allows editing and adding content",
    assignedRoles: 3,
    createdAt: "20.01.2024",
    status: "Active",
  },
  {
    id: 3,
    name: "Admin Access",
    description: "Allows full control over all content",
    assignedRoles: 2,
    createdAt: "15.01.2024",
    status: "Inactive",
  },
];

export default function PermissionsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a permission...." />
        <Link href="/dashboard/permissions/add">
          <button className={styles.addButton}>Add New Permission</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Permission Name</td>
            <td>Description</td>
            <td>Assigned Roles</td>
            <td>Created At</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td>
                <div className={styles.permission}>
                  <Image
                    src={"/noavatar.png"} // Placeholder image for permission icon
                    alt="Permission Icon"
                    width={40}
                    height={40}
                    className={styles.permissionImage}
                  />
                  {permission.name}
                </div>
              </td>
              <td>{permission.description}</td>
              <td>{permission.assignedRoles}</td>
              <td>{permission.createdAt}</td>
              <td>{permission.status}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/permissions/view/${permission.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <Link href={`/dashboard/permissions/edit/${permission.id}`}>
                    <button className={`${styles.button} ${styles.edit}`}>
                      Edit
                    </button>
                  </Link>
                  {/* Allow delete for permissions */}
                  <form>
                    <input type="hidden" name="id" value={permission.id} />
                    <button
                      className={`${styles.button} ${styles.delete}`}
                      type="submit"
                    >
                      Delete
                    </button>
                  </form>
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
