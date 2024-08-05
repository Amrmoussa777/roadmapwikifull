"use client";

import SummaryItem from "@/components/creator-home/components/SummaryItem";
import { SummaryItemProps } from "@/components/creator-home/types/index.types";
import { USER_STATS_ICONS } from "@/config/userStatsIcons";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Summary = () => {
	const [stats, setStats] = useState<SummaryItemProps[]>([]);

	const { currentUser } = useContext(CurrentUserContext);
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

	return (
		<div>
			<Swiper
				slidesPerView={4.5}
				spaceBetween={10}
				className={`[&>div]:flex-jb-c`}
				breakpoints={{
					1280: {
						slidesPerView: 4.5,
						spaceBetween: 10,
					},
					1150: {
						slidesPerView: 4.5,
						spaceBetween: 10,
					},

					1024: {
						slidesPerView: 4.5,
						spaceBetween: 10,
					},
					876: {
						slidesPerView: 4.5,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 4.5,
						spaceBetween: 10,
					},
					640: {
						slidesPerView: 2.8,
						spaceBetween: 10,
					},
					400: {
						slidesPerView: 2.8,
						spaceBetween: 10,
					},
					100: {
						slidesPerView: 1.4,
						spaceBetween: 10,
					},
				}}
			>
				{stats.map(item => (
					<SwiperSlide key={item.name}>
						<SummaryItem {...item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Summary;
