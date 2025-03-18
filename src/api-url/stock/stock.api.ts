import { AxiosConfig } from '@/common/axios-config';

class StockApi extends AxiosConfig {
  private readonly _baseURL = '/stock';

  async uploadFile(dto: { formData: FormData; dataType: string }) {
    const { formData, dataType } = dto;

    return await this.post<null, FormData>({
      url: `${this._baseURL}/upload/${dataType}`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}

export default new StockApi();
