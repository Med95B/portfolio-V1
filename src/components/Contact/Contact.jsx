import './Contact.css'
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const [done,setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w2g99ug', 'template_08r738h', form.current, {
          publicKey: '0V7V6OBldqXknLX2y',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setDone(true)
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div className='contact-form'>
        <div className='work-left'>
    <div className='awesome'>
        <span>
            Get in touch
        </span>
        <span>
            Contact me
        </span>
        <div className="blur services-blur1"></div>
    </div>
        
        </div>
        <div className='contact-right'>
<form onSubmit={sendEmail} ref={form}>
    <input type="text" name='user_name' className='user' placeholder='Name'/>
    <input type="text" name='user_email' className='user' placeholder='Email'/>
<textarea name="message" className='user' placeholder='Message'/>
<input type="submit" value='send' className='button' />
<span>{done && 'Thanks for contacting me!'}</span>
<div className='blur contact-blur1'></div>
</form>
        </div>
    </div>
  )
}

export default Contact