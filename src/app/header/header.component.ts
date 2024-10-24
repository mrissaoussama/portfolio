import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterLink, RouterModule] 

})
export class HeaderComponent implements OnInit {
  constructor(private elementRef: ElementRef<HTMLElement>) {}
  ngOnInit() {

  }
}