import { useFetch } from "@/hooks/useFetch";
import {
	deleteStepVerification,
	fillVerificationToUpdate,
} from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { RoadmapStepVerificationType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppDispatch } from "@/redux/store";
import { CROSS_ICON, EDIT_ICON } from "@public/icons/userProfile";
import React from "react";

const StepVerificationItem = ({
	verification,
	stepId,
}: {
	verification: RoadmapStepVerificationType;
	stepId: string;
}) => {
	const { id, link } = verification;
	const { fetchData, loading } = useFetch();
	const dispatch = useAppDispatch();

	const handleDeleteVerification = async () => {
		await fetchData("DELETE", `roadmap/step/verification/${id}`).then(() => {
			dispatch(deleteStepVerification({ stepId, verificationId: id }));
		});
	};

	return (
		<li className="flex-jb-c gap-2 mt-2">
			<div className="flex-jc-c  min-h-[40px] h-[40px] !px-0 bg-white underline border border-[#E0E0E0] rounded-xl text-black font-normal text-[14px] hover:border-primary-ultramarineBlue hover:text-primary-ultramarineBlue transition duration-200">
				<a className=" line-clamp-1 px-2" target="_blank" href={link}>
					{link}
				</a>
			</div>

			<div className="flex-jc-c gap-2 [&>button]:flex-jc- [&>button:hover]:text-primary-ultramarineBlue [&>button]:transition [&>button]:duration-200">
				<button
					disabled={loading}
					onClick={() => dispatch(fillVerificationToUpdate(verification))}
				>
					{EDIT_ICON}
				</button>
				<button disabled={loading} onClick={handleDeleteVerification}>
					{CROSS_ICON}
				</button>
			</div>
		</li>
	);
};

export default StepVerificationItem;
