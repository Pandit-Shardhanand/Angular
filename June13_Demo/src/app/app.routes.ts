import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DigitInWordComponent } from './digit-in-word/digit-in-word.component';
import { TopicComponent } from './topic/topic.component';
import { EmployeeComponent } from './employee/employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';

export const routes: Routes = [
{path:"",component:DigitInWordComponent},
{path:"topic",component:TopicComponent},
{path:"employee",component:EmployeeComponent},
{path:"search-employee",component:SearchEmployeeComponent}
]; 