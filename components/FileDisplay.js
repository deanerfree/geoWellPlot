import { useEffect, useState } from "react"
import SetChartData from "./graph/SetChartData"

const FileDisplay = () => {
	const [wellInformation, setWellInformation] = useState(null)
	const [chartUnits, setChartUnits] = useState(null)
	const [wellLogData, setWellLogData] = useState()
	const [pageLoaded, setPageLoaded] = useState(false)

	const callData = async () => {
		const apiAddress = "http://localhost:8000/json/"
		const data = await fetch(apiAddress).then((res) => {
			return res.json()
		})
		// console.log(data)
		setWellInformation(data.lasData.well)
		setChartUnits(data.lasData.curve)
		setWellLogData(data.lasData.data)
	}
	useEffect(() => {
		callData()
	}, [])
	useEffect(() => {
		if (wellInformation !== null) {
			setPageLoaded(true)
		}
	}, [wellInformation])

	return (
		<>
			{pageLoaded ? (
				<div>
					<h2>{wellInformation.COMP.value}</h2>
					<SetChartData
						wellInformation={wellInformation}
						wellLogData={wellLogData}
						chartUnits={chartUnits}
					/>
				</div>
			) : (
				<div>Loading</div>
			)}
		</>
	)
}

export default FileDisplay
