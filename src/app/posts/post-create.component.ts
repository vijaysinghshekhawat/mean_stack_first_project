import { Component } from "@angular/core";
import { NgModel } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector : 'app-post-create',
    templateUrl : './post-create.component.html',
    imports : [FormsModule, MatInputModule, MatCardModule, MatButtonModule],
    styleUrl : './post-create.component.css'
})

export class PostCreateComponent {

    ententerdValue = '';
    newPost = 'No Contetnt';
    
   onAddPost(){
    // console.dir(postInput)
    // console.log(postInput.value)
    // this.newPost = postInput.value;
    // //alert("Post Added!")
    this.newPost = this.ententerdValue;
   }
}