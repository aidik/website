import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CoinRecord, CoinRecordQueryParams } from '../../interfaces/coin-record.interface';
import { PaginatedQueryParams, PaginatedResponse } from '../../interfaces/paginated-response.interface';
import { Payout, PayoutAddress, PayoutAddressQueryParams } from '../../interfaces/payout.interface';

@Injectable({ providedIn: 'root' })
export class PayoutService {
  constructor(private http: HttpClient) {}

  getPayouts(params: PaginatedQueryParams): Observable<PaginatedResponse<Payout>> {
    return this.http.get<PaginatedResponse<Payout>>(`${environment.apiRoot}/payout/`, { params });
  }

  getPayoutAddresses(params: PayoutAddressQueryParams): Observable<PaginatedResponse<PayoutAddress>> {
    return this.http.get<PaginatedResponse<PayoutAddress>>(`${environment.apiRoot}/payout_address/`, { params });
  }
}
