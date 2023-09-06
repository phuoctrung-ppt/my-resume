interface IWrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: IWrapperProps) => {
  return (
    <div className="max-h-full bg-slate-50 wrap-border shadow-custom flex h-full ml-auto mr-auto max-w-[1330px] w-full overflow-hidden relative">
      {children}
    </div>
  );
};
