import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonSelectOption, IonSelect, IonCardHeader, IonCardTitle, IonButton, IonIcon, IonCardContent, IonCard, IonItem, IonLabel, IonRange, IonSegmentButton, IonSegment, IonContent, IonToolbar, IonGrid, IonRow, IonCol, IonToggle, IonInput, IonCheckbox, IonRadioGroup, IonRadio, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.scss'],
  standalone: true,
  imports: [IonImg, IonRadio, IonRadioGroup, IonCheckbox,
    IonInput,
    IonToggle,
    IonCol,
    IonRow,
    IonGrid,
    IonToolbar,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonRange,
    IonLabel,
    IonSelectOption,
    IonItem,
    IonCard,
    IonSelect,
    IonCardContent,
    RouterLink,
    IonIcon,
    IonButton,
    IonCardTitle,
    IonCardHeader,
    CommonModule,
    FormsModule
  ]
})
export class TemplateEditComponent implements OnInit {
  templateId: string = '';
  useImage: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.templateId = params.get('id') ?? ''
    })

    console.log('CREAR PLANTILLA');
  }

  onToggleChange(ev: any) {
    console.log('Nuevo valor:', ev.detail.value);
  }
}
