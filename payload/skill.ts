import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Javascript / Typescript',
    },
    {
      title: 'Java',
    },
    {
      title: 'C/C++',
    },
    {
      title: 'C#',
    },
    {
      title: 'Shell Script',
    },
    {
      title: 'Kotlin',
    },
    {
      title: 'Python',
    },
  ],
};

const FrameworkLibrary: ISkill.Skill = {
  category: 'Framework / Library',
  items: [
    {
      title: 'React, Next.js',
    },
    {
      title: 'Spring-boot',
    },
    {
      title: 'Express.js',
    },
    {
      title: 'Unreal Engine',
    },
    {
      title: 'Unity',
    },
  ],
};

const infrastructureDatabase: ISkill.Skill = {
  category: 'Infrastructure & Database',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'GCP',
    },
    {
      title: 'MariaDB',
    },
    {
      title: 'Redis',
    },
    {
      title: 'Linux/Ubuntu',
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [
    {
      title: 'github-action',
    },
    {
      title: 'CI/CD Pipelines',
    },
    {
      title: 'Infrastructure as Code',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, FrameworkLibrary, infrastructureDatabase, automation],
};

export default skill;
