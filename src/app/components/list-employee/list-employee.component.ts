import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  employee: Employee[] = [];

  filters = {
    keyword: '',
  };

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService
      .getEmployees()
      .subscribe((data) => (this.employee = data));
  }

  // Employee name Filter START
  nameFilter() {
    this._employeeService
      .getEmployees()
      .subscribe((data) => (this.employee = this.filterEmployeeName(data)));
  }

  filterEmployeeName(employees: Employee[]) {
    return employees.filter((e) => {
      return e.employeeName
        .toLowerCase()
        .includes(this.filters.keyword.toLowerCase());
    });
  }
  // Employee name Filter END
}
