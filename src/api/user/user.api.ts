import { AxiosConfig } from 'common/axios';
import { IUserList } from '@/types/res';

class UserApi extends AxiosConfig {
  private readonly _baseURL = '/user';

  async getUserList(pageParam: number) {
    return await this.get<IUserList, null>({ url: `${this._baseURL}?pageParam=${pageParam}` });
  }
}

export default new UserApi();
