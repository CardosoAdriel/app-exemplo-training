import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivasPaiComponent } from './components/directivas/directivas-pai/directivas-pai.component';
import { PaiComponent } from './components/input-output/pai/pai.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { HomeComponent } from './components/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { ConsumirServiceComponent } from './components/service/consumir-service/consumir-service.component';
import { SingletonComponent } from './components/singleton/singleton.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'data-binding', component: DataBindingComponent},
  {path: 'directivas', component: DirectivasPaiComponent},
  {path: 'input-output', component: PaiComponent},
  {path: 'hooks', component: LifeCycleHooksComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'services', component: ConsumirServiceComponent},
  {path: 'singleton', component: SingletonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
