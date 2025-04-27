import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CountdownTimer } from '../models/countdown-timer.model';
import { PostPreview } from '../models/timer/post-preview.model';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerService {
  constructor(private apiService: ApiService) { }

  getTimerForPost(postId: number): Observable<CountdownTimer> {
    return this.apiService.get<CountdownTimer>(`countdowntimer/post/${postId}`);
  }

  getPublicTimer(publicId: string): Observable<PostPreview> {
    return this.apiService.get<PostPreview>(`countdowntimer/public/${publicId}`);
  }
}
