"use client";

import SummaryMonetizationItem from "@/components/monetization/components/SummaryMonetizationItem";
import SummaryLoader from "@/components/creator-home/components/loaders/SummaryLoader";
import { SummaryItemProps } from "@/components/creator-home/types/index.types";
import { USER_STATS_ICONS } from "@/config/userStatsIcons";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SummaryMonetization = () => {
	const [stats, setStats] = useState<SummaryItemProps[]>([]);

	const { currentUser, currentUserLoading } = useContext(CurrentUserContext);
	const { stats: statsObj } = currentUser || {};

	useEffect(() => {
		if (currentUser && statsObj) {
			const stats: SummaryItemProps[] = Object.entries(statsObj).map(
				([key, value]) => {
					return {
						name: key,
						value,
						icon: USER_STATS_ICONS[key],
					};
				}
			);

			setStats(stats);
		}
	}, [currentUser]);

	if (currentUserLoading) return <SummaryLoader />;

	return (
		<Swiper
			slidesPerView={2}
			spaceBetween={24}
			className={`w-full [&>div]:flex-jb-c`}
			breakpoints={{
				1280: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
				1150: {
					slidesPerView: 3,
					spaceBetween: 24,
				},

				1024: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
				876: {
					slidesPerView: 2.5,
					spaceBetween: 24,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				640: {
					slidesPerView: 1.5,
					spaceBetween: 24,
				},
				400: {
					slidesPerView: 1.5,
					spaceBetween: 24,
				},
				100: {
					slidesPerView: 1.4,
					spaceBetween: 24,
				},
			}}
		>
			{stats.map(item => (
				<SwiperSlide key={item.name}>
					<SummaryMonetizationItem {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SummaryMonetization;
