import signupimg from "../../assets/signupimg.png";
import google from "../../assets/googleicocn.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGoogleAuth, useLogin } from "../../api/queries";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { HiEye } from "react-icons/hi";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";
import { loadGoogleIdentityScript, requestGoogleAuthCode } from "./googleAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();
  const { mutate: authenticateWithGoogle, isPending: isGooglePending } = useGoogleAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isRequestingGoogleCode, setIsRequestingGoogleCode] = useState(false);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    loadGoogleIdentityScript().catch(() => undefined);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    mutate(data, {
      onSuccess(data) {
        if (data?.data?.access) {
          localStorage.setItem("access_token", data.data.access);
          if (data?.data?.refresh) {
            localStorage.setItem("refresh_token", data.data.refresh);
          }

          toast.success("Login successful");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          toast.error("Login error");
        }
      },
      onError(error) {
        const loginError = error as AxiosError<{ detail?: string; message?: string }>;
        toast.error(
          loginError.response?.data?.detail ||
            loginError.response?.data?.message ||
            "Login failed"
        );
      },
    });
  };

  const handleGoogleLogin = async () => {
    try {
      setIsRequestingGoogleCode(true);
      const code = await requestGoogleAuthCode();
      setIsRequestingGoogleCode(false);

      authenticateWithGoogle(
        { code },
        {
          onSuccess(response) {
            localStorage.setItem("access_token", response.data.tokens.access);
            localStorage.setItem("refresh_token", response.data.tokens.refresh);
            toast.success("Google login successful");
            setTimeout(() => {
              navigate("/dashboard");
            }, 1200);
          },
          onError(error) {
            const googleError = error as AxiosError<{ error?: string; message?: string }>;
            toast.error(
              googleError.response?.data?.error ||
                googleError.response?.data?.message ||
                "Google login failed"
            );
          },
        }
      );
    } catch (error) {
      setIsRequestingGoogleCode(false);
      toast.error(error instanceof Error ? error.message : "Google login failed");
    }
  };

  const googleButtonText =
    isRequestingGoogleCode || isGooglePending
      ? "Connecting..."
      : "Login with Google";

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />

      <div className="flex items-center justify-between h-screen bg-gradient-to-b from-white to-[#F2FCF9]">
        <div className="hidden w-[50%] h-full  lg:flex items-center justify-center bg-white   rounded-br-[140px]">
          <img src={signupimg} alt="" width={400} />
        </div>

        <div className="w-full flex justify-center items-center h-full lg:w-[50%] bg-[#F2FCF9] lg:rounded-tl-[140px]">
          <div>
            <h1 className="text-center text-2xl lg:text-4xl font-medium font-figtree">Welcome Back!</h1>
            <form
              className="flex flex-col  items-center lg:items-start
               gap-4 mt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="border border-[#3F4040] rounded-lg p-2 w-[250px] lg:w-[500px] h-[52px] bg-blue-100 placeholder:text-base placeholder:text-[#3F4040]"
              />

              {errors.email && (
                <span className="block text-red-500">
                  {String(errors.email.message)}
                </span>
              )}

              <div className="relative flex h-[52px] bg-blue-100 w-[250px]  lg:w-[500px]  border  border-[#3F4040] rounded-lg p-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="  mt-1 w-full  placeholder:text-base placeholder:text-[#3F4040] bg-blue-100 active:border-none"
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={passwordVisibility}
                >
                  <span>
                    <HiEye />
                  </span>
                </div>
              </div>
              {errors.password && (
                <span className="block text-red-500">
                  {String(errors.password.message)}
                </span>
              )}

              <button
                type="submit"
                className="monserrat w-full font-medium size1 formbutton  flex items-center justify-center text-white py-2 px-4 rounded-md mt-10 bg-[#008056]"
                disabled={isPending}
              >
                {isPending ? (
                  <div className="w-6 h-6 border-b-2 border-white rounded-full animate-spin" />
                ) : (
                  <p>Login</p>
                )}
              </button>
            </form>
            <div className="flex justify-center mt-5 ">
              <h1>
                Don&apos;t have an account?{" "}
                <span className="font-bold ">
                  <Link
                    to="/auth/sign-up"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Signup
                  </Link>
                </span>
              </h1>
            </div>

            <div className="flex justify-center py-4 ">
              <p>or</p>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isRequestingGoogleCode || isGooglePending}
              className="flex justify-center bg-[#FFFFFF] shadow-[#00000026] shadow-lg cursor-pointer px-3 gap-3 items-center lg:px-20 w-fit mx-auto h-[52px] rounded-lg disabled:cursor-not-allowed disabled:opacity-70"
            >
              <img src={google} alt="" width={24} />
              <p className="text-sm lg:text-lg ">{googleButtonText}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
