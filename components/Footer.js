
import Script from "next/script";
import styles from "./layout.module.css";
export default function Footer() {
  return (
    <footer className={styles.footercontainer}>
       <div className={styles.footer}>
      <h2>&copy;2022 Sam&apos;s World</h2>
      <p>Facebook | Instagram | Twitter</p>
      </div>
	</footer>
  );
}
