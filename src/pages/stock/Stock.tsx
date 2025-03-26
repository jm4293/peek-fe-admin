import { ChangeEvent, useRef } from 'react';
import { useStockMutation } from '@/hooks/stock';
import { Button } from '@/components/button';
import { Table } from '@/components/table';

export const Stock = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dataTypeRef = useRef<string>('');

  const { onUploadFileMutation } = useStockMutation();

  const fileChangeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const formData = new FormData();
      const dataType = dataTypeRef.current;

      formData.append('file', file);

      onUploadFileMutation.mutate({ formData, dataType });
    }
  };

  const clickHandler = (params: { dataType: string }) => {
    const { dataType } = params;

    if (inputRef.current) {
      dataTypeRef.current = dataType;
      inputRef.current.value = '';
      inputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={fileChangeHandler} accept=".xlsx" />
      <div className="flex gap-10">
        <Button title="코스피" color="gray" onClick={() => clickHandler({ dataType: 'kospi' })} />
        <Button title="코스닥" color="gray" onClick={() => clickHandler({ dataType: 'kosdaq' })} />
      </div>

      <Table rowCount={100} columnCount={5} />
    </div>
  );
};
