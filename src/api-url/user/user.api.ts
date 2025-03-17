import { AxiosConfig } from '@/common/axios-config';
import { IUserList } from '@/types/res/user';

class UserApi extends AxiosConfig {
  private readonly _baseURL = '/user';

  async getUserList(pageParam: number) {
    return await this.get<IUserList, {}>({ url: `${this._baseURL}?pageParam=${pageParam}` });
  }
}

export default new UserApi();
