import { motion } from 'framer-motion';

import './About.scss';

const About = () => {
  const abouts = [
    {
      title: 'Web Development',
      description: 'Description',
      imgUrl: '../../assets/about01.png',
    },
  ];

  return (
    <>
      <h2 className="head-text">
        From Ideas <span>to Interfaces:</span> <br />
        <span>Front-End</span> In action!
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, type: 'just' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
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

export default About;
