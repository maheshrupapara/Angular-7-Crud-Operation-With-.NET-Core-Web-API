import { Component, OnInit } from '@angular/core';
import { CrudServices } from '../shared/crud.service';
import { ToastrService } from 'ngx-toastr';
import { CrudTable } from '../shared/crud.model';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styles: []
})
export class CrudListComponent implements OnInit {

  constructor(private service: CrudServices,
    private toastr: ToastrService) { }
  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: CrudTable) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteDetail(Id)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Detail Deleted Successfully');
        },
          err => {
            
            console.log(err);
          })
    }
  }

}
