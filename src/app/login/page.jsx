import styles from "@/app/ui/login/login.module.css";
import LoginForm from "../ui/login/loginForm/loginForm";

async function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.notice}>
        <p>
          <strong>Note:</strong> This is a test application. Please use the
          following credentials to log in:
        </p>
        <p>
          <strong>Username:</strong> Admin
        </p>
        <p>
          <strong>Password:</strong> Admin
        </p>
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
