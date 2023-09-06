import { Title } from '../../components/Title/Title';

export const SkillSummary = () => {
  return (
    <>
      <Title title="Skill Summary" />
      <p className="pb-4 font-normal">
        With <span className="font-bold">over 3 years</span> of software
        development experience, I have demonstrated proficiency in:
      </p>
      <ul
        className="flex flex-col list-disc ml-10 italic"
        style={{ fontSize: '14px' }}
      >
        <li className="pb-2">
          JavaScript and TypeScript, utilizing them to craft dynamic and
          efficient applications.
        </li>
        <li className="pb-2">
          Creating single-page applications using various JavaScript libraries
          and frameworks.
        </li>
        <li className="pb-2">
          Conducting thorough unit testing with tools like Jest, as well as
          end-to-end testing using Cypress.
        </li>
        <li className="pb-2">
          Crafting engaging web designs using HTML5, and CSS framework for
          seamless user experiences.
        </li>
        <li className="pb-2">
          Implementing RESTful Web Services, showcasing practical experience in
          backend development.
        </li>
        <li className="pb-2">
          Leveraging Node.js, Express.js, and NestJS frameworks to build robust
          and scalable applications.
        </li>
        <li className="pb-2">
          Command of Linux environments and adeptness in batch scripting for
          efficient workflows.
        </li>
        <li className="pb-2">
          Proficiency in web bundler tool including Webpack, Vite, and Rollup
          for optimizing site performance.
        </li>
        <li className="pb-2">
          Exemplary self-studying skills, underpinned by proactive thinking and
          a drive for continuous improvement.
        </li>
      </ul>
    </>
  );
};
