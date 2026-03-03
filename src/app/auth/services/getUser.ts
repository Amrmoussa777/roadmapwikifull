import { CurrentUserType } from "@/providers/types/index.types";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const getUser = async (): Promise<CurrentUserType | null> => {
	try {
		const supabase = createSupabaseServerClient();
		const {
			data: { user },
		} = await supabase.auth.getUser();
		if (!user) return null;

		const { data: profile, error } = await supabase
			.from("profiles")
			.select(
				"id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description"
			)
			.eq("id", user.id)
			.single();
		
		if (error || !profile) return null;
		return {
			id: profile.id,
			email: user.email,
			role: profile.role,
			image: profile.image,
			cover: profile.cover,
			occupation: profile.occupation,
			roadmapsSubscribers: profile.roadmaps_subscribers,
			fullName: profile.full_name,
			userName: profile.user_name,
			description: profile.description,
		};
	} catch (error) {
		console.log(error);
		return null;
	}
};
