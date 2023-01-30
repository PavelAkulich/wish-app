import { TabPanelTemplate, TabTemplate, TabsListTemplate, TabsTemplate } from "@/components/UI/TabTemplate";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function AuthModule() {
  return <div className="h-full">
    <TabsTemplate defaultValue={0}>
      <TabPanelTemplate value={0}>
        <LoginForm />
      </TabPanelTemplate>
      <TabPanelTemplate value={1}>
        <RegisterForm />
      </TabPanelTemplate>
      <TabsListTemplate>
        <TabTemplate value={0}>Войти</TabTemplate>
        <TabTemplate value={1}>Регистация</TabTemplate>
      </TabsListTemplate>
    </TabsTemplate>
  </div>;
}

export default AuthModule;