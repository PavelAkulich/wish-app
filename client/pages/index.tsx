import HeadLayout from "@/components/layouts/HeadLayout/HeadLayout";
import { FC } from "react";

const Home: FC = ({}) => {
  return (
    <HeadLayout>
      <div className="font-bold text-center text-3xl">Wish app</div>
      <div className="text-center text-2xl pt-20">Test project to level up skills in next.js & base knowlage in node.js</div>
    </HeadLayout>
  );
};

export default Home;
