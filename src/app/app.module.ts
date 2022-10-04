import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { PaiComponent } from './components/input-output/pai/pai.component';
import { FilhoComponent } from './components/input-output/pai/filho/filho.component';
import { NgIfComponent } from './components/directivas/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/directivas/ng-switch/ng-switch.component';
import { NgForComponent } from './components/directivas/ng-for/ng-for.component';
import { NgClassStyleComponent } from './components/directivas/ng-class-style/ng-class-style.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PipePersonalizadoPipe } from './components/pipes/pipe-personalizado.pipe';
import { HeaderComponent } from './components/header/header.component';
import { DirectivasPaiComponent } from './components/directivas/directivas-pai/directivas-pai.component';
import { HomeComponent } from './components/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { TemplateDrivenComponent } from './components/forms/template-driven/template-driven.component';
import { DataDrivenComponent } from './components/forms/data-driven/data-driven.component';
import { ConsumirServiceComponent } from './components/service/consumir-service/consumir-service.component';
import { SingletonComponent } from './components/singleton/singleton.component';
import { SharedService } from './components/service/singleton-service/shared.service';
import { Irmao1Component } from './components/singleton/irmao1/irmao1.component';
import { Irmao2Component } from './components/singleton/irmao2/irmao2.component';
import { Irmao3Component } from './components/singleton/irmao3/irmao3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    PaiComponent,
    FilhoComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassStyleComponent,
    LifeCycleHooksComponent,
    PipesComponent,
    PipePersonalizadoPipe,
    HeaderComponent,
    DirectivasPaiComponent,
    HomeComponent,
    FormsComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
    ConsumirServiceComponent,
    SingletonComponent,
    Irmao1Component,
    Irmao2Component,
    Irmao3Component
  ],
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule //Data Driven Form ou Model Driven Form
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})

export class AppModule { }
