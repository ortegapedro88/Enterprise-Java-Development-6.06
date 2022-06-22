import { Component, OnInit } from '@angular/core';
import { Tarea } from '../model/tarea';

@Component({
  selector: 'app-listita',
  templateUrl: './listita.component.html',
  styleUrls: ['./listita.component.css'],
})
export class ListitaComponent implements OnInit {
  tarea: string = '';
  todoList: Tarea[] = [];
  postponedList: Tarea[] = [];
  editTareaName : string="";

  constructor() {}

  ngOnInit(): void {}

  addTarea(): void {
    this.todoList.push(new Tarea(this.tarea));
    this.tarea = '';
  }

  postponeTarea(index: number): void {
    this.postponedList.push(this.todoList[index]);
    this.todoList.splice(index, 1);
  }

  checkTarea(index: number): void {
    this.todoList[index].isDone = true;
  }

  deleteDone(): void {
    let backupList: Tarea[] = [];
    this.todoList.forEach((tarea) => {
      if (!tarea.isDone) backupList.push(tarea);
    });

    this.todoList = backupList;
  }

  restorePostpone(): void {
    this.todoList = this.todoList.concat(this.postponedList);

    console.log(this.todoList);
    console.log(this.postponedList);
  }

  removeTarea(index:number){
    this.todoList.splice(index,1);
  }

  editTarea(index:number){
    this.todoList[index].isEdit= !this.todoList[index].isEdit;
  }

  guardarTarea(index:number){
    this.todoList[index].name = this.editTareaName;
    this.todoList[index].isEdit= false;
  }

}
