import { useRouter } from 'next/router';
import Highlighter from 'react-highlight-words';
import { SearchIcon } from '@heroicons/react/outline';
import SearchButtons from './SearchButtons';

function AutoSearchResults({ results, search, input }) {
  const router = useRouter();

  return (
    <div className="w-full rounded-3xl focus-within:shadow-lg rounded-t-none border border-gray-200 px-5 py-3 max-w-md shadow-lg sm:max-w-xl lg:max-w-2xl items-center cursor-pointer">
      {results.data?.items?.map((result) => (
        <div key={result.link} className="mb-5 hover:bg-gray-50">
          <div className="group flex items-center">
            <SearchIcon className="h-4 mr-2" />
            <a onMouseDown={() => router.push(`/search?term=${result.title}`)}>
              <Highlighter
                highlightStyle={{
                  fontWeight: 'bold',
                  backgroundColor: 'transparent',
                  wordBreak: 'break-word',
                }}
                searchWords={[input]}
                autoEscape={true}
                textToHighlight={result.title}
              />
            </a>
          </div>
        </div>
      ))}
      <SearchButtons search={search} />
    </div>
  );
}

export default AutoSearchResults;
