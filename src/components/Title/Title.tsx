interface ITitleProps {
  title: string;
}

export const Title = ({ title }: ITitleProps) => {
  return (
    <h1 className="mb-[1.5rem] title text-3xl text-[#44566C] relative ">
      {title}
    </h1>
  );
};
