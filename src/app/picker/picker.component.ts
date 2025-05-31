import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf, NgStyle } from '@angular/common';


@Component({
  selector: 'app-picker',
  imports: [NgIf, NgStyle],
  templateUrl: './picker.component.html',
  styleUrl: './picker.component.scss'
})
export class PickerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  movies: any[] = [];
  randomMovie: any;
  fullImageUrl: string = '';
  backgroundImageUrl: string = '';


  ngOnInit(): void {
    // Fetch the movies.json file from assets folder
    this.http.get<any[]>('/movies.json').subscribe(data => {
      console.log(data)
      this.movies = data;
    });
  }


  pickRandomMovie(): void {
    const randomIndex = Math.floor(Math.random() * this.movies.length);
    const selectedMovie = this.movies[randomIndex];
    const img = new Image();
    img.src = 'https://image.tmdb.org/t/p/w780' + selectedMovie.backdrop_path;

    img.onload = () => {
      this.randomMovie = selectedMovie;
      this.backgroundImageUrl = img.src;
    };
  }

}
