import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonCardHeader, IonCardTitle, IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonIcon, IonButton, IonCardTitle, IonCardHeader,
    CommonModule
  ]
})
export class TemplateEditComponent implements OnInit {

  templateId: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.templateId = params.get('id') ?? ''
    })

    console.log('CREAR PLANTILLA');
  }

}
