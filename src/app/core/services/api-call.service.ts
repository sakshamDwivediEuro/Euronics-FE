import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Type for Http Methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// Standardized API Request type
interface ApiRequest<TBody = unknown> {
  url: string;
  method: HttpMethod;
  body?: TBody;
}

@Injectable({ providedIn: 'root' })
export class ApiCallService {
  private readonly baseUrl = environment.baseURL;

  constructor(private http: HttpClient) {}

  request<TResponse, TBody = unknown>(req: ApiRequest<TBody>): Observable<TResponse> {
    const fullUrl = `${this.baseUrl}${req.url}`;
    return this.http.request<TResponse>(req.method, fullUrl, {
      body: req.body,
    });
  }
}
