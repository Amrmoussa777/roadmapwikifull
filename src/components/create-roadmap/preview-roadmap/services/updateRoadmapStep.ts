import axios from "axios";
import { getCookie } from "cookies-next";

export const updateRoadmapStep = async (
	newStepData: Record<string, string[] | string>,
	stepId: string
) => {
	try {
		const accessToken = getCookie("accessToken");

		const res = await axios({
			method: "PATCH",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/roadmap/step/${stepId}`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
			data: newStepData,
		});
		const { data } = res;

		return data;
	} catch (error: any) {
		const { response } = error;

		const { message } = response.data;

		return message;
	}
};
