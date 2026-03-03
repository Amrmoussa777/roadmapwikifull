import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export const register = async (formData: Record<string, string>) => {
	try {
		const supabase = createSupabaseBrowserClient();
		const email = formData.email;
		const password = formData.password;
		const fullName = formData.fullName;

		const baseUsername = (email || "user").split("@")[0].replace(/[^a-z0-9_]/gi, "");
		const userName = `${baseUsername}-${crypto.randomUUID().slice(0, 8)}`.toLowerCase();

		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					user_name: userName,
					full_name: fullName,
				},
			},
		});

		if (error) return { message: error.message };

		// If the user is created immediately, update the profile fields (trigger only sets user_name).
		if (data.user) {
			await supabase
				.from("profiles")
				.update({ full_name: fullName })
				.eq("id", data.user.id);
		}

		return { message: null };
	} catch (error: any) {
		return { message: error?.message ?? "Registration failed" };
	}
};
