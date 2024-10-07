import { Button } from "@/components/ui/button";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboard } from "lucide-react";
import Logo from "../Shared/Logo";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-100 transition-all duration-300 ${
        isCollapsed ? "w-14" : "w-64"
      }`}
    >
      <div className="pt-1">
        <Button variant="ghost" onClick={toggleSidebar}>
          <TbLayoutSidebarLeftCollapse size={24} />
        </Button>
      </div>
      {!isCollapsed && (
        <aside className="p-4">
          <Logo chat="chat" />
          <div className="text-gray-600 flex gap-2 items-center py-2">
            <LayoutDashboard className="h-4 w-4" /> Explore Gpt
          </div>
          <Separator className="my-4" />
          <h2 className="text-md font-semibold mb-6 text-slate-600">
            Previous 7 Days
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Supershop POS Software Plan
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Puppeteer Code Correction
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Dynamic Route Structure Next.js
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              TechSoul ERP POS Brochure
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Employee Tracking AI Project
            </li>
          </ul>

          <Separator className="my-4" />

          <h2 className="text-md font-semibold mb-6 text-slate-600">
            Previous 30 Days
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Next.js Assistance Request
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Generate Calendar Events
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Dynamics BC Project Scope
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Add Dummy Entries
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Project Development Planning
            </li>
          </ul>
        </aside>
      )}
    </div>
  );
};

export default Sidebar;
