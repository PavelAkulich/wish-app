import AuthModule from "@/components/modules/AuthModule/AuthModule";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-gradient-to-r from-default-gradientDark to-default-gradientDark rounded-lg shadow-lg p-3">
        <AuthModule />
      </div>
    </div>
  );
}
