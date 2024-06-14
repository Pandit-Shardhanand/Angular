import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-search-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-employee.component.html',
  styleUrl: './search-employee.component.css'
})
export class SearchEmployeeComponent {

  empList : Employee[]=[
    {empId:1,empFirstName:"Shardhanand",empLastName:"Pandit",empSalary:5000},
    {empId:2,empFirstName:"Tejas",empLastName:"Parvate",empSalary:6000},
    {empId:3,empFirstName:"Gopal",empLastName:"Kumar",empSalary:7000}
  ];  
  selectedId:number=1;
  e = new Employee();
  getEmployee(){
    this.e =this.empList.find(emp=>emp.empId==this.selectedId) as Employee;
  }
}
