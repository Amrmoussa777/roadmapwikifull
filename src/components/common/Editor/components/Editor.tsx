import styles from "../styles/editor.module.css";
import "react-quill/dist/quill.snow.css";
import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import { EditorProps } from "@/components/common/Editor/types/editor.types";

const modules = {
	toolbar: [
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		["bold", "italic", "underline", "strike", "link"],
		[{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
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
	useEffect(() => {
		const Link = ReactQuill.Quill.import("formats/link");
		const builtInCreate = Link.create;

		Link.create = (value: string) => {
			let href = value;
			if (!/^https?:\/\//i.test(href)) {
				href = `https://${href}`;
			}
			return builtInCreate.call(Link, href);
		};

		ReactQuill.Quill.register(Link, true);
	}, []);

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
