import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildAppComponent } from '../child-app/child-app.component';

@Component({
  selector: 'app-parent-app',
  templateUrl: './parent-app.component.html',
  styleUrl: './parent-app.component.scss'
})
export class ParentAppComponent implements AfterViewInit {
  parentMessage: string = "Message from Parent";
  @ViewChild(ChildAppComponent) child: any;
  items = ['Even', 'Odd'];

  GetChildMessage(data: any) {
    console.log(data)
  }

  ngAfterViewInit(): void {
    console.log(this.child.outputMessage);
  }
}
