"use client";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { CROSS_ICON } from "@public/icons/roadmapSteps";
import React, { FormEvent, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useFetch } from "@/hooks/useFetch";
import useInput from "@/components/common/input/hooks/useInput";
import {
	addRoadmapTag,
	deleteRoadmapTag,
} from "@/redux/slices/create-roadmap/createRoadmapSlice";
import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";

const RoadmapTags = () => {
	const { value, changeValue, reset, error, handleSetError } = useInput("");

	const dispatch = useAppDispatch();
	const { roadmap } = useAppSelector(state => state.createRoadmap);
	const { tags } = roadmap || {};
	const { fetchData: addTagFetch, loading: addTagLoading } = useFetch();
	const { fetchData: deleteTagFetch } = useFetch();

	const handleAddRoadmapTag = async (e: FormEvent) => {
		e.preventDefault();

		if (!value) {
			return handleSetError("Please add the tag name");
		}

		const newTagData = {
			roadmapId: roadmap?.id,
			name: value,
		};

		await addTagFetch("POST", `roadmap/tag`, newTagData).then(({ data }) => {
			dispatch(addRoadmapTag(data));
			reset();
		});
	};

	const handleDeleteRoadmapTag = async (tagId: string) => {
		await deleteTagFetch("DELETE", `roadmap/tag/${tagId}`).then(() => {
			dispatch(deleteRoadmapTag(tagId));
		});
	};

	useEffect(() => {
		if (value && error) {
			handleSetError("");
		}
	}, [value]);

	return (
		<div className="col-span-4">
			<label className="text-[#666666]">Roadmap Tags</label>
			<form
				onSubmit={handleAddRoadmapTag}
				className="flex-jb-c roadmap-info-select !p-2 focus-within:border-primary-ultramarineBlue text-[16px] sm:text-xl"
			>
				{tags?.length ? (
					<ul className="relative flex gap-1 md:gap-2 h-full w-[150px] sm:w-[300px] md:w-[350px]">
						<Swiper
							slidesPerView={
								tags.length < 2
									? 1
									: tags.length < 3
									? 1.5
									: tags.length < 4
									? 2.5
									: 3.5
							}
							breakpoints={{
								1280: {
									slidesPerView:
										tags.length < 2 ? 1 : tags.length < 3 ? 1.5 : 3.5,
								},
								876: {
									slidesPerView: tags.length < 2 ? 1 : 1.5,
								},
								100: {
									slidesPerView: tags.length < 2 ? 1 : 1.5,
								},
							}}
							className="w-full relative z-0"
						>
							{tags?.map(tag => (
								<SwiperSlide key={tag.id}>
									<li className="px-2 h-full flex-jb-c gap-1 md:gap-2 mr-2 rounded-lg text-sm bg-white border border-[#E0E0E0]">
										<span className="line-clamp-1">{tag.name}</span>
										<button
											type="button"
											onClick={() => handleDeleteRoadmapTag(tag.id)}
											className="[&>svg]:w-[20px] [&>svg]:h-[20px] text-[#666666] hover:text-red-500 hover:border-red-500 rounded-full bg-white border border-[#E0E0E0] transition duration-200"
										>
											{CROSS_ICON}
										</button>
									</li>
								</SwiperSlide>
							))}
						</Swiper>

						<div className="absolute w-[15px] h-full right-0 bg-gradient-to-l from-white z-10" />
					</ul>
				) : null}

				<input
					placeholder="e.g. Programming"
					type="text"
					value={value}
					onChange={changeValue}
					className="w-full h-full outline-none bg-transparent"
				/>

				<button
					type="submit"
					disabled={addTagLoading}
					className="relative overflow-hidden min-w-[60px] w-[60px] md:min-w-[100px] md:w-[100px] text-sm md:text-[16px] font-medium h-full bg-primary-ultramarineBlue text-white rounded-md"
				>
					{addTagLoading ? <ButtonDotsLoader /> : "Add tag"}
				</button>
			</form>
			{error ? (
				<p className={`${error ? "text-red-500" : "hidden"} text-xs my-2`}>
					{error}
				</p>
			) : null}
		</div>
	);
};

export default RoadmapTags;
