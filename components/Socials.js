import Head from "next/head";

const Socials = ({ socials }) => {

  if (!socials) {
    return null;
  }

  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
    </Head>
    <ul className="flex ">
      {socials && socials.map(({ id, icon, path }) => (
        <li key={id} className="ml-2">
          <a href={path} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${icon} text-white`} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
    </>
  );
}

export default Socials;