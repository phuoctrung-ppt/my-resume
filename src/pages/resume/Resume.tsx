import { Title } from '../../components/Title/Title';
import { ResumeSection } from '../../module/resume-section/resume-section';
import education from '../../assets/icon-education.svg';
import experience from '../../assets/icon-experience.svg';
import { Divider } from '../../components/Divider/Divider';
const resumes = [
  {
    logo: education,
    section: 'Education',
    timeline: {
      title: 'Danang University of Technology and Education',
      time: 'Aug 2014 - Aug 2018',
      description: 'Major: Information Technologies',
    },
  },
  {
    logo: experience,
    section: 'Experience',
    timeline: [
      {
        title: 'Fullstack Developer at Sotatek',
        time: 'Aug 2022 - Present',
        description:
          'Maintain and implement new features, implement UI components in the mono-repo based on Rollup, prioritize tasks in detail, and provide support to the team. Resolve incidents, fix bugs, and break tasks down to assign and review the code of team members.',
      },
      {
        title: 'Frontend Developer at FPT Software',
        time: 'Jan 2022 - Aug 2022',
        description:
          'In their role, they lead the development and maintenance of the frontend infrastructure, create standard components while encouraging module reuse, collaborate with the Team Leader to conduct thorough code reviews, prioritize tasks effectively, and offer valuable support to the team, all while proactively identifying and resolving incidents and addressing any bugs that may arise.',
      },
      {
        title: 'Web Developer Developer at Hitachi Vantara',
        time: 'Nov 2019 - Dec 2021',
        description:
          "In my role as a software engineer, I analyze and design systems based on client requirements, develop the frontend and API Gateway infrastructure, create common components, and design the backend for the frontend of the API Gateway. I also implement authentication and new features, and I'm responsible for ongoing feature development, incident resolution, and bug fixing to ensure a robust and efficient system.",
      },
    ],
  },
];

export const Resume = () => {
  return (
    <>
      <Title title="Resume" />
      {resumes.map((resume, index) => (
        <>
          <ResumeSection {...resume} />
          {index === resumes.length - 1 ? <> </> : <Divider />}
        </>
      ))}
    </>
  );
};
