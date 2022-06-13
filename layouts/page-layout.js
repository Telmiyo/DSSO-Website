export default function PageLayout({ children, className }) {
  return (
    <div
      className={`container self-center flex flex-col h-full 
      w-screen  my-5 mx-5  md:mx-0 ${className}`}
    >
      {children}
    </div>
  );
}
