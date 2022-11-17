import React, { useState, useRef, useEffect } from "react"
import Chart from "./Chart"
const SetChartData = ({ wellInformation, wellLogData, chartUnits }) => {
	const [displayGraph, setDisplayGraph] = useState(false)
	const [xAxisValues, setXaxisValues] = useState()
	const [yAxisValues, setYaxisValues] = useState()
	const [yAxis2Values, setYaxis2Values] = useState()
	const [chartData, setChartData] = useState({})

	// console.log(Object.keys(wellLogData))
	// console.log(wellLogData)
	const formRef = useRef()

	const setXValues = (e) => {
		setXaxisValues(wellLogData[e.target.value])
	}
	const setYValues = (e) => {
		setYaxisValues(wellLogData[e.target.value])
	}
	const setY2Values = (e) => {
		setYaxis2Values(wellLogData[e.target.value])
	}
	useEffect(() => {}, [xAxisValues, yAxisValues, yAxis2Values])

	const handleSubmit = (e) => {
		e.preventDefault()
		setChartData({
			xAxis: xAxisValues,
			yAxis: yAxisValues,
			y2Axis: yAxis2Values,
		})
		setDisplayGraph(true)
	}
	console.log(chartData)
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='dataSelection'>
					<label htmlFor='x-axis'>Set X-Axis</label>
					<select id='x-axis' onChange={(e) => setXValues(e)} ref={formRef}>
						<option value={null}>--Please select an option--</option>
						{Object.keys(wellLogData).map((item, index) => {
							return (
								<option key={index} value={item}>
									{item}
								</option>
							)
						})}
					</select>
					<label htmlFor='y-axis'>Set Y-Axis</label>
					<select id='y-axis' onChange={(e) => setYValues(e)}>
						<option value={null}>--Please select an option--</option>
						{Object.keys(wellLogData).map((item, index) => {
							return (
								<option key={index} value={item}>
									{item}
								</option>
							)
						})}
					</select>
					<label htmlFor='y-axis2'>Set second Y-Axis</label>
					<select id='y-axis2' onChange={(e) => setY2Values(e)}>
						<option value={null}>--Please select an option--</option>
						{Object.keys(wellLogData).map((item, index) => {
							return (
								<option key={index} value={item}>
									{item}
								</option>
							)
						})}
					</select>
				</div>
				<button type='submit'>Submit</button>
			</form>
			<div>
				{displayGraph ? (
					<Chart wellLogData={chartData} wellInformation={wellInformation} />
				) : null}
			</div>
		</div>
	)
}

export default SetChartData
