import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <div className="about__head-text">
        <p className="top-text">
          Passionate and competent Software Developer with <span>3+ years</span>{' '}
          of experience in web development.
        </p>

        <p className="description-text">
          I`m specialized in modern JavaScript framework <span>(React) </span>
          and <span>Node.JS (Express)</span>. Passionate about creating scalable
          systems, optimizing system performance and creating impacting digital
          applications.
        </p>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, type: 'just' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
