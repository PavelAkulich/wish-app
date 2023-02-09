import AsideModule from "@/components/modules/AsideModule/AsideModule";
import HeaderModule from "@/components/modules/HeaderModule/HeaderModule";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

type HeadLayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
};

const HeadLayout: FC<HeadLayoutProps> = ({
  children,
  title = "wish app",
  description = "wish app next project",
  keywords = "next, react, node",
}) => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </div>
  );
};

export default HeadLayout;
