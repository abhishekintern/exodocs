import React from "react"
import ContentEditable from "react-contenteditable"

const SharedNewElement = ({ html, tagName, index }) => {
	return (
		<div className="group flex bg-white dark:bg-customgray dark:hover:bg-hovergray hover:bg-customlight hover:text-custom-gray p-1 items-center justify-between rounded w-full">
			<ContentEditable
				id={index}
				tagName={tagName}
				html={html}
				className="w-full p-1 lineBreak outline-custom-gray"
				disabled
			/>
		</div>
	)
}

export default SharedNewElement
