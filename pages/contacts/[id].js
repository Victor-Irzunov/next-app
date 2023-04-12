import ContactInfo from "@component/components/ContactInfo"
import Heading from "@component/components/Heading"
import Head from "next/head"

// SSR
export const getServerSideProps = async (context) => {
	// console.log('context:', context)
	const { id } = context.params
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
	const data = await res.json()
	if (!data) {
		return {
			notFound: true,
		}
	}
	return {
		props: {
			contact: data
		}
	}
}


const Contact = ({ contact }) => {
	return (
		<div className="flex h-screen flex-col items-start justify-start ">
			<div className="container mx-auto px-5">
				<Head>
					<title>
						My app page Contact
					</title>
				</Head>
				<Heading text='Contact' tag='h4' />

				<ContactInfo contact={contact} />
			</div>

		</div>
	)
}
export default Contact