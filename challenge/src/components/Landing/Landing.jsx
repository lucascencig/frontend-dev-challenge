import React from "react";
import logo from '../images/logoES.png'
import photoOne from '../images/photoOne.png'
import photoTwo from '../images/photoFamilia.png'
import Footer from "../footer/Footer";
import Form from "../form/form";

import { FaComments } from 'react-icons/fa'

import '../../css/styles.css';

export default function Landing() {

  return (
    <div className="contenedor_landing">
      <h1><img src={logo} alt="logo" /></h1>

      <div className="titulo_relevante">
        <h3>
          Más relevante
        </h3>
      </div>


      {/*first secction cards news */}

      <div className="card_news">
        <div>
          <img src={photoOne} alt="photoOne" />
        </div>

        <div className="card_section">
          <h3>Nutrición</h3>
        </div>

        <div className="card_title">
          <h2>
            Colapso mental: cuando siento el peso del mundo sobre mí
          </h2>
        </div>

        <div className="card_description">
          <p>
            A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de...
          </p>
        </div>
      </div>


      <div className="card_news_two">
        <div>
          <img src={photoTwo} alt="photoOne" />
        </div>

        <div className="card_section_two">
          <h3>Familia</h3>
        </div>

        <div className="card_title_two">
          <h2>
            Jugar en familia es mejor
          </h2>
        </div>

        <div className="card_description_two">
          <p>
            Lo bueno de pasar los domingos en familia es cuando todos podemos jugar y despejar la men...
          </p>
        </div>
      </div>


      {/* publicidad */}
      <div className="advertising">
        <div className="title_advertising">
          <p>Publicidad</p>
        </div>

        <div className="image_advertising">
        </div>
      </div>



      {/* intermediate photo */}
      <div className="intermediate_photo">
        <div className="intermediate_photo_img">
        </div>

        <div className="legend_text">
          <p>Lorem ipsum dolor sit amet. Aquí entrará una leyenda en la foto</p>
        </div>
      </div>



      {/* excerpt */}
      <div className="excerpt">
        <span className="border_excerpt"> </span>
        <p>¿Cómo podemos diseñar una educación que tenga como resultado niños más responsables? En este artículo compartimos algunas estrategias que aumentan la probabilidad de éxito para este objetivo.</p>
      </div>



      {/* second section of cards news */}

      <div className="card_news_three">
        <div className="card_news_three_img">

        </div>

        <div className="card_section_three">
          <h3>Kids</h3>
        </div>

        <div className="card_title_three">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
        </div>

        <div className="card_description_three">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias sed a voluptatem optio.
          </p>
        </div>
      </div>


      {/* button comments */}

      <div className="button_comments">
        <button>
          <p>Lee los comentarios <span><FaComments className="faComments" /></span>  </p>
        </button>
      </div>


      {/* separator */}
      <div className="separator"></div>


      {/* form */}
      <Form />


      {/* footer */}
      <Footer />
      
    </div>

  )
}