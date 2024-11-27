import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdOutlineAdminPanelSettings,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Main",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
    ],
  },
  {
    title: "Administration",
    list: [
      {
        title: "Role Management",
        path: "/dashboard/roles",
        icon: <MdOutlineAdminPanelSettings />,
      },
      {
        title: "Permission Management",
        path: "/dashboard/permissions",
        icon: <MdOutlineAdminPanelSettings />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  const userName = "John Doe"; // Replace with dynamic user data
  const userRole = "Administrator"; // Replace with dynamic role data

  return (
    <div className={styles.container}>
      {/* User Info Section */}
      <div className={styles.user}>
        <Image src="/noavatar.png" alt="User Avatar" width="50" height="50" />
        <div className={styles.userDetails}>{userName}</div>
        <div className={styles.userTitle}>{userRole}</div>
      </div>

      {/* Menu Items */}
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button className={styles.logout}>
        <MdLogout className={styles.logoutIcon} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
