const Projects = () => {



  return (
    <section className="projects section" id="projects">
        <h2 className="section__title-1 md:text-5xl">
            <span>Projects.</span>
        </h2>
        <div className="projects__container  container grid">


            {/* ========================= projectos 1 ================================== */}
            <article className="project__card">
                <div className="projects__image  ">
                    <img src="/images/the-weathergif.gif" alt="aqui va una img" className="projects__img bg-center w-[100%] bg-cover" />

                    <a  target="_blank" href="https://the-weathet-ivc.netlify.app/" className="projects__button button">
                        <i className='bx bx-right-top-arrow-circle' ></i>
                    </a>
                </div>
                <div className="projects__content">
                    <h3 className="projects__subtitle">Website</h3>
                    <h2 className="projects__title">The Weather App</h2>

                    <p className="projects__description">
                        This website was created with<b> the Weather API, HTML CSS and JSX, tailwind.</b>
                        <br />
                        This web application has a search and location system to be able to give you the coordinates of the weather,
                        whether it is in your city or anywhere in the world.
                    </p>
                </div>
                <div className="projects__button">
                    <a  href=" https://github.com/IsraelDev-var/weather" target="_blank" className="projects__link">
                    <i className='bx bxl-github' ></i>View
                    </a>

                    <a href=" https://the-weathet-ivc.netlify.app/" target="_blank" className="projects__link">
                    <i className='bx bxl-dribbble' ></i>View
                    </a>

                </div>


            </article>
{/* ========================= projectos 2 ================================== */}
            <article className="project__card">
                <div className="projects__image">
                    <img src="/images/imgClouting.jpg" alt="" className="projects__img bg-cover bg-center" />
                    

                    <a target="_blank" href="https://e-commers-ivc.netlify.app/" className="projects__button button">
                        <i className='bx bx-right-top-arrow-circle' ></i>
                    </a>
                </div>
                <div className="projects__content">
                    <h3 className="projects__subtitle">Free Store</h3>
                    <h2 className="projects__title">Clothing Store App</h2>

                    <p className="projects__description">
                    Website was created with<b> HTML CSS and JS.</b>
                    In this wedside I simulate a virtual store,
                    applying knowledge of covalidations for the shopping cart

                    </p>
                </div>
                <div className="projects__button">
                    <a  href=" https://github.com/IsraelDev-var/e-commers" target="_blank" className="projects__link">
                    <i className='bx bxl-github' ></i>View
                    </a>

                    <a href=" https://e-commers-ivc.netlify.app/" target="_blank" className="projects__link">
                    <i className='bx bxl-dribbble' ></i>View
                    </a>

                </div>


            </article>
            {/* ========================= projectos 3 ================================== */}
            <article className="project__card">
                <div className="projects__image">
                    <img src="/images/rickandmorty-mg.jpg" alt="" className="projects__img" />

                    <a target="_blank" href="https://proyect-3-ivc.netlify.app/" className="projects__button button">
                        <i className='bx bx-right-top-arrow-circle' ></i>
                    </a>
                </div>
                <div className="projects__content">
                    <h3 className="projects__subtitle">WebSide</h3>
                    <h2 className="projects__title">Rick and Morty</h2>

                    <p className="projects__description">
                    webSite created with the Rick and Morty <b>API, HTML, CSS, JSX and tailwind,</b>
                    in this website you will see your favorite dimension of rick and morty
                    
                    </p>
                </div>
                <div className="projects__button">
                    <a href=" https://github.com/IsraelDev-var/dimension-App" target="_blank" className="projects__link">
                    <i className='bx bxl-github' ></i>View
                    </a>

                    <a href=" https://proyect-3-ivc.netlify.app/" target="_blank" className="projects__link">
                    <i className='bx bxl-dribbble' ></i>View
                    </a>

                </div>
            </article>

            {/* ========================= projectos 4 ================================== */}
           



{/* ========================= projectos 5 ================================== */}


        </div>
    </section>
)
}
export default Projects