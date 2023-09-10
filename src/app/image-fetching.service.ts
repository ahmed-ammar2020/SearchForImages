import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageResponse } from './image-response';

@Injectable({
  providedIn: 'root',
})
export class ImageFetchingService {
  constructor(private http: HttpClient) {}

  search(term: string, page: number) {
    return this.http.get<ImageResponse>(
      'https://api.unsplash.com/search/photos/',
      {
        params: {
          query: term,
          client_id: 'hlZjf-ZfNtbarMeZQNM5vuidOlefBximLqY-B8J2Ahc',
          page,
        },
      }
    );
  }
}
