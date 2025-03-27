import { Dispatch, SetStateAction } from 'react';
import { PAGINATION_COUNT } from '@/constant/pagination';

interface IProps {
  total: number | undefined;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = (props: IProps) => {
  const { total = 0, page, setPage } = props;

  const totalPages = Math.ceil(total / PAGINATION_COUNT);
  const maxPageNumbersToShow = PAGINATION_COUNT;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const startPage = Math.max(1, page - Math.floor(maxPageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  return (
    <div>
      <button onClick={() => handlePageChange(1)} disabled={page === 1}>
        &laquo;
      </button>
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        &lsaquo;
      </button>
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
        <button key={index} onClick={() => handlePageChange(startPage + index)} disabled={page === startPage + index}>
          {startPage + index}
        </button>
      ))}
      <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
        &rsaquo;
      </button>
      <button onClick={() => handlePageChange(totalPages)} disabled={page === totalPages}>
        &raquo;
      </button>
    </div>
  );
};
