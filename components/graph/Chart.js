import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

const Chart = ({ wellInformation, wellLogData, chartUnits }) => {
	const { COMP, RIG, WELL } = wellInformation
	const { xAxis, yAxis, y2Axis } = wellLogData
	// const {} = chartUnits

	// console.log(dept)
	let maxMin = {}
	maxMin = { min: xAxis[0] - 100, max: xAxis[-1] + 100 }
	const options = {
		chart: {
			zoomType: "xy",
		},
		title: {
			text: `${WELL.value}`,
			align: "left",
		},
		subtitle: {
			text: `Rig: ${
				RIG && RIG.value !== undefined ? RIG.value : "Bonanza 7"
			}\n Client: ${
				COMP && COMP.value !== undefined ? COMP.value : "Cardinal"
			}`,
			align: "left",
		},

		xAxis: [
			{
				gridLineWidth: 1,
				categories: xAxis ? [...xAxis] : [1, 2, 34, 56, 2100],
				crosshair: true,
				allowDecimals: false,
				tickInterval: 100,
			},
		],
		yAxis: [
			// Primary yAxis
			{
				// Tertiary yAxis
				gridLineWidth: 0,
				title: {
					text: "Vertical Depth",
					style: {
						color: Highcharts.getOptions().colors[1],
					},
				},
				labels: {
					format: `{value} m`,
					style: {
						color: Highcharts.getOptions().colors[1],
					},
				},
				opposite: true,
				reversed: true,
			},
			{
				// Secondary yAxis
				gridLineWidth: 0,
				title: {
					text: "Gamma",
					style: {
						color: Highcharts.getOptions().colors[0],
					},
				},
				labels: {
					format: "{value} API",
					style: {
						color: Highcharts.getOptions().colors[0],
					},
				},
			},

			{
				labels: {
					format: `{value}m`,
					style: {
						color: Highcharts.getOptions().colors[2],
					},
				},
				title: {
					text: "Vertical Depth",
					style: {
						color: Highcharts.getOptions().colors[2],
					},
				},

				opposite: true,
				reversed: true,
				visible: false,
			},
		],
		tooltip: {
			shared: true,
		},
		legend: {
			layout: "vertical",
			align: "left",
			x: 80,
			verticalAlign: "top",
			y: 55,
			floating: true,
			backgroundColor:
				Highcharts.defaultOptions.legend.backgroundColor || // theme
				"rgba(255,255,255,0.25)",
		},
		series: [
			{
				name: "Gamma",
				type: "spline",
				yAxis: 1,
				data: yAxis ? [...yAxis] : [1, 2, 34, 56, 2100],
				tooltip: {
					valueSuffix: " API",
				},
			},
			{
				name: "Vertical Depth",
				type: "spline",
				yAxis: 2,
				data: y2Axis ? [...y2Axis] : [1, 2, 34, 56, 2100],
				marker: {
					enabled: false,
				},
				dashStyle: "shortdot",
				tooltip: {
					valueSuffix: " m",
				},
			},
			// {
			// 	name: "Vertical Depth1",
			// 	type: "spline",
			// 	data: y2Axis ? [...y2Axis] : [1, 2, 34, 56, 2100],
			// 	tooltip: {
			// 		valueSuffix: " m",
			// 	},
			// },
		],
		responsive: {
			rules: [
				{
					condition: {
						maxWidth: 500,
					},
					chartOptions: {
						legend: {
							floating: false,
							layout: "horizontal",
							align: "center",
							verticalAlign: "bottom",
							x: 0,
							y: 0,
						},
						yAxis: [
							{
								labels: {
									align: "right",
									x: 0,
									y: -6,
								},
								showLastLabel: false,
							},
							{
								labels: {
									align: "left",
									x: 0,
									y: -6,
								},
								showLastLabel: false,
							},
							{
								// visible: true,
							},
						],
					},
				},
			],
		},
	}
	return (
		<>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</>
	)
}

export default Chart
