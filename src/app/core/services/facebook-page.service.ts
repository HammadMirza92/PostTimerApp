import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { FacebookPage } from '../models/facebook-page.model';
import { LinkPageRequest } from '../models/facebook-page/link-page.model';

@Injectable({
  providedIn: 'root'
})
export class FacebookPageService {
  constructor(private apiService: ApiService) { }

  getPages(): Observable<FacebookPage[]> {
    return this.apiService.get<FacebookPage[]>('facebookpage');
  }

  getPage(id: number): Observable<FacebookPage> {
    return this.apiService.get<FacebookPage>(`facebookpage/${id}`);
  }

  linkPage(linkPageRequest: LinkPageRequest): Observable<FacebookPage> {
    return this.apiService.post<FacebookPage>('facebookpage/link', linkPageRequest);
  }

  unlinkPage(id: number): Observable<any> {
    return this.apiService.delete<any>(`facebookpage/${id}`);
  }
}
