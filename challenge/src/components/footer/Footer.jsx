import React from 'react';
import logoFooter from '../images/Group.png'

import '../../css/styles.css';

export default function Footer() {

  return (
    <div className="footer_container">
      <footer>
        <div className="title_footer">
          <img src={logoFooter} alt="logo_footer" />
        </div>

        <div className="text_footer">
          <p>La Mente es Maravillosa is a property of Grupo MContigo © 2012 - 2020. All rights reserved.
            Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>
        </div>

        <div className="separator_footer">
        </div>

        <div className="list_footer">
          <ul>
            <li><a href="">Política de Cookies</a></li>
            <li><a href="">Política de Privacidad</a></li>
            <li><a href="">Términos y condiciones de uso</a></li>
            <li><a href="">Cláusula Informativa de Consentimiento</a></li>
          </ul>
        </div>

      </footer>
    </div>
  )
}