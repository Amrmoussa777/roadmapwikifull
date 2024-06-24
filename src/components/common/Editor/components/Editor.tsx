"use client";

import styles from "../styles/editor.module.css";
import "react-quill/dist/quill.snow.css";
import React from "react";
import ReactQuill from "react-quill";
import { EditorProps } from "@/components/common/Editor/types/editor.types";

var modules = {
	toolbar: [
		["bold", "italic", "underline", "strike"],
		[
			{ align: ["", "center", "right", "justify"] },
			{ indent: "-1" },
			{ indent: "+1" },
		],
	],
};

const Editor = ({ value, changeValue }: EditorProps) => {
	return (
		<div className={styles.editor}>
			<ReactQuill
				modules={modules}
				theme="snow"
				value={value}
				onChange={changeValue}
				className={styles.quill}
			/>
		</div>
	);
};

export default Editor;
