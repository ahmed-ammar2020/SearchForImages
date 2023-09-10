import { Component } from '@angular/core';
import { ImageFetchingService } from '../image-fetching.service';

interface Image {
  description: string;
  urls: { small: string };
}

@Component({
  selector: 'app-image-home',
  templateUrl: './image-home.component.html',
  styleUrls: ['./image-home.component.css'],
})
export class ImageHomeComponent {
  searchTerm: string;
  imgs: Image[];
  pageNum = 1;
  totalPages: number;

  constructor(private imageFetching: ImageFetchingService) {}

  changeValue(value: string) {
    this.searchTerm = value;
  }

  submitForm(event: Event) {
    event.preventDefault();

    this.imageFetching.search(this.searchTerm, this.pageNum).subscribe({
      next: ({ total_pages, results }) => {
        this.imgs = results;
        this.totalPages = +total_pages;
      },
    });
  }

  pageChanged(value: any) {
    this.pageNum = value;
    this.imageFetching.search(this.searchTerm, this.pageNum).subscribe({
      next: ({ total_pages, results }) => {
        this.imgs = results;
        this.totalPages = +total_pages;
      },
    });
  }
}
