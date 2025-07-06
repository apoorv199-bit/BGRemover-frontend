import { createContext, useContext, useEffect, useState } from "react";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [credit, setCredit] = useState(false);
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const { setImage, setResultImage } = useContext(AppContext);

  const loadUserCredits = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(backendUrl + "/users/credits", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        setCredit(response.data.data.credits);
      } else {
        toast.error(response.data.data);
      }
    } catch (error) {
      toast.error("Error loading credits");
    }
  };

  const removeBg = async (selectedImage) => {
    try {
      if (!isSignedIn) {
        return openSignIn();
      }

      setImage(selectedImage);
      setResultImage(false);
      navigate("/result");

      const token = await getToken();
      const formData = new FormData();
      selectedImage && formData.append("file", selectedImage);
      const { data: base64Image } = await axios.post(
        backendUrl + "/images/remove-background",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setResultImage(`data:image/png;base64, ${base64Image}`);
      setCredit(credit - 1);
    } catch (error) {
      console.log(error);
      toast.error("Error while removing background");
    }
  };

  const contextValue = {
    credit,
    setCredit,
    backendUrl,
    loadUserCredits,
    removeBg,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
