
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        const name = e.target.user_name.value;

        // Validación: el nombre no debe contener números
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(name)) {
            setError("The name field should not contain numbers.");
            return;
        } else {
            setError(""); // Limpia el error si es válido
        }

        emailjs.sendForm('service_tdwd1w3', 'template_j4rtg54', form.current, 'tmQR9k3ODVVeo_1J7')
            .then((result) => {
                console.log(result.text);
                setMessage("Message sent successfully!");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setMessage("Failed to send message. Try again later.");
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact__container container grid__container">
                <div className="contact__dat">
                    <h2 className="section__title-2">
                        <span>Contact Me.</span>
                    </h2>
                    <p className="contact__description-1">
                        I will read all emails. Send me any message you want and I’ll get back to you.
                    </p>
                    <p className="contact__description-2">
                        I need your <b>Name</b> and <b>Email Address</b>, but you won’t receive anything other than your reply.
                    </p>
                    <div className="geometric-box"></div>
                </div>

                <div className="contact__mail">
                    <h2 className="contact__title">Send Me A Message</h2>
                    <form className="contact__form" ref={form} onSubmit={sendEmail} id="contact-form">
                        <div className="contact__group">
                            <div className="contact__box">
                                <input type="text" name="user_name" className="contact__input" id="name" required placeholder="First Name" aria-label="First Name" />
                                <label htmlFor="name" className="contact__label">First Name</label>
                            </div>
                        </div>

                        <div className="contact__box">
                            <input type="email" name="user_email" className="contact__input" id="email" required placeholder="Email Address" aria-label="Email Address" />
                            <label htmlFor="email" className="contact__label">Email Address</label>
                        </div>

                        <div className="contact__box">
                            <input type="text" name="user_subject" className="contact__input" id="subject" required placeholder="Subject" aria-label="Subject" />
                            <label htmlFor="subject" className="contact__label">Subject</label>
                        </div>

                        <div className="contact__box contact__area">
                            <textarea name="user_message" id="message" className="contact__input" required placeholder="Message" aria-label="Message"></textarea>
                            <label htmlFor="message" className="contact__label">Message</label>
                        </div>

                        {/* Mostrar mensaje de error o éxito si existe */}
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        {message && <div className="alert alert-success" role="alert">{message}</div>}

                        <button type="submit" className="contact__button button-contact" id="liveAlertBtn">
                            <i className='bx bx-send'></i>Send Message
                        </button>
                    </form>
                </div>

                <div className="contact__social">
                    <img src="/images/curved-arrow.svg" alt="img" className="contact__social-arrow" />
                    <div className="contact__social-data">
                        <p className="contact__social-description">Write me on social networks</p>
                        <div className="contact__social-link">
                            <a href="https://web.facebook.com/imisrael.thebest" rel="noreferrer" target="_blank" className="contact__social-link-a">
                                <i className='bx bxl-facebook bnt-footer'></i>
                            </a>
                            <a href="https://www.instagram.com/israelvc2308/" rel="noreferrer" target="_blank" className="contact__social-link-a">
                                <i className='bx bxl-instagram bnt-footer'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/israel-varga-09911a251/" rel="noreferrer" target="_blank" className="contact__social-link-a">
                                <i className='bx bxl-linkedin bnt-footer'></i>
                            </a>
                        </div>
                        <p>@Created by Israel Vargas</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
