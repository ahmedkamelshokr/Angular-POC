import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Iproduct, Product } from "./IProduct";
import { ProducService } from "./Product.Service";

@Component({

    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    pageTitle = 'Edit Product';
    errorMessage = '';
    product: Product;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private productService: ProducService) {
        this.product = new Product();
    }

    ngOnInit(): void {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getProduct(id);
        }
    }

    getProduct(id: number): void {
        this.productService.getProduct(id).subscribe({
            next: product => this.product = product,
            error: err => this.errorMessage = err
        });
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }

    SaveProduct(): void {
        this.productService.saveProduct(this.product);
        this.router.navigate(['/products']);
    }
}