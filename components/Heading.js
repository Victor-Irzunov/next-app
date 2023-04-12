
const Heading = ({ tag, text, size }) => {
	const Tag = tag || 'h1'
	const Size = size || 'text-4xl'

	return (
		<>
			<Tag className={`text-[#f03226] pt-20 ${Size}`}>{text}</Tag>
		</>
	)
}
export default Heading