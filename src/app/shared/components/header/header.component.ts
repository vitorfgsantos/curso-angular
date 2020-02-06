import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnChanges {

  @Input() titulo: string;

  ngOnChanges() {
    console.log('ALGO MUDOU!!!');
  }

}
