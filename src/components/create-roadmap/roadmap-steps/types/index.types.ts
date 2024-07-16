export type RoadmapStepItemProps = {
	id: string;
	title: string;
	tags: string[];
	daysDuration: number | null;
	editorContent: string;
	attachments: File[];
	active: boolean;
	status: string;
};
