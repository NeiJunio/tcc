import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Teste next</h1>
      <Link href={'/sobre'}>clique aqui</Link>

      {/* COLOCA O TEXTO AQUI */}
    </main>
  );
}
