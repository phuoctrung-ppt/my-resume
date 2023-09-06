import cls from 'classnames';

export interface ITimelineProps {
  title?: string;
  time?: string;
  description?: string;
  useLine?: boolean;
}

export const Timeline = ({
  title,
  time,
  description,
  useLine,
}: ITimelineProps) => {
  return (
    <>
      <article
        className={cls(
          `timeline relative ${useLine ? 'border-l' : ''} pl-4 pb-4`,
        )}
      >
        <h5 className="text-xl text-[#44566C] relative font-semibold top-[-10px] ">
          {title}
        </h5>
        <span className="text-[#8697A8] text-sm">{time}</span>
        <p className="text-sm mt-2">{description}</p>
      </article>
    </>
  );
};
