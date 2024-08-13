import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

const useClearReduxOnNavigation = () => {
	const excludedPaths = ["conversation"];

	const pathname = usePathname();
	const dispatch = useDispatch();

	useEffect(() => {
		if (excludedPaths.includes(pathname)) {
			dispatch({ type: "RESET_STORE" });
		}
	}, [pathname]);
};

export default useClearReduxOnNavigation;
