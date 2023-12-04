import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './basic/counter/counter.component';
import { CharizardComponent } from './basic/charizard/charizard.component';

const routes: Routes = [
  {
    path: 'basic/counter',
    component: CounterComponent
  },
  {
    path: 'basic/charizard',
    component: CharizardComponent
  },
  {
    path: '**',
    redirectTo: 'basic/counter' // Todas las demas rutas redireccionarán a aquí
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
