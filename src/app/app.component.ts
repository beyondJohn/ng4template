import { Component } from '@angular/core';
import { AuthService } from '../app/services/auth.service';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthService ]
})
export class AppComponent {
  title = 'app';
}
