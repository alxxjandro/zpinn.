import { useNavigate } from "react-router-dom";
import styles from "../styles/error.module.css";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>Oops! This page doesn't exist. :(</h1>
      <p className={styles.errorMessage}>
        But hey, every wrong turn leads to the right vinyl eventually.
      </p>
      <button className={styles.errorButton} onClick={() => navigate("/")}>
        Take me home...
      </button>
    </div>
  );
}

export default ErrorPage;
