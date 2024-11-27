import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleRolePage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="Role Icon" fill />
        </div>
        Admin Role
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value="" />
          <label>Role Name</label>
          <input type="text" name="roleName" placeholder="Admin" />
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Administrator role with full access"
          />
          <label>Permissions</label>
          <select name="permissions" id="permissions">
            <option value="read">Read</option>
            <option value="write">Write</option>
            <option value="admin" selected>
              Admin
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected>
              Yes
            </option>
            <option value={false}>No</option>
          </select>
          <button type="button">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleRolePage;
