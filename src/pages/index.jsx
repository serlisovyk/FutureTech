import { Head } from "minista/head";

export const metadata = { title: "FutureTech" };

export default function HomePage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="FutureTech is a blog about technology, the future of science and the people building it."
        />
      </Head>
      <h1>FutureTech</h1>
      <p>Home page placeholder.</p>
    </>
  );
}
