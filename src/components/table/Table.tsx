import { ITable } from '@/types/interface/table';
import { Dispatch, SetStateAction } from 'react';
import { Pagination } from '@/components/table/Pagination';

interface IProps<T> {
  dataList: T[] | undefined;
  columnList: ITable[];
  total: number | undefined;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export function Table<T extends { [key: string]: any }>(props: IProps<T>) {
  const { dataList, columnList, total, page, setPage } = props;

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
          {dataList?.map((data: T, rowIndex) => (
            <tr key={`table-tbody-row-${rowIndex}`}>
              {columnList.map((_, columnIndex) => (
                <td key={`table-tbody-column-${columnIndex}`}>{data[columnList[columnIndex].key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination total={total} page={page} setPage={setPage} />
    </>
  );
}
