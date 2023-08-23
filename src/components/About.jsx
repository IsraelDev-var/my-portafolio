const About = () => {
  return (
    <section className="about  section" id="about">
        <div className="about__container container grid">
            <h2 className="section__title-1">
                <span>About Me</span>
            </h2>

            <div className="about__perfil">
              <div className="about__image">
                <img src="/public/images/img-perfil1.jpg" alt="img" className="about__img" />

                <div className="about__shadow"></div>

                <div className="geometric-box"></div>
                <div className="about__box"></div>
                
                
                <img src="/public/images/curved-arrow.svg" alt="" className="about__arrow" />
                <img src="/public/images/random-lines.svg" alt="" className="about__line"/>

              </div>
            </div>
            <div className="about__info">
              <p className="about__description">
                <b>Frontend Web Developer | Unleashing Creativity and Collaboration </b>   
                Hello! I'm a passionate frontend web developer with a knack for crafting captivating digital experiences.
                <b>My focus</b> isn't just on impeccable code,
                but <b> also</b> on effective collaboration within diverse teams and <b> the ability to thrive under pressure.</b>
                
              

              </p>
              <p className="about__description">
                <b>My teamwork skills have been instrumental in overcoming technical challenges and achieving ambitious goals. </b>
                <br />
                I believe that sharing diverse perspectives enriches <b>ideas</b> and leads to exceptional outcomes.
              </p>
              <p className="about__description">
              <b>I'm excited to continue learning and growing in frontend web development.</b>
                  embracing new technologies to offer modern solutions. 
                  If you're seeking someone who is passionate, collaborative, and always ready to innovate,
                  I'd be thrilled to be part of your team!
              </p>
              <ul className="about__list">
                <li className="about__item">
                  <b>My Skills Are:</b> HTML, CSS, JavaScript, 
                  React, Git & GitHub, Bootstrap, tailwindcss & 
                  Figma.
                </li>
                

              </ul>
              <div className="about__buttons ">
                
                <a href="#contact" className="button">
                  <i className='bx bx-send'></i>Contact Me
                </a>
                <a className="button__ghost"  href="https://www.linkedin.com/in/israel-varga-09911a251/" target="_blank" >
                    <i className='bx bxl-linkedin' ></i>
                </a>
              </div>
              
            </div>


        </div>

    </section>
  )
}
export default About