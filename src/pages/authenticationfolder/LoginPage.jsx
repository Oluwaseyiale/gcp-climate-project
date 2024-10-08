/** @format */
import signupimg from "../../assets/signupimg.png";
import google from "../../assets/googleicocn.png";
// src/pages/Login.jsx

const Login = () => {
	return (
		<div className="flex  items-center justify-between h-screen bg-gradient-to-b  from-white to-blue-100">
			<div className=" w-[50%] h-full  flex items-center justify-center bg-white   rounded-br-[140px]">
				<img src={signupimg} alt="" width={400} />
			</div>

			<div className=" flex justify-center items-center h-full w-[50%] bg-blue-100 rounded-tl-[140px]">
				<div>
					<h1 className=" font-medium font-figtree text-4xl">Welcome</h1>
					<form className="flex flex-col gap-4 mt-4">
						<input
							type="text"
							placeholder="First Name"
							className="border border-[#3F4040] rounded-lg bg-none p-2 w-[500px] h-[52px] bg-blue-100 placeholder:font-figtree placeholder:text-base placeholder:text-[#3F4040]"
						/>
						<input
							type="text"
							placeholder="Last Name"
							className="border border-[#3F4040] rounded-lg p-2 w-[500px] h-[52px] bg-blue-100 placeholder:font-figtree placeholder:text-base placeholder:text-[#3F4040]"
						/>

						<input
							type="email"
							placeholder="Email"
							className="border border-[#3F4040] rounded-lg p-2 w-[500px] h-[52px] bg-blue-100 placeholder:text-base placeholder:text-[#3F4040]"
						/>

						<input
							type="password"
							placeholder="Password"
							className="border border-[#3F4040] rounded-lg p-2 w-[500px] h-[52px] bg-blue-100 placeholder:text-base placeholder:text-[#3F4040]"
						/>

						<input
							type="password"
							placeholder="Confirm Password"
							className="border border-[#3F4040] rounded-lg p-2 w-[500px] h-[52px] bg-blue-100 placeholder:text-base placeholder:text-[#3F4040]"
						/>
						<button className="bg-green-600 text-white font-figtree py-2 rounded-lg w-[500px] h-[52px]">
							Sign Up
						</button>
					</form>

					<div className=" justify-center flex py-4">
						<p>or</p>
					</div>

					<form className="bg-[#FFFFFF] shadow-[#00000026]  flex  items-center px-6 w-[500px] h-[52px] rounded-lg">
						{/* <div className=""> */}
							<img src={google} alt="" width={24} />
							<input
								type="password"
								placeholder="Sign up with google"
								className=" rounded-lg p-2 placeholder:bg-[#FFFFFF]  placeholder:text-base placeholder:text-[#000000]"
							/>
						{/* </div> */}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
