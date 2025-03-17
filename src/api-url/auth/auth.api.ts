import { AxiosConfig } from '@/common/axios-config';
import { ILoginRes } from '@/types/res';
import { ILoginDto } from '@/types/dto/auth';

class AuthApi extends AxiosConfig {
  private readonly _baseURL = '/auth';

  async postLogin(dto: ILoginDto) {
    return await this.post<ILoginRes, ILoginDto>({ url: `${this._baseURL}/login`, data: dto });
  }

  async postLogout() {
    return await this.post<{}, {}>({ url: `${this._baseURL}/logout`, data: {} });
  }
}

export default new AuthApi();
