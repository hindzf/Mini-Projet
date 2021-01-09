import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Star } from '../model/Star';
import { StarService } from '../service/star.service';

@Component({
  selector: 'app-update-star',
  templateUrl: './update-star.component.html',
  styles: [
  ]
})
export class UpdateStarComponent implements OnInit {
  currentStar = new Star() ;

  constructor(private activatedRoute: ActivatedRoute,
              private router :  Router ,
              private starService: StarService) { }

  ngOnInit(): void {
    //console.log (this.activatedRoute.snapshot.params.id) ; 
   /* this.currentStar = this.starService.consulterStar(this.activatedRoute.snapshot.params.id);
    console.log(this.currentStar);*/
    this.starService.consulterStar(this.activatedRoute.snapshot.params.id).subscribe( 
      star =>{ this.currentStar = star; } 
      ) ;
  }

  updateStar() {
    this.starService.updateStar(this.currentStar).subscribe(() => {
    this.router.navigate(['stars']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
