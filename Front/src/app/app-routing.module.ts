import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './pages/start/start.component';
import {LettersComponent} from './pages/letters/letters.component';
import {LessonsComponent} from './pages/lessons/lessons.component';
import {AddWordsComponent} from './pages/add-words/add-words.component';

const routes: Routes = [

  {path: '', component: StartComponent},
  {path: 'start', component: StartComponent},
  {path: 'letters', component: LettersComponent},
  {path: 'lessons', component: LessonsComponent},
  {path: 'add words', component: AddWordsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
