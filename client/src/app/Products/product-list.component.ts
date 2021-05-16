import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Iproduct } from "./IProduct";
import { ProducService } from "./Product.Service";

@Component({
  selector: 'pm-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./product-list.Component.css']
})


export class ProductListComponent implements OnInit, OnDestroy {

  /**
   *
   */
  constructor(private productService: ProducService) {


  }

  pageTitle: string = 'products list';
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string = '';
  sub!: Subscription;
  showImage: boolean = false;
  products: Iproduct[];
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filterdProducts = this.performFilter(value);
  }


  onRatingClicked(message: string): void {
    console.log(message);
  }
  performFilter(filter: string): Iproduct[] {
    filter = filter.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) =>
      product.productName.toLocaleLowerCase().includes(filter));
  }
  filterdProducts: Iproduct[];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub =
      this.productService.getProducts().subscribe({

        next: products => {
          this.products = products;
          this.filterdProducts = this.performFilter('');
        }
        ,
        error: error => this.errorMessage = error
      });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}