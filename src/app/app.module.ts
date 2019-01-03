import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MembersComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path : 'member',
        component : MembersComponent
      },
      
      {
        path : 'product',
        component: ProductComponent
      }
    ]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
