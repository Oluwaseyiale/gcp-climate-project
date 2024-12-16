/** @format */

import { useState } from "react";
import { useLocation } from "react-router-dom"; // For extracting query parameters
import OtpInput from "react-otp-input";
import { useVerifyOtp, useResendOtp } from "../../../api/queries"; // Import your mutation hook
import { useNavigate } from "react-router-dom";
import "./otp.css";

export default function OtpPage() {
	const [otp, setOtp] = useState("");

	const navigate = useNavigate();

	const location = useLocation();
	const userEmail = location.state;
	const [isCooldown, setCooldown] = useState(false);
	console.log("useremail", userEmail);

	const { mutate: verifyOtp, isLoading: isVerifying, error } = useVerifyOtp();
	const { mutate: resendOtp, isLoading: isResending } = useResendOtp();

	// Function to resend the OTP
	const resend = () => {
		if (isCooldown) {
			console.warn("Please wait before resending the OTP.");
			return;
		}
		if (!userEmail) {
			console.error("Email not found in query parameters");
			return;
		}

		setCooldown(true); // Start cooldown
		setTimeout(() => setCooldown(false), 30000);

		resendOtp(
			{ email: userEmail.email }, // Pass the email as payload
			{
				onSuccess: () => console.log("OTP resent successfully"),
				onError: (error) => console.error("Error resending OTP", error),
			}
		);
	};

	// Function to handle OTP submission
	const handleSubmit = () => {
		if (!userEmail) {
			console.error("Email not found in state");
			return;
		}

		const formData = {
			otp,
			email: userEmail.email,
		};

		verifyOtp(formData, {
			onSuccess: () => {
				navigate("/login"); // Navigate on success
			},
			onError: () => {
				console.error("Invalid OTP or server error");
			},
		});
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen border">
			<h1 className="text-center mb-16 text-black font-normal text-base">
				Enter OTP sent to your E-mail
			</h1>

			<div className=" items-center flex-col justify-center">
				<OtpInput
					value={otp}
					onChange={setOtp}
					numInputs={6}
					renderInput={(props) => <input {...props} />}
					inputStyle="otp-input"
					containerStyle="otp-input-focus"
				/>
				{error && (
					<p className="text-red-500 text-center mt-2">
						Invalid OTP. Please try again.
					</p>
				)}
			</div>
			<button
				className="mt-4 w-40 bg-blue-500 text-white py-2 rounded"
				onClick={handleSubmit}
				disabled={isVerifying || otp.length !== 6}
			>
				{isVerifying ? "Verifying..." : "Verify OTP"}
			</button>
			<button
				onClick={resend}
				disabled={isResending}
				className="text-black font-medium text-base ml-1 mt-4"
			>
				{isResending ? "Resending..." : "Resend OTP"}
			</button>
		</div>
	);
}
