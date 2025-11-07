import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInternetExplorer } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample.jpg';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '이상민',
    small: '',
  },
  contact: [
    {
      title: 'goldfrosch@daum.net',
      link: 'mailto:goldfrosch@daum.net',
      icon: faEnvelope,
    },
    {
      link: 'https://github.com/goldfrosch',
      icon: faGithub,
    },
    {
      link: 'https://goldfrosch.tistory.com/',
      icon: faInternetExplorer,
    },
  ],
  notice: {
    title: '',
  },
};

export default profile;
