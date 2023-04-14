import { Outlet } from "react-router-dom";
import MainNavigation from "../component/MainNavigation";

const Rootlayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Rootlayout;
