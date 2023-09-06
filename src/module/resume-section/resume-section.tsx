import { ITimelineProps, Timeline } from '../../components/Timeline/Timeline';

interface IResumeSectionProps {
  logo?: string;
  section?: string;
  timeline?: ITimelineProps[] | ITimelineProps;
}

export const ResumeSection = ({
  logo,
  section,
  timeline,
}: IResumeSectionProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl mb-5 text-[#44566c]">
        <img
          src={logo}
          alt="education-svg"
          className="mr-2 -mt-1 h-10 w-10 inline-block"
        />
        {section}
      </h2>
      <div className="pl-4">
        {Array.isArray(timeline) ? (
          timeline.map((item, index) => (
            <Timeline useLine={index !== timeline.length - 1} {...item} />
          ))
        ) : (
          <Timeline {...timeline} />
        )}
      </div>
    </div>
  );
};
