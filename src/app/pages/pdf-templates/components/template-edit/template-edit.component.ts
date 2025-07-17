import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonSelectOption, IonSelect, IonCardHeader, IonCardTitle, IonButton, IonIcon, IonCardContent, IonCard, IonItem, IonLabel, IonRange, IonSegmentButton, IonSegment, IonContent, IonToolbar, IonGrid, IonRow, IonCol, IonToggle, IonInput, IonCheckbox, IonRadioGroup, IonRadio, IonImg, IonTitle, IonHeader, IonButtons, IonFooter } from "@ionic/angular/standalone";

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.scss'],
  standalone: true,
  imports: [IonFooter, IonButtons, IonHeader, IonTitle, IonImg, IonRadio, IonRadioGroup, IonCheckbox,
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
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TemplateEditComponent implements OnInit {
  templateId: string = '';
  useImage: boolean = false;
  watermark: boolean = false;

  templateForm!: FormGroup;


  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.templateId = params.get('id') ?? ''
    })

    this.templateForm = this.fb.group({
      name: [''],
      pageSize: ['carta'],
      header: this.fb.array([
        this.createColumn()
      ]),
      footer: this.fb.array([
        this.createColumn()
      ]),
      watermark: this.fb.group({
        enabled: [false],
        opacity: [0.5],
        width: [200],
        height: [200],
        image: [''] // base64 o path
      })
    });
  }

  createColumn(): FormGroup {
    return this.fb.group({
      type: ['text'], // text o image
      content: [''],
      styles: this.fb.group({
        bold: [false],
        italic: [false],
        bullet: [false],
        color: ['#000000'],
        width: [100], // solo si es imagen
        height: [100]
      })
    });
  }

  get headerColumns(): FormArray {
    return this.templateForm.get('header') as FormArray;
  }

  get footerColumns(): FormArray {
    return this.templateForm.get('footer') as FormArray;
  }

  get watermarkGroup(): FormGroup {
    return this.templateForm.get('watermark') as FormGroup;
  }


  addHeaderColumn() {
    this.headerColumns.push(this.createColumn());
  }

  removeHeaderColumn(index: number) {
    this.headerColumns.removeAt(index);
  }

  addFooterColumn() {
    this.footerColumns.push(this.createColumn());
  }

  removeFooterColumn(index: number) {
    this.footerColumns.removeAt(index);
  }

  // Útil para debug:
  logForm() {
    console.log(this.templateForm.value);
  }

  pinOpacity(value: number) {
    return `${value}`;
  }


  onToggleChange(ev: any) {
    console.log('Nuevo valor:', ev.detail.value);
  }
}
