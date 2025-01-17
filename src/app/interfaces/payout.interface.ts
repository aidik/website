import { PaginatedQueryParams } from './paginated-response.interface';

export interface Payout {
  url: string;
  datetime: string;
  amount: number;
  pool_fee: number;
}

export interface PayoutAddress {
  url: string;
  puzzle_hash: string;
  amount: number;
  transaction: string;
  confirmed_height: number;
  payout: string;
  farmer: string;
}

export type PayoutAddressQueryParams = {
  payout?: string;
  puzzle_hash?: string;
  farmer?: string;
} & PaginatedQueryParams;
