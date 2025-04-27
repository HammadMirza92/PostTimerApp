import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { CreatePostRequest } from '../models/post/create-post.model';
import { UpdatePostRequest } from '../models/post/update-post.model';
import { PublishResult } from '../models/post/publish-result.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private apiService: ApiService) { }

  getPosts(): Observable<Post[]> {
    return this.apiService.get<Post[]>('post');
  }

  getPagePosts(pageId: number): Observable<Post[]> {
    return this.apiService.get<Post[]>(`post/page/${pageId}`);
  }

  getPost(id: number): Observable<Post> {
    return this.apiService.get<Post>(`post/${id}`);
  }

  createPost(createPostRequest: CreatePostRequest): Observable<Post> {
    return this.apiService.post<Post>('post', createPostRequest);
  }

  updatePost(id: number, updatePostRequest: UpdatePostRequest): Observable<Post> {
    return this.apiService.put<Post>(`post/${id}`, updatePostRequest);
  }

  publishPost(id: number): Observable<PublishResult> {
    return this.apiService.post<PublishResult>(`post/${id}/publish`, {});
  }

  cancelPost(id: number): Observable<any> {
    return this.apiService.post<any>(`post/${id}/cancel`, {});
  }

  deletePost(id: number): Observable<any> {
    return this.apiService.delete<any>(`post/${id}`);
  }
}
