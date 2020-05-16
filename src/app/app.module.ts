import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FavortiesComponent } from './Components/favorties/favorties.component';
import { AutoSuggestBarComponent } from './Components/auto-suggest-bar/auto-suggest-bar.component';
import { ResultComponent } from './Components/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EconomyComponent } from './Components/economy/economy.component';
import { TestComponent } from './Components/test/test.component';
import { GoldComponent } from './Components/gold/gold.component';
import { DowComponent } from './Components/dow/dow.component';
import { NdaqComponent } from './Components/ndaq/ndaq.component';
import { BabaComponent } from './Components/baba/baba.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavortiesComponent,
    AutoSuggestBarComponent,
    ResultComponent,
    EconomyComponent,
    TestComponent,
    GoldComponent,
    DowComponent,
    NdaqComponent,
    BabaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
