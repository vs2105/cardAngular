import { Component } from '@angular/core';
import { Ipost } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'card';
  postInfo:Array<Ipost>=[
    {
       title:"Standalone components are stablelink",
       body:"Angular 15 has new feature Standalone components are stablelink "
     },
     {
      title:" Angular 15  NgOptimizedImage directive is stable",
      body:" angular 15 has Adding NgOptimizedImage directive to your component or NgModule can help reduce the download time of images in your Angular application"
    },
    {
      title:"Angular 16 Introduction of dependency injection debugging APIs.",
      body:"Angular 16 has new feature Introduction of dependency injection debugging APIs."
    }
]
}
