import { ChangeEvent, useRef } from 'react';
import { useStockMutation } from '@/hooks/stock';

export const Stock = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { onUploadFileMutation } = useStockMutation();

  const onFileChangeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const formData = new FormData();

      formData.append('file', file);

      await onFileUploadHandler(formData);
    }
  };

  const onFileUploadHandler = async (formData: FormData) => {
    onUploadFileMutation.mutate(formData);
  };

  const onClickHandler = (params: { event: React.MouseEvent<HTMLButtonElement, MouseEvent> }) => {
    const { event } = params;
    event.stopPropagation();

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    inputRef.current?.click();
  };

  return (
    <>
      <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={onFileChangeHandler} accept=".xlsx" />
      <button onClick={(event) => onClickHandler({ event })}>종목</button>
    </>
  );
};
