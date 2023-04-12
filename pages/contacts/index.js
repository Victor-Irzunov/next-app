import Heading from "@component/components/Heading"
import Head from "next/head"
import Link from "next/link"

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()
	if (!data) {
		return {
			notFound: true,
		}
	}
	return {
		props: {
			users: data
		}
	}
}

const Contacts = ({ users }) => {
	
	return (
		<main className={`min-h-screen`}>
			<div className="container mx-auto px-5">
				<Head>
					<title>
						Contacts Page
					</title>
				</Head>
				<Heading text='Contacts' />

				<ul>
					{
						users && users.map(({ id, name }) => {
							return (
								<li key={id} className="text-white mb-2">
									<Link href={`/contacts/${id}`}>
										{name}
									</Link>
								</li>
							)
						})
					}
				</ul>
			</div>
		</main>
	)
}
export default Contacts