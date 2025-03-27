import { ChangeEvent, useRef } from 'react';
import { useStockMutation } from '@/hooks/stock';
import { Button } from '@/components/button';
import { StockTable } from '@/pages/stock/_components/stockTable';
import { useLoadingStore } from '@/store';

export const Stock = () => {
  const uploadRef = useRef<HTMLInputElement | null>(null);
  const dataTypeRef = useRef<string>('');

  const { startLoading, stopLoading } = useLoadingStore();

  const { uploadFileMutation, deleteStockMutation } = useStockMutation();

  const uploadHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const formData = new FormData();
      const dataType = dataTypeRef.current;

      formData.append('file', file);

      startLoading();

      uploadFileMutation.mutate({ formData, dataType });
    }
  };

  const uploadClickHandler = (params: { dataType: string }) => {
    const { dataType } = params;

    if (uploadRef.current) {
      dataTypeRef.current = dataType;
      uploadRef.current.value = '';
      uploadRef.current.click();
    }
  };

  const deleteClickHandler = () => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      deleteStockMutation.mutate();
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-8 gap-4">
        <input type="file" ref={uploadRef} style={{ display: 'none' }} onChange={uploadHandler} accept=".xlsx" />
        <Button title="코스피" color="gray" onClick={() => uploadClickHandler({ dataType: 'kospi' })} />
        <Button title="코스닥" color="gray" onClick={() => uploadClickHandler({ dataType: 'kosdaq' })} />
        <Button title="종목 모두 삭제" color="red" onClick={deleteClickHandler} className="col-start-8" />
      </div>

      <StockTable />
    </div>
  );
};
