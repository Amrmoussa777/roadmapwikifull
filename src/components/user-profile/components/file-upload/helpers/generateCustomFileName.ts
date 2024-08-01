const generateCustomFileName = (filename: string, maxChars: number) => {
	const fileExtension = filename.split(".").slice(-1)[0];
	const maxFileChars = filename
		.split(`.${fileExtension}`)
		.join("")
		.slice(0, maxChars);

	const finalFileName = `${maxFileChars.split(fileExtension)}.${fileExtension}`;

	return {
		fileExtension,
		finalFileName,
	};
};

export default generateCustomFileName;
