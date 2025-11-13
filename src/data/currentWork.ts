// Change projectId to switch which project shows in "Currently Working On"
// The projectId must match an id from projects.ts
export const currentWork = {
  projectId: "fitsho",
  status: "In Progress", // Customize: "In Progress", "Beta", "Almost Done", etc.
  tasks: [
    { text: "Set up project structure", completed: true },
    { text: "Design database schema", completed: true },
    { text: "Build authentication system", completed: true },
    { text: "Create workout tracking feature", completed: false },
    { text: "Add nutrition logging", completed: false },
    { text: "Implement progress dashboard", completed: false },
  ],
};
