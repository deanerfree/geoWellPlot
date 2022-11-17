export const reducer = (state, action) => {
	switch (action.type) {
		case "SET_IN_DROP_ZONE":
			return { ...state, inDropZone: action.inDropZone }
		case "ADD_FILE_TO_LIST":
			action.files.id = action.index
			return { ...state, fileList: state.fileList.concat(action.files) }
		case "REMOVE_FILE_FROM_LIST":
			return {
				...state,
				fileList: state.fileList.filter((item) => {
					console.log("click")
					if (item.name !== action.index) {
						return state.fileList
					}
				}),
			}
	}
}
