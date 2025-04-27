import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Template } from '../models/template.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  constructor(private apiService: ApiService) { }

  getTemplates(): Observable<Template[]> {
    return this.apiService.get<Template[]>('template');
  }

  getTemplate(id: number): Observable<Template> {
    return this.apiService.get<Template>(`template/${id}`);
  }
}
