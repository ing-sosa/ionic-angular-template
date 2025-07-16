import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonRouterOutlet } from '@ionic/angular/standalone';
import { PdfTemplatesComponent } from '../pdf-templates/pdf-templates.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [
    IonRouterOutlet,
    PdfTemplatesComponent,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]
})
export class WelcomePage implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  constructor() { }

  ngOnInit() {
    console.log('Estamos en welcome!!');
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
