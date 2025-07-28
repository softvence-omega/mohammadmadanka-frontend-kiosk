// Define a type for your user (example)
export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  // Define a type for your app's theme (example)
  export type Theme = 'light' | 'dark';
  
  // Define a type for your app's routes (example)
  export type Route = {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
  };

  export type NavItem = {
  title: string;
  path: string;
};


export interface Hole {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}