import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import ChatHeader from "@/components/conversation/components/chat/ChatHeader";
import MessageForm from "@/components/conversation/components/chat/MessageForm";
import MessageList from "@/components/conversation/components/chat/MessageList";

const page = () => {
	return (
		<>
			<ChatHeader />
			<HorizontalDivider
				height="h-[1px]"
				bgColor="bg-[#AFB8CF]"
				customStyles="!my-0"
			/>
			<MessageList />
			<MessageForm />
		</>
	);
};

export default page;
