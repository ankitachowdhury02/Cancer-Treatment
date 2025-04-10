import React from "react";
import { Route, Routes } from "react-router-dom";
import {Sidebar,Navbar }from "./components";
import { Home, Onboarding } from "./pages";
// import { useStateContext } from "./context"; // or the correct path


const App = () => {
  
  // const { user, authenticated, ready, login, currentUser } = useStateContext();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (ready && !authenticated) {
  //     login();
  //   } else if (user && !currentUser) {
  //     navigate("/onboarding");
  //   }
  // }, [user, authenticated, ready, login, currentUser, navigate]);

  return (
    <div className="relative flex min-h-screen flex-row bg-[#13131a] p-4">
      <div className="relative mr-10 hidden sm:flex">
        { <Sidebar/> }
      </div>

      <div className="mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5">
        { <Navbar /> }

        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/onboarding" element={< Onboarding />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;