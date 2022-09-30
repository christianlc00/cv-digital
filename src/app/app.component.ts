import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _ar: ActivatedRoute
  ) {
    this._ar.params.subscribe(params => {
      console.log({params});
      console.log(params['id']);
    })
  }
  title = 'cv-digital';
}
