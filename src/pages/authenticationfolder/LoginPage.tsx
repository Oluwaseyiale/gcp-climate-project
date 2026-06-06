import signupimg from "../../assets/signupimg.png";
import google from "../../assets/googleicocn.png";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGoogleAuth, useLogin } from "../../api/queries";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { loadGoogleIdentityScript, requestGoogleAuthCode } from "./googleAuth";
import FormInput from "../../components/forms/FormInput";
import PasswordInput from "../../components/forms/PasswordInput";
import { getApiErrorMessage } from "../../utils/apiError";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();
  const { mutate: authenticateWithGoogle, isPending: isGooglePending } = useGoogleAuth();
  const [isRequestingGoogleCode, setIsRequestingGoogleCode] = useState(false);

  useEffect(() => {
    loadGoogleIdentityScript().catch(() => undefined);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
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
        toast.error(getApiErrorMessage(error, "Login failed"));
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
            toast.error(getApiErrorMessage(error, "Google login failed"));
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
              <FormInput<LoginFormValues>
                type="email"
                placeholder="Email"
                name="email"
                register={register}
                rules={{
                  required: "email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                }}
                error={errors.email}
                containerClassName="w-[250px] lg:w-[500px]"
                className="bg-blue-100 placeholder:text-base"
              />

              <PasswordInput<LoginFormValues>
                placeholder="Password"
                name="password"
                register={register}
                rules={{ required: "Password is required" }}
                error={errors.password}
                containerClassName="w-[250px] lg:w-[500px]"
                className="bg-blue-100 placeholder:text-base"
              />

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
