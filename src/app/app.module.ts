import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FirstVisitComponent } from './first-visit/first-visit.component';
import { NewsSourcesComponent } from './news-sources/news-sources.component';
import { AddSourceComponent } from './add-source/add-source.component';
import { UpdateSourceComponent } from './update-source/update-source.component';
import { CategoriesComponent } from './categories/categories.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DetailsComponent,
    FirstVisitComponent,
    NewsSourcesComponent,
    AddSourceComponent,
    UpdateSourceComponent,
    CategoriesComponent,
    UpdateCategoryComponent,
    CreateCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'home',component:HomeComponent},
      {path: 'details/:id',component: DetailsComponent},
      {path: 'firstVisit', component: FirstVisitComponent},
      {path: 'newsSources', component: NewsSourcesComponent},
      {path: 'addSource',component: AddSourceComponent},
      {path: 'updateSource/:id',component:UpdateSourceComponent},
      {path: 'categories', component:CategoriesComponent},
      {path: 'updateCategory/:id', component: UpdateCategoryComponent},
      {path: 'createCategory', component: CreateCategoryComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
