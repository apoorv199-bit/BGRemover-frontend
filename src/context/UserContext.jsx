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

      if (!token) {
        toast.error("Please log in to view your credits");
        return;
      }

      const response = await axios.get(backendUrl + "/users/credits", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setCredit(response.data.data.credits);
      } else {
        const errorMessage = response.data.message || "Failed to load credits";
        toast.error(errorMessage);
      }
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Unable to fetch credits. Please try again later.";
      toast.error(message);
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
      const response = await axios.post(
        backendUrl + "/images/remove-background",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        const base64Image = response.data.data;
        setResultImage(`data:image/png;base64,${base64Image}`);
        setCredit((prev) => prev - 1);

        toast.success(
          response.data.message || "Background removed successfully!"
        );
      } else {
        if (response.data.statusCode === 402) {
          toast.error("Insufficient credits to process image");
          navigate("/buy-credits");
        } else {
          toast.error(response.data.message || "Failed to remove background");
        }
      }
    } catch (error) {
      const status = error?.response?.status;
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Error while removing background";

      if (status === 400) {
        toast.error(message);
      } else if (status === 402) {
        toast.error("Insufficient credits to process image");
        navigate("/pricing");
      } else if (status === 403) {
        toast.error("File too large. Maximum allowed size is 30MB.");
      } else {
        toast.error(message);
      }
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
