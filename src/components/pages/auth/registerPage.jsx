import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  setRegisterState,
  selectRegisterState,
} from "../../redux/auth/authSlice";
import ProceedToApi from "../../hooks/useAuth";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  UserPlus, 
  Shield,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const initialValues = { ...useSelector(selectRegisterState) };
  const dispatch = useDispatch();
  const { register } = ProceedToApi();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleFieldChange = (name, value, setFieldValue) => {
    setFieldValue(name, value);
    dispatch(
      setRegisterState({
        ...initialValues,
        [name]: value,
      })
    );
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await register(values);
      dispatch(setRegisterState(values));
      navigate("/login");
    } catch (error) {
      console.error("Register failed:", error);
      navigate("/register");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-8 sm:py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-gray-300">Join us today and get started</p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue, errors, touched, values }) => (
              <Form className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none w-10 z-10">
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
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300`}
                      onChange={(e) =>
                        handleFieldChange("email", e.target.value, setFieldValue)
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
                      placeholder="Create a password"
                      className={`w-full pl-12 pr-12 py-3 bg-white/10 border ${
                        touched.password && errors.password
                          ? "border-red-400"
                          : "border-white/20"
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300`}
                      onChange={(e) =>
                        handleFieldChange("password", e.target.value, setFieldValue)
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
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Shield className="h-5 w-5 text-gray-400" />
                    </div>
                    <Field
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className={`w-full pl-12 pr-12 py-3 bg-white/10 border ${
                        touched.confirmPassword && errors.confirmPassword
                          ? "border-red-400"
                          : "border-white/20"
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300`}
                      onChange={(e) =>
                        handleFieldChange(
                          "confirmPassword",
                          e.target.value,
                          setFieldValue
                        )
                      }
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                      )}
                    </button>
              
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <span>Create Account</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">

                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-transparent text-gray-400">
                      Already have an account?
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-center">
                  <Link
                    to="/login"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 group"
                  >
                    <span>Sign in to your account</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <div>
                    <Link
                      to="/forgetpassword"
                      className="text-pink-400 hover:text-pink-300 transition-colors duration-300 text-sm"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>
            By creating an account, you agree to our{" "}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;