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
		<section className="w-full md:w-2/4">
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
