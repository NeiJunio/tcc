import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

//  import logo4 from "public/logo4.png";

export default function Home() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          {/* <Image
            src={"https://images.unsplash.com/photo-1676288176869-b2e1c6bea1a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            width={100}
            height={100}
          /> */}
          <img src={'/img/logo4.png'} className={styles.logo} alt="logo" />
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
