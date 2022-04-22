import Link from "next/link";
import styles from "./layout.module.css";
export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Sam&apos;s World</div>
      <div>
        <ul className={styles.navmenu}>
          <li className={styles.menuitem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.menuitem}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles.menuitem}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );
}
