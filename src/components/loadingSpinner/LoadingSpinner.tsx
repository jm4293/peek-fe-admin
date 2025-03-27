import { useLoadingStore } from '@/store';
import { createPortal } from 'react-dom';

export const LoadingSpinner = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);

  if (!isLoading) return null;

  return createPortal(
    <div className="loading-spinner-overlay">
      <div className="loading-spinner" />
    </div>,
    document.getElementById('loading-root')!,
  );
};
