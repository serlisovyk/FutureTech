import { Head } from "minista/head";

export const metadata = { title: "News | FutureTech" };

export default function NewsPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The latest technology news and articles from FutureTech."
        />
      </Head>
      <h1>News</h1>
      <p>News page placeholder.</p>
    </>
  );
}
