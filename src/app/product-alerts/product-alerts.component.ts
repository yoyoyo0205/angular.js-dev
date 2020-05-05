import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
/*@angular/coreからOutputとEventEmitterをインポートする*/ 
//emit:「放つ、放出する」
import {Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  /*EventEmitter()のインスタンスを使って、プロパティ'notify'を定義。
  これにより、'notify'の値が変更されたときに、app-product-alertsコンポーネントが、
  イベントを発行することが可能になる。*/
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}