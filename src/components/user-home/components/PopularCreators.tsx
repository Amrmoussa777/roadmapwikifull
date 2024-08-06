import PopularCreator from "@/components/user-home/components/PopularCreator";
import React from "react";

const PopularCreators = () => {
	const creators = [
		{
			id: "1",
			image: "",
			fullName: "Amr mousa",
			occupation: "Creator",
			rate: { stars: 4, reviews: 34 },
			tags: [
				{ id: "1", name: "Technology", color: "" },
				{ id: "2", name: "Example text", color: "" },
			],
			subscribers: 32,
		},
		{
			id: "2",
			image: "",
			fullName: "Amr mousa",
			occupation: "Creator",
			rate: { stars: 0, reviews: 0 },
			tags: [
				{ id: "1", name: "Technology", color: "" },
				{ id: "2", name: "Example text", color: "" },
			],
			subscribers: 32,
		},
		{
			id: "3",
			image: "",
			fullName: "Amr mousa",
			occupation: "Creator",
			rate: { stars: 3, reviews: 30 },
			tags: [
				{ id: "1", name: "Technology", color: "" },
				{ id: "2", name: "Example text", color: "" },
			],
			subscribers: 32,
		},
		{
			id: "4",
			image: "",
			fullName: "Amr mousa",
			occupation: "Creator",
			rate: { stars: 5, reviews: 34 },
			tags: [
				{ id: "1", name: "Technology", color: "" },
				{ id: "2", name: "Example text", color: "" },
			],
			subscribers: 32,
		},
	];

	return (
		<section className="w-full md:w-3/4">
			<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
				Popular creators
			</h3>

			<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] xl:gap-[20px] mt-[24px]">
				{creators.map(creator => (
					<PopularCreator key={creator.id} {...creator} />
				))}
			</ul>
		</section>
	);
};

export default PopularCreators;
