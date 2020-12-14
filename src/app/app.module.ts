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
@NgModule({
  declarations: [
    AppComponent,
    StarratingComponent
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoadFactory(http:HttpClient)
{
  return new TranslateHttpLoader(http);
}
