import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import { API_KEY, CONTEXT_KEY, USE_DUMMY_DATA } from '../keys';
import Response from '../Response';

function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SearchResults results={results} />
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = USE_DUMMY_DATA;
  const startIndex = context.query.start || '0';

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  // Pass back the results
  return {
    props: {
      results: data,
    },
  };
}
