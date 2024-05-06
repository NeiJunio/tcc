import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {

    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <div className={styles.principal}>
                    <div className={styles.img1}>imagem 1</div>
                    <div className={styles.img2}>imagem 2</div>
                    <div className={styles.img3}>imagem 3</div>
                    <div className={styles.img4}>imagem 4</div>

                    {/* <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item11}>11</div>
                    <div className={styles.item12}>12</div>
                    <div className={styles.item13}>13</div>
                    <div className={styles.item14}>14</div>
                    <div className={styles.item15}>15</div>
                    <div className={styles.item16}>16</div>
                    <div className={styles.item17}>17</div>
                    <div className={styles.item18}>18</div>
                    <div className={styles.item19}>19</div>
                    <div className={styles.item20}>20</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item10}>10</div>
                    <div className={styles.item11}>11</div>
                    <div className={styles.item12}>12</div>
                    <div className={styles.item13}>13</div>
                    <div className={styles.item14}>14</div>
                    <div className={styles.item15}>15</div>
                    <div className={styles.item16}>16</div>
                    <div className={styles.item11}>11</div>
                    <div className={styles.item12}>12</div>
                    <div className={styles.item13}>13</div>
                    <div className={styles.item14}>14</div>
                    <div className={styles.item15}>15</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item11}>11</div>
                    <div className={styles.item12}>12</div>
                    <div className={styles.item13}>13</div>
                    <div className={styles.item14}>14</div>
                    <div className={styles.item15}>15</div>
                    <div className={styles.item16}>16</div>
                    <div className={styles.item17}>17</div>
                    <div className={styles.item18}>18</div>
                    <div className={styles.item19}>19</div>
                    <div className={styles.item20}>20</div>
                    <div className={styles.item11}>11</div>
                    <div className={styles.item12}>12</div>
                    <div className={styles.item13}>13</div>
                    <div className={styles.item14}>14</div>
                    <div className={styles.item15}>15</div>
                    <div className={styles.item16}>16</div>
                    <div className={styles.item17}>17</div>
                    <div className={styles.item18}>18</div>
                    <div className={styles.item19}>19</div>
                    <div className={styles.item20}>20</div>
                    <div className={styles.item11}>11</div>
                    <div className={styles.item12}>12</div>
                    <div className={styles.item13}>13</div>
                    <div className={styles.item14}>14</div>
                    <div className={styles.item15}>15</div>
                    <div className={styles.item16}>16</div>
                    <div className={styles.item17}>17</div>
                    <div className={styles.item18}>18</div>
                    <div className={styles.item19}>19</div>
                    <div className={styles.item20}>20</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item8}>8</div>
                    <div className={styles.item9}>9</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div>
                    <div className={styles.item3}>3</div>
                    <div className={styles.item4}>4</div>
                    <div className={styles.item5}>5</div>
                    <div className={styles.item6}>6</div>
                    <div className={styles.item7}>7</div>
                    <div className={styles.item1}>1</div>
                    <div className={styles.item2}>2</div> */}





                </div>
            </body>
            <footer></footer>
        </html>





    )
}

{/*
 import Image from "next/image";
 import Link from "next/link";
 import styles from "./page.module.css";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import React from 'react';
 import { Button } from 'reactstrap';


 export default function Home() {
     return (
         <Button color="danger">Danger!</Button>
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

                  {/* <div className="container">
          <h1>React Bootstrap</h1>

          <button className="btn btn-primary">Clique em Mim</button>
      </div> 

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div class="carousel-item active">
        {/* <Image class="d-block w-100" src="../../public" alt="Primeiro Slide" width={100} height={100}/> 
        <Image
        className={styles.testes}
                              src={'backgroundimageg.jpg'}
                              width={1800}
                              height={400}
                              alt={"logo"}
                              unoptimized={true}
                          />
      </div>
      <div class="carousel-item">
        {/* <Image class="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Segundo Slide" alt="Segundo Slide"  width={100} height={100} /> 
        <Image
                              className={styles.testes}
                              src={'logo4.png'}
                              width={250}
                              height={55}
                              alt={"logo"}
                              unoptimized={true}
                          />
      </div>
    
    </div>

    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Anterior</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Próximo</span>
    </a>
  </div>      
              </body>
          </html>

          <section className={styles.home}>
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

              <div className={styles.imagebackground}>
                  <div className={styles.titulofundo}>
                      <div className={styles.titulo}>
                          SEU CARRO MERECE BRILHAR COM EXCELÊNCIA!
                      </div>
                      <div className={styles.subtitulo}>
                          Transformando cada detalhe em um espetáculo de elegância e proteção,
                              nossa estética automotiva eleva o seu veículo a um novo patamar de beleza e sofisticação
                      </div>
                  </div>
              </div>


              <div className={styles.servicos}>
                  <div className={styles.tituloservicos}>
                      <h1>SERVIÇOS</h1>
                  </div>
                  <div className={styles.cardservicos}>
                      <div className={styles.card1servicos}>
                          <h1>Card 1</h1>
                          <p>Descrição</p>
                      </div>

                      <div className={styles.card2servicos}>
                          <h1>Card 2</h1>
                          <p>Descrição</p>
                      </div>

                  </div>
              </div>


          </section>




     )

 }
*/}