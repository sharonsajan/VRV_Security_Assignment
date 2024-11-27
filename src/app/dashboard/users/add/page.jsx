import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {/* Username Input */}
        <input type="text" placeholder="Username" name="username" required />

        {/* Email Input */}
        <input type="email" placeholder="Email" name="email" required />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />

        {/* Phone Input */}
        <input type="tel" placeholder="Phone Number" name="phone" />

        {/* Role Selection (Admin, Moderator, User) */}
        <select name="role" id="role" required>
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Moderator">Moderator</option>
          <option value="User">User</option>
        </select>

        {/* Admin Status (Visible only for Admin users) */}
        <select name="isAdmin" id="isAdmin" required>
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        {/* User Status (Active or Inactive) */}
        <select name="isActive" id="isActive" required>
          <option value={true}>Active</option>
          <option value={false}>Inactive</option>
        </select>

        {/* Address / Description Field */}
        <textarea
          required
          name="address"
          id="address"
          rows="6"
          placeholder="Enter Address or Description"
        ></textarea>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
