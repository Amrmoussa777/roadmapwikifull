import MonetizationStatistics from "@/components/monetization/components/MonetizationStatistics";
import SummaryMonetization from "@/components/monetization/components/SummaryMonetization";
import AvailableCredit from "@/components/monetization/components/AvailableCredit";
import ActivityMonetizationTableContainer from "@/components/monetization/components/ActivityMonetizationTableContainer";

const page = () => {
	return (
		<main className="max-w-[1440px] mx-auto p-6 lg:px-8">
			<div className="flex flex-col md:flex-row-reverse gap-6">
				<AvailableCredit />

				<div className="flex flex-col w-full md:w-[calc(100%-354px)]">
					<SummaryMonetization />
					<MonetizationStatistics />
				</div>
			</div>

			<ActivityMonetizationTableContainer />
		</main>
	);
};

export default page;
