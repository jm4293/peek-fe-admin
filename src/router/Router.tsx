import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/auth';
import { Layout } from '@/common/layout';
import { NotFound } from '@/components/not-found';
import { UserList } from '@/pages/user';

export const Router = () => {
  // const _BASE_URL = process.env.PUBLIC_URL;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/user" element={<UserList />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
