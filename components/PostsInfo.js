import Heading from "./Heading"

const PostInfo = ({ post }) => {
  const { title, body } = post || {}

  if (!post) {
    return <Heading tag="h3" text="Empty post" />
  }

  return (
    <div className="container mx-auto px-5">
      <Heading tag="h3" text={title} />
      <p className="text-white">{body}</p>
    </div>
  )
}

export default PostInfo;