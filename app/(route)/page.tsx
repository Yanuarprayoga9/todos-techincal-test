"use client";
import { Button } from "@/components/ui/button";
const Home = () => {
  const handleClick = () => {
    window.location.href = "/todos";
  };

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        The Ultimate Todo List
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 pb-3">
        Welcome to your personal task manager! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Ipsam explicabo blanditiis doloremque,
        culpa officiis repudiandae tempora nulla fuga molestias, dolorum est
        totam expedita ipsum architecto. Reprehenderit sequi nobis laudantium
        harum.
      </p>
      <Button onClick={handleClick}>START TODO</Button>
    </div>
  );
};

export default Home;
