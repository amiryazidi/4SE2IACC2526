import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {



  formProduct= new FormGroup ({

   name : new FormControl('',Validators.required),
  desc : new FormControl('',[Validators.minLength(10),Validators.required]),
  price : new FormControl('',[Validators.min(1),Validators.required]),
  quantity : new FormControl('',[Validators.min(1),Validators.required]),
  like : new FormControl(0,Validators.min(0)),
  cin :  new FormControl('',[Validators.required, Validators.pattern("^[0-9]{8}$")])
  })

   save(){
    console.log(this.formProduct.value)
   }
}
