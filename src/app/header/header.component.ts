import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() searchEvent = new EventEmitter<string>();
  serachText: string = '';

  sendSearchText() {
    this.searchEvent.emit(this.serachText);
  }
}
