import FilterItem from "@/components/roadmaps/components/FilterItem";
import { FilterContentProps } from "@/components/roadmaps/types/index.types";
import { useAppSelector } from "@/redux/store";
import { FILTER_OFF_ICON } from "@public/icons/roadmaps";
import { CROSS_ICON } from "@public/icons/userProfile";

const FilterContent: React.FC<FilterContentProps> = ({
	responsive,
	searchTypeList,
	setSearchTypeList,
	roadmapCategoryList,
	setRoadmapCategoryList,
	showMoreCategories,
	roadmapDurationList,
	setRoadmapDurationList,
	clearFilter,
	toggleMobileFilter,
	isShowMore,
}) => {
	const { filterList } = useAppSelector(state => state.roadmapList);

	const checkFilterList = () => {
		const isFilterList = Object.values(filterList).find(item => item.length);

		return isFilterList;
	};

	return (
		<div className="p-[24px] pb-[76px] sm:pb-[24px] pt-[24px] sm:pt-0">
			<div className="flex-jb-c mb-[25px]">
				<h3 className="text-[18px] text-[#484848] font-poppins font-medium">
					Filter
				</h3>

				{toggleMobileFilter ? (
					<button
						onClick={toggleMobileFilter}
						className="text-[#484848] hover:text-red-500 transition duration-200"
					>
						{CROSS_ICON}
					</button>
				) : null}
				{clearFilter ? (
					<button
						onClick={clearFilter}
						disabled={!checkFilterList()}
						className="text-[#484848] hover:text-red-500 disabled:hover:text-[#484848] transition duration-200"
					>
						{FILTER_OFF_ICON}
					</button>
				) : null}
			</div>
			<ul>
				{responsive && (
					<FilterItem
						filterLabel={{ id: "search", name: "Search for" }}
						filterList={searchTypeList}
						setNewList={setSearchTypeList}
						row
						circle
					/>
				)}

				<FilterItem
					filterLabel={{ id: "category", name: "Roadmap category" }}
					filterList={roadmapCategoryList}
					setNewList={setRoadmapCategoryList}
					showMore={showMoreCategories}
					isShowMore={isShowMore}
					defaultListCount={15}
					lastFilterItem
					multi={true}
				/>

				<FilterItem
					filterLabel={{ id: "category", name: "Roadmap duration" }}
					filterList={roadmapDurationList}
					setNewList={setRoadmapDurationList}
					defaultListCount={15}
					multi={true}
				/>

				{/* <FilterRangeSlider /> */}
			</ul>
		</div>
	);
};

export default FilterContent;
