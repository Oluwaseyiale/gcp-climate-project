/** @format */

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PinInput } from '@mantine/core';
import { useVerifyOtp, useResendOtp } from "../../../api/queries";
import "./otp.css";

export default function OtpPage() {
	const [otp, setOtp] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const userEmail = location.state;
	const [isCooldown, setCooldown] = useState(false);

	const { mutate: verifyOtp, isLoading: isVerifying, error } = useVerifyOtp();
	const { mutate: resendOtp, isLoading: isResending } = useResendOtp();

	const resend = () => {
		if (isCooldown) return console.warn("Please wait before resending the OTP.");
		if (!userEmail) return console.error("Email not found in state");

		setCooldown(true);
		setTimeout(() => setCooldown(false), 30000);

		resendOtp(
			{ email: userEmail.email },
			{
				onSuccess: () => console.log("OTP resent successfully"),
				onError: (error) => console.error("Error resending OTP", error),
			}
		);
	};

	const handleSubmit = () => {
		if (!userEmail) return console.error("Email not found in state");

		verifyOtp(
			{ otp, email: userEmail.email },
			{
				onSuccess: () => navigate("/login"),
				onError: () => console.error("Invalid OTP or server error"),
			}
		);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen border">
			<h1 className="text-center mb-16 text-black font-normal text-base">
				Enter OTP sent to your E-mail
			</h1>

			<div className="flex items-center justify-center  w-full p-4">
				<PinInput
					className="flex gap-2"
					value={otp}
					onChange={setOtp}
					length={6}
					// type={/^[0-9]*$/}
					inputType=""
					inputMode="numeric"
					classNames={{
						// optional wrapper styles
						input: "otp-input", // the CSS class you define in otp.css for styling each input box
					}}
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
				disabled={isResending || isCooldown}
				className="text-black font-medium text-base ml-1 mt-4"
			>
				{isResending ? "Resending..." : "Resend OTP"}
			</button>
		</div>
	);
}
