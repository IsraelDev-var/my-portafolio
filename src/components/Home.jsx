const Home = () => {
  return (
    <section className="home section p-2" id="home">
        <div className="home__container  container grid__container">
            <h1 className="home__name">
                Israel Vargas
            </h1>
            <div className="home__perfil"> 
            <div className="home__image">
                <img src="/public/images/img-perfil1.jpg" alt="img" className="home__img" />
            </div>
            <div className="home__swadow">

                
                <img src="/public/images/random-lines.svg" alt="" className="home__line"/>
                <img src="/public/images/curved-arrow.svg" alt="" className="home__arrow" />
                <div className="geometric-box">
                    
                </div>
                <div className="home__social">
                    <a href="https://www.instagram.com/israelvc2308/" target="_blank" className="home__socil-link">
                        <i className='bx bxl-instagram'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/israel-varga-09911a251/" target="_blank" className="home__socil-link">
                        <i className='bx bxl-linkedin' ></i>
                    </a>
                    <a href="https://github.com/" target="_blank" className="home__socil-link">
                        <i className='bx bxl-github' ></i>
                    </a>
                </div>
            </div>

            </div>
            <div className="home__info">
                <p className="text_description">
                    <b className="b">Frontend Developer</b>, with knowledge in web 
                        development and design, I offer the best 
                        projects resulting in quality work.
                </p>
                <a href="#about" className="home__scroll">
                    <div className="home__scroll-box">
                        <i className='bx bx-down-arrow-alt'></i>
                    </div>

                    <span className="home__scroll-text">Scroll Down</span>
                </a>

            </div>
        </div>

    </section>
  )
}
export default Home