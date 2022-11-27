import { useReducer } from "react"
import { reducer } from "../../reducer"
import { prepareFile } from "../../helper/helperFunctions"
import FilePreview from "./FilePreview"
import styles from "./uploadFile.module.css"

const UploadFile = () => {
	const [data, dispatch] = useReducer(reducer, {
		inDropZone: false,
		fileList: [],
	})

	const handleDragEnter = (e) => {
		e.preventDefault()
		e.stopPropagation()
		dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true })
	}

	const handleDragLeave = (e) => {
		e.preventDefault()
		e.stopPropagation()
		dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false })
	}

	const handleDrop = (e) => {
		e.preventDefault()
		e.stopPropagation()

		let files = [...e.dataTransfer.files]

		if (files && files.length > 0) {
			const existingFiles = data.fileList.map((file, index) => {
				file.name
			})

			files = files.filter((file) => !existingFiles.includes(file.name))

			dispatch({ type: "ADD_FILE_TO_LIST", files })

			dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false })
		}
	}
	const handleFileSelect = (e) => {
		let files = [...e.target.files]

		if (files && files.length > 0) {
			const existingFiles = data.fileList.map((file, index) => {
				file.name
			})
			files = files.filter((file) => !existingFiles.includes(file.name))
			dispatch({ type: "ADD_FILE_TO_LIST", files })
		}
	}
	const handleDragOver = (e) => {
		e.preventDefault()
		e.stopPropagation()
		e.dataTransfer.dropEffect = "copy"
		dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true })
	}

	return (
		<>
			<div
				className={styles.dropzone}
				onDragEnter={(e) => handleDragEnter(e)}
				onDragLeave={(e) => handleDragLeave(e)}
				onDrop={(e) => handleDrop(e)}
				onDragOver={(e) => handleDragOver(e)}>
				<div className={styles.uploadImageHolder}>
					<div>Upload LAS file</div>
				</div>
				<div className={styles.dropBox}>
					<h3>Drag and drop here</h3>
					<input
						id='fileSelect'
						type='file'
						accept='application/vnd.las'
						multiple
						onChange={(e) => handleFileSelect(e)}
					/>
					<label htmlFor='fileSelect'>You can select multiple files</label>
				</div>
			</div>
			<FilePreview fileData={data} dispatch={dispatch} />
			<button onClick={() => prepareFile(data)}>Submit Files</button>
		</>
	)
}

export default UploadFile
