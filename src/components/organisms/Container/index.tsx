// "use client";
// import Header from "@components/molecules/Header";
// import Sidebar from "@components/molecules/Sidebar";
// import { Provider } from "react-redux";
// import { store } from "@store/storage";
// import SidebarIc from "@components/atoms/SidebarIc";

// export default function Container({ children }: { children: React.ReactNode }) {
//   return (
//     <Provider store={store}>
//       <section>
//           <Header />
//           <div className="flex">
//             <Sidebar />
//             <div className="w-full">{children}</div>
//           </div>
//       </section>
//     </Provider>
//   );
// }

// "use client";
// import Header from "@components/molecules/Header";
// import Sidebar from "@components/molecules/Sidebar";
// import { Provider } from "react-redux";
// import { store } from "@store/storage";
// import SidebarIc from "@components/atoms/SidebarIc";

// export default function Container({ children }: { children: React.ReactNode }) {
//   return (
//     <Provider store={store}>
//       <section>
//         <div className="flex flex-col">
//           <Header />
//           <div className="flex flex-row">
//             <Sidebar />
//             <div className="justify-center items-center">{children}</div>
//           </div>
//         </div>
//       </section>
//     </Provider>
//   );
// }

"use client";
import Header from "@components/molecules/Header";
import Sidebar from "@components/molecules/Sidebar";
import { Provider } from "react-redux";
import { store } from "@store/storage";
import SidebarIc from "@components/atoms/SidebarIc";

export default function Container({ children }: { children: React.ReactNode }) {
  const isLoginPage = window.location.pathname === "/login"; 

  return (
    <Provider store={store}>
      <section>
        <div className="flex flex-col">
          {!isLoginPage && (
            <>
              <Header />
              <div className="flex flex-row">
                <Sidebar />
                <div className="justify-center items-center">{children}</div>
              </div>
            </>
          )}
          {isLoginPage && children}
        </div>
      </section>
    </Provider>
  );
}
