import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule,TranslateLoader } from '@ngx-translate/core'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NguiMapModule} from '@ngui/map';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDZERCrCxsi_i4-WVNxclrOE3e6f_CNZBg'}),
    TranslateModule.forRoot({
      loader:{

        provide:TranslateLoader,
        useFactory:HttpLoadFactory,
        deps:[HttpClient]
      }

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoadFactory(http:HttpClient)
{
  return new TranslateHttpLoader(http);
}
