import { Component, OnInit } from '@angular/core';
import { SearchmovieService } from 'src/app/services/searchmovie.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-myrating',
  templateUrl: './myrating.component.html',
  styleUrls: ['./myrating.component.css']
})
export class MyratingComponent implements OnInit {

  constructor(private service:SearchmovieService) { }

  public i: any;
  public getNote:any;
  public  starRatingg:any=5;
  ngOnInit(): void {
    this.getMoviesList();
  }
  getMoviesList(){
    this.service.getmovies().subscribe(data=>{
      this.getNote=data;
 
     
    });
}
DeleteMovieList(item:any){
  this.service.DeleteMovietrash(item.id).subscribe(data=>{
    this.getMoviesList();
    
  });
}
getRate(rate:any){
  return new Array(Number(rate));
}
 

}



