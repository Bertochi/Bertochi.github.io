import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { OrdemComprarComponent } from './views/components/ordem/ordem-comprar/ordem-comprar.component';
import { OrdemReadComponent } from './views/components/ordem/ordem-read/ordem-read.component';
import { OrdemVenderComponent } from './views/components/ordem/ordem-vender/ordem-vender.component';
import { OsClosedComponent } from './views/components/os/os-closed/os-closed.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsViewComponent } from './views/components/os/os-view/os-view.component';
import { TecnicoCreateComponent } from './views/components/tecnicos/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './views/components/tecnicos/tecnico-delete/tecnico-delete.component';
import { TecnicoReadComponent } from './views/components/tecnicos/tecnico-read/tecnico-read.component';
import { TecnicoUpdateComponent } from './views/components/tecnicos/tecnico-update/tecnico-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tecnicos/delete/:id',
    component: TecnicoDeleteComponent
  },

  {
    path: 'os',
    component: OsReadComponent
  },
  {
    path: 'os/closed',
    component: OsClosedComponent
  },
  {
    path: 'os/create',
    component: OsCreateComponent
  },
  {
    path: 'os/update/:id',
    component: OsUpdateComponent
  },
  {
    path: 'os/view/:id',
    component: OsViewComponent
  },
  {
    path: 'ordem/pesquisa/:id',
    component: OrdemReadComponent
  },
  {
    path: 'ordem/comprar/:id',
    component: OrdemComprarComponent
  },
  {
    path: 'ordem/vender/:id',
    component: OrdemVenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
