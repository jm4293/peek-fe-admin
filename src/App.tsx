import './App.css';
import dayjs from 'dayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from '@/router/Router';
import { LoadingSpinner } from '@/components/loadingSpinner/LoadingSpinner';

dayjs.locale('ko');

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
      <LoadingSpinner />
    </>
  );
}

export default App;
