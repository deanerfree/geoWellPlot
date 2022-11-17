// import Las from "las-js"
import wellio from "wellio"
// const wellio =require("wellio")

// import nc from "next-connect"
import lasFile from "../../data/mockdata3.las"

// const file = new Las(lasFile)
const file = wellio.las2json(lasFile)
console.log("test", file)
const readData = async (file) => {
	try {
		const readData = await file
		return readData
	} catch (error) {
		console.error(error)
	}
}

const handler = (req, res) => {
	const finalData = readData(file)
	// const finalData = { title: "hello" }
	res.status(200).send(finalData)
}

export default handler
