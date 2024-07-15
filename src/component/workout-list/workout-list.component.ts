import { Component, OnInit } from '@angular/core';
import { WorkoutService } from "../workout-service/workout-service.component";
import { Chart } from 'chart.js';

interface Workout {
  type: string;
  minutes: number;
}

interface User {
  id: number;
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  userData: User[] = [];
  filteredUsers: User[] = [];
  paginatedUsers: User[] = [];
  searchName: string = '';
  selectedWorkoutType: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.userData = this.workoutService.getUserData();
    this.filteredUsers = this.userData;
    this.updatePaginatedUsers();
    this.renderCharts();
  }

  applyFilter() {
    this.filteredUsers = this.userData.filter(user =>
      user.name.toLowerCase().includes(this.searchName.toLowerCase()) &&
      (this.selectedWorkoutType ? user.workouts.some((workout: Workout) => workout.type === this.selectedWorkoutType) : true)
    );
    this.updatePaginatedUsers();
  }

  calculateTotalTime(user: User) {
    return user.workouts.reduce((total: number, workout: Workout) => total + workout.minutes, 0);
  }

  onWorkoutTypeChange() {
    this.applyFilter();
  }

  updatePaginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedUsers = this.filteredUsers.slice(startIndex, endIndex);
    this.renderCharts();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedUsers();
    }
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.filteredUsers.length) {
      this.currentPage++;
      this.updatePaginatedUsers();
    }
  }

  renderCharts() {
    this.paginatedUsers.forEach(user => {
      const ctx = document.getElementById(`chart-${user.id}`) as HTMLCanvasElement;
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: user.workouts.map(workout => workout.type),
            datasets: [{
              label: 'Minutes',
              data: user.workouts.map(workout => workout.minutes),
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    });
  }

  clearFilters() {
    this.searchName = '';
    this.selectedWorkoutType = '';
    this.filteredUsers = this.userData;
    this.updatePaginatedUsers();
  }
}
