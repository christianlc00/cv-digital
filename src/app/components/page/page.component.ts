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
  public pColor = '232d4b';
  public sColor = '00aa9b';
  public language = 'es';
  public cvURL = '';

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
      console.log({ id: params.get('id') });
      if (params.get('id')) {
      } else {
        this.pColor = params.get('pColor') || this.pColor;
        this.sColor = params.get('sColor') || this.sColor;
        this.language = params.get('language') || this.language;
      }

      // this.cvURL = `https://cv.christianlc.dev/${this.pColor}/${this.sColor}/${this.language}`;
      this.cvURL = `https://christianlc.dev/?pc=${this.sColor}&sc=${this.pColor}`;

      QRCode.toDataURL(this.cvURL, {
        margin: 1,
        type: 'image/png',
      })
        .then((url) => {
          this.qrImage = url;
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }
}
