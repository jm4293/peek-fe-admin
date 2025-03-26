interface IProps {
  rowCount: number;
  columnCount: number;
}

export const Table = (props: IProps) => {
  const { rowCount, columnCount } = props;

  return (
    <table>
      <thead>
        <tr>
          {Array.from({ length: columnCount }, (_, index) => (
            <th key={`table-thead-${index}`}>
              <p className="w-full">Header {index + 1}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rowCount }, (_, rowIndex) => (
          <tr key={`table-tbody-row-${rowIndex}`}>
            {Array.from({ length: columnCount }, (_, columnIndex) => (
              <td key={`table-tbody-column-${columnIndex}`}>
                Row {rowIndex + 1}, Cell {columnIndex + 1}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
