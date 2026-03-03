export type DividerType = {
	bgColor: string;
	customStyles?: string;
};
export interface HorizontalDividerType extends DividerType {
	height: string;
}
export interface VerticalDividerType extends DividerType {
	width: string;
}
