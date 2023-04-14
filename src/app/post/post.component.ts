import { Component, Input } from "@angular/core";
import { Ipost } from "../model/post";


@Component({
    selector:"app-post",
    templateUrl:"./post.component.html",
    styleUrls:["./post.component.scss"]
})

export class postComponent{
   @Input() postInfo!:Ipost

   constructor(){}

   ngOnInit():void{
      console.log(this.postInfo)
   }
}