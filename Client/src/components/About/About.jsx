import "./About.css"

const About = () => {
    return(
    <div className="contenedorPrincipal" >
        <div className="contenedorAbout" >
           
            <div className="contenedorText">
              <h1>Agustina Solaberrieta</h1>
              <h2>Estudiante de Full Stack Developer en Soy Henry</h2>
            <div className="parraforContenedor" >
            <p>Soy Agustina Solaberrieta, soy de  Buenos Aires, Argentina y tengo 18 años. Actualmente estoy estudiando Desarrollo Full Stack en Soy Henry. Me encanta la tecnología y estoy emocionada por aprender y conocer  el mundo de la programación. Estoy preparada para enfrentar nuevos desafíos y construir cosas geniales en la web</p>
            </div>


            <ul>
                {/* <li><a href="#" ><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
             */}
           </ul></div> 
        </div>
    </div>

    )
}


export default About;
