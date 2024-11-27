import styles from "@/app/ui/dashboard/roles/addRole/addRole.module.css";

const AddRolePage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        {/* Role Name Dropdown */}
        <select name="roleName" id="roleName" required>
          <option value="">Choose a Role</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </select>

        {/* Permissions Field */}
        <select name="permissions" id="permissions" required>
          <option value="">Choose Permissions</option>
          <option value="read">Read</option>
          <option value="write">Write</option>
          <option value="admin">Admin</option>
        </select>

        {/* Description Field */}
        <textarea
          required
          name="description"
          id="description"
          rows="16"
          placeholder="Description"
        ></textarea>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRolePage;
