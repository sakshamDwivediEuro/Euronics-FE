import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../constants/api-endpoints.constant';
import { ApiCallService } from './api-call.service';
import { LoginResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiCallService: ApiCallService) {}

  login(credentials: { email: string; password: string }): Observable<LoginResponse> {
    return this.apiCallService.request<LoginResponse>({
      ...API_ENDPOINTS.Auth.Login,
      body: credentials,
    });
  }

  profile(): Observable<{ id: string; email: string }> {
    return this.apiCallService.request({
      ...API_ENDPOINTS.Auth.Profile,
    });
  }
}
