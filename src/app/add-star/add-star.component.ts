import { Component, OnInit } from '@angular/core';
import { Star } from '../model/Star';
import { StarService } from '../service/star.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-star',
  templateUrl: './add-star.component.html'
})
export class AddStarComponent implements OnInit {
  newStar = new Star(); 
  message : string = ''; 

  constructor(private starService : StarService,private router:Router) { 

  }

  ngOnInit(): void {
  }


  addStar(){
    this.starService.ajouterStar(this.newStar).subscribe(star => {
    console.log(star);
    });
    this.router.navigate(['stars']).then(() => {
      window.location.reload() ; 
    });
    }

}
