import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DigitInWordComponent } from './digit-in-word/digit-in-word.component';
import { TopicComponent } from './topic/topic.component';

export const routes: Routes = [
{path:"",component:DigitInWordComponent},
{path:"topic",component:TopicComponent}
]; 