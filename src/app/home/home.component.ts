import { Component, OnInit } from '@angular/core';
import { NewsSourceService } from '../services/news-source.service';
import { CategoryService } from '../services/category.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news : any;
  categories: any;
  newsSources: any;
  user:any;
  isAdmin : boolean;
  constructor(private newsSourcesService: NewsSourceService, private categoiesService: CategoryService, private authService: AuthService, private router: Router, private NewsService: NewsService) { 
    this.news = [];
    this.categories = [];
    this.newsSources = [];
    
  }

  ngOnInit(): void {

    var user = localStorage.getItem("userId");
    this.authService.getUser(parseInt(user)).subscribe((response)=>{
      console.log(response);
      this.user = response;
      if(this.user.role.name == "Admin"){
        this.isAdmin = Boolean(true);
      }else{
        this.isAdmin = Boolean(false);
      }
      console.log("variable admin"+this.isAdmin);
    })
    
    this.newsSourcesService.getUserSources(parseInt(user)).subscribe((response)=>{
      //console.log(response);
      this.newsSources = response;
      console.log(this.newsSources);
      if(this.newsSources.length == 0){
        this.redirect();
      }
    });

    
    this.categoiesService.getCategories().subscribe((response)=>{
      //console.log(response);
      this.categories = response;
    })

    this.newsSourcesService.getNews(parseInt(user)).subscribe((response)=>{
      console.log(response);
      this.news = response;
    }); 
  }
  redirect(){
    this.router.navigate(['/firstVisit']);
  }

  filter(id:number){
    var userId = parseInt(localStorage.getItem("userId"));
    this.NewsService.filterByCtegory(userId,id).subscribe((response)=>{
     // console.log(response);
      this.news = response;
    })
  }

  logOut(){
    localStorage.clear();
    this.router.navigate([''])
  }

}
