const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare sales report",
        taskDescription: "Compile the monthly sales data for the team review.",
        category: "Reporting",
        taskDate: "2025-01-15",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update client database",
        taskDescription: "Ensure client contact information is up-to-date.",
        category: "Data Entry",
        taskDate: "2025-01-17",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Organize team meeting",
        taskDescription:
          "Schedule and prepare agenda for the weekly team meeting.",
        category: "Coordination",
        taskDate: "2025-01-20",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Fix bug in inventory system",
        taskDescription: "Resolve the issue in the stock tracking module.",
        category: "Development",
        taskDate: "2025-01-13",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Create UI mockups",
        taskDescription: "Design mockups for the new dashboard interface.",
        category: "Design",
        taskDate: "2025-01-18",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Run performance tests",
        taskDescription: "Conduct tests on the updated server configuration.",
        category: "Testing",
        taskDate: "2025-01-25",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Onboard new hires",
        taskDescription:
          "Provide orientation and training for the new employees.",
        category: "Human Resources",
        taskDate: "2025-01-12",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update benefits policy",
        taskDescription:
          "Revise the health insurance section of the benefits handbook.",
        category: "Policy",
        taskDate: "2025-01-20",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare budget proposal",
        taskDescription: "Draft the quarterly budget for department approval.",
        category: "Finance",
        taskDate: "2025-01-14",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Conduct market analysis",
        taskDescription:
          "Gather competitor pricing data for the new product launch.",
        category: "Research",
        taskDate: "2025-01-18",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Develop marketing plan",
        taskDescription:
          "Create a strategy for the upcoming social media campaign.",
        category: "Marketing",
        taskDate: "2025-01-22",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Optimize database queries",
        taskDescription:
          "Improve the performance of the query execution times.",
        category: "Database",
        taskDate: "2025-01-10",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Implement security updates",
        taskDescription: "Apply the latest patches to the system.",
        category: "Security",
        taskDate: "2025-01-15",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Write technical documentation",
        taskDescription: "Document the API for the new microservices.",
        category: "Documentation",
        taskDate: "2025-01-19",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return {employees, admin};
};
