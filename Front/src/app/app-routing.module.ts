import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlfaComponent} from './pages/alfa/alfa.component';
import {BetaComponent} from './pages/beta/beta.component';
import {StartComponent} from './pages/start/start.component';

const routes: Routes = [

  {path: '', component: StartComponent},
  {path: 'start', component: StartComponent},
  {path: 'alfa', component: AlfaComponent},
  {path: 'beta', component: BetaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
