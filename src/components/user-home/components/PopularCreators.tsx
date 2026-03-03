"use client";

import PopularCreator from "@/components/user-home/components/PopularCreator";
import { PopularCreatorType } from "@/components/user-home/types/index.types";
import { useFetch } from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";

const PopularCreators = () => {
	const [creators, setCreators] = useState<PopularCreatorType[]>([]);

	const { fetchData, loading } = useFetch();

	useEffect(() => {
		(async () => {
			const { data } = await fetchData("GET", `users/popular`);

			setCreators(data);
		})();
	}, []);

	return (
		<section className="relative w-full h-full md:w-7/12 lg:w-2/4">
			<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
				Popular creators
			</h3>

			<ul className="h-full grid grid-cols-1 lg:grid-cols-2 gap-[10px] xl:gap-[20px] mt-[24px] overflow-y-scroll hidden-scrollbar pb-[120px]">
				{creators.map(creator => (
					<PopularCreator key={creator.id} {...creator} />
				))}
			</ul>

			<div className="absolute w-full h-[80px] right-0 bottom-0 bg-gradient-to-t from-white z-10" />
		</section>
	);
};

export default PopularCreators;
