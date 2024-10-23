import img from './img/ites.jpg'
import aulas from './img/iconmonstr-school-5-48.png'
import tecnologos from './img/iconmonstr-school-14-48.png'
import estudiantes from './img/iconmonstr-school-25-48.png'
import egresados from './img/iconmonstr-school-21-48.png'
import './historia.css'


export const Historia = () =>{
    return(
        <>
        <div className="historia_container">
            <div className="container_ img">
                <img src={img} alt="imagen de la institucion" />
            
            </div>
            <div className="p_container">
                <h3>Historia de ITES SAN VALERO</h3>
                <p>
                En nuestra Institución, estamos comprometidos con la excelencia y la innovación en la educación técnica. Nuestra institución fue aprobada por el Ministro de Educación Superior, Ciencia y Tecnología y acreditada por el Poder Ejecutivo mediante el Decreto 755-03. Este reconocimiento nos permitió implementar una nueva modalidad de educación técnica, diseñada específicamente para responder a las demandas del sector productivo.

Desde nuestra fundación, hemos centrado nuestros esfuerzos en la formación de Técnicos Medios, ofreciendo a los egresados del bachillerato la oportunidad de cursar programas de formación de dos años. Estos programas, de acuerdo con las normas de la MESCYT, se denominan Técnico Superior o Tecnólogo.

Nuestro objetivo es proporcionar a nuestros estudiantes una educación de calidad que les permita adquirir las habilidades y conocimientos necesarios para sobresalir en sus respectivos campos y contribuir significativamente al desarrollo de nuestra sociedad.
                </p>
            </div>

        </div>
        <div className='mvv_container'>
        <div className='item_container'>
            <h4>MISIÓN</h4>
            <p>Somos una obra de la Iglesia Católica sin fines de lucro, dedicada al desarrollo de capacidades humanas, técnicas y profesionales, a través de una formación integral y servicios de calidad.</p>
        </div>

        

        <div className='item_container'>
            <h4>VISIÓN</h4>
            <p>Ser una institución de referencia en materia de formación e innovación educativa, apegada a
            los principios de calidad y de responsabilidad social.</p>
        </div>

        <div className='item_container'>
            <h4>VALORES</h4>
           <p>Integridad</p>
           <p>Compromiso</p>
           <p>Equidad</p>
           <p>Liderazgo</p>
           <p>Proactividad</p>
           <p>Solidaridad</p>
           <p>Respeto</p>
            
        </div>

        </div>
         <div className='cifras_container'>
          <div className='cifras_item_container'>
            <img src={tecnologos} alt="item tecnologos" />
            <h4>6</h4>
            <p>Tecnologos</p>
          </div>
          <div className='cifras_item_container'>
            <img src={aulas} alt="item tecnologos" />
            <h4>47</h4>
            <p>Aulas</p>
          </div>
          <div className='cifras_item_container'>
            <img src={estudiantes} alt="item tecnologos" />
            <h4>390</h4>
            <p>Estudiantes</p>
          </div>
          <div className='cifras_item_container'>
            <img src={egresados} alt="item tecnologos" />
            <h4>4700</h4>
            <p>Egresados</p>
          </div>
         </div>
        </>

    )
}