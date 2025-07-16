import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class TemplateEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('CREAR PLANTILLA');
  }

}
