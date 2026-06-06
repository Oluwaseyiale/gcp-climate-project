import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PinInput } from '@mantine/core';
import { useVerifyOtp, useResendOtp } from "../../../api/queries";
import "./otp.css";
import { getApiErrorMessage } from "../../../utils/apiError";

export default function OtpPage() {
	const [otp, setOtp] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const userEmail = location.state;
	const [isCooldown, setCooldown] = useState(false);
	const [message, setMessage] = useState("");

	const { mutate: verifyOtp, isPending: isVerifying, error } = useVerifyOtp();
	const { mutate: resendOtp, isPending: isResending } = useResendOtp();

	const resend = () => {
		if (isCooldown) {
			setMessage("Please wait before resending the OTP.");
			return;
		}

		if (!userEmail) {
			setMessage("Email not found. Please start signup again.");
			return;
		}

		setCooldown(true);
		setMessage("");
		setTimeout(() => setCooldown(false), 30000);

		resendOtp(
			{ email: userEmail.email },
			{
				onSuccess: () => setMessage("OTP resent successfully."),
				onError: (error) =>
					setMessage(getApiErrorMessage(error, "Unable to resend OTP. Please try again.")),
			}
		);
	};

	const handleSubmit = () => {
		if (!userEmail) {
			setMessage("Email not found. Please start signup again.");
			return;
		}

		verifyOtp(
			{ otp, email: userEmail.email },
			{
				onSuccess: () => navigate("/auth/login"),
				onError: (error) =>
					setMessage(getApiErrorMessage(error, "Invalid OTP or server error.")),
			}
		);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-[#F6FDFB]">
			<h1 className="text-center mb-16 text-black font-normal text-base">
				Enter OTP sent to your E-mail
			</h1>

			<div className="flex items-center justify-center  w-full p-4">
				<PinInput
					className="flex gap-2"
					value={otp}
					onChange={setOtp}
					length={6}
					inputType=""
					inputMode="numeric"
					classNames={{
						input: "otp-input",
					}}
				/>
				{error && (
					<p className="text-red-500 text-center mt-2">
						Invalid OTP. Please try again.
					</p>
				)}
			</div>
			{message && <p className="mt-2 text-sm text-[#3F4040]">{message}</p>}

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
