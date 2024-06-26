// import React from "react";
// import { Animate } from "react-simple-animate";
// import { PageHeader } from "../../components/page-header";
// import { BsInfoCircleFill } from "react-icons/bs";
// import "./styles.scss"
// const Contact = () => {
//     return <section id="contact" className="contact">
//         <PageHeader headerText={"Contact Me"} icon={<BsInfoCircleFill size={40} />} />
//         <div className="contact-content">
//             <Animate
//                 play
//                 duration={1}
//                 delay={0}
//                 start={{
//                     transform: 'translateX(-200px)'
//                 }}
//                 end={{
//                     transform: 'translateX(0px)'
//                 }}
//             >
//                 <h3 className="contact-content-header-text">Let's Talk</h3>
//             </Animate>
//             <Animate
//                 play
//                 duration={1}
//                 delay={0}
//                 start={{
//                     transform: 'translateX(900px)'
//                 }}
//                 end={{
//                     transform: 'translateX(0px)'
//                 }}
//             >
//                 <div className="contact-content-form">
//                     <div className="contact-content-form-controlswrapper">
//                         <div className="namewrapper">
//                             <input required name="name" type="text" className="inputName" />
//                             <label htmlFor="name" className="nameLabel">Name</label>
//                         </div>
//                         <div className="emailwrapper">
//                             <input required name="email" type="text" className="inputEmail" />
//                             <label htmlFor="email" className="emailLabel">E-mail</label>
//                         </div>
//                         <div className="descriptionwrapper">
//                             <textarea rows={7} required name="description" type="text" className="inputDescription" />
//                             <label htmlFor="description" className="descriptionLabel">Desription</label>
//                         </div>
                        
//                     </div>
//                     <button>Submit</button>
//                 </div>
//             </Animate>
//         </div>
//     </section>
// }
// export default Contact;

import React, { useRef } from "react";
import { Animate } from "react-simple-animate";
import { PageHeader } from "../../components/page-header";
import { BsFileEarmarkPerson } from "react-icons/bs";
import emailjs from 'emailjs-com';
import "./styles.scss";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_12jvxoq', 
            'template_egzywet', 
            form.current,"MbAQwoOGLBC8D0kYO"
        )
        .then((result) => {
            console.log(result.text);
            alert('Email sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send email. Please try again.');
        });
    };

    return (
        <section id="contact" className="contact">
            <PageHeader headerText={"Contact Me"} icon={<BsFileEarmarkPerson size={40} />} />
            <div className="contact-content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{ transform: 'translateX(-200px)' }}
                    end={{ transform: 'translateX(0px)' }}
                >
                    <h3 className="contact-content-header-text">Let's Talk</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{ transform: 'translateX(900px)' }}
                    end={{ transform: 'translateX(0px)' }}
                >
                    <form ref={form} onSubmit={sendEmail} className="contact-content-form">
                        <div className="contact-content-form-controlswrapper">
                            <div className="namewrapper">
                                <input required name="user_name" type="text" className="inputName" />
                                <label htmlFor="user_name" className="nameLabel">Name</label>
                            </div>
                            <div className="emailwrapper">
                                <input required name="user_email" type="email" className="inputEmail" />
                                <label htmlFor="user_email" className="emailLabel">E-mail</label>
                            </div>
                            <div className="descriptionwrapper">
                                <textarea rows={7} required name="message" className="inputDescription" />
                                <label htmlFor="message" className="descriptionLabel">Description</label>
                            </div>
                        </div>
                        <input type="submit" value="Send" className="btn"/>
                    </form>
                </Animate>
            </div>
        </section>
    );
}

export default Contact;
