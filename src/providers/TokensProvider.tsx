"use client";

import TokensHelper from "@/helpers/tokensHelper";
import { ChildrenType } from "@/providers/types/index.types";
import React, { useEffect, useState } from "react";

const TokensProvider = ({ children }: ChildrenType) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchTokens = async () => {
			await TokensHelper.fetchTokens();
			setLoading(false);
		};

		fetchTokens();
	}, []);

	return !loading ? <>{children}</> : null;
};

export default TokensProvider;
