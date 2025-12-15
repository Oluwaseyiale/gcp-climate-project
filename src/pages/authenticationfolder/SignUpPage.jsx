/** @format */
import signupimg from "../../assets/signupimg.png";
import google from "../../assets/googleicocn.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignUp } from "../../api/queries";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useState } from "react";
import { HiEye } from "react-icons/hi";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useSignUp();
  const [showPassword, setShowPassword] = useState(false);

  const passwordVisibility = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    mutate(data, {
      onSuccess(response) {
        const datas = response?.data?.data;
        toast.success("Signup successful");
        setTimeout(() => {
          navigate("/otp", { state: { email: datas?.email } });
        }, 1500);
      },
      onError(err) {
        toast.error(err.response?.data?.message || "Something went wrong");
      },
    });
  };

  return (
      <div className="h-screen flex flex-col lg:flex-row bg-gradient-to-b from-white to-[#F2FCF9]">
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

        {/* Left Image */}
        <div className="hidden lg:flex w-1/2 h-full items-center justify-center bg-white rounded-br-[140px]">
          <img src={signupimg} alt="Signup" width={400} />
        </div>

        {/* Right Form */}
        <div className="flex w-full lg:w-1/2 h-full justify-center items-center bg-[#F2FCF9] lg:rounded-tl-[140px] p-6">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-medium font-figtree text-center lg:text-left mb-6">
              Welcome
            </h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
              <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstname", { required: "First Name is required" })}
                  className="border border-[#3F4040] rounded-lg p-2 h-[52px] placeholder:text-[#3F4040]"
              />
              {errors.firstname && <span className="text-red-500">{errors.firstname.message}</span>}

              <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastname", { required: "Last Name is required" })}
                  className="border border-[#3F4040] rounded-lg p-2 h-[52px] placeholder:text-[#3F4040]"
              />
              {errors.lastname && <span className="text-red-500">{errors.lastname.message}</span>}

              <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
                  })}
                  className="border border-[#3F4040] rounded-lg p-2 h-[52px] placeholder:text-[#3F4040]"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}

              <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", { required: "Password is required" })}
                    className="w-full border border-[#3F4040] rounded-lg p-2 h-[52px] placeholder:text-[#3F4040]"
                />
                <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={passwordVisibility}
                >
                  <HiEye />
                </div>
              </div>
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}

              <button
                  type="submit"
                  className="mt-6 py-2 px-4 rounded-md bg-[#FED700] text-[#4D4D4D] font-medium flex justify-center items-center"
                  disabled={isPending}
              >
                {isPending ? <div className="w-6 h-6 border-b-2 border-white rounded-full animate-spin" /> : "Signup"}
              </button>
            </form>

            <div className="text-center mt-4">
              <p>
                Already have an account? <Link to="/login" className="font-bold">Login</Link>
              </p>
            </div>

            <div className="flex justify-center py-4"><p>or</p></div>

            <div className="flex justify-center items-center gap-3 w-fit mx-auto h-[52px] bg-white shadow-lg rounded-lg cursor-pointer lg:px-20">
              <img src={google} alt="Google" width={24} />
              <p>Signup with Google</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signup;
