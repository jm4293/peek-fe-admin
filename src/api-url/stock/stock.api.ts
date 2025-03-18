import { AxiosConfig } from '@/common/axios-config';

class StockApi extends AxiosConfig {
  private readonly _baseURL = '/stock';

  async uploadFile(dto: FormData) {
    return await this.post<null, FormData>({
      url: `${this._baseURL}/upload`,
      data: dto,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}

export default new StockApi();
