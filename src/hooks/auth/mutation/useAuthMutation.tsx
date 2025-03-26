import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ILoginDto } from '@/types/dto';
import AuthApi from '@/api/auth/auth.api';

export const useAuthMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: (dto: ILoginDto) => AuthApi.postLogin(dto),
    onSuccess: (res) => {
      const { accessToken } = res.data.data;

      sessionStorage.setItem('accessToken', accessToken);

      navigate('/user');
    },
    onError: (error: any) => {
      console.log('error', error);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => AuthApi.postLogout(),
    onSuccess: () => {
      queryClient.clear();
      localStorage.clear();
      sessionStorage.clear();

      navigate('/auth/login');
    },
  });

  return {
    loginMutation,
    logoutMutation,
  };
};
