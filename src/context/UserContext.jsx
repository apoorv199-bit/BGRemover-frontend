import { createContext, useContext, useEffect, useState } from "react";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [credit, setCredit] = useState(null);
  const [loadingCredits, setLoadingCredits] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const loadUserCredits = async () => {
    try {
      setLoadingCredits(true);
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
    } finally {
      setLoadingCredits(false);
    }
  };

  const removeBg = async (selectedImage) => {
    try {
      if (!isSignedIn) {
        return openSignIn();
      }

      setImage(selectedImage);
      setResultImage(null);
      setIsProcessing(true);

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
        navigate("/result");
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
        navigate("/buy-credits");
      } else if (status === 403) {
        toast.error("File too large. Maximum allowed size is 30MB.");
      } else {
        toast.error(message);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const contextValue = {
    credit,
    setCredit,
    backendUrl,
    loadUserCredits,
    removeBg,
    loadingCredits,
    isProcessing,
    image,
    resultImage,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
