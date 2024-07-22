const useGetAvatarName = (name: string) => {
	const avatarName = name.split(" ").map(str => str.charAt(0));

	return avatarName;
};

export default useGetAvatarName;
