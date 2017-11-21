
import { CompanyService } from './../company.service';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  company$: any;

  constructor(private companyService: CompanyService) {
    this.company$  = companyService.company$.valueChanges();
  }

  ngOnInit() {
  }

  saveCompany(name) {
    this.companyService.saveCompany(name);
  }

  editCompany(name) {
    this.companyService.editCompany(name);
  }

  removeCompany() {
    this.companyService.removeCompany();
  }

}
