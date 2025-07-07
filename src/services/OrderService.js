import axios from "axios";
import toast from "react-hot-toast";

export const placeOrder = async ({
  planId,
  getToken,
  onSuccess,
  backendUrl,
}) => {
  try {
    const token = await getToken();

    if (!token) {
      toast.error("Authentication failed. Please log in again");
      return;
    }

    const response = await axios.post(
      `${backendUrl}/orders?planId=${planId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.status === 201 && response.data?.success) {
      initializePayment({
        order: response.data.data,
        getToken,
        onSuccess,
        backendUrl,
      });
    } else {
      toast.error(response.data?.message || "Failed to create order");
    }
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";
    toast.error(message);
  }
};

const initializePayment = ({ order, getToken, onSuccess, backendUrl }) => {
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: "Credit Payment",
    description: "Credit Payment",
    order_id: order.id,
    receipt: order.receipt,
    handler: async (paymentDetails) => {
      try {
        const token = await getToken();
        const response = await axios.post(
          `${backendUrl}/orders/verify`,
          paymentDetails,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.status === 200 && response.data?.success) {
          toast.success(response.data.message || "Credits added successfully");
          onSuccess?.();
        } else {
          toast.error(response.data?.message || "Payment verification failed");
        }
      } catch (error) {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Payment verification failed";
        toast.error(message);
      }
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
