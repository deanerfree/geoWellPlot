export const options = {
	chart: {
		zoomType: "xy",
	},
	title: {
		text: `${WELL.value}`,
		align: "left",
	},
	subtitle: {
		text: `Rig: ${RIG.value}\n Client: ${COMP.value}`,
		align: "left",
	},

	xAxis: [
		{
			categories: [...dept],
			crosshair: true,
		},
	],
	yAxis: [
		{
			// Primary yAxis
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
			// Tertiary yAxis
			gridLineWidth: 0,
			title: {
				text: "Vertical Depth1",
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
			data: [...mg1c],
			tooltip: {
				valueSuffix: " API",
			},
		},
		{
			name: "Sea-Level Pressure",
			type: "spline",
			yAxis: 2,
			data: [...dver],
			marker: {
				enabled: false,
			},
			dashStyle: "shortdot",
			tooltip: {
				valueSuffix: " mb",
			},
		},
		{
			name: "Vertical Depth",
			type: "spline",
			data: [...dver],
			tooltip: {
				valueSuffix: " m",
			},
		},
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
							visible: false,
						},
					],
				},
			},
		],
	},
}
