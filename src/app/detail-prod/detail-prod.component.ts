import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../models/product';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrl: './detail-prod.component.css'
})
export class DetailProdComponent {
  id !:number
  product!:product
    products:product[] = [
      {id: 1, name: "iphone 14", price: 10.99, description: "Description for Product 1" , quantity: 10 , nbrLike: 0, image :"https://www.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg",},
      {id : 2 ,name: "iphone 15", price: 19.99, description: "Description for Product 2", quantity: 5, nbrLike: 0, image :"https://www.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"},
      {id : 3, name: "iphone 16", price: 5.49, description: "Description for Product 3", quantity: 4, nbrLike: 0, image :"https://www.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"},
      {id : 4, name: "iphone 17", price: 15.00, description: "Description for Product 4", quantity: 2, nbrLike: 0, image :"https://www.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"}
    ]

      // un service predfinis
  constructor(private act : ActivatedRoute) { }

  ngOnInit(){
      // recuperer l'id du produit à afficher
    this.id = this.act.snapshot.params['id']

  // afficher les details du produit avec cet id
    this.product = this.products.find(p => p.id == this.id)!;
    console.log(this.product);
  }



}
