import React from 'react';

function onHandleClick() {

}

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="section--title">
                <strong>Say Hello</strong>
                <h2>Contact_</h2>
            </div>
            <div className="contact--form">
                <h5>Let's connect, chat a little or just stay in touch</h5>
                <form action="">
                    <h5>just let me know your
                        <input type="text" id="name" className="name" placeholder="name"/>
                        ,
                        your
                        <input type="text" id="email" className="email" placeholder="email address"/>
                        and
                        your
                        <input type="text" id="request" className="request" placeholder="request"/> and
                        <button type="button" onClick={onHandleClick}>send</button> it over
                    </h5>
                </form>
            </div>
        </section>
    );
}

export default Contact;