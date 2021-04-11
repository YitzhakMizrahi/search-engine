import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate-next';

function PaginationButtons({ results }) {
  const router = useRouter();

  // const startIndex = Number(router.query.start) || 0;
  const totalResults = Number(results.queries.nextPage[0].totalResults);

  const handlePageClick = (data) => {
    const selected = data.selected * 10;
    router.push(`/search?term=${router.query.term}&start=${selected}`);
  };

  return (
    <div className="flex justify-between max-w-lg text-blue-700 mt-10 mb-10">
      <div className="chevron">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
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
  );
}

export default PaginationButtons;
