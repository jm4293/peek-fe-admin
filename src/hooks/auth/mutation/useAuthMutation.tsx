import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ILoginDto } from '@/types/dto';
import AuthApi from '@/api-url/auth/auth.api';

export const useAuthMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const onLoginMutation = useMutation({
    mutationFn: (dto: ILoginDto) => AuthApi.postLogin(dto),
    onSuccess: (res) => {
      navigate('/user');
    },
  });

  return {
    onLoginMutation,
  };
};
