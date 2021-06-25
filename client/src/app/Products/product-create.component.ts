import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Iproduct } from "./IProduct";
import { Product } from "./IProduct";
import { ProducService } from "./Product.Service";

@Component({

    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
    pageTitle = 'Add New Product';
    errorMessage = '';
    product: Product;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private productService: ProducService) {

    }

    ngOnInit(): void {
        this.product = new Product();
    }


    onBack(): void {
        this.router.navigate(['/products']);
    }

    CreateProduct(): void {
        this.productService.createProduct(this.product);
        this.router.navigate(['/products']);
    }
}
