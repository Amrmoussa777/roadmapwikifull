"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (formData: FormData) => {
	try {
		const email = formData.get("email");
		const password = formData.get("password");

		const res = await axios({
			method: "POST",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`,
			data: {
				email,
				password,
			},
		});

		const { data } = res;
		const { accessToken, refreshToken } = data;

		cookies().set("accessToken", accessToken);
		cookies().set("refreshToken", refreshToken);
	} catch (error) {
		console.log(error);
	}
};
