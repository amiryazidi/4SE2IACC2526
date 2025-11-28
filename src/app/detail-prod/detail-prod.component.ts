import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrl: './detail-prod.component.css'
})
export class DetailProdComponent {
  id !:number
  constructor(private act : ActivatedRoute) { }

  ngOnInit(){
    this.id = this.act.snapshot.params['id']

  }
  // recuperer l'id du produit à afficher
  // un service predfinis

  // afficher les details du produit avec cet id
}
