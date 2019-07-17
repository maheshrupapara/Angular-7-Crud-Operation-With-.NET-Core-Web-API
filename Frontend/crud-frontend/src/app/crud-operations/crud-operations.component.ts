import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudServices } from '../shared/crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styles: []
})
export class CrudOperationsComponent implements OnInit {

  constructor(private service:CrudServices,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData = {
      Id: 0,
      Name: '',
      PhoneNumber: '',
      Age:''
    }
  }

  onSubmit(form:NgForm){
    if (this.service.formData.Id === undefined || this.service.formData.Id==0)
    this.insertRecord(form);
  else
    this.updateRecord(form);

  }

  insertRecord(form: NgForm) {
    debugger;
    this.service.postDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Detail Added Successfully');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    debugger;
    this.service.putDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Detail Updated Successfully');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
