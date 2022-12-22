import React from "react";

const Homepage = (props) => {
    return (
        <main className="holder">

            <div className="homeimg">
                <img src="img/home/img01.jpg alt=Avion" />
            </div>

            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime laboriosam ea dignissimos commodi magni accusamus, quia, sint iusto vitae cum consequuntur voluptatibus placeat vel corrupti velit rerum porro distinctio.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime laboriosam ea dignissimos commodi magni accusamus, quia, sint iusto vitae cum consequuntur voluptatibus placeat vel corrupti velit rerum porro distinctio.</p>
                </div>

                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente excelente</span>
                        <span class="autor">Juan Perez</span>
                    </div>
                </div>


            </div>

        </main>

    );
}

export default Homepage;