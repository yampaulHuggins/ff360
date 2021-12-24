import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../styles/Footer.css'
import {Link} from 'react-router-dom'; 

function Footer(){
    return(
        <footer>
      <section className='ft-main'>
        <div className='main-item'>
          <h2 className="title">Nosotros</h2>
          <p className='paragraph'>
            <ul>
              <li>Est. 2017</li>
              <li>Especializados en Elaboración Mobiliaria</li>
              <li>Ubicados en la 65 Infantería</li>
              <li>Made in PR</li>
            </ul>
          </p>
        </div>
        {/* <div className='main-item'>
          <h2 className="title">Enlaces</h2>
          <ul>
            <li><a href='https://www.facebook.com/fizzelfurniture360/'>1</a></li>
            <li><a href='https://www.facebook.com/fizzelfurniture360/'>2</a></li>
            <li><a href='https://www.facebook.com/fizzelfurniture360/'>3</a></li>
            <li><a href='https://www.facebook.com/fizzelfurniture360/'>4</a></li>
          </ul>
        </div> */}
        <div className='main-item'>
          <h2 className="title">Fizzel Furniture 360</h2>
          <ul className="">
            <li><Link to="/">Inicio</Link></li>
            {/* <li><Link to="/cotizaciones">Cotizaciones</Link></li> */}
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/contáctanos">Contáctanos</Link></li>
            {/* <li><Link to="/historia">Historia</Link></li> */}
          </ul>
        </div>
        {/* <div className='main-item'>
          <h2 className="title">Testimonios</h2> 
          <p className='paragraph'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Ut convallis augue sed congue feugiat." - <b>Juan del Pueblo (2018)</b></p>
           <button>ver trabajo</button>
        </div> */}
      </section>
      
      <section className='social'>
        <ul className="social-list">
          <li><a href='https://www.facebook.com/fizzelfurniture360/' target="_blank" rel="noopener noreferrer"><i className="big facebook square icon"></i></a></li>
          <li><a href='https://www.instagram.com/fizzelfurniture360/' target="_blank" rel="noopener noreferrer"><i className="big instagram icon"></i></a></li>
        </ul>
      </section>
      <section className='legal'>
        <ul className="legal-list">
          {/* <li><a href="https://www.termsfeed.com/blog/write-terms-conditions/">Términos &amp; Condiciones</a></li>
          <li><a href="https://policies.google.com/privacy?hl=en-US">Política de Privacidad</a></li>
          <li><a href="https://policies.google.com/privacy?hl=en-US">Oportunidades de Empleo</a></li> */}
          <li>FIZZEL FURNITURE 360 &copy; 2022</li>
        </ul>
      </section>
    </footer>
    )
}

export default Footer;