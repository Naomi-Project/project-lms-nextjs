// Base Interfaces
interface Teacher {
  id: string;
  name: string;
  subjectSpecializations: string[]; // Subjects taught by the teacher
  email: string;
  classIds: string[]; // Classes assigned to the teacher
}

interface Student {
  id: string;
  name: string;
  age: number;
  grade: number; // Grade level (e.g., 10, 11)
  classId: string; // The class the student belongs to
}

interface Course {
  id: string;
  name: string; // e.g., "Mathematics 101"
  description: string; // Details about the course
  teacherId: string; // Teacher assigned to the course
  classIds: string[]; // Classes that include this course
}

interface Class {
  id: string;
  name: string; // e.g., "Grade 10-A"
  students: string[]; // Student IDs
  teacherIds: string[]; // Teacher IDs
  courseIds: string[]; // Course IDs
}

interface Batch {
  id: string;
  name: string; // e.g., "Batch 2024"
  startYear: number;
  endYear: number;
  classes: Class[]; // Classes in this batch
}

// New Entities
interface Task {
  id: string;
  title: string; // e.g., "Math Homework #1"
  description: string; // Details about the task
  courseId: string; // Links to the related course
  classIds: string[]; // Classes assigned this task
  dueDate: Date; // Deadline for the task
  createdBy: string; // Teacher ID who created the task
}

interface Assignment {
  id: string;
  taskId: string; // Links to the specific task
  studentId: string; // Links to the student who submitted
  submissionDate: Date; // Date of submission
  fileUrl?: string; // Link to the submitted file (optional)
  grade?: number; // Grade for the assignment (optional)
  feedback?: string; // Teacher's feedback (optional)
}

interface Announcement {
  id: string;
  title: string; // e.g., "Midterm Exam Schedule"
  content: string; // Full announcement text
  audience: "students" | "teachers" | "all"; // Target audience
  createdBy: string; // ID of the teacher or admin who created it
  createdAt: Date; // Date and time of announcement creation
  attachments?: string[]; // Optional file URLs (e.g., PDF schedules)
  isUrgent?: boolean; // Optional flag for urgent announcements
}

// Main School Interface
interface School {
  id: string;
  name: string; // School name
  address: string; // School address
  teachers?: Teacher[];
  students?: Student[];
  courses?: Course[];
  batches?: Batch[];
  tasks?: Task[]; // List of tasks created for the school
  assignments?: Assignment[]; // List of assignments submitted by students
  announcements?: Announcement[]; // List of announcements for the school
}

const school: School = {
  id: "sch001",
  name: "Springfield High School",
  address: "123 Main St, Springfield",
  teachers: [
    {
      id: "t1",
      name: "Mr. Smith",
      subjectSpecializations: ["Math"],
      email: "smith@example.com",
      classIds: ["c10A"],
    },
    {
      id: "t2",
      name: "Ms. Johnson",
      subjectSpecializations: ["English"],
      email: "johnson@example.com",
      classIds: ["c10B"],
    },
  ],
  students: [
    { id: "s1", name: "Alice", age: 15, grade: 10, classId: "c10A" },
    { id: "s2", name: "Bob", age: 15, grade: 10, classId: "c10A" },
    { id: "s3", name: "Charlie", age: 15, grade: 10, classId: "c10B" },
  ],
  courses: [
    {
      id: "math101",
      name: "Mathematics 101",
      description: "Introductory Math",
      teacherId: "t1",
      classIds: ["c10A", "c10B"],
    },
  ],
  batches: [
    {
      id: "b2024",
      name: "Batch 2024",
      startYear: 2021,
      endYear: 2024,
      classes: [
        {
          id: "c10A",
          name: "Grade 10-A",
          students: ["s1", "s2"],
          teacherIds: ["t1"],
          courseIds: ["math101"],
        },
        {
          id: "c10B",
          name: "Grade 10-B",
          students: ["s3"],
          teacherIds: ["t2"],
          courseIds: ["math101"],
        },
      ],
    },
  ],
  tasks: [
    {
      id: "task001",
      title: "Math Homework #1",
      description: "Complete exercises 1-10 from Chapter 2.",
      courseId: "math101",
      classIds: ["c10A", "c10B"],
      dueDate: new Date("2024-12-15"),
      createdBy: "t1",
    },
  ],
  assignments: [
    {
      id: "assign001",
      taskId: "task001",
      studentId: "s1",
      submissionDate: new Date("2024-12-14"),
      fileUrl: "https://example.com/uploads/assign001.pdf",
      grade: 90,
      feedback: "Great job! Keep up the good work.",
    },
  ],
  announcements: [
    {
      id: "ann001",
      title: "Midterm Exam Schedule",
      content:
        "The midterm exams will start from December 10th. Check the attached schedule for details.",
      audience: "students",
      createdBy: "t1",
      createdAt: new Date("2024-11-30"),
      attachments: ["https://example.com/uploads/midterm-schedule.pdf"],
    },
  ],
};

export { school };

export type {
  School,
  Teacher,
  Student,
  Course,
  Batch,
  Class,
  Task,
  Assignment,
  Announcement,
};
