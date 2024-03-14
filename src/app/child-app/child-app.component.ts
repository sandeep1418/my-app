import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrl: './child-app.component.scss'
})
export class ChildAppComponent implements OnInit {
  @Input() messageFromParent!: string;
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  outputMessage: string = 'I am from child component';

  ngOnInit(): void {
    console.log(this.messageFromParent);
  }

  sendMessage() {
    this.myOutput.emit(this.outputMessage);
  }
}
