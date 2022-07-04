import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookStoreAppComponent } from './components/book-store-app/book-store-app.component';
import { FiltersComponent } from './components/book-store-app/filters/filters.component';
import { ProductListComponent } from './components/book-store-app/product-list/product-list.component';
import { ProductItemComponent } from './components/book-store-app/product-list/product-item/product-item.component';
import { BookService } from './components/book-store-app/product-list/product-list.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookStoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
