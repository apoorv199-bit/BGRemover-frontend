import Menubar from "./components/Menubar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserSyncHandler from "./components/UserSyncHandler";
import Result from "./pages/Result";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Pricing from "./components/Pricing";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Loader from "./components/Loader";

const App = () => {
  const { isProcessing } = useContext(UserContext);
  return (
    <div className="min-h-screen flex flex-col">
      {isProcessing && <Loader />}
      <UserSyncHandler />
      <Menubar />
      <Toaster />
      <div className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy-credits" element={<Pricing />} />
          <Route
            path="/result"
            element={
              <>
                <SignedIn>
                  <Result />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
