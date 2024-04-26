import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <header className={styles.header}>
      <h1> teste</h1>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="https://avatars.githubusercontent.com/u/152228340?v=4"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </nav>
    </header>
  )
}


{/* <nav class="nav-bar">
<div class="logo">
    <Image src="logo4.png" alt="logo" class="img">
    
</div>
<div class="nav-list">
    <ul>
        <li class="nav-item"><a href="#" class="nav-link">INICIO</a></li>
        <li class="nav-item"><a href="#" class="nav-link">SOBRE</a></li>
        <li class="nav-item"><a href="#" class="nav-link">SERVIÇOS</a></li>
        <li class="nav-item"><a href="#" class="nav-link">SOCIAL</a></li>
    </ul>
</div>

<div class="mobile-menu-icon">
    <button onclick="menuShow()"><img class="icon" src="menu_white_36dp (1).svg" alt=""></button>
</div>
</nav>

<div class="mobile-menu">
<ul>
<li class="nav-item"><a href="#" class="nav-link">INICIO</a></li>
<li class="nav-item"><a href="#" class="nav-link">SOBRE</a></li>
<li class="nav-item"><a href="#" class="nav-link">SERVIÇOS</a></li>
<li class="nav-item"><a href="#" class="nav-link">SOCIAL</a></li>
</ul>

</div>
</div>
< /header> */}
