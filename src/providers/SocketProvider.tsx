"use client";

import { useSocket } from "@/hooks/useSocket";
import { ChildrenType } from "@/providers/types/index.types";
import React from "react";

const SocketProvider = ({ children }: ChildrenType) => {
	useSocket();

	return <>{children}</>;
};

export default SocketProvider;
