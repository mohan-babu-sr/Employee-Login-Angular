import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private _employeeService: EmployeeService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if(isIdPresent){
      const id =+this._activatedRoute.snapshot.paramMap.get('id'); //change to getAll if any error occurs
      this._employeeService.getEmployee(id).subscribe(
        data => this.employee =data
      )
    }
  }

  saveEmployee(){
    this._employeeService.saveEmployees(this.employee).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/employees")
      }
    )
  }

  deleteEmployee(id: number){
    this._employeeService.deleteEmployee(id).subscribe(
      data => {
        console.log('delete response', data);
        this._router.navigateByUrl("/employees")
      }
    )
  }

}
