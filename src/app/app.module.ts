import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule,TranslateLoader } from '@ngx-translate/core'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { DemoMaterialModule} from './material-module';
import { StarratingComponent } from './starrating/starrating.component';
import { RatingModule } from 'ng-starrating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MembershipComponent } from './membership/membership.component';
import { CardComponent } from './card/card.component';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  declarations: [
    AppComponent,
    StarratingComponent,
    MembershipComponent,
    CardComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    RatingModule,
    TranslateModule.forRoot({
      loader:{

        provide:TranslateLoader,
        useFactory:HttpLoadFactory,
        deps:[HttpClient]
      }

    }),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoadFactory(http:HttpClient)
{
  return new TranslateHttpLoader(http);
}
