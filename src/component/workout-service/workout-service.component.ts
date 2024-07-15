import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private userData = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 },
        { type: 'Functional training', minutes: 20 }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 },
        { type: 'Mobility training', minutes: 25 }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 },
        { type: 'Balance training', minutes: 30 }
      ]
    },
    {
      id: 4,
      name: 'Shankar',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 },
        { type: 'Stretching', minutes: 15 }
      ]
    },
    {
      id: 5,
      name: 'Suraj',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 },
        { type: 'Agility training', minutes: 20 }
      ]
    },
    {
      id: 6,
      name: 'Alice Williams',
      workouts: [
        { type: 'Pilates', minutes: 30 },
        { type: 'Running', minutes: 25 },
        { type: 'Functional training', minutes: 30 }
      ]
    },
    {
      id: 7,
      name: 'Bob Brown',
      workouts: [
        { type: 'Weight Training', minutes: 40 },
        { type: 'Swimming', minutes: 35 },
        { type: 'Mobility training', minutes: 30 }
      ]
    },
    {
      id: 8,
      name: 'Catherine Davis',
      workouts: [
        { type: 'Running', minutes: 45 },
        { type: 'Yoga', minutes: 50 },
        { type: 'Balance training', minutes: 20 }
      ]
    },
    {
      id: 9,
      name: 'Daniel Wilson',
      workouts: [
        { type: 'Cycling', minutes: 60 },
        { type: 'Swimming', minutes: 30 },
        { type: 'Stretching', minutes: 25 }
      ]
    },
    {
      id: 10,
      name: 'Emma Clark',
      workouts: [
        { type: 'Zumba', minutes: 40 },
        { type: 'Pilates', minutes: 35 },
        { type: 'Agility training', minutes: 30 }
      ]
    },
    {
      id: 11,
      name: 'Laura Martin',
      workouts: [
        { type: 'Cycling', minutes: 50 },
        { type: 'Functional training', minutes: 40 },
        { type: 'Running', minutes: 35 }
      ]
    },
    {
      id: 12,
      name: 'James Lewis',
      workouts: [
        { type: 'Swimming', minutes: 45 },
        { type: 'Mobility training', minutes: 20 },
        { type: 'Yoga', minutes: 30 }
      ]
    },
    {
      id: 13,
      name: 'Maria Garcia',
      workouts: [
        { type: 'Balance training', minutes: 25 },
        { type: 'Stretching', minutes: 30 },
        { type: 'Cycling', minutes: 40 }
      ]
    },
    {
      id: 14,
      name: 'David Anderson',
      workouts: [
        { type: 'Agility training', minutes: 35 },
        { type: 'Running', minutes: 45 },
        { type: 'Yoga', minutes: 25 }
      ]
    },
    {
      id: 15,
      name: 'Sophia Martinez',
      workouts: [
        { type: 'Pilates', minutes: 40 },
        { type: 'Functional training', minutes: 30 },
        { type: 'Swimming', minutes: 50 }
      ]
    }
  ];
  

  constructor() { }

  // Method to fetch all user workout data
  getUserData() {
    return this.userData;
  }

  // Method to add a workout for a specific user
  addWorkout(name: string, workoutType: string, minutes: number) {
    const user = this.userData.find(u => u.name === name);
    if (user) {
      user.workouts.push({ type: workoutType, minutes });
    } else {
      console.error(`User '${name}' not found.`);
    }
  }

  // Optional: Method to calculate total workout time for a user
  calculateTotalTime(user: any) { // Specify the type for user parameter
    return user.workouts.reduce((total: number, workout: any) => total + workout.minutes, 0);
  }
}
