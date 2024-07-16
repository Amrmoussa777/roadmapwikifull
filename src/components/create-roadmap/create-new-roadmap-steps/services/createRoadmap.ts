import axios from "axios";
import { getCookie } from "cookies-next";

export const createRoadmap = async (
	newRoadmapData: Record<string, string | string[] | null>
) => {
	try {
		const accessToken = getCookie("accessToken");

		const res = await axios({
			method: "POST",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/roadmap`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
			data: newRoadmapData,
		});
		const { data } = res;

		return data;
	} catch (error: any) {
		const { response } = error;

		const { message } = response.data;

		return message;
	}
};
