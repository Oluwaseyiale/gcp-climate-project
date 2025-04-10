/** @format */
import signupimg from "../../assets/signupimg.png";
import google from "../../assets/googleicocn.png";
import { useNavigate } from "react-router-dom";
// src/pages/Login.jsx
import { useForm } from "react-hook-form";
import { useLogin } from "../../api/queries";
// import { ToastContainer, toast } from "react-toastify";
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
				console.log("Login successful:", data.data.access);
				if (data?.data?.access) {
					localStorage.setItem("access_token", data.data.access);
					// console.log(
					// 	"Token stored in localStorage:",
					// 	localStorage.getItem("access_token")
					// );

					toast.success("Login successful");
					setTimeout(() => {
						navigate("/dashboard");
					}, 2000);
				} else {
					toast.error("Login error");

					console.error("Login failed");
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

			<div className="flex  items-center justify-between h-screen bg-gradient-to-b  from-white to-blue-100">
				<div className=" w-[50%] h-full  flex items-center justify-center bg-white   rounded-br-[140px]">
					<img src={signupimg} alt="" width={400} />
				</div>

				<div className=" flex justify-center items-center h-full w-[50%] bg-blue-100 rounded-tl-[140px]">
					<div>
						<h1 className=" font-medium font-figtree text-4xl">
							Welcome Back!
						</h1>
						<form
							className="flex flex-col gap-4 mt-4"
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
								className="border border-[#3F4040] rounded-lg p-2 w-[500px] h-[52px] bg-blue-100 placeholder:text-base placeholder:text-[#3F4040]"
							/>

							{errors.email && (
								<span className="text-red-500 block">
									{errors.email.message}
								</span>
							)}

							<div className="  flex relative  ">
								<input
									type={showPassword ? "text" : "password"}
									placeholder="Password"
									{...register("password", {
										required: "Password is required",
									})}
									className="w-[500px]   mt-1  border  border-[#3F4040] rounded-lg p-2 h-[52px] bg-blue-100 placeholder:text-base placeholder:text-[#3F4040] "
								/>
								<div
									className="absolute right-0 inset-y-0 pr-3 flex items-center cursor-pointer"
									onClick={passwordVisibility}
								>
									<span>
										<HiEye />
									</span>
								</div>
							</div>
							{errors.password && (
								<span className="text-red-500 block">
									{errors.password.message}
								</span>
							)}

							<button
								type="submit"
								className="monserrat font-medium size1 formbutton mx-14 text-[#4D4D4D] py-2 px-4 rounded-md mt-10 bg-[#FED700]"
								disabled={isPending}
							>
								{isPending ? "Logging In..." : "Login"}
							</button>
						</form>

						<div className=" justify-center flex py-4">
							<p>or</p>
						</div>

						<div className="bg-[#FFFFFF] shadow-[#00000026]  flex  items-center px-6 w-[500px] h-[52px] rounded-lg">
							<img src={google} alt="" width={24} />
							<input
								type="password"
								placeholder=" continue with google"
								className=" rounded-lg p-2 placeholder:bg-[#FFFFFF]  placeholder:text-base placeholder:text-[#000000]"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
