import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main >
      <h1 className={styles.text}>sobre o site</h1>
      <Link href={"/"}>voltar</Link>
    </main>
  );
}
