import { NEW_NOTIFICATIONS_ICON } from "@public/icons/navbar";
import React from "react";

const NotificationButton = () => {
	return (
		<button className="text-[#383838] rounded-full hover:shadow-clg transition duration-200">
			{NEW_NOTIFICATIONS_ICON}
		</button>
	);
};

export default NotificationButton;
