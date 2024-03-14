import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  data: any;
  name: string = 'sandeep';
  email: string = 'sandeep@google.com';
  adminData: any[] = [];
  membersData: any[] = [];
  searchedText: string = '';

  isAdmin: boolean = true;
  myForm!: FormGroup;

  constructor(
    private service: AppServiceService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getData();
    this.myForm = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [],
    });
  }

  onSubmit() {
    // console.log(this.myForm.value);
    this.service.sendData(this.myForm.value);
  }

  getData(): void {
    this.service.getData().subscribe({
      next: (data) => {
        data.map((list: { role: string }) => {
          if (list.role === 'member') {
            this.membersData.push(list);
          } else {
            this.adminData.push(list);
          }
        });
        console.log(this.membersData);
        console.log(this.adminData);
      },
    });
  }

  receiveSearchText(text: string) {
    this.searchedText = text;
  }

  openModal(data: any) {
    console.log(data);
    let modalDiv = document.getElementById('myModal');

    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }

  closeModal() {
    let modalDiv = document.getElementById('myModal');

    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
}
