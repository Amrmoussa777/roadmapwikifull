import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { useState } from "react";

export const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const logout = async () => {
		setLoading(true);

		const supabase = createSupabaseBrowserClient();
		await supabase.auth.signOut();

		setTimeout(() => {
			setLoading(false);
			window.location.replace("/");
		}, 500);
	};

	return {
		logout,
		loading,
	};
};
