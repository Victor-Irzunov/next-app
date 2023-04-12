import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";

export const getStaticProps = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await response.json();
	if (!data) {
		return {
			notFound: true,
		}
	}
	return {
		props: { posts: data },
	}
};

const Posts = ({ posts }) => {
	return (
		<div className="container mx-auto px-5">
			<Head>
				<title>Posts</title>
			</Head>
			<Heading text="Posts list:" />
			<ul className="mt-6">
				{posts && posts.map(({ id, title }) => (
					<li key={id} className="text-white font-light text-xs mb-3">
						<Link href={`/posts/${id}`}>{id}. {title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;