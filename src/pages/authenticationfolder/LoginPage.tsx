import signupimg from "../../assets/signupimg.png";
import google from "../../assets/googleicocn.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../../api/queries";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { HiEye } from "react-icons/hi";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

          toast.success("Login successful");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          toast.error("Login error");
        }
      },
    });
  };

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
                  <Link to="/auth/sign-up">Signup</Link>
                </span>
              </h1>
            </div>

            <div className="flex justify-center py-4 ">
              <p>or</p>
            </div>

            <div className="flex justify-center bg-[#FFFFFF] shadow-[#00000026] shadow-lg cursor-pointer px-3 gap-3 items-center lg:px-20 w-fit mx-auto h-[52px] rounded-lg">
              <img src={google} alt="" width={24} />
              <p className="text-sm lg:text-lg ">Login with google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
