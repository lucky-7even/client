import Head from "next/head";

interface HeadMetaProps {
  title?: string;
  url?: string;
  image?: string;
  description?: string;
}

const HeadMeta = ({
  title = "빌려줄래",
  url = "localhost:3000",
  description = "빌려줄래",
  image,
}: HeadMetaProps) => {
  return (
    <Head>
      <title>{title && " | " + title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default HeadMeta;
