import React from "react";

// imports images
import logo from '../images/logoMejorConSalud.png'
import photoOne from '../images/photoOne.png'
import photoTwo from '../images/photoFamilia.png'
import publicidadUno from '../images/publicidad.png'
import publicidadTres from '../images/publicidad3.png'
import newsletters from '../images/newsletters.png'

// imports components
import Footer from "../footer/Footer";
import Form from "../form/form";
import Faq from "../faq/faq";
import Comments from "../comments/comments";

// import styles
import '../../css/styles.css';

export default function Landing() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("¡Enviado!")
  }

  return (
    <div className="contenedor_landing">

      <div className="main_title">
        <img className="logo" src={logo} alt="logo" />
        <h1><span className="title_mejor">Mejor</span><span className="title_con">con</span><span className="title_salud">Salud</span></h1>
      </div>

      {/*first secction cards news */}
      <div className="cards_container">
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
      </div>

      <div className="second_section">
        {/* publicidad */}
        <div className="advertising">
          <div className="title_advertising">
            <p>Publicidad</p>
          </div>

          <div className="image_advertising">
            <img src={publicidadUno} alt="" />
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
      </div>

      {/* comments */}
      <h4 className="title_comments">comentarios</h4>
      <Comments />

      {/* FAQ Section */}
      <section id="#faq">
        <Faq />
      </section>

      <div className="advesiting_large">
        <div className="title_advertising_large">
          <p>Publicidad</p>
        </div>
        <div className="advesiting_large_img">
          <img src={publicidadTres} alt="" />
        </div>
      </div>

      <div className="second_image_advertising">
      </div>

      {/* separator */}
      <div className="separator"></div>

      {/* form */}
      <Form />

      <div className="news_letters">
        <img src={newsletters} alt="newsletters" />
        <div className="news_letters_titles">
          <h3>SUSCRIBETE</h3>
          <h4>PARA RECIBIR MÁS INFORMACIÓN</h4>
          <div className="input_newsletters">
            <input type="text" />
            <button onClick={handleSubmit}>Suscribirse</button>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />

    </div >
  )
}