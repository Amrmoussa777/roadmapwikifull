import useInput from "@/components/common/input/hooks/useInput";
import { useFetch } from "@/hooks/useFetch";
import useToggle from "@/hooks/useToggle";
import {
	addStepVerification,
	updateVerification,
} from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";

export const useStepVerification = (stepId: string) => {
	const { currentState: verificationListOpen, toggle: toggleVerificationList } =
		useToggle(true);
	const actions = [{ id: "redirectLink", name: "Redirect Link" }];

	const { verificationToUpdate } = useAppSelector(state => state.createRoadmap);

	const { value, changeValue, reset } = useInput("");
	const { fetchData, loading } = useFetch();
	const dispatch = useAppDispatch();

	const handleAddVerification = async () => {
		const verificationData = {
			roadmapStepId: stepId,
			title: "LINK",
			link: value,
		};

		if (!/^https?:\/\//i.test(value)) {
			verificationData.link = `https://${verificationData.link}`;
		}

		await fetchData("POST", `roadmap/step/verification`, verificationData).then(
			({ data }) => {
				const newVerification = data;
				delete newVerification.roadmapStepId;

				dispatch(addStepVerification({ stepId, newVerification }));
				reset();
			}
		);
	};

	const handleUpdateVerification = async () => {
		if (!verificationToUpdate) return;

		const updatedVerification = {
			id: verificationToUpdate.id,
			title: "LINK",
			link: value,
		};

		if (!/^https?:\/\//i.test(value)) {
			updatedVerification.link = `https://${updatedVerification.link}`;
		}

		await fetchData(
			"PATCH",
			`roadmap/step/verification/${verificationToUpdate.id}`,
			updatedVerification
		).then(() => {
			dispatch(updateVerification({ stepId, updatedVerification }));
			reset();
		});
	};

	useEffect(() => {
		if (verificationToUpdate) {
			changeValue(verificationToUpdate.link);
		}
	}, [verificationToUpdate]);

	return {
		verificationListOpen,
		toggleVerificationList,
		actions,
		value,
		changeValue,
		reset,
		loading,
		handleAddVerification,
		handleUpdateVerification,
	};
};
