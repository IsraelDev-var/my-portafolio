const Footer = () => {
  return (
    <section className="footer">
        <div className="footer__container container grid__container">
                <ul className="footer__links">
                    <li >
                        <a href="#home" className="footer__link">Home</a>
                    </li>
                    <li >
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li >
                        <a href="services" className="footer__link">Services</a>
                    </li>
                    <li >
                        <a href="projects" className="footer__link">Projects</a>
                    </li>
                </ul>
                <span className="footer__copy">
                    &#169; All Rights Reserved By
                    <a href="#home"> Israel Vargas</a>
                </span>
        </div>
        <a href="" className="scrollup" id="scroll-up">
        <i class='bx bx-chevron-up'></i>
        </a>
    </section>
  )
}
export default Footer