class TextTransformationHelper {
	static getCapitalizedEnumKey(key: string) {
		const capitalizedText = key.toLowerCase().replaceAll("_", " ");

		return capitalizedText;
	}
}

export default TextTransformationHelper;
