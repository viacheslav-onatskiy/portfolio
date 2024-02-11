import { BsChat, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://github.com/viacheslav-onatskiy"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/viacheslav-onatskiy/"
        target="_blank"
        rel="noreferrer"
        className="p-text"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="mailto:slava9678@gmail.com">
        <BsChat />
      </a>
    </div>
  </div>
);

export default SocialMedia;
