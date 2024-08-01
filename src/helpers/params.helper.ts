import { FilterListType } from "@/redux/slices/roadmapList/types/roadmapList.types";

class ParamsHelper {
	static getEndpointParams(list: FilterListType) {
		const params = Object.entries(list).reduce(
			(acc: FilterListType, [key, value]) => {
				if (value.length) {
					acc[key] = value;
				}
				return acc;
			},
			{}
		);

		return params;
	}
}

export default ParamsHelper;
