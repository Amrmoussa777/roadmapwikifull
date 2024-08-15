import useInput from "@/components/common/input/hooks/useInput";
import { ITarget } from "@/hooks/types/index.types";
import { useFetch } from "@/hooks/useFetch";
import {
	setConversationList,
	setConversationTotalItem,
} from "@/redux/slices/conversation/conversationSlice";
import { useAppDispatch } from "@/redux/store";
import { SEARCH_ICON } from "@public/icons/roadmapPreview";
import React from "react";

const SearchConversationForm = () => {
	const { value: searchValue, changeValue: changeSearchValue } = useInput("");
	const { fetchData: fetchConversations } = useFetch();
	const dispatch = useAppDispatch();

	const handleFetchSearchConversationList = async (e: ITarget | string) => {
		const newValue = typeof e === "string" ? e : e.target.value;
		changeSearchValue(e);

		const { data } = await fetchConversations(
			"GET",
			newValue
				? `conversations?search=${newValue}`
				: `conversations/?page=1&pageSize=10`
		);

		dispatch(setConversationTotalItem(data.length));

		dispatch(
			setConversationList({
				conversationList: data,
				searchResultCount: !newValue ? null : data.length,
			})
		);
	};

	return (
		<div className="h-[50px] my-[24px] flex-jc-c rounded-[8px] border border-[#E5EAFF] focus-within:border-primary-ultramarineBlue hover:border-primary-ultramarineBlue transition duration-200">
			<span className="text-[#979797] px-4">{SEARCH_ICON}</span>

			<input
				value={searchValue}
				onChange={handleFetchSearchConversationList}
				type="text"
				placeholder="Search"
				className="w-full h-full outline-none bg-transparent text-[14px] placeholder:text-[14px] placeholder:font-poppins placeholder:font-medium placeholder:text-[#979797] text-[#202020]"
			/>
		</div>
	);
};

export default SearchConversationForm;
