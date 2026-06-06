/** @format */

import { useNavigate, useMatch } from "react-router-dom";
import type { Dispatch, ReactNode, SetStateAction } from "react";

type SideBarButtonProps = {
  label: string;
  route: string;
  matchRoute?: string;
  icon: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SideBarButton = ({
  label,
  route,
  matchRoute,
  icon,
  setOpen,
}: SideBarButtonProps) => {
  const navigate = useNavigate();
  const match = useMatch(matchRoute || route);

  const handleNavigation = () => {
    navigate(route);
    setOpen(false);
  };

  const active = match ? true : false;

  return (
    <div
      onClick={handleNavigation}
      className={`cursor-pointer p-4 mx-5 mt-6 hover:bg-gray-200 rounded-md flex items-center gap-2 transition duration-200 ease-out hover:translate-x-1 ${
        active ? "bg-[#00986712] text-[#2A6F59]" : ""
      }`}
    >
      {icon}
      <h1 className=" font-figtree text-base font-normal ">{label}</h1>
    </div>
  );
};

export default SideBarButton;
