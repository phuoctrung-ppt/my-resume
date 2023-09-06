import { Divider } from '../../components/Divider/Divider';
import { Title } from '../../components/Title/Title';

export const AboutMe = () => {
  return (
    <>
      <Title title="About Me" />
      <div className="pt-4">
        <p className="pb-4">
          I'm a passionate Frontend Developer from Da Nang, Viet Nam, dedicated
          to crafting seamless web experiences. I thrive on simplifying complex
          challenges into elegant, user-centric designs.
        </p>
        <p className="pb-2">
          My journey is guided by a thirst for knowledge and a goal to master
          Full Stack development. I'm committed to staying ahead of tech trends
          and contributing top-notch solutions that drive project success.
        </p>
        <p className="pb-4">
          Let's collaborate to shape the digital landscape and create
          exceptional online journeys.
        </p>
      </div>
      <Divider />
    </>
  );
};
