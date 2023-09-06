
interface IContentProps {
  children?: React.ReactNode;
}

export const Content = ({ children }: IContentProps) => {
  return (
    <div
      className="max-w-full max-h-full bg-slate-50 p-[2.5rem] overflow-y-scroll"
      style={{ width: `calc(100% - 280px)` }}
    >
      
      {children}
    </div>
  );
};
