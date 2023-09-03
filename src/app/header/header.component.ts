import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  heading: string = 'First step towards Mastery of Angular!';
  source: string = '../../assets/angular.jpg';

  getHeading() {
    return 'First step towards Mastery of Angular!';
  }
}
