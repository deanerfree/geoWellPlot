import Link from "next/link"
import React from "react"

const Introduction = () => {
	return (
		<div>
			<div>
				<h2>Well Log Interpretation</h2>
			</div>
			<br />
			<div>
				<p>
					This app was setup to help monitor, improve efficency of well log
					interpretation, for the development of Horizontal wells
				</p>
				<button>
					<Link href='/project'>Get Started</Link>
				</button>
			</div>
		</div>
	)
}

export default Introduction
