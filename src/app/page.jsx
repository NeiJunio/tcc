import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
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
                            <li className={styles.nav_item}><Link href={""} className={styles.link}>INICIO</Link></li>
                            <li className={styles.nav_item}><Link href={""} className={styles.link}>SERVIÇOS</Link></li>
                            <li className={styles.nav_item}><Link href={""} className={styles.link}>GALERIA</Link></li>
                            <li className={styles.nav_item}><Link href={""} className={styles.link}>SOBRE NÓS</Link></li>
                            <li className={styles.nav_item}><Link href={""} className={styles.link}>AGENDA</Link></li>
                            <li className={styles.btn_login}><Link href={""} className={styles.link_btn_login}>LOGIN</Link></li>
                        </ul>
                    </nav>

                </header>
            </body>
        </html>

        // <section className={styles.home}>
        //     <header className={styles.header}>
        //         <div className={styles.logo}>
        //             <Image
        //                 src={'logo4.png'}
        //                 width={200}
        //                 height={50}
        //                 alt={"logo"}
        //                 unoptimized={true}
        //             />
        //         </div>

        //         <nav className={styles.navbar}>
        //             <ul className={styles.nav_list}>
        //                 <li className={styles.nav_item}><Link href={""} className={styles.link}>INICIO</Link></li>
        //                 <li className={styles.nav_item}><Link href={""} className={styles.link}>SERVIÇOS</Link></li>
        //                 <li className={styles.nav_item}><Link href={""} className={styles.link}>GALERIA</Link></li>
        //                 <li className={styles.nav_item}><Link href={""} className={styles.link}>SOBRE NÓS</Link></li>
        //                 <li className={styles.nav_item}><Link href={""} className={styles.link}>AGENDA</Link></li>
        //                 <li className={styles.btn_login}><Link href={""} className={styles.link_btn_login}>LOGIN</Link></li>
        //             </ul>
        //         </nav>

        //     </header>

        //     <div className={styles.imagebackground}>
        //         <div className={styles.titulofundo}>
        //             <div className={styles.titulo}>
        //                 SEU CARRO MERECE BRILHAR COM EXCELÊNCIA!
        //             </div>
        //             <div className={styles.subtitulo}>
        //                 Transformando cada detalhe em um espetáculo de elegância e proteção,
        //                     nossa estética automotiva eleva o seu veículo a um novo patamar de beleza e sofisticação
        //             </div>
        //         </div>
        //     </div>


        //     <div className={styles.servicos}>
        //         <div className={styles.tituloservicos}>
        //             <h1>SERVIÇOS</h1>
        //         </div>
        //         <div className={styles.cardservicos}>
        //             <div className={styles.card1servicos}>
        //                 <h1>Card 1</h1>
        //                 <p>Descrição</p>
        //             </div>

        //             <div className={styles.card2servicos}>
        //                 <h1>Card 2</h1>
        //                 <p>Descrição</p>
        //             </div>

        //         </div>
        //     </div>


        // </section>




    )

}
