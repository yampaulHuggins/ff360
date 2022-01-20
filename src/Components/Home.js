import React from 'react'
import {Link} from 'react-router-dom'; 
import 'semantic-ui-css/semantic.min.css'
import '../styles/home.css'
import {Button} from 'semantic-ui-react'
import LOGO01 from '../LOGO01.svg'
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity: 0}}>
      <div>
        <div className='landingContainer'>
          <div className='item-1'>
            <div>
              <h1 className="landing-headline">
                Rompiendo esquemas de hace décadas...
              </h1>
              <p className="subHeadline">
                No permitas que te cotizen ese gabinete que siempre has soñado y luego se desaparecen con tu idea...
                Con <b>FF360</b> tus ideas siempre seran tuyas.
                Permitenos brindarte el mejor servicio.
              </p>
              <Link to='/servicios'>
                <div className="moreButton">
                  <Button size="big" color="red" className="moreButton">
                    Ver más
                  </Button>
                </div>
              </Link>
            {/* <h1 className="headline">SOLICITA UNA COTIZACION HOY.</h1>
            <p className="subHeadline">BRINDANDO SERVICIOS A TODO PUERTO RICO, SOLICITA UNA COTIZACION HOY.</p>
            <Link to='/cotizaciones'>
              <Button size="massive">COTIZAR</Button>
            </Link> */}
            </div>
          </div>
          <div className='item-2'>
            <img src={LOGO01} className='logo' alt='Fizzel Furniture 360 (FF360)'/>
          </div>
        </div>
      </div>
      </motion.div>
  );
}
export default Home;