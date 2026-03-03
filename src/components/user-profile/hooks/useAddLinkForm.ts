import useInput from "@/components/common/input/hooks/useInput";
import { SOCIAL_MEDIA_ICONS_OJB } from "@/config/socialMediaIcons";
import { useFetch } from "@/hooks/useFetch";
import useToggle from "@/hooks/useToggle";
import { addNewUserLink } from "@/redux/slices/user-profile/userProfileSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { FormEvent, ReactNode, useEffect, useState } from "react";

export const useAddLinkForm = () => {
	const dispatch = useAppDispatch();
	const { links, user } = useAppSelector(state => state.userProfile);

	const {
		value: linkValue,
		changeValue: changeLinkValue,
		handleSetError,
		error: validationError,
		reset,
	} = useInput("");
	const { currentState: isAdding, toggle: toggleAddingLink } = useToggle(false);
	const { fetchData, loading } = useFetch();

	const defaultIcon = SOCIAL_MEDIA_ICONS_OJB.find(
		icon => icon.name === "FACEBOOK"
	);

	const [socialMediaActive, setSocialMediaActive] = useState<{
		name: string;
		icon: ReactNode;
	} | null>({ name: "FACEBOOK", icon: defaultIcon?.icon } || null);

	const handleSubmitSocialMediaLink = async (e: FormEvent) => {
		e.preventDefault();

		if (!isAdding) return toggleAddingLink();

		if (!linkValue.length)
			return handleSetError("Social media link is required");

		const newTag = {
			platform: socialMediaActive?.name,
			link: linkValue,
		};

		const newLinks = [...links, newTag];

		const { data } = await fetchData(
			"POST",
			`users/${user?.id}/social-media`,
			newLinks
		);

		dispatch(addNewUserLink(data));
		reset();
		toggleAddingLink();
	};

	useEffect(() => {
		if (linkValue.length && validationError) handleSetError("");
	}, [linkValue]);

	return {
		isAdding,
		setSocialMediaActive,
		linkValue,
		changeLinkValue,
		validationError,
		handleSubmitSocialMediaLink,
		socialMediaActive,
		loading,
	};
};
