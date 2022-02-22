import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";

export default function projects() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Read{" "}
          <Link href="/projects/project-1">
            <a>Projects Page</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
