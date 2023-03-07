import { Component } from '@angular/core';
import { UserService } from './user.service';
import { AliasService } from './alias.service';

@Component({
  selector: 'app-user',
  // templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  template: '<li>userservice: {{ current }}</li>',
  providers: [
    {
      provide: UserService,
      useClass: UserService, //useClass
      //useValue: new UserService(), //useValue
      multi: false,
    },
    // {
    //   provide: AliasService,
    //   useExisting: UserService, //useExisting
    // },
  ],
})
export class UserComponent {
  current: string;
  constructor(private user: UserService) {
    this.current = user.show();
  }
  cardNumber = '1111-1111-1111-1111';
}
