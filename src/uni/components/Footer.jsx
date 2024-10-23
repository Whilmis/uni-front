import logo from './img/logoSV2.png'
import './footer.css'



export const Footer = () =>{
    return(
        <>
        <h4 className="footer_title">Como llegar</h4>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.332823955728!2d-69.92503132626358!3d18.544005451090403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89312575ae45%3A0xce3fd6a2edfde9ba!2sFUNDACION%20SAN%20VALERO%20-%20Polit%C3%A9cnico%20San%20Valero!5e0!3m2!1ses!2sdo!4v1721671713661!5m2!1ses!2sdo" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       <div className="footer_conatiner ">
        <div className="item_footer container_imgf"> <img  src={logo} alt="logo de la institucion"  /> </div>
        <div className="item_footer">
            <h6>Contacto</h6>
            <p>Tell: 809-688-0404</p>
            <p>Email: Info@fundosva.com</p>
        </div>
        <div className="item_footer">
        <h6 className='contacto_title'>Formulario</h6>
             <form className='form_footer'>
                <div> <label htmlFor="name">Nombre</label> <input type="text" name="name" id="name" /></div>
               <div> <label htmlFor="email">Email</label> <input type="email" name="email" id="email" /> </div>
                <div><label htmlFor="telefono">Telefono</label><input type="tel" name="telefono" id="telefono" /> </div> 
               <div> <input type="button" value="enviar" /> </div>
             </form>
        </div>
       </div>
        </>
    )
}