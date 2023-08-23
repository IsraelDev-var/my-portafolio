const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title-2">
            <span>Services.</span> 
        </h2>
        <div className="services__container container grid md:flex">
            <article className="services__card">
                <div className="services__border">

                </div>
                <div className="services__content">
                    <div className="services__icon">
                        <div className="services__box"></div>
                        <i className='bx bx-layout' ></i>
                    </div>

                    <h2 className="services__title">Web Desings</h2>

                    <p className="services__description">
                        Beautiful and elegant designs with 
                        interfaces that are intuitive, efficient 
                        and pleasant  to use for the user.

                    </p>
                </div>

            </article>

            <article className="services__card">
                <div className="services__border">

                </div>
                <div className="services__content">
                    <div className="services__icon">
                        <div className="services__box"></div>
                        <i className='bx bx-code-block' ></i>
                    </div>

                    <h2 className="services__title">Development</h2>

                    <p className="services__description">
                    Custom web development tailored to your 
                    specifications, designed to provide a 
                    flawless user experience.
                    </p>
                </div>

            </article>

            <article className="services__card">
                <div className="services__border">

                </div>
                <div className="services__content">
                    <div className="services__icon">
                        <div className="services__box"></div>
                        <i className='bx bx-devices' ></i>
                    </div>

                    <h2 className="services__title">Mobile App</h2>

                    <p className="services__description">
                        Design and transform website projects 
                        into mobile apps to provide a seamless
                        user experience.
                    </p>
                </div>

            </article>

        </div>

    </section>
  )
}
export default Services