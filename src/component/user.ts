interface Workout {
  type: string;
  minutes: number;
}

interface User {
  id: string;
  name: string;
  workouts: Workout[];
}
