import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

const useClearReduxOnNavigation = () => {
	const pathname = usePathname();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "RESET_STORE" });
	}, [pathname, dispatch]);
};

export default useClearReduxOnNavigation;
