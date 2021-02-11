import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input } from '@angular/core';
import {DataService} from './data.service'
import {HttpClientModule} from '@angular/common/http'
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  users:string[] = ['ryan', 'joe', 'cameron', 'john', 'mattew'];
  name:string='Jhon carter'
  age:number=28
  posts: any
  

  constructor(private dataService:DataService){
    this.dataService.getDatos().subscribe(data=>{
      console.log(data);
      this.posts=data
      console.log(this.posts)
    })
  }


  sayHello(user:string){
    alert('Hello! '+user)
  }

  deleteUser(user:string){
    for (let i = 0; i < this.users.length; i++) {
      if(user==this.users[i]){
        this.users.splice(i,1);
      }
    }
  }
  addUser(user:HTMLInputElement){
    this.users.push(user.value)
    return false;
  }

}
