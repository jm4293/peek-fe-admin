import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { useState } from 'react';
import { useAuthMutation } from '@/hooks/auth';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { onLoginMutation } = useAuthMutation();

  const onLoginHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();

    onLoginMutation.mutate({ email, password });
  };

  return (
    <>
      <div className="w-full flex flex-col mb-16">
        <Input
          type="email"
          title="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소"
        />
        <Input
          type="password"
          title="비밀번호"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onKeyDown={(event) => {}}
          placeholder="비밀번호"
        />
      </div>

      <div className="mb-7">
        <Button text="로그인" onClick={(event) => onLoginHandler(event)} />
      </div>
    </>
  );
};
