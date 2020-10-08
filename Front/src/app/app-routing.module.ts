import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlfaComponent} from './pages/alfa/alfa.component';
import {BetaComponent} from './pages/beta/beta.component';

const routes: Routes = [

  {path: 'alfa', component: AlfaComponent},
  {path: 'beta', component: BetaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
