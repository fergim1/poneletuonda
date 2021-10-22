import React, { useState } from 'react';
import whiteSneakerBackground from './images/white-sneaker.png'
import Carousel from 'react-elastic-carousel';
import Partes from './images/colors/sections/secciones.js';
import Logo from './logo-400x400.png'
import { 
  cordones,
  interiores,
  laterales, 
  lenguetas,
  ojalillos,
  punteras, 
  suelas, 
  talones,
  trensillas,
  whiteSneaker
} from './images/colors/colors.js'

import './App.css';

const breakPointsSectios = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 }
];

const breakPointsColors = [
  { width: 1, itemsToShow:  4},
  { width: 550, itemsToShow: 6 },
  { width: 768, itemsToShow: 6 },
  { width: 1200, itemsToShow: 6 }
];
  
  

export const App = () => {
  const [parte, setParte] = useState('puntera');
  const [secciones, setSecciones] = useState( {
    puntera: whiteSneaker.puntera,
    lateral: whiteSneaker.lateral,
    cordones: whiteSneaker.cordones,
    interior: whiteSneaker.interior,
    lengueta: whiteSneaker.lengueta,
    ojalillos: whiteSneaker.ojalillos,
    suela: whiteSneaker.suela,
    talon: whiteSneaker.talon,
    trensilla: whiteSneaker.trensilla
  })

  const handlePartes = (elegido) => {
    setParte( elegido )
    console.log(elegido)
  }

  const handleColorPuntera = (color) => {
    setSecciones( {
      ...secciones,
      puntera: color
    } )
  }
  
  const handleColorLateral = (color) => {
    setSecciones( {
      ...secciones,
      lateral: color
    } )
  }
  const handleColorSuela = ( color ) => {
    setSecciones( {
      ...secciones,
      suela: color
    } )
  }

  const handleColorCordones = ( color ) => {
    setSecciones( {
      ...secciones,
      cordones: color
    } )
  }

  const handleColorInterior = ( color ) => {
    setSecciones( {
      ...secciones,
      interior: color
    } )
  }

  const handleColorOjalillos = ( color ) => {
    setSecciones( {
      ...secciones,
      ojalillos: color
    } )
  }

  const handleColorTrensilla = ( color ) => {
    setSecciones( {
      ...secciones,
      trensilla: color
    } )
  }

  const handleColorTalon = ( color ) => {
    setSecciones( {
      ...secciones,
      talon: color
    } )
  }

  const handleColorLengueta = ( color ) => {
    setSecciones( {
      ...secciones,
      lengueta: color
    } )
  }

  return (
    <div className="App">
      <div className='logo-wrapper'>
          <img
            src={ Logo }
            className='logo-img'
            alt='Move-Now-logo'
          />
      </div>

      <div className='sneaker-wrapper'>
        <img src= { whiteSneakerBackground } alt='sneaker-background' className='sneaker-img'/>
        <img src= { secciones.cordones } alt='cordones' className='sneaker-img'/>
        <img src= { secciones.interior } alt='interior' className='sneaker-img'/>
        <img src= { secciones.lateral } alt='lateral'  className='sneaker-img'/>
        <img src= { secciones.lengueta } alt='lengueta'  className='sneaker-img'/>
        <img src= { secciones.ojalillos } alt='ojalillos'  className='sneaker-img'/>
        <img src= { secciones.puntera } alt='puntera' className='sneaker-img'/>
        <img src= { secciones.suela } alt='suela'  className='sneaker-img'/>
        <img src= { secciones.talon } alt='talon'  className='sneaker-img'/>
        <img src= { secciones.trensilla } alt='trensilla'  className='sneaker-img'/>

      </div>

      <div className='sections-wrapper'>
          <Carousel 
            breakPoints={breakPointsSectios}
            pagination={false}
            >
              {
                Partes.map((obj, index ) => 
                  < div className='styling-example' key={index}>
                      <button 
                        className='section-wrapper'
                        onClick= { () => handlePartes ( obj.nombre)}
                      >
                            <img 
                              className='sections-img'
                              src={obj.seccion} 
                              alt={ obj.nombre }
                            />
                            <p
                              className={`sections-name ${ parte===obj.nombre && 'selected' } `}
                            > 
                              {obj.nombre} 
                            </p>         
                      </button>
                  </div>)
                }
          </Carousel>
      </div>

      <div className='colors-wrapper'>
      <Carousel 
            breakPoints={breakPointsColors}
            pagination={false}
      >              
          {
            parte === 'puntera'
            &&
            punteras.map((puntera, index ) =>               
                < div className='styling-example' key={index}>
                        <img 
                          className='colors-img' 
                          src= { puntera.cuadrado } 
                          alt='' 
                          onClick= { () => handleColorPuntera ( puntera.parte ) } 
                        />               
                </div>
            )
          }
          {
            parte === 'lateral'
            &&
            laterales.map((lateral, index ) =>               
                < div className='styling-example' key={index}>
                        <img 
                          className='colors-img' 
                          src= { lateral.cuadrado } 
                          alt='' 
                          onClick= { () => handleColorLateral ( lateral.parte ) } 
                        />               
                </div>
            )
          }
          {
            parte === 'suela'
            &&
            suelas.map((suela, index ) =>               
                < div className='styling-example' key={index}>
                        <img 
                          className='colors-img' 
                          src= { suela.cuadrado } 
                          alt='' 
                          onClick= { () => handleColorSuela ( suela.parte ) } 
                        />               
                </div>
            )
          }
          {
            parte === 'cordones'
            &&
            cordones.map((cordon, index ) =>               
                < div className='styling-example' key={index}>
                        <img 
                          className='colors-img' 
                          src= { cordon.cuadrado } 
                          alt='' 
                          onClick= { () => handleColorCordones ( cordon.parte ) } 
                        />               
                </div>
            )
          }
          {
            parte === 'interior'
            &&
            interiores.map((interior, index ) =>               
                < div className='styling-example' key={index}>
                        <img 
                          className='colors-img' 
                          src= { interior.cuadrado } 
                          alt='' 
                          onClick= { () => handleColorInterior ( interior.parte ) } 
                        />               
                </div>
            )
          }
          {
            parte === 'ojalillos'
            &&
            ojalillos.map((ojalillo, index ) =>               
                < div className='styling-example' key={index}>
                        <img 
                          className='colors-img' 
                          src= { ojalillo.cuadrado } 
                          alt='negro' 
                          onClick= { () => handleColorOjalillos ( ojalillo.parte ) } 
                        />               
                </div>
            )
          }
          {
            parte === 'trensilla'
            &&
            trensillas.map((trensilla, index ) =>               
                < div className='styling-example' key={index}>
                        <img 
                          className='colors-img' 
                          src= { trensilla.cuadrado } 
                          alt='negro' 
                          onClick= { () => handleColorTrensilla ( trensilla.parte ) } 
                        />               
                </div>
            )
          }
          {
            parte === 'talon'
            &&
            talones.map((talon, index ) =>               
                < div className='styling-example' key={index}>
                        <img 
                          className='colors-img' 
                          src= { talon.cuadrado } 
                          alt='negro' 
                          onClick= { () => handleColorTalon ( talon.parte ) } 
                        />               
                </div>
            )
          }
          {
            parte === 'lengueta'
            &&
            lenguetas.map((lengueta, index ) =>               
                < div className='styling-example' key={index}>
                        <img 
                          className='colors-img' 
                          src= { lengueta.cuadrado } 
                          alt='negro' 
                          onClick= { () => handleColorLengueta ( lengueta.parte ) } 
                        />               
                </div>
            )
          }

      </Carousel>

      </div>


    </div>
  );
}

export default App;