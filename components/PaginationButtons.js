import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactPaginate from 'react-paginate-next';
import PaginationGoogleIndicator from './PaginationGoogleIndicator';

function PaginationButtons({ results }) {
  const router = useRouter();
  const [pageNumber, setpageNumber] = useState(null);

  const totalResults = Number(results.queries.nextPage[0].totalResults);

  const handlePageClick = (data) => {
    const selected = data.selected * 10;
    setpageNumber(selected);
    console.log(pageNumber);
    router.push(`/search?term=${router.query.term}&start=${selected}`);
  };

  return (
    <>
      <PaginationGoogleIndicator pageNumber={pageNumber / 10} />

      <div
        className={`flex justify-center max-w-lg text-blue-700 mt-[1rem] mt-[0.5rem] mb-[3rem] ${
          pageNumber >= 70 ? 'text-sm ml-[-0.10rem] sm:ml-[-0.10rem]' : 'text-md'
        } ${
          pageNumber === null || pageNumber === 0
            ? 'ml-[-0.55rem] sm:ml-[-0.25rem]'
            : 'ml-[-1.5rem] sm:ml-[-0.8rem]'
        }  `}
      >
        <div className="chevron ">
          <ReactPaginate
            previousLabel={
              pageNumber > 0 && <ChevronLeftIcon className="mt-[0.35rem] h-4" />
            }
            nextLabel={<ChevronRightIcon className="mt-[0.35rem] h-4" />}
            breakLabel={''}
            breakClassName={'break-me'}
            pageCount={totalResults / 10}
            marginPagesDisplayed={0}
            pageRangeDisplayed={9}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </>
  );
}

export default PaginationButtons;
