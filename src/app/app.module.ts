import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDestinatarioComponent } from './add-destinatario/add-destinatario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { BankListService } from './services/bank-list.service';
import { HttpClientModule } from '@angular/common/http';
import { TransferenciaComponent } from './transferencia/transferencia.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDestinatarioComponent,
    TransferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    MatListModule,
    ScrollingModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BankListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
