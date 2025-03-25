import { Button } from '@/components/button';
import { useState } from 'react';
import { useAuthMutation } from '@/hooks/auth';
import { Input } from '@/components/input';
import { Text } from '@/components/text';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState<string | null>(null);

  const { onLoginMutation } = useAuthMutation();

  const keyDownHandler = () => {
    loginHandler();
  };

  const loginHandler = () => {
    if (!email || !password) {
      alert('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    onLoginMutation.mutate(
      { email, password },
      {
        onError: (error: any) => {
          const { message } = error.response.data;

          setErrorMessages(message);
        },
      },
    );
  };

  return (
    <div className="absolute w-1/3 min-w-[320px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-full flex flex-col gap-10">
        <Input
          type="email"
          title="이메일"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="이메일 주소"
        />
        <div className="flex flex-col gap-2">
          <Input
            type="password"
            title="비밀번호"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={keyDownHandler}
            placeholder="비밀번호"
          />

          {errorMessages && <Text value={errorMessages} color="#F87171" />}
        </div>
        <Button text="로그인" onClick={loginHandler} />
      </div>
    </div>
  );
};
