import { useMutation } from '@tanstack/react-query';
import StockApi from '@/api/stock/stock.api';

export const useStockMutation = () => {
  const onUploadFileMutation = useMutation({
    mutationFn: (dto: { formData: FormData; dataType: string }) => StockApi.uploadFile(dto),
    onSuccess: () => {
      console.log('File uploaded successfully');
    },
    onError: (error) => {
      console.error('File upload failed', error);
    },
  });

  return {
    onUploadFileMutation,
  };
};
