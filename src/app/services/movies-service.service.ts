import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {


  private moviesurl:string = 'https://api.themoviedb.org/3/movie/';
  private baseurl:string = 'https://api.themoviedb.org/3/';
  private apikey:string = '70a528049f63ed4a5c6d0b69425cc393';
  private lang:string = 'en-Us';


  constructor(private httpclient:HttpClient) {
    }

  getMovieGenre():any{
    let genreUrl = `${this.baseurl}genre/movie/list?api_key=${this.apikey}&language=${this.lang}`;
    console.log(genreUrl);
    return this.httpclient.get(genreUrl);
  }


  getPopularMovies():any{
    let popularUrl = `${this.moviesurl}popular?api_key=${this.apikey}&language=${this.lang}`;
    console.log(popularUrl);
    return this.httpclient.get(popularUrl);
  }

  searchMovies(query:string){
    let fullSearchUrl = `${this.baseurl}search/movie?api_key=${this.apikey}&language${this.lang}&query=${query}`;
    return this.httpclient.get(fullSearchUrl);
  }


}
