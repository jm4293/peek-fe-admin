import { AxiosConfig } from 'common/axios';
import { IStockDetailDto, IStockListDto } from '@/types/dto';
import { IStockListResponse } from '@/types/res/stock';

class StockApi extends AxiosConfig {
  private readonly _baseURL = '/stock';

  async getStockList(dto: IStockListDto) {
    return await this.get<IStockListResponse, IStockListDto>({ url: `${this._baseURL}`, params: dto });
  }

  async getStockDetail(dto: IStockDetailDto) {
    const { code } = dto;

    return await this.get({ url: `${this._baseURL}/${code}` });
  }

  async uploadFile(dto: { formData: FormData; dataType: string }) {
    const { formData, dataType } = dto;

    return await this.post<null, FormData>({
      url: `${this._baseURL}/upload/${dataType}`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  async deleteStock() {
    return await this.delete({ url: `${this._baseURL}` });
  }
}

export default new StockApi();
