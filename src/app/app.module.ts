import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkoutListComponent } from '../component/workout-list/workout-list.component';
import { WorkoutFormComponent } from '../component/workout-form/workout-form.component';
import { WorkoutService } from '../component/workout-service/workout-service.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkoutListComponent,
    WorkoutFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
