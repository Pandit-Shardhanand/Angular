import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent {
  selectedTopic:number=2;
  topics:Topic[]=[
    {topicId:1, topicName:"Cars"},
    {topicId:2, topicName:"Dogs"},
    {topicId:3, topicName:"Earths"}
  ];

}
class Topic{
  topicId:number=0;
  topicName:string="";
}
