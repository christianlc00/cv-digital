import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  public qrImage = '';
  public pColor = '232d4bff';
  public sColor = '00aa9bff';
  public language = '';

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    QRCode.toDataURL('https://christianlc.dev/', {
      margin: 1,
      type: 'image/png',
    })
      .then((url) => {
        this.qrImage = url;
      })
      .catch((err) => {
        console.error(err);
      });

    this._activatedRoute.paramMap.subscribe((params) => {
      console.log({ id: params.get('id') });
    });

    console.log({ id2: this._activatedRoute.snapshot.params['id'] });
  }
}
