import { AxiosConfig } from 'common/axios';
import { IBoardDetailRes, IBoardListRes } from '@/types/res';

class BoardApi extends AxiosConfig {
  private readonly _baseURL = '/board';

  async getBoardList(pageParam: number) {
    return await this.get<IBoardListRes, null>({ url: `${this._baseURL}?pageParam=${pageParam}` });
  }

  async getBoardDetail(boardSeq: number) {
    return await this.get<IBoardDetailRes, null>({ url: `${this._baseURL}/detail/${boardSeq}` });
  }
}

export default new BoardApi();
