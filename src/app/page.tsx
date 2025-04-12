import { MainButton } from "@/components/button/MainButton";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
        <h1>Welcome to the Home Page</h1>
        <p>This is a simple application built with React.</p>
        <p>Enjoy exploring the features!</p>
        <MainButton />
      </div>
    </>
  );
}
