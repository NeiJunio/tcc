import Link from "next/link";
import Image from "next/image";

export default function Carrosel(){
    return(
     
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            {/* <Image class="d-block w-100" src="../../public/backgroundopacidade.jpg" alt="Primeiro Slide" width={500} height={500}/> */}
            <Image
                            src={'logo4.png'}
                            width={1800}
                            height={400}
                            alt={"logo"}
                            unoptimized={true}
                        />
          </div>
          <div class="carousel-item">
            {/* <Image class="d-block w-100" src="../../public/logo4.png" alt="Segundo Slide" width={500} height={500}/> */}
            <Image
                            src={'background.jpg'}
                            width={1250}
                            height={400}
                            alt={"logo"}
                            unoptimized={true}
                        />
          </div>
          <div class="carousel-item">
            {/* <Image class="d-block w-100" src="../../public/backgroundopacidade.jpg" alt="Terceiro Slide" width={500} height={500}/> */}
            <Image
                            src={'backgroundopacidade.jpg'}
                            width={1800}
                            height={400}
                            alt={"logo"}
                            unoptimized={true}
                        />
          </div>
        </div>
        <Link class="carousel-control-prev" href="background.jpg" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </Link>
        <Link class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Próximo</span>
        </Link>
      </div>
        </body>
        </html>
    )
}