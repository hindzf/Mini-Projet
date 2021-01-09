import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Star } from '../model/Star';
import { StarService } from '../service/star.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html'
})
export class StarsComponent implements OnInit {

  stars : Star[] = [] ;

  constructor(private starService : StarService , private router:Router) { 
   // this.stars = starService.listeStar() ; 
  }

  ngOnInit(): void {
    this.starService.listeStar().subscribe(starslist => {
      console.log(starslist);
      this.stars = starslist;
      });
  }

  
    
  supprimerStar(p: Star)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.starService.supprimerStar(p.idStar).subscribe(() => {
    console.log("star supprimé");
    this.supprimerStarDuTableau(p) ;
    });
  }
  supprimerStarDuTableau(p: Star) {
    this.stars.forEach((cur, index) => {
      if(p.idStar=== cur.idStar) {
      this.stars.splice(index, 1);
      }
    });
  }

  

}
