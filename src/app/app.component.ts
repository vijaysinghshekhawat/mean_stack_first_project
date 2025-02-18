import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCreateComponent } from "./posts/post-create.component";

@Component({
  selector: 'app-root',
  imports: [PostCreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mean_stack_first_project';
}
