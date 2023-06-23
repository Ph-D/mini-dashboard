import DarkModeButton from "@/components/DarkModeButton";
import MainPanel from "@/components/MainPanel";
import SidePanel from "@/components/SidePanel";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen md-custom:flex-row">
      <SidePanel />
      <div className="flex-1 p-5 lg:p-10">
        <MainPanel />
      </div>
    </div>
  );
}
