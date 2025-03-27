import { useMutation } from '@tanstack/react-query';
import StockApi from '@/api/stock/stock.api';

export const useStockMutation = () => {
  const uploadFileMutation = useMutation({
    mutationFn: (dto: { formData: FormData; dataType: string }) => StockApi.uploadFile(dto),
    onSuccess: () => {
      console.log('File uploaded successfully');
    },
    onError: (error) => {
      console.error('File upload failed', error);
    },
  });

  const deleteStockMutation = useMutation({
    mutationFn: () => StockApi.deleteStock(),
    onSuccess: () => {
      console.log('Stock deleted successfully');
    },
    onError: (error) => {
      console.error('Stock deletion failed', error);
    },
  });

  return {
    uploadFileMutation,
    deleteStockMutation,
  };
};
