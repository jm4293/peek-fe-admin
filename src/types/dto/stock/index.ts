import { StockKindEnum } from '@/constant/enum';
import { IPaginationDto } from '@/types/dto';

export interface IStockListDto extends IPaginationDto {
  kind?: StockKindEnum;
  text?: string;
}

export interface IStockDetailDto {
  code: number;
}
