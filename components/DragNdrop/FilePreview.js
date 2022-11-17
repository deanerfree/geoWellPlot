const FilePreview = ({ fileData, dispatch }) => {
	const fileList = fileData.fileList
	// console.log(fileList)

	const handleRemoveFile = (index) => {
		dispatch({ type: "REMOVE_FILE_FROM_LIST", index })
	}
	return (
		<div className='styles.fileList'>
			<div className='fileContainer'>
				<ol role='list'>
					{fileList.length === 0 ? (
						<p>No Data</p>
					) : (
						fileList.map((file, index) => {
							if (!file.id) {
								file.id = index
							}
							if (file.id === index) {
								file.id = file.id + 1
							}
							return (
								<li key={index} className='fileList' role='listitem'>
									<span className='fileName'>{file.name}</span>
									<button
										className='deleteButton'
										role='delete'
										onClick={() => handleRemoveFile(file.name)}>
										X
									</button>
								</li>
							)
						})
					)}
				</ol>
			</div>
		</div>
	)
}

export default FilePreview
