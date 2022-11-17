import Head from "next/head"
import Introduction from "../components/Introduction"
import styles from "../styles/Home.module.css"

export default function Home({ data }) {
	// console.log({ data })
	return (
		<div className={styles.container}>
			<Head>
				<title>Well Log Data Display</title>
				<meta name='description' content='Well log data' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Introduction />
		</div>
	)
}

// export async function getStaticProps() {
// 	// fetch the blog posts from the mock API

// 	const apiAddress = "http://127.0.0.1:8000/json/"
// 	const data = await fetch(apiAddress).then((res) => {
// 		return res.json()
// 	})

// 	if (!data) {
// 		return {
// 			redirect: {
// 				destination: "/",
// 				permanent: false,
// 			},
// 		}
// 	}
// 	return {
// 		props: { data: data }, // props will be passed to the page
// 	}
// }
