import React from 'react';

// import images
import logoFooter from '../images/Group.png'

// import styles
import '../footer/footer.css'

export default function Footer() {
  return (
    <div className="footer_container">

      <footer>
        <div className="footer_part_one">
          <div className="title_footer">
            <img src={logoFooter} alt="logo_footer" />
          </div>

          <div className="text_footer">
            <p>La Mente es Maravillosa is a property of Grupo MContigo © 2012 - 2020. All rights reserved.
              Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>
          </div>
        </div>
        <div className="separator_footer">
        </div>

        <div className="list_footer">
          <ul>
            <li><a href="#">Política de Cookies</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Términos y condiciones de uso</a></li>
            <li><a href="#">Cláusula Informativa de Consentimiento</a></li>
          </ul>
        </div>
      </footer>

    </div>
  )
}