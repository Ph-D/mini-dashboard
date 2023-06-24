import MainPanel from "@/components/mainpanel";
import SidePanel from "@/components/sidepanel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <SidePanel />
      <div className="flex-1 overflow-auto p-5 lg:p-10">
        <MainPanel />
      </div>
    </div>
  );
}
