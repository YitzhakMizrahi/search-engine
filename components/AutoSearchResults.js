import { useRouter } from 'next/router';
import { SearchIcon } from '@heroicons/react/outline';
import SearchButtons from './SearchButtons';

function AutoSearchResults({ results, search }) {
  const router = useRouter();

  return (
    <div className="w-full rounded-3xl focus-within:shadow-lg rounded-t-none border border-gray-200 px-5 py-3 max-w-md shadow-lg sm:max-w-xl lg:max-w-2xl items-center">
      {results.data?.items?.map((result) => (
        <div key={result.link} className="mb-5 hover:bg-gray-50">
          <div className="group flex items-center">
            <SearchIcon className="h-4 mr-2" />
            <a onClick={() => router.push(`/search?term=${result.title}`)}>
              <h2 className="">{result.title}</h2>
            </a>
          </div>
        </div>
      ))}
      <SearchButtons search={search} />
    </div>
  );
}

export default AutoSearchResults;
