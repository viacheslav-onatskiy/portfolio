import { useState } from 'react';

import { client } from '../../client';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userName, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: userName,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Feel tree to contact me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="Send me email" />
          <a href="mailto:slava9678@gmail.com" className="p-text">
            slava9678@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (672) 272-5949" className="p-text">
            +1 (672) 272-5949
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.linkedin} alt="LinkedIn" />
          <a
            href="https://www.linkedin.com/in/viacheslav-onatskiy/"
            target="_blank"
            rel="noreferrer"
            className="p-text"
          >
            linkedIn/viacheslav-onatskiy
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="userName"
              value={userName}
              onChange={handleChangeInput}
            />
          </div>

          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>

          <button
            type="button"
            className="p-text"
            onClick={handleSubmit}
            disabled={
              userName.length < 3 || email.length < 8 || message.length < 5
            }
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for reviewing my resume!</h3>
        </div>
      )}
      <div className="app_footer-final-text">
        <h3 className="head-text">Let's get in touch!</h3>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
