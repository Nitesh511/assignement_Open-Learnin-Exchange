import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  LogIn,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  UserPlus,
} from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import ProceedToApi from "../../hooks/useAuth";
import { selectLoginState, setLoginState } from "../../redux/auth/authSlice";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = { ...useSelector(selectLoginState) };
  const dispatch = useDispatch();
  const { login } = ProceedToApi();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleFieldChange = (name, value, setFieldValue) => {
    setFieldValue(name, value);
    dispatch(
      setLoginState({
        ...initialValues,
        [name]: value,
      })
    );
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await login(values);
      dispatch(setLoginState(values));
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      navigate("/login");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-8 sm:py-12">
      <div className="relative inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                <LogIn className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-300">Sign in to your account to continue</p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue, errors, touched, values }) => (
              <Form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className={`w-full pl-12 pr-4 py-3 bg-white/10 border ${
                        touched.email && errors.email
                          ? "border-red-400"
                          : "border-white/20"
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300`}
                      onChange={(e) =>
                        handleFieldChange(
                          "email",
                          e.target.value,
                          setFieldValue
                        )
                      }
                    />
                    {touched.email && !errors.email && values.email && (
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      </div>
                    )}
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="flex items-center text-red-400 text-sm mt-1"
                  >
                    {(msg) => (
                      <span className="flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {msg}
                      </span>
                    )}
                  </ErrorMessage>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className={`w-full pl-12 pr-12 py-3 bg-white/10 border ${
                        touched.password && errors.password
                          ? "border-red-400"
                          : "border-white/20"
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300`}
                      onChange={(e) =>
                        handleFieldChange(
                          "password",
                          e.target.value,
                          setFieldValue
                        )
                      }
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="flex items-center text-red-400 text-sm mt-1"
                  >
                    {(msg) => (
                      <span className="flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {msg}
                      </span>
                    )}
                  </ErrorMessage>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 text-gray-300">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-500 bg-white/10 border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span>Remember me</span>
                  </label>
                  <Link
                    to="/forgetpassword"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin "></div>
                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5 " />
                      <span>Sign In</span>
                    </>
                  )}
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-5 flex items-center">
                    <div className="w-full border-t border-white/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-transparent text-gray-400">
                      Don't have an account?
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/register"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    <span>Create new account</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="mt-6">
                  <div className="relative mb-4">
                    <div className="absolute inset-5 flex items-center">
                      <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-transparent text-gray-400">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="flex items-center justify-center px-4 py-2 border border-white/20 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-all duration-300"
                    >
                      <FaGoogle className="mr-2" />
                      Google
                    </button>

                    <button
                      type="button"
                      className="flex items-center justify-center px-4 py-2 border border-white/20 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-all duration-300"
                    >
                      <FaFacebook className="mr-2" />
                      Facebook
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>Secure login with end-to-end encryption</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
