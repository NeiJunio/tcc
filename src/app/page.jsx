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
                    {/* <li className={styles.btn_login}>login</li> */}
                    {/* <li className={styles.btn } {styles.btn_3}{styles.btn_sep}>me=Login 2</li> */}
                </ul>
            </nav>

        </header>
        
        <div className={styles.imagebackground}>
            <div className={styles.titulofundo}>
                <div className={styles.titulo}>
                    <h1>SEU CARRO MERECE BRILHAR COM EXCELÊNCIA!</h1>
                </div>
                <div className={styles.subtitulo}>
                            <h2>Transformando cada detalhe em um espetáculo de elegância e proteção, 
                            nossa estética automotiva eleva o seu veículo a um novo patamar de beleza e sofisticação</h2>
                </div>
            </div>
        </div>


        </section>
        
        
 )
}
