import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Iproduct } from './product.model';
import {ProductService} from './product.service';

@Component({
    templateUrl:'./product-detail.component.html'
})
export class ProductDeatailComponent implements OnInit{
    id:number;
    name:string;
    image:string;
    description:string;
    details:Iproduct[];

    constructor(private route:ActivatedRoute,
        private router:Router,
        private productService:ProductService){

    }
    ngOnInit(){
        this.id=this.route.snapshot.params['id'];
      /*  this.productService.getProductDetails(this.id)
        .subscribe((detail)=>this.details=detail);*/

        this.route.queryParams.subscribe((data)=>{
            this.name=data['name'];
            this.image=data['img'];
            this.description=data['desc'];
        });

       }
       onBack():void{
           this.router.navigate(['/product']);
       }

}