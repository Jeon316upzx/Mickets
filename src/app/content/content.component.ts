import { Component, OnInit, Input } from '@angular/core';
import { MoviesServiceService } from '../services/movies-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public mypopulars:any[];
  constructor(private ms:MoviesServiceService) { }

  ngOnInit() {
     this.ms.getPopularMovies().subscribe(res=>{
       this.mypopulars = res;
       this.mypopulars= Array.of(this.mypopulars)
     }, error => {
         console.log('An error occurred', error)
      })

  }





  Search(searchdata){
    this.ms.searchMovies(searchdata).subscribe(res=>{
      this.mypopulars = res;
      this.mypopulars = Array.of(this.mypopulars)
      
    }, error => {console.log("An error occurred",error)} )
  }

}
