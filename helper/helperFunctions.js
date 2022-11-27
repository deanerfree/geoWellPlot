import FormData from "form-data"

export const prepareFile = async (lasFiles) => {
	const files = new FormData()
	const apiAddress = "http://localhost:8000/json/"

	lasFiles.fileList.map((file, index) => {
		files.append(`file`, file)
	})
	const data = await fetch(apiAddress, {
		method: "POST",

		// headers: {
		// 	"Content-Type": "application/vnd.las",
		// },
		body: files,
	})
		.then((res) => {
			return res.json()
		})
		.catch((error) => console.error(error))
	return data
}
