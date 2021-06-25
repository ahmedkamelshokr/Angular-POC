import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Iproduct } from "./IProduct";
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProducService {
  /**
   *
   */
  private producturl = 'assets/products/products.json';

  constructor(private http: HttpClient) {

  }
  getProducts(): Observable<Iproduct[]> {

    return this.http.get<Iproduct[]>(this.producturl)
      .pipe(
        tap(data => {
          console.log(data);

        }),
        catchError(this.handleError)
      );

  }

  getProduct(id: number): Observable<Iproduct | undefined> {
    return this.getProducts()
      .pipe(
        map((products: Iproduct[]) => products.find(p => p.productId === id))
      );
  }

  createProduct(product: Iproduct) {

    console.log(product);
  }
  saveProduct(product: Iproduct) {

    console.log(product);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}