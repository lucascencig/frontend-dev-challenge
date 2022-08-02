import React from "react";
import { FaBars, FaSearch, FaArrowRight } from 'react-icons/fa'
import tituloMenu from '../images/TituloMenu.png'
import iconMenu from '../../assets/menu.svg';
import crossMenu from '../../assets/cross.svg'
// import menuCross from '../../js/scripts'
import '../../css/styles.css'

export default function Menu() {



  return (
    <div className="contenedor_general_menu">

      <label for="menu" className="boton_menu">
        <img id="icon__menu" src={iconMenu} alt="" />
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
      </div>

      <div className="titulo_menu">
        <img src={tituloMenu} alt="titulo_menu" />
      </div>

      <div className="boton_buscador">
        <FaSearch />
      </div>

    </div>
  )
}