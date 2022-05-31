import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task/task-module';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {
  newTask:Task;

  constructor() { 
    this.newTask = new Task();
   }

  ngOnInit(): void {
  }

}