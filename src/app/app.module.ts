import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SixishMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { MainComponent } from './components/main/main.component';
import { RatingComponent } from './components/rating/rating.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BusinessesReducer } from './store/businesses.reducer';
import { SearchQueryReducer } from './store/search-query.reducer';
import { BusinessesEffects } from './store/businesses.effects';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BusinessListComponent,
    MainComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SixishMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    StoreModule.forRoot({
      businesses: BusinessesReducer, searchQuery: SearchQueryReducer
    }),
    EffectsModule.forRoot([BusinessesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
