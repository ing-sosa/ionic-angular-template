import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateTableComponent } from './components/template-table/template-table.component';

@Component({
  selector: 'app-pdf-templates',
  templateUrl: './pdf-templates.component.html',
  styleUrls: ['./pdf-templates.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TemplateTableComponent
  ],
})
export class PdfTemplatesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
