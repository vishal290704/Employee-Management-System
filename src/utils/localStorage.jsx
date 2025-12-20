

const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "emp1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Build Login UI",
        description: "Create login page using React and Tailwind",
        date: "2025-01-10",
        category: "Frontend",
        status: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Mobile Navbar",
        description: "Resolve navbar issue on small screens",
        date: "2025-01-12",
        category: "Bug Fix",
        status: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Reduce image size for better performance",
        date: "2025-01-14",
        category: "Performance",
        status: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Rahul",
    email: "emp2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "API Integration",
        description: "Connect frontend with auth API",
        date: "2025-01-11",
        category: "Backend",
        status: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Form Validation",
        description: "Add validation to signup form",
        date: "2025-01-13",
        category: "Frontend",
        status: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Error Handling",
        description: "Handle API error responses properly",
        date: "2025-01-15",
        category: "Backend",
        status: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "emp3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Design Dashboard",
        description: "Create dashboard layout",
        date: "2025-01-09",
        category: "UI/UX",
        status: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Implement Dark Mode",
        description: "Add dark mode using Context API",
        date: "2025-01-11",
        category: "Feature",
        status: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Add Charts",
        description: "Integrate charts in dashboard",
        date: "2025-01-16",
        category: "Feature",
        status: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Suresh",
    email: "emp4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Database Schema",
        description: "Design MongoDB schema",
        date: "2025-01-08",
        category: "Database",
        status: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Index Optimization",
        description: "Improve DB query performance",
        date: "2025-01-12",
        category: "Database",
        status: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Setup Backups",
        description: "Configure automated DB backups",
        date: "2025-01-18",
        category: "DevOps",
        status: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Neha",
    email: "emp5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Write Unit Tests",
        description: "Add tests for core components",
        date: "2025-01-10",
        category: "Testing",
        status: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Test Failures",
        description: "Resolve failing test cases",
        date: "2025-01-14",
        category: "Testing",
        status: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "CI Pipeline Setup",
        description: "Setup GitHub Actions CI",
        date: "2025-01-19",
        category: "DevOps",
        status: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
]

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees, admin};

    
} 