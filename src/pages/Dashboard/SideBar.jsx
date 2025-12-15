/** @format */

// import { data } from "./data";
// import SideBarButton from "./SideBarButton";
// export const SideBar = () => {
//   const handleLogout = () => {
//     localStorage.removeItem("access_token"); // Remove token from local storage
//     window.location.href = "/"; // Redirect to login page or any other page
//   };
//   return (
//     <div className=" ">
//       <div className=" h-screen border-r w-60 pt-10">
//         {/* <div> */}
//         {data.map((link) => (
//           <div key={link.label}>
//             <SideBarButton
//               label={link.label}
//               route={link.route}
//               icon={link.icon}
//             />
//           </div>
//         ))}
//         {/* </div> */}
//         <div className=" mx-10 mt-12">
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { data } from "./data";
import SideBarButton from "./SideBarButton";
import { GiHamburgerMenu } from "react-icons/gi";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-[28%] z-50 p-2 bg-white shadow rounded"
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-screen w-60 bg-white border-r z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="pt-10">
          {data.map((link) => (
            <SideBarButton
              key={link.label}
              label={link.label}
              route={link.route}
              icon={link.icon}
              open={isOpen}
              setOpen={setIsOpen}
            />
          ))}

          <div className="mx-10 mt-12">
            <button onClick={handleLogout} className="text-red-600 font-medium">
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
