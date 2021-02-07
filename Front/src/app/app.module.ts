import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {NavComponent} from './nav/nav.component';
import { BetaComponent } from './pages/beta/beta.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule, MatDialogModule, MatIconModule, MatRippleModule, MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material';
import { StartComponent } from './pages/start/start.component';
import { LettersComponent } from './pages/letters/letters.component'
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { ElementComparatorComponent } from './common_components/element-comparator/element-comparator.component';
import {LessonsComponent} from "./pages/lessons/lessons.component";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavComponent,
    LessonsComponent,
    BetaComponent,
    StartComponent,
    LettersComponent,
    ElementComparatorComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatDialogModule,
        RouterModule,
        MatTableModule,
        MatSortModule,
        DragDropModule,
        MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
