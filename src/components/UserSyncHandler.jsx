import { useAuth, useUser } from "@clerk/clerk-react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { UserContext } from "../context/UserContext";

const UserSyncHandler = () => {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [synced, setSynced] = useState(false);
  const { backendUrl, loadUserCredits } = useContext(UserContext);

  useEffect(() => {
    const saveUser = async () => {
      if (!isLoaded || !isSignedIn || synced) {
        return;
      }

      try {
        const token = await getToken();

        if (!token) {
          toast.error("Authentication failed. Please log in again");
          return;
        }

        const userData = {
          clerkId: user.id,
          email: user.primaryEmailAddress.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
          photoUrl: user.imageUrl,
        };

        const response = await axios.post(backendUrl + "/users", userData, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.success) {
          setSynced(true);
          await loadUserCredits();
        } else {
          const errorMessage =
            response.data.message || "Failed to sync user data";
          toast.error(errorMessage);
        }
      } catch (error) {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "User sync failed. Please try again later.";
        toast.error(message);
      }
    };

    saveUser();
  }, [isLoaded, isSignedIn, getToken, user, synced]);
  return null;
};

export default UserSyncHandler;
