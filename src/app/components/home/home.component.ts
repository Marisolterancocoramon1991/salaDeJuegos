import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  constructor(private router:Router){}



}
