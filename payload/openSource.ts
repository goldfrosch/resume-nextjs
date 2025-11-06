import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Tanstack Router',
      descriptions: [
        { content: '타입스크립트 기반의 고도화된 라우팅 기능' },
        { content: 'Contributor' },
        { content: '정규식 기반의 파일 이름 단위로 무시되는 기능 추가' },
        {
          content: 'https://github.com/TanStack/router',
          href: 'https://github.com/TanStack/router',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/TanStack/router.svg?style=popout',
        },
      ],
    },
  ],
};

export default openSource;
