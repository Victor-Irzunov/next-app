import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"


const navigation = [
	{ id: 1, title: 'Home', path: '/' },
	{ id: 2, title: 'Contacts', path: '/contacts' },
	// { id: 3, title: 'Contact', path: '/contacts/contact' },
	{ id: 2, title: 'Posts', path: '/posts' },
	// { id: 3, title: 'Post', path: '/posts/post' },
]

const NavBar = () => {
	const { pathname } = useRouter()

	return (
		<nav
			className=" py-6 backdrop-blur-xl
		 dark:bg-zinc-800/30 w-full
			  dark:from-inherit z-50
			
			  "
		>
			<div className="container mx-auto px-5 flex justify-between 
			items-center">
				<div className="">
					<Image src='/next.svg' width='100' height='100' alt='logo' className="invert" />
				</div>

				<div className="text-white">
					{navigation.map(({ id, title, path }) => {
						return (
							<Link key={id} href={path} className={`cursor-pointer text-sm ml-4 ${pathname === path ? 'text-red-500' : null}`}>
								{title}
							</Link>
						)
					})}
				</div>
			</div>
		</nav>

	)
}

export default NavBar
