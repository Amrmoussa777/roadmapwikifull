"use client";

import WelcomeStep from "@/components/builder/create-new-roadmap-steps/WelcomeStep";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import roadmapImage from "@public/auth-left.svg";
import RoadmapNameStep from "@/components/builder/create-new-roadmap-steps/RoadmapNameStep";
import RoadmapDescriptionStep from "@/components/builder/create-new-roadmap-steps/RoadmapDescriptionStep";

const Steps = () => {
	const [stepNumber, setStepNumber] = useState(0);

	const handleNextStep = () => {
		setStepNumber(prev => prev + 1);
	};

	const handleBackStep = () => {
		setStepNumber(prev => prev - 1);
	};

	const renderStep = () => {
		switch (stepNumber) {
			case 0:
				return <WelcomeStep />;
			case 1:
				return <RoadmapNameStep handleNextStep={handleNextStep} />;
			case 2:
				return <RoadmapDescriptionStep handleBackStep={handleBackStep} />;
			default:
				return <WelcomeStep />;
		}
	};

	const imageAnimation = `${
		stepNumber === 0
			? "!scale-110 -left-4 -top-4"
			: stepNumber === 1
			? "left-0 top-0"
			: stepNumber === 2
			? "left-2 -top-2"
			: "left-4 -top-4"
	}`;

	useEffect(() => {
		setTimeout(() => {
			if (stepNumber === 0) {
				setStepNumber(1);
			}
		}, 2000);
	}, []);

	return (
		<>
			<div className="max-w-[1300px] w-full mx-auto h-full mt-8 md:flex-jc-c gap-4">
				<div className="relative w-full md:w-2/4 h-full z-10">
					{renderStep()}
				</div>

				<div className="w-2/4 h-full hidden md:flex-jc-c">
					<Image
						src={roadmapImage}
						width={400}
						height={400}
						priority
						alt=""
						className={`relative block w-full max-w-[700px] mx-auto transition-all duration-200 z-0 ${imageAnimation} ${
							stepNumber > 0 ? "grayscale" : ""
						}`}
					/>
				</div>
			</div>
		</>
	);
};

export default Steps;
