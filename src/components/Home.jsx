const Home = () => {
  return (
    <section className="home section p-1 h-screen" id="home">
        <div className="home__container md:grid-cols-2    container grid__container">
            {/* <h1  className="home__name md:text-5xl md:col-span-3">
                Israel Vargas
            </h1> */}
            <div className="home__perfil md:col-start-1 md:col-end-2"> 
            <div className="home__image md:w-[300px]">
                <img src="/images/perfil.jpg" alt="img" className="home__img" />
            </div>
            <div className="home__swadow ">

                
                <img src="/images/random-lines.svg" alt="" className="home__line"/>
                <img src="/images/curved-arrow.svg" alt="" className="home__arrow" />
                <div className="geometric-box">
                    
                </div>
                <div className="home__social md:pr-2">
                    <a href="https://www.instagram.com/israelvc2308/" rel="noreferrer"  target="_blank" className="home__socil-link">
                        <i className='bx bxl-instagram'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/israel-varga-09911a251/"rel="noreferrer"  target="_blank" className="home__socil-link">
                        <i className='bx bxl-linkedin' ></i>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer"  className="home__socil-link">
                        <i className='bx bxl-github' ></i>
                    </a>
                </div>
            </div>
            </div>

            <div className="home__info flex items-center  justify-center flex-col md:col-start-2   md:col-end-2">
            <h1  className="home__name md:text-5xl md:col-span-3">
                Israel Vargas
            </h1>
                <p className="text_description p-3">
                    <b className="b">Frontend Developer</b>, with knowledge in web 
                        development and design, I offer the best 
                        projects resulting in quality work.
                </p>
                <a href="#about" className="home__scroll">
                    <div className="home__scroll-box">
                        <i className='bx bx-down-arrow-alt'>Start</i>
                    </div>

                    <span className="home__scroll-text">Scroll Down</span>
                </a>

            </div>
        </div>

    </section>
  )
}
export default Home