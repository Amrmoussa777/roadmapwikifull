import FormInput from "@/components/common/input/FormInput";
import useInput from "@/components/common/input/hooks/useInput";
import React from "react";

const RoadmapDiscussionSearchFrom = () => {
	const {
		value: searchValue,
		changeValue: changeSearchValue,
		reset: resetSearchValue,
	} = useInput("");

	return (
		<form action="">
			<FormInput
				type="text"
				name="discussionSearch"
				autoFocus
				placeholder="Search..."
				customStyles="mr-6"
				value={searchValue}
				handleChangeValue={changeSearchValue}
			/>
		</form>
	);
};

export default RoadmapDiscussionSearchFrom;
