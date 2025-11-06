import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '"리액트 오픈소스 펼쳐보기"',
      subTitle: '원티드랩 - 24년 10월 프리온보딩',
      at: '2024-10',
      descriptions: [
        {
          content: '리액트에서 주로 사용하는 Hook의 내부 구조 및 최적화 방법 강의',
        },
        {
          content: '강의 자료:',
          postHref: 'https://goldfrosch.tistory.com/category/Frontend/리액트%20오픈소스%20펼쳐보기',
        },
      ],
    },
    {
      title: '"리액트 웹앱 직접 만들어보기"',
      subTitle: '순천향대학교 소프트웨어정보과 - 특강사',
      at: '2024-08',
      descriptions: [
        {
          content: '간단한 TODO 리스트와 쇼핑몰 제작 강의',
        },
        {
          content: '강의 자료:',
          postHref: 'https://github.com/goldfrosch/sch-university-example',
        },
      ],
    },
  ],
};

export default presentation;
