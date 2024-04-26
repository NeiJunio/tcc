import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

// import background from '../../public/background.jpg'

//  import logo4 from "public/logo4.png";

export default function Home() {
    return (
        <section className={styles.principal}>
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src={'logo4.png'}
                    width={200}
                    height={50}
                    alt={"logo"}
                    unoptimized={true}
                />
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.nav_list}>
                    <li className={styles.button_nav}>INICIO</li>
                    <li className={styles.nav_item}>SERVIÇOS</li>
                    <li className={styles.nav_item}>GALERIA</li>
                    <li className={styles.nav_item}>SOBRE NÓS</li>
                    <li className={styles.nav_item}>AGENDA</li>
                    <li className={styles.btn_login}>login</li>
                    {/* <li className={styles.btn  styles.btn_sep} classname={styles.btn_3} classn>me=Login 2</li> */}
                </ul>
            </nav>

        </header>
        </section>
        
        
 )
}
