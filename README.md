# Multi-Step Form Application

A modern React application that implements a multi-step form with a clean and intuitive user interface. The form collects personal information, address details, and user preferences across multiple steps with a smooth navigation experience.

## Features

- Multi-step form navigation
- Progress indicator showing current step
- Form state management
- Input validation
- Responsive design
- Theme preferences
- Summary review

## Technologies Used

### Core Technologies
- React 19
- TypeScript
- Vite 7
- React Router DOM 7

### Styling & UI
- TailwindCSS 4
- Lucide React (for icons)

### Development Tools
- ESLint
- TypeScript ESLint

## How It Works

### Application Structure
The application is organized into several key directories:
- `components` - Reusable UI components
- `context` - Form state management
- `layouts` - Page layout components
- `pages` - Individual form step components
- `reducers` - State management logic
- `types` - TypeScript type definitions

### Data Flow

1. **Form State Management**
   - Uses React Context API for global state management
   - Implements a reducer pattern for state updates
   - Maintains form data across multiple steps

2. **Navigation Flow**
   - Personal Information → Address → Preferences → Summary
   - Progress indicator shows current position
   - Allows forward and backward navigation

3. **Form Steps**
   - **Personal Information**: Collects name and email
   - **Address**: Gathers street, city, and zip code
   - **Preferences**: Handles newsletter, notifications, and theme settings
   - **Summary**: Displays all collected information for review

4. **State Updates**
   - Each form step dispatches actions to update the global state
   - Form data persists while navigating between steps
   - Final submission resets the form state

5. **User Interface**
   - Responsive design that works on multiple screen sizes
   - Visual progress indicator
   - Consistent styling across all steps
   - Input validation and error handling

6. **Theme Management**
   - Allows users to choose between light and dark themes
   - Theme preference is stored in form state

7. **Form Submission**
   - Final step shows a summary of all entered data
   - Submission handler logs form data and resets state
   - Redirects to the beginning after successful submission

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Access the application at `http://localhost:5173`


