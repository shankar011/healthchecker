
import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout-service/workout-service.component';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number =0;
  minutes: number = 0;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.userName && this.workoutType && this.workoutMinutes) {
      this.workoutService.addWorkout(this.userName, this.workoutType, this.workoutMinutes);
      
      this.userName = '';
      this.workoutType = '';
      this.workoutMinutes = 0;
    } else {
     
      console.error('Please fill out all required fields.');
    }
  }
}
