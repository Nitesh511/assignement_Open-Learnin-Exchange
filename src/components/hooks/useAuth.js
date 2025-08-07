import Swal from "sweetalert2";
import { showErrorAlert, showSuccessAlert } from "../../utils/alertMessage";
import { saveToken, removeToken } from "../../utils/crypto";
import {
  useRegisterMutation,
  useLazyLoginQuery,
} from "../redux/auth/authApiSlice";

const ProceedToApi = () => {
  const [registerAPI] = useRegisterMutation();
  const [loginAPI] = useLazyLoginQuery();

  const register = async (formData) => {
    try {
      const response = await registerAPI(formData).unwrap();

      showSuccessAlert("Registration successful!");

      return { success: true, data: response };
    } catch (error) {
      const errorMessage =
        error?.data?.message || error.message || "An error occurred";

      showErrorAlert(errorMessage);

      return { success: false, message: errorMessage };
    }
  };

  const login = async (credentials) => {
    const { email, password } = credentials;

    try {
      const result = await loginAPI({ email, password });

      if (result?.status === "fulfilled" || result?.data?.length === 1) {
        const user = result.data[0];
        saveToken("authToken", user.id);
        localStorage.setItem("authRole", user.isAdmin);

        showSuccessAlert("Login SuccessFul");

        return user;
      } else {
        showErrorAlert("Error Occured");
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        Swal.fire({
          icon: "error",
          title: "User Not Found",
          text: "No account exists with this email",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: error.message || "Something went wrong",
        });
      }

      throw error;
    }
  };

  const logout = () => {
    try {
      // Remove tokens from storage
      removeToken("authToken");
      localStorage.removeItem("authRole");

      // Show success message
      showSuccessAlert("You have been logged out successfully.");

      return "Logout successful";
    } catch (error) {
      const errorMessage = error?.message || "An error occurred during logout.";
      showErrorAlert(errorMessage);
      return errorMessage;
    }
  };

  return { register, login, logout };
};

export default ProceedToApi;
