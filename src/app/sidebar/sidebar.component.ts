import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesServiceService } from '../services/movies-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  public mygenres:any[];
  constructor(private ms: MoviesServiceService) {
     }

  ngOnInit() {
    this.ms.getMovieGenre().subscribe(res=>{
        this.mygenres = res;}, error =>{
          console.log("An Error occurred",error);
        });
  }
}
