import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';

import { FiX } from 'react-icons/fi';
import { IoCheckmarkCircle } from 'react-icons/io5';

import './ContactModal.scss';

export default function ContactModal(props) {
  const { setShowContactModal, showContactModal } = props;

  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);
  
  const timerRef = useRef();

  const API_PATH = "https://joe-chaiet.herokuapp.com/mailer.php";

  useEffect(() => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');    
    setError('');

    return () => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setError('');
      clearTimeout(timerRef.current);
    }
  }, [showContactModal])

  const handleChange = event => {    
    if(event.target.name === 'name'){
      setName(event.target.value)
    }

    if(event.target.name === 'email'){
      setEmail(event.target.value)
    }

    if(event.target.name === 'subject'){
      setSubject(event.target.value)
    }

    if(event.target.name === 'message'){
      setMessage(event.target.value)
    }
  }

  const handleSendEmail = event => {
    event.preventDefault();
    setIsSending(true);
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: {'content-type': 'application/json'},
      data: {
        name,
        email,
        subject,
        message
      }
    })
    .then(result => {
      setEmailSent(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSending(false);

      timerRef.current = setTimeout(() => {
        setEmailSent(false);
      }, 3000);
    })
    .catch(err => {
      setError(err.message);
      console.log(err.message);
    })
  }

  return (
    <div className="modal modal--contact">
      <div className="modal__header modal__header--contact">
        <h3>Contact Me</h3>
        <button onClick={() => setShowContactModal(false)} >
          <FiX />
        </button>
        
      </div>
      <div className="modal__content modal__content--contact">
        { emailSent ? 
          <div className="send-success">
            <IoCheckmarkCircle />
            <p>Thanks!</p>
            <p>Your email has been sent!</p>
          </div>
        :
          <>
            { error &&
            <div className="send-error">
              <p>Uh oh!</p>
              <p>There was an issue sending your email!</p>
            </div>
            }

            <form onSubmit={handleSendEmail}>
              <input 
                type="text"
                placeholder="Your name"
                name="name"
                id="name"
                onChange={(e) => handleChange(e)}
                value={name}
                required
              />

              <input 
                type="text"
                placeholder="Your email"
                name="email"
                id="email"
                onChange={(e) => handleChange(e)}
                value={email}
                required
              />

              <input 
                type="text"
                placeholder="Subject"
                name="subject"
                id="subject"
                onChange={(e) => handleChange(e)}
                value={subject}
                required
              />

              <textarea 
                rows="5"
                name="message" 
                placeholder="Write your message here" 
                id="message" 
                onChange={(e) => handleChange(e)}
                value={message}
                required
              ></textarea>

              <input
                type="submit"
                className="btn btn--blue"
                value={isSending ? "Sending..." : "Send it"}
                disabled={!name || !email || !subject || !message || isSending}
              />
                      
            </form>
          </>
        }
      </div>
    </div>
  )
}
