import React, { useContext, useState } from "react";
import Avatar from "@/components/common/avatar/components/Avatar";
import { useAppSelector } from "@/redux/store";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { EDIT_ICON } from "@public/icons/userProfile";
import { AnimatePresence, motion } from "framer-motion";
import ChangeUserImage from "@/components/creator-profile/components/ChangeCover";
import useToggle from "@/hooks/useToggle";

const UserImage = () => {
	const { user } = useAppSelector(state => state.userProfile);
	const { image, fullName } = user || {};
	const [showEditButton, setShowEditButton] = useState(false);
	const { currentState: uploadModal, toggle: toggleUploadModal } =
		useToggle(false);
	const { currentUser } = useContext(CurrentUserContext);
	const isUserProfile = currentUser?.id === user?.id;

	return (
		<>
			<div
				onMouseEnter={() => isUserProfile && setShowEditButton(true)}
				onMouseLeave={() => isUserProfile && setShowEditButton(false)}
				className="absolute top-[76px] md:top-2/4 md:-translate-y-2/4 left-2/4 -translate-x-2/4 md:translate-x-0 md:left-8 overflow-hidden group"
			>
				<AnimatePresence>
					{showEditButton ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="absolute w-full h-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full bg-black/70 transition duration-200 flex-jc-c"
						>
							<button
								onClick={toggleUploadModal}
								className="w-[40px] h-[40px] flex-jc-c rounded-full bg-white/20 text-white border border-white/20"
							>
								{EDIT_ICON}
							</button>
						</motion.div>
					) : null}
				</AnimatePresence>

				<Avatar
					image_url={image}
					name={fullName || ""}
					customStyles="w-[148px] h-[148px] rounded-full border-8 border-white object-cover [&>img]:border-none !bg-primary-ultramarineBlue text-[3rem] text-white"
				/>
			</div>

			<ChangeUserImage
				uploadModal={uploadModal}
				toggleUploadModal={toggleUploadModal}
				ratio="400 X 400px"
				updateKey="image"
				title="Upload image"
				imageHeight={400}
			/>
		</>
	);
};

export default UserImage;
