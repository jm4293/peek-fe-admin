import { useMutation, useQueryClient } from '@tanstack/react-query';
import StockApi from '@/api/stock/stock.api';
import { useLoadingStore } from '@/store';

export const useStockMutation = () => {
  const queryClient = useQueryClient();
  const { stopLoading } = useLoadingStore();

  const uploadFileMutation = useMutation({
    mutationFn: (dto: { formData: FormData; dataType: string }) => StockApi.uploadFile(dto),
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ['stock-list'] });
    },
    onError: (error) => {
      console.error('File upload failed', error);
    },
    onSettled: () => {
      stopLoading();
    },
  });

  const deleteStockMutation = useMutation({
    mutationFn: () => StockApi.deleteStock(),
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ['stock-list'] });
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
