import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductCreateComponent } from './product-create.component';
import { StarComponent } from '../Shared/star.component';
import { ConvertToSpacesPipe } from '../Shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ConvertToSpacesPipe, ProductCreateComponent],
  imports: [
    RouterModule.forChild(
      [

        { path: 'products', component: ProductListComponent },
        {
          path: 'products/:id',
          component: ProductDetailComponent,
          canActivate: [ProductDetailGuard]
        },
        {
          path: 'addproduct',
          component: ProductCreateComponent
        }
      ]
    ), SharedModule
  ]
})
export class ProductModule { }
