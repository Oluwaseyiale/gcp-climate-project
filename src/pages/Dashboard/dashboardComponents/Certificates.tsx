/** @format */
import noCertificate from "../../../assets/noCertificate.png";
import ballons from "../../../assets/ballons.png";
import {useUserProfile} from "../../../api/queries";
// import React from 'react'

const Certificates = () => {
	const { data } = useUserProfile();
	return <div>
			<div className="border h-40 rounded-b-full bg-[#E0EBE7]  flex gap-8  justify-center">
				<img src={ballons} alt="" className="w-[158px] h-[61px] " />
				<div>
					<h1 className="text-xl font-normal font-figtree">Hi, {data?.data?.user?.firstname}</h1>
					<p className="font-medium text-2xl font-figtree">
						Congratulations you made it.
					</p>

					{/* <UserProfile /> */}
				</div>
		</div>
		<div className='flex justify-center items-center mt-5'>
			<img src={noCertificate} alt="" className="w-42 h-[400px] " />
			<p className="text-2xl font-normal">Oops No certificate yet</p>
		</div>
		</div>;
};

export default Certificates;
