import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent implements OnChanges {

  @Input() titulo: string;

  ngOnChanges() {
    console.log('ALGO MUDOU!!!');
  }

}
