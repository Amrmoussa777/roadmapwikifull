import styles from "../styles/editor.module.css";
import "react-quill/dist/quill.snow.css";
import React from "react";
import ReactQuill from "react-quill";
import { EditorProps } from "@/components/common/Editor/types/editor.types";

const modules = {
	toolbar: [
		["bold", "italic", "underline", "strike", "link"],
		[
			{ align: ["", "center", "right", "justify"] },
			{ indent: "-1" },
			{ indent: "+1" },
		],
	],
};

const Editor = ({
	value,
	changeValue,
	disable,
	hideToolbar,
	customStyles = "",
	onBlur,
}: EditorProps) => {
	return (
		<div className={`${styles.editor} ${customStyles}`}>
			<ReactQuill
				modules={modules}
				theme="snow"
				value={value}
				onChange={changeValue}
				onBlur={onBlur}
				className={`${styles.quill} ${
					hideToolbar ? "hide-toolbar" : ""
				} [&>div]:font-inter [&>div]:text-[#383838]`}
				readOnly={disable}
			/>
		</div>
	);
};

export default Editor;
