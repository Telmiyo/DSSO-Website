import PageLayout from "../layouts/page-layout";
import Hero from "../layouts/hero";

export default function Home() {
  return (
    <div className="container-none flex flex-col items-center justify-center h-full py-2 ">
      <div className=" w-full flex flex-grow justify-center items-center">
        <Hero />
      </div>
    </div>
  );
}
