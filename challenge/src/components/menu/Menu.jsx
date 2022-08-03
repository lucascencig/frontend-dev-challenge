import React, { useState } from "react";

// import icons
import { FaSearch, FaArrowRight } from 'react-icons/fa'

// import images
import tituloMenu from '../images/TituloMenu.png'

// import svg
import iconMenu from '../../assets/menu.svg';
import crossMenu from '../../assets/cross.svg'
import faq from '../../assets/Faq.svg'

// import styles
import '../menu/menu.css'


export default function Menu() {

  const [icon, setIcon] = useState(true)
  console.log(icon)
  function changeToCross(e) {
    if (e.target) {
      setIcon(!icon)

    }

  }

  return (
    <div className="contenedor_general_menu">

      <label for="menu" className="boton_menu" onClick={changeToCross}>
        {
          icon === true
            ?
            <img id="icon__menu" src={iconMenu} alt="" />
            :
            <img id="icon__menu" src={crossMenu} alt="" />
        }
      </label>
      <input type="checkbox" id="menu" className="boton_menu_input" />

      <div className="nav_menu">
        <h2>Embarazo</h2>
        <div className="options_menu">
          <a href="#">Quiero ser mamá </a><FaArrowRight className="arrow_right_1" />
          <a href="#">Voy a ser mamá</a><FaArrowRight className="arrow_right_2" />
          <a href="#">Parto</a><FaArrowRight className="arrow_right_3" />
        </div>

        <h2>Educación</h2>
        <div className="options_menu">
          <a href="#">Aprende a ser mamá</a><FaArrowRight className="arrow_right_4" />
          <a href="#">Educación para bebés</a><FaArrowRight className="arrow_right_5" />
          <a href="#">Educación para niños</a><FaArrowRight className="arrow_right_6" />
        </div>

        <div className="faquestions">
          <a href="#faq">
            <img src={faq} alt="" />
          </a>
        </div>
      </div>

      <div className="titulo_menu">
        <img src={tituloMenu} alt="titulo_menu" />
      </div>

      <div className="boton_buscador">
        <label htmlFor="search"><FaSearch className="icon_search_menu" /></label>
        <input type="checkbox" id="search" className="checkbox_search" />

        <div className="search_bar_container">
          <div className="input_search">
            <input type="text" placeholder="Buscar" />
          </div>

          <div>
            <button className="search_content"><FaSearch className="icon_search" /></button>
          </div>
        </div>
      </div>

    </div>
  )
}