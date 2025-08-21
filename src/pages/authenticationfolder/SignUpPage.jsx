/** @format */
import signupimg from "../../assets/signupimg.png";
import google from "../../assets/googleicocn.png";
import { Link, useNavigate } from "react-router-dom";
// src/pages/Login.jsx
import { useForm } from "react-hook-form";
import { useSignUp } from "../../api/queries";
// import { ToastContainer, toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { HiEye } from "react-icons/hi";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
	const navigate = useNavigate();
	const { mutate, isPending } = useSignUp();
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
		console.log("mail", data?.email);

		mutate(data, {
			onSuccess(data) {
				const datas = data?.data?.data;
				console.log(datas, "this login data");
				toast.success("SignIn successful");
				setTimeout(() => {
					navigate("/otp", {
						state: { email: datas?.email },
					});
				});
			},
			onError(err) {
				console.error(err);
				toast.error(err.response?.data?.message || "Something went wrong");
			},
		});
	};
	return (
		<div>
			<div className="justify-between h-screen border-4 lg:flex lg:items-center bg-gradient-to-b lg:from-white lg:to-blue-100">
				<div className="hidden  w-[50%] h-full  lg:flex items-center justify-center bg-white   rounded-br-[140px]">
					<img src={signupimg} alt="" width={400} />
				</div>

				<div className="px-4 lg:px-0 flex justify-center items-center h-full lg:w-[50%] bg-blue-100 lg:rounded-tl-[140px]">
					<div>
						<h1 className="mb-10 text-2xl font-medium text-center lg:text-start font-figtree md:text-4xl lg:mb-0">
							Welcome
						</h1>
						<form
							className="grid grid-cols-1 gap-4 mt-4"
							onSubmit={handleSubmit(onSubmit)}
						>
							<input
								type="text"
								placeholder="First Name"
								{...register("firstname", {
									required: "First Name is required",
								})}
								className="border border-[#3F4040] rounded-lg bg-none p-2 lg:w-[500px] h-[52px] bg-blue-100 placeholder:font-figtree placeholder:text-base placeholder:text-[#3F4040]"
							/>

							{errors.firstname && (
								<span className="block text-red-500">
									{errors.firstname.message}
								</span>
							)}
							<input
								type="text"
								placeholder="Last Name"
								{...register("lastname", {
									required: "Last Name is required",
								})}
								className="border border-[#3F4040] rounded-lg p-2 lg:w-[500px] h-[52px] bg-blue-100 placeholder:font-figtree placeholder:text-base placeholder:text-[#3F4040]"
							/>

							{errors.lastname && (
								<span className="block text-red-500">
									{errors.lastname.message}
								</span>
							)}

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
								className="border border-[#3F4040] rounded-lg p-2 lg:w-[500px] h-[52px] bg-blue-100 placeholder:text-base placeholder:text-[#3F4040]"
							/>

							{errors.email && (
								<span className="block text-red-500">
									{errors.email.message}
								</span>
							)}

							<div className="relative flex ">
								<input
									type={showPassword ? "text" : "password"}
									placeholder="password"
									{...register("password", {
										required: "Password is required",
									})}
									className="w-[500px]   mt-1  border  border-[#3F4040] rounded-lg p-2 h-[52px] bg-blue-100 placeholder:text-base placeholder:text-[#3F4040] "
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
									{errors.password.message}
								</span>
							)}

							{/* <div className="relative flex ">
							<input
								type={showPassword ? "text" : "password"}
								{...register("password", {
									required: "Password is required",
								})}
								className="w-[500px]   mt-1  border  border-[#3F4040] rounded-lg p-2 h-[52px] bg-blue-100 placeholder:text-base placeholder:text-[#3F4040] "
							/>
							<div
								className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
								onClick={passwordVisibility}
							>
								<span>
									<HiEye />
								</span>
							</div>
						</div> */}
							{/* <Link
							to="/dashboard"
							className="bg-green-600 text-white font-figtree flex justify-center items-center py-2 rounded-lg w-[500px] h-[52px]"
						>
							<h1>Sign Up</h1>
						</Link> */}

							<button
								type="submit"
								className="monserrat font-medium size1 formbutton mx-14 text-[#4D4D4D] py-2 px-4 rounded-md mt-10 bg-[#FED700]"
								disabled={isPending}
							>
								{isPending ? "Signing Up..." : "Sign Up"}
							</button>
						</form>

						<div className="flex justify-center mt-5 ">
							<h1>
								Already have an account?{" "}
								<span className="font-bold ">
									<Link to="/login">Login</Link>
								</span>
							</h1>
						</div>

						<div className="flex justify-center py-4 ">
							<p>or</p>
						</div>

						<div className="bg-[#FFFFFF] shadow-[#00000026] gap-3 flex  items-center px-6 lg:w-[500px] h-[52px] rounded-lg">
							{/* <div className=""> */}
							<img src={google} alt="" width={24} />
							<p>Signup with google</p>
							{/* <input
								type="password"
								placeholder="Sign up with google"
								className=" rounded-lg p-2 placeholder:bg-[#FFFFFF]  placeholder:text-base placeholder:text-[#000000]"
							/> */}
							{/* </div> */}
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Signup;
