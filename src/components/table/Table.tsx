import { ITable } from '@/types/interface/table';
import { Dispatch, SetStateAction } from 'react';
import { Pagination } from '@/components/table/Pagination';

interface IProps<T> {
  dataList: T[] | undefined;
  columnList: ITable[];
  total: number | undefined;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  onClick?: (data: T) => void;
}

export function Table<T extends { [key: string]: any }>(props: IProps<T>) {
  const { dataList, columnList, total = 0, page, setPage, onClick } = props;

  const clickHandler = (params: { event: React.MouseEvent<HTMLTableRowElement, MouseEvent>; data: T }) => {
    const { event, data } = params;

    event.stopPropagation();
    event.preventDefault();

    onClick && onClick(data);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {columnList.map((column, index) => (
              <th key={`table-thead-${index}`}>
                <p className="w-full">{column.title}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {total > 0 ? (
            dataList?.map((data: T, rowIndex) => (
              <tr key={`table-tbody-row-${rowIndex}`} onClick={(event) => clickHandler({ event, data })}>
                {columnList.map((_, columnIndex) => (
                  <td key={`table-tbody-column-${columnIndex}`}>
                    <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                      {data[columnList[columnIndex].key]}
                    </p>
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columnList.length} className="text-center">
                데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {!!total && <Pagination total={total} page={page} setPage={setPage} />}
    </>
  );
}
