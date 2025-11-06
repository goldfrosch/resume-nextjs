import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '원티드 포텐업 1기',
      subTitle: 'AI 개발자와 협업해 만드는 언리얼 엔진 기반 컨텐츠 개발',
      startedAt: '2024-12',
      endedAt: '2025-06',
    },
    {
      title: '신안산대학교',
      subTitle: '컴퓨터정보 전공 전문 학사 졸업',
      startedAt: '2017-03',
      endedAt: '2019-02',
    },
    {
      title: '안산 경안고등학교',
      subTitle: '자연계 졸업',
      startedAt: '2014-03',
      endedAt: '2017-02',
    },
  ],
};

export default education;
