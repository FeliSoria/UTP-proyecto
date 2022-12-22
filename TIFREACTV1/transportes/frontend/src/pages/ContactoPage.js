import React from "react";

const ContactoPage = (props) => {
    return (

        <main class="holder contacto">
        <div>
            <h2>Contacto rápido</h2>
            <form action=" " method=" " class="formulario">

                <p> <label for="nombre">Nombre</label>
                    <input type="text" name=" "/>
                </p>

                <p> <label for="email">Email</label>
                    <input type="text" name=" "/>
                </p>
                <p> <label for="telefono">Teléfono</label>
                    <input type="text" name=" "/>
                </p>
                <p> <label for="mensaje">Mensaje</label>
                    <textarea name=" "></textarea>
                </p>
                <p>
                    <input type="Submit" value="Enviar"/>
                </p>

            </form>
        </div>

        <div class="datos">
            <h2>Otras vías de comunicación</h2>
            <p>Puede contactarse también a través de los siguientes medios</p>
            <ul>
                <li>Teléfono:+54 11 4587 9632</li>
                <li>Email:contacto@transportesx.com.ar</li>
                <li>Facebook:TransportesX</li>
                <li>Twitter:@TX</li>
                <li>Skype:TransportesX</li>
            </ul>
        </div>

    </main>
        
    );
}

export default ContactoPage;