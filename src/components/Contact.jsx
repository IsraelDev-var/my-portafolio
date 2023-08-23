import { useForm } from "react-hook-form"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  

  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_tpdtc2m', 'template_j4rtg54', form.current, 'tmQR9k3ODVVeo_1J7')
        .then((result) => {
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
    };







  return (
    <section className="contact " id="contact" >
      
      <div className="contact__container container grid">
        <div className="contact__dat">
          <h2 className="section__title-2">
            <span>Contact Me.</span>
          </h2>
          <p className="contact__description-1">
          I will read all emails. Send me any 
          message you want and I'll get back to you.

          </p>

          <p className="contact__description-2">
          I need your <b>Name</b> and <b>Email Address</b>, but 
          you won't receive anything other than your reply.

          </p>
          <div className="geometric-box"></div>
        </div>


        <div className="contact__mail">
          <h2 className="contact__title">
            Send Me A Message 
          </h2>
          <form  className="contact__form" ref={form} onSubmit={sendEmail}  id="contact-form">
            <div className="contact__group">
              <div className="contact__box">
                <input type="text" name="user_name" className="contact__input " id="name" required placeholder="First Name"  />
                <label htmlFor="user_name"   className="contact__label">First Name</label>
              </div>
            </div>

            <div className="contact__box">
                <input type="email" name="user_email" className="contact__input  " id="email" required placeholder="Email Address"  />
                <label htmlFor="email" className="contact__label">Email Address</label>
              </div>

              <div className="contact__box">
                <input type="text" name="user_subject" className="contact__input " id="subject" required placeholder="Subjec"  />
                <label htmlFor="subject" className="contact__label">Subject</label>
              </div>
              <div className="contact__box contact__area">

                <textarea name="user_message" id="message" className="contact__input  " required placeholder="Message"></textarea>
                <label htmlFor="message" className="contact__label">Message</label>
              </div>
              
              
              <button type="submit"  className=" contact__button button-contact " id="liveAlertBtn">
                <i className='bx bx-send'></i>Send Massage
                </button>
                
                
          </form>

        </div>
        <div className="contact__social">
          <img src="/public/images/curved-arrow.svg" alt="img" className="contact__social-arrow" />

          <div className="contact__social-data">
            <div>
            

              <p className="contact__social-decription">
                write me on social networks
                </p>
            </div>
            <div className="contact__social-link ">

              <a href="https://web.facebook.com/imisrael.thebest" target="_blank" className="contact__social-link-a">
                <i className='bx bxl-facebook bnt-footer'></i>
              </a>
              <a href="https://www.instagram.com/israelvc2308/" target="_blank" className="contact__social-link-a">
              <i className='bx bxl-instagram bnt-footer' ></i>
              </a>
                <a href="https://www.linkedin.com/in/israel-varga-09911a251/" target="_blank" className="contact__social-link-a">
                <i className='bx bxl-linkedin bnt-footer' ></i>
                </a>

            </div>
            <p>@Created by Israel Vargas</p>
          </div>
        </div>



      </div>

    </section>
  )
}
export default Contact