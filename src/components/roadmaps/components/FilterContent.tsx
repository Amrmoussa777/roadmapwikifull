import FilterItem from "@/components/roadmaps/components/FilterItem";
import FilterRangeSlider from "@/components/roadmaps/components/FilterSlider";
import { FilterContentProps } from "@/components/roadmaps/types/index.types";

const FilterContent: React.FC<FilterContentProps> = ({
	responsive,
	searchTypeList,
	setSearchTypeList,
	roadmapTypeList,
	setRoadmapTypeList,
}) => (
	<div className="p-[24px] pb-[76px] sm:pb-[24px] pt-[24px] sm:pt-0">
		<h3 className="text-[18px] text-[#484848] font-poppins font-medium mb-[25px]">
			Filter
		</h3>
		<ul>
			{responsive && (
				<FilterItem
					filterLabel="Search for"
					filterList={searchTypeList}
					setNewList={setSearchTypeList}
					row
					circle
				/>
			)}
			<FilterItem
				filterLabel="Roadmap type"
				filterList={roadmapTypeList}
				setNewList={setRoadmapTypeList}
			/>
			<FilterRangeSlider />
		</ul>
	</div>
);

export default FilterContent;
