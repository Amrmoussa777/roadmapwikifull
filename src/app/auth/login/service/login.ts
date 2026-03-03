import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export const login = async (formData: Record<string, string>) => {
	try {
		const supabase = createSupabaseBrowserClient();
		const email = formData.email;
		const password = formData.password;

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		return { error: error?.message ?? null };
	} catch (error: any) {
		return { error: error?.message ?? "Login failed" };
	}
};
