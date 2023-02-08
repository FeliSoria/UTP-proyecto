//import React from "react";
const ContactoPage = (props) => {
    return (

        <main className="holder contacto">

            <div>
                <h2>Contacto rápido</h2>

                <form action=" " method="post" className="formulario">

                    <p> <label for="nombre">Nombre</label>
                        <input type="text" name=" " />
                    </p>
                    <p> <label for="email">Email</label>
                        <input type="text" name=" " />
                    </p>
                    <p> <label for="telefono">Teléfono</label>
                        <input type="text" name=" " />
                    </p>
                    <p> <label for="mensaje">Mensaje</label>
                        <textarea name=" ">Enviá tu consulta</textarea>
                    </p>
                    <p>
                        <input type="Submit" value="Enviar" id="submit" name="submit" />
                    </p>

                </form>

            </div>

            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>Podés contactarnos también a través de los siguientes medios</p>
                <ul>
                    <li>Teléfono:+54 11 4587 9632</li>
                    <li>Email:contacto@fstraducciones.com.ar</li>
                    <li>Facebook:fstraducciones</li>
                    <li>Instagram: @fstraducciones</li>
                </ul>
            </div>

        </main>





    );
}

export default ContactoPage;