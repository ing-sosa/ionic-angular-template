import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IonIcon, IonGrid, IonButton, IonRow, IonCol, IonCardContent, IonCard, IonCardHeader, IonCardTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-template-table',
  templateUrl: './template-table.component.html',
  styleUrls: ['./template-table.component.scss'],
  standalone: true,
  imports: [
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonCardContent,
    IonCol,
    IonRow,
    IonButton,
    CommonModule,
    IonGrid,
    IonIcon
  ],
})
export class TemplateTableComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  templates = [
    { id: 1, name: 'Plantilla Factura', type: 'Carta', pages: 1 },
    { id: 2, name: 'Plantilla Reporte', type: 'Media Carta', pages: 3 },
    { id: 3, name: 'Plantilla Contrato', type: 'Carta', pages: 2 }
  ];
  constructor() { }

  ngOnInit() { }


  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
