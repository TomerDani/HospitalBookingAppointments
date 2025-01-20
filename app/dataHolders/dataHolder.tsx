export const users = [
    {
      "name": "Mr. Admin",
      "userName": "Admin",
      "password": "123",
      "userType": "Admin"
    },
    {
      "name": "Jane Smith",
      "userName": "janesmith",
      "password": "securepassword456",
      "userType": "Worker"
    },
    {
      "name": "Tomer",
      "userName": "TomerD",
      "password": "tomertomer",
      "userType": "User"
    }
];

export const availableAppointments = [
    {
      type: "Therapy",
      description: "Professional mental health support and counseling.",
      price: 150,
      duration: "1 hour",
      location: "Building A, Room 203",
      professors: [
        {
          name: "Dr. Emily Brown",
          schedule: {
            weekdays: ["Monday", "Wednesday", "Friday"],
            timeRange: { start: "09:00", end: "17:00" },
          },
        },
        {
          name: "Dr. Michael Green",
          schedule: {
            weekdays: ["Tuesday", "Thursday"],
            timeRange: { start: "10:00", end: "15:00" },
          },
        },
      ],
    },
    {
      type: "Physiotherapy",
      description: "Physical therapy to improve mobility and relieve pain.",
      price: 200,
      duration: "1.5 hours",
      location: "Building B, Room 101",
      professors: [
        {
          name: "Dr. Sarah Johnson",
          schedule: {
            weekdays: ["Monday", "Wednesday", "Friday"],
            timeRange: { start: "08:30", end: "16:00" },
          },
        },
        {
          name: "Dr. John Smith",
          schedule: {
            weekdays: ["Tuesday", "Thursday"],
            timeRange: { start: "09:00", end: "14:00" },
          },
        },
      ],
    },
    {
      type: "Nutrition Consultation",
      description: "Guidance on diet and nutrition for a healthier lifestyle.",
      price: 100,
      duration: "45 minutes",
      location: "Building C, Room 302",
      professors: [
        {
          name: "Dr. Lisa Carter",
          schedule: {
            weekdays: ["Monday", "Wednesday"],
            timeRange: { start: "10:00", end: "14:00" },
          },
        },
        {
          name: "Dr. Robert Wilson",
          schedule: {
            weekdays: ["Friday"],
            timeRange: { start: "11:00", end: "15:00" },
          },
        },
      ],
    },
  ];