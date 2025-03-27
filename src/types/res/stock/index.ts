import { IStock } from '@/types/model';

export interface IStockListResponse {
  stocks: IStock[];
  total: number;
}
