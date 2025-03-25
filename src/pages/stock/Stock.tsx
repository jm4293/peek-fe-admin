import { ChangeEvent, useRef } from 'react';
import { useStockMutation } from '@/hooks/stock';

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

  const clickHandler = (params: { event: React.MouseEvent<HTMLButtonElement, MouseEvent>; dataType: string }) => {
    const { event, dataType } = params;
    event.stopPropagation();

    if (inputRef.current) {
      dataTypeRef.current = dataType;
      inputRef.current.value = '';
      inputRef.current.click();
    }
  };

  return (
    <>
      <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={fileChangeHandler} accept=".xlsx" />
      <div className="flex flex-col gap-10">
        <button onClick={(event) => clickHandler({ event, dataType: 'kospi' })}>코스피</button>
        <button onClick={(event) => clickHandler({ event, dataType: 'kosdaq' })}>코스닥</button>
      </div>
    </>
  );
};
