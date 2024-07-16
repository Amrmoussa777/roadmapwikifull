import axios from "axios";
import { getCookie } from "cookies-next";

export const addTagToRoadmapStep = async (
	newTagData: Record<string, string[] | string>
) => {
	try {
		const accessToken = getCookie("accessToken");

		const res = await axios({
			method: "POST",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/roadmap/step/tag`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
			data: newTagData,
		});
		const { data } = res;

		return data;
	} catch (error: any) {
		const { response } = error;

		const { message } = response.data;

		return message;
	}
};
