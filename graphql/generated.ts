import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
};

export enum Accreditation {
  A = 'A',
  B = 'B',
  C = 'C'
}

export type Announcement = {
  __typename?: 'Announcement';
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['ID']['output'];
  target: AnnouncementTarget;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export enum AnnouncementTarget {
  All = 'ALL',
  Staff = 'STAFF',
  Student = 'STUDENT'
}

export type Assignment = {
  __typename?: 'Assignment';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  description: Scalars['String']['output'];
  dueDate: Scalars['Timestamp']['output'];
  extendedData?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  subject: Subject;
  subjectId: Scalars['ID']['output'];
  submissions: Array<Submission>;
  title: Scalars['String']['output'];
  type: AssignmentType;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export enum AssignmentType {
  Final = 'FINAL',
  Midterm = 'MIDTERM',
  Quiz = 'QUIZ',
  Task = 'TASK'
}

export type Attendance = {
  __typename?: 'Attendance';
  classroom: Classroom;
  classroomId: Scalars['ID']['output'];
  date: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  status: AttendanceStatus;
  student: User;
  studentId: Scalars['ID']['output'];
};

export enum AttendanceStatus {
  Absent = 'ABSENT',
  Excused = 'EXCUSED',
  Late = 'LATE',
  Permit = 'PERMIT',
  Present = 'PRESENT',
  Sick = 'SICK'
}

export type Authentication = {
  __typename?: 'Authentication';
  authToken: Scalars['String']['output'];
  user: User;
};

export type Classroom = {
  __typename?: 'Classroom';
  attendances: Array<Attendance>;
  guardian: User;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  schedules: Array<Schedule>;
  students: Array<User>;
};

export type CreateAnnouncementInput = {
  content: Scalars['String']['input'];
  target: AnnouncementTarget;
  title: Scalars['String']['input'];
};

export type CreateAssignmentInput = {
  description: Scalars['String']['input'];
  dueDate: Scalars['Timestamp']['input'];
  extendedData?: InputMaybe<Scalars['String']['input']>;
  subjectId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: AssignmentType;
};

export type CreateAttendanceInput = {
  classroomId: Scalars['ID']['input'];
  date: Scalars['Timestamp']['input'];
  status: AttendanceStatus;
  studentId: Scalars['ID']['input'];
};

export type CreateClassroomInput = {
  gradeId: Scalars['ID']['input'];
  guardianId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CreateCurriculumInput = {
  name: Scalars['String']['input'];
};

export type CreateEnrollmentInput = {
  classroomId: Scalars['ID']['input'];
  studentId: Scalars['ID']['input'];
  termId: Scalars['ID']['input'];
};

export type CreateFamilyInput = {
  contact: Scalars['String']['input'];
  name: Scalars['String']['input'];
  relationship: Relationship;
  userId: Scalars['ID']['input'];
};

export type CreateGradeInput = {
  name: Scalars['String']['input'];
};

export type CreateMaterialInput = {
  content: Scalars['String']['input'];
  referenceId?: InputMaybe<Scalars['ID']['input']>;
  subjectId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreatePaymentInput = {
  enrollmentId: Scalars['ID']['input'];
  method: PaymentMethod;
  pricingId: Scalars['ID']['input'];
  reference?: InputMaybe<Scalars['String']['input']>;
  status: PaymentStatus;
};

export type CreatePricingInput = {
  amount: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type CreateReferenceInput = {
  authorId: Scalars['ID']['input'];
  type: ReferenceType;
  url: Scalars['String']['input'];
};

export type CreateScheduleInput = {
  classroomId: Scalars['ID']['input'];
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  day: Day;
  subjectId: Scalars['ID']['input'];
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type CreateSchoolInput = {
  accreditation: Accreditation;
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  foundAt: Scalars['Timestamp']['input'];
  name: Scalars['String']['input'];
  npsn: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateScoreInput = {
  notes?: InputMaybe<Scalars['String']['input']>;
  submissionId: Scalars['ID']['input'];
  value: Scalars['Float']['input'];
};

export type CreateSubjectInput = {
  code: Scalars['String']['input'];
  curriculumId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  gradeId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  teacherId: Scalars['ID']['input'];
};

export type CreateSubmissionInput = {
  assignmentId: Scalars['ID']['input'];
  extendedData?: InputMaybe<Scalars['String']['input']>;
  studentId: Scalars['ID']['input'];
};

export type CreateTermInput = {
  curriculumId: Scalars['ID']['input'];
  endDate: Scalars['Timestamp']['input'];
  name: Scalars['String']['input'];
  schoolId: Scalars['ID']['input'];
  startDate: Scalars['Timestamp']['input'];
};

export type CreateUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth: Scalars['Timestamp']['input'];
  gender: Gender;
  name: Scalars['String']['input'];
  nik?: InputMaybe<Scalars['String']['input']>;
  nisn?: InputMaybe<Scalars['String']['input']>;
  nuptk?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role: Role;
  schoolId?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type Curriculum = {
  __typename?: 'Curriculum';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subjects: Array<Subject>;
  terms: Array<Term>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export enum Day {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type Enrollment = {
  __typename?: 'Enrollment';
  classroom?: Maybe<Classroom>;
  classroomId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  payment?: Maybe<Payment>;
  student?: Maybe<User>;
  studentId: Scalars['ID']['output'];
  term?: Maybe<Term>;
  termId: Scalars['ID']['output'];
};

export type Family = {
  __typename?: 'Family';
  contact: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  relationship: Relationship;
  user: User;
};

export type FilterScoresInput = {
  submissionId?: InputMaybe<Scalars['ID']['input']>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type Grade = {
  __typename?: 'Grade';
  classrooms: Array<Classroom>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subjects: Array<Classroom>;
};

export type LoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Material = {
  __typename?: 'Material';
  assignments: Array<Assignment>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  curriculum: Curriculum;
  grades: Grade;
  id: Scalars['ID']['output'];
  references: Array<Reference>;
  subject: Subject;
  teachers: Array<User>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnnouncement: Announcement;
  createAssignment: Assignment;
  createAttendance: Array<Attendance>;
  createClassroom: Classroom;
  createCurriculum: Curriculum;
  createEnrollment: Enrollment;
  createFamily: Family;
  createGrade: Grade;
  createMaterial: Material;
  createPayment: Payment;
  createPricing: Pricing;
  createReference: Reference;
  createSchedule: Schedule;
  createSchool: School;
  createScore: Score;
  createSubject: Subject;
  createSubmission: Submission;
  createTerm: Term;
  createUser: User;
  deleteAnnouncement: Announcement;
  deleteAssignment: Assignment;
  deleteAttendance: Attendance;
  deleteClassroom: Classroom;
  deleteCurriculum: Curriculum;
  deleteEnrollment: Enrollment;
  deleteFamily: Family;
  deleteGrade: Grade;
  deleteMaterial: Material;
  deletePayment: Payment;
  deletePricing: Pricing;
  deleteReference: Reference;
  deleteSchedule: Schedule;
  deleteSchool: School;
  deleteScore: Score;
  deleteSubject: Subject;
  deleteSubmission: Submission;
  deleteTerm: Term;
  deleteUser: User;
  login: Authentication;
  updateAnnouncement: Announcement;
  updateAssignment: Assignment;
  updateAttendance: Array<Attendance>;
  updateClassroom: Classroom;
  updateCurriculum: Curriculum;
  updateEnrollment: Enrollment;
  updateFamily: Family;
  updateGrade: Grade;
  updateMaterial: Material;
  updatePayment: Payment;
  updatePricing: Pricing;
  updateReference: Reference;
  updateSchedule: Schedule;
  updateSchool: School;
  updateScore: Score;
  updateSubject: Subject;
  updateSubmission: Submission;
  updateTerm: Term;
  updateUser: User;
};


export type MutationCreateAnnouncementArgs = {
  data: CreateAnnouncementInput;
};


export type MutationCreateAssignmentArgs = {
  data: CreateAssignmentInput;
};


export type MutationCreateAttendanceArgs = {
  data: Array<CreateAttendanceInput>;
};


export type MutationCreateClassroomArgs = {
  data: CreateClassroomInput;
};


export type MutationCreateCurriculumArgs = {
  data: CreateCurriculumInput;
};


export type MutationCreateEnrollmentArgs = {
  data: CreateEnrollmentInput;
};


export type MutationCreateFamilyArgs = {
  data: CreateFamilyInput;
};


export type MutationCreateGradeArgs = {
  data: CreateGradeInput;
};


export type MutationCreateMaterialArgs = {
  data: CreateMaterialInput;
};


export type MutationCreatePaymentArgs = {
  data: CreatePaymentInput;
};


export type MutationCreatePricingArgs = {
  data: CreatePricingInput;
};


export type MutationCreateReferenceArgs = {
  data: CreateReferenceInput;
};


export type MutationCreateScheduleArgs = {
  data: CreateScheduleInput;
};


export type MutationCreateSchoolArgs = {
  data: CreateSchoolInput;
};


export type MutationCreateScoreArgs = {
  data: CreateScoreInput;
};


export type MutationCreateSubjectArgs = {
  data: CreateSubjectInput;
};


export type MutationCreateSubmissionArgs = {
  data: CreateSubmissionInput;
};


export type MutationCreateTermArgs = {
  data: CreateTermInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteAnnouncementArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAssignmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAttendanceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteClassroomArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCurriculumArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteEnrollmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteFamilyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteGradeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMaterialArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePaymentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePricingArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteReferenceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteScheduleArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSchoolArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteScoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSubjectArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSubmissionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTermArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationUpdateAnnouncementArgs = {
  data: UpdateAnnouncementInput;
};


export type MutationUpdateAssignmentArgs = {
  data: UpdateAssignmentInput;
};


export type MutationUpdateAttendanceArgs = {
  data: Array<UpdateAttendanceInput>;
};


export type MutationUpdateClassroomArgs = {
  data: UpdateClassroomInput;
};


export type MutationUpdateCurriculumArgs = {
  data: UpdateCurriculumInput;
};


export type MutationUpdateEnrollmentArgs = {
  data: UpdateEnrollmentInput;
};


export type MutationUpdateFamilyArgs = {
  data: UpdateFamilyInput;
};


export type MutationUpdateGradeArgs = {
  data: UpdateGradeInput;
};


export type MutationUpdateMaterialArgs = {
  data: UpdateMaterialInput;
};


export type MutationUpdatePaymentArgs = {
  data: UpdatePaymentInput;
};


export type MutationUpdatePricingArgs = {
  data: UpdatePricingInput;
};


export type MutationUpdateReferenceArgs = {
  data: UpdateReferenceInput;
};


export type MutationUpdateScheduleArgs = {
  data: UpdateScheduleInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateSchoolArgs = {
  data: UpdateSchoolInput;
};


export type MutationUpdateScoreArgs = {
  data: UpdateScoreInput;
};


export type MutationUpdateSubjectArgs = {
  data: UpdateSubjectInput;
};


export type MutationUpdateSubmissionArgs = {
  data: UpdateSubmissionInput;
};


export type MutationUpdateTermArgs = {
  data: UpdateTermInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

export type Payment = {
  __typename?: 'Payment';
  enrollment?: Maybe<Enrollment>;
  id: Scalars['ID']['output'];
  method: PaymentMethod;
  pricing?: Maybe<Pricing>;
  reference: Scalars['String']['output'];
  status: PaymentStatus;
};

export enum PaymentMethod {
  Cash = 'CASH',
  Online = 'ONLINE'
}

export enum PaymentStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type Pricing = {
  __typename?: 'Pricing';
  amount: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type Query = {
  __typename?: 'Query';
  announcement: Announcement;
  announcements: Array<Announcement>;
  assignment: Assignment;
  assignments: Array<Assignment>;
  attendance: Attendance;
  attendances: Array<Attendance>;
  classroom: Classroom;
  classrooms: Array<Classroom>;
  curriculum: Curriculum;
  curriculums: Array<Curriculum>;
  enrollment: Enrollment;
  enrollments: Array<Enrollment>;
  families: Array<Family>;
  family: Family;
  grade: Grade;
  grades: Array<Grade>;
  material: Material;
  materials: Array<Material>;
  me: UserPayload;
  payment: Payment;
  payments: Array<Payment>;
  pricing: Pricing;
  pricings: Array<Pricing>;
  reference: Reference;
  references: Array<Reference>;
  schedule: Schedule;
  schedules: Array<Schedule>;
  school: School;
  schools: Array<School>;
  score: Score;
  scores: Array<Score>;
  subject: Subject;
  subjects: Array<Subject>;
  submission: Submission;
  submissions: Array<Submission>;
  term: Term;
  terms: Array<Term>;
  user: User;
  users: Array<User>;
};


export type QueryAnnouncementArgs = {
  id: Scalars['String']['input'];
};


export type QueryAssignmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryAttendanceArgs = {
  id: Scalars['String']['input'];
};


export type QueryClassroomArgs = {
  id: Scalars['String']['input'];
};


export type QueryCurriculumArgs = {
  id: Scalars['String']['input'];
};


export type QueryEnrollmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryFamilyArgs = {
  id: Scalars['String']['input'];
};


export type QueryGradeArgs = {
  id: Scalars['String']['input'];
};


export type QueryMaterialArgs = {
  id: Scalars['String']['input'];
};


export type QueryPaymentArgs = {
  id: Scalars['String']['input'];
};


export type QueryReferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryScheduleArgs = {
  id: Scalars['String']['input'];
};


export type QuerySchedulesArgs = {
  classroomId: Scalars['String']['input'];
};


export type QuerySchoolArgs = {
  id: Scalars['String']['input'];
};


export type QueryScoreArgs = {
  id: Scalars['String']['input'];
};


export type QueryScoresArgs = {
  filter: FilterScoresInput;
};


export type QuerySubjectArgs = {
  id: Scalars['String']['input'];
};


export type QuerySubmissionArgs = {
  id: Scalars['String']['input'];
};


export type QueryTermArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type Reference = {
  __typename?: 'Reference';
  author: User;
  authorId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  materials: Array<Material>;
  type: ReferenceType;
  url: Scalars['String']['output'];
};

export enum ReferenceType {
  Article = 'ARTICLE',
  Book = 'BOOK',
  Link = 'LINK',
  Other = 'OTHER',
  Video = 'VIDEO'
}

export enum Relationship {
  Father = 'FATHER',
  Husband = 'HUSBAND',
  Mother = 'MOTHER',
  Wife = 'WIFE'
}

export enum Role {
  Admin = 'ADMIN',
  Principal = 'PRINCIPAL',
  Staff = 'STAFF',
  Student = 'STUDENT',
  Teacher = 'TEACHER'
}

export type Schedule = {
  __typename?: 'Schedule';
  classroom?: Maybe<Classroom>;
  classroomId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  day: Day;
  id: Scalars['ID']['output'];
  subject?: Maybe<Subject>;
  subjectId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type School = {
  __typename?: 'School';
  accreditation: Accreditation;
  address: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  email: Scalars['String']['output'];
  foundAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  npsn: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  terms: Array<Term>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  users: Array<User>;
};

export type Score = {
  __typename?: 'Score';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  submissionId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type Subject = {
  __typename?: 'Subject';
  assignments: Array<Assignment>;
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  materials: Array<Material>;
  name: Scalars['String']['output'];
  teachers: Array<User>;
};

export type Submission = {
  __typename?: 'Submission';
  assignment: Assignment;
  assignmentId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  extendedData?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  score?: Maybe<Score>;
  student: User;
  studentId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type Term = {
  __typename?: 'Term';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  curriculum: Curriculum;
  curriculumId: Scalars['ID']['output'];
  endDate: Scalars['Timestamp']['output'];
  enrollments: Array<Enrollment>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  school: School;
  schoolId: Scalars['ID']['output'];
  startDate: Scalars['Timestamp']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type UpdateAnnouncementInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  target?: InputMaybe<AnnouncementTarget>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAssignmentInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['Timestamp']['input']>;
  extendedData?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  subjectId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AssignmentType>;
};

export type UpdateAttendanceInput = {
  classroomId?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['Timestamp']['input']>;
  id: Scalars['ID']['input'];
  status?: InputMaybe<AttendanceStatus>;
  studentId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateClassroomInput = {
  gradeId?: InputMaybe<Scalars['ID']['input']>;
  guardianId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCurriculumInput = {
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEnrollmentInput = {
  classroomId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  studentId?: InputMaybe<Scalars['ID']['input']>;
  termId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateFamilyInput = {
  contact?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  relationship?: InputMaybe<Relationship>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateGradeInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMaterialInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  referenceId?: InputMaybe<Scalars['ID']['input']>;
  subjectId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePaymentInput = {
  enrollmentId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  method?: InputMaybe<PaymentMethod>;
  pricingId?: InputMaybe<Scalars['ID']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PaymentStatus>;
};

export type UpdatePricingInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReferenceInput = {
  authorId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  type?: InputMaybe<ReferenceType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateScheduleInput = {
  classroomId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  day?: InputMaybe<Day>;
  id: Scalars['ID']['input'];
  subjectId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type UpdateSchoolInput = {
  accreditation?: InputMaybe<Accreditation>;
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  foundAt?: InputMaybe<Scalars['Timestamp']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  npsn?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateScoreInput = {
  id: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  submissionId?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateSubjectInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  curriculumId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  gradeId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  teacherId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateSubmissionInput = {
  assignmentId?: InputMaybe<Scalars['ID']['input']>;
  extendedData?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  studentId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateTermInput = {
  curriculumId?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['Timestamp']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  schoolId?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Timestamp']['input']>;
  gender?: InputMaybe<Gender>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  nik?: InputMaybe<Scalars['String']['input']>;
  nisn?: InputMaybe<Scalars['String']['input']>;
  nuptk?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  schoolId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  classroom?: Maybe<Classroom>;
  dateOfBirth: Scalars['Timestamp']['output'];
  families: Array<Family>;
  gender: Gender;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  nik?: Maybe<Scalars['String']['output']>;
  nisn?: Maybe<Scalars['String']['output']>;
  nuptk?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  role: Role;
  school?: Maybe<School>;
  schoolId?: Maybe<Scalars['String']['output']>;
  submissions?: Maybe<Array<Submission>>;
  teaching?: Maybe<Array<Classroom>>;
  username: Scalars['String']['output'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Authentication', authToken: string } };

export type UserPayloadQueryVariables = Exact<{ [key: string]: never; }>;


export type UserPayloadQuery = { __typename?: 'Query', me: { __typename?: 'UserPayload', id: string, username: string, name: string, role: string } };

export type GetUserQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name?: string | null, username: string, role: Role, nik?: string | null, nuptk?: string | null, nisn?: string | null, dateOfBirth: any, gender: Gender, address: string, phone: string, classroom?: { __typename?: 'Classroom', id: string, name: string, guardian: { __typename?: 'User', id: string, name?: string | null, nuptk?: string | null }, schedules: Array<{ __typename?: 'Schedule', id: string, day: Day, classroomId: string }> } | null, families: Array<{ __typename?: 'Family', id: string, name: string, contact: string, relationship: Relationship }>, school?: { __typename?: 'School', id: string, name: string, accreditation: Accreditation } | null } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name?: string | null, username: string, role: Role, nik?: string | null, nuptk?: string | null, nisn?: string | null, dateOfBirth: any, gender: Gender, address: string, phone: string, classroom?: { __typename?: 'Classroom', id: string, name: string, guardian: { __typename?: 'User', id: string, name?: string | null, nuptk?: string | null }, schedules: Array<{ __typename?: 'Schedule', id: string, day: Day, subject?: { __typename?: 'Subject', id: string, name: string } | null }> } | null, families: Array<{ __typename?: 'Family', id: string, name: string, contact: string, relationship: Relationship }> }> };

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name?: string | null, username: string, role: Role, nik?: string | null, nuptk?: string | null, nisn?: string | null, dateOfBirth: any, gender: Gender, address: string, phone: string, schoolId?: string | null } };

export type UpdateUserMutationVariables = Exact<{
  data: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, name?: string | null, username: string, role: Role, nik?: string | null, nuptk?: string | null, nisn?: string | null, dateOfBirth: any, gender: Gender, address: string, phone: string } };

export type DeleteUserMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', id: string, username: string, role: Role, nik?: string | null, nuptk?: string | null, nisn?: string | null, dateOfBirth: any, gender: Gender, address: string, phone: string } };

export type GetFamilyQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetFamilyQuery = { __typename?: 'Query', family: { __typename?: 'Family', id: string, name: string, contact: string, relationship: Relationship, user: { __typename?: 'User', id: string, username: string, role: Role, nik?: string | null, nuptk?: string | null, nisn?: string | null, dateOfBirth: any, gender: Gender, address: string, phone: string } } };

export type GetFamiliesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFamiliesQuery = { __typename?: 'Query', families: Array<{ __typename?: 'Family', id: string, name: string, contact: string, relationship: Relationship }> };

export type CreateFamilyMutationVariables = Exact<{
  data: CreateFamilyInput;
}>;


export type CreateFamilyMutation = { __typename?: 'Mutation', createFamily: { __typename?: 'Family', id: string, name: string, contact: string, relationship: Relationship } };

export type UpdateFamilyMutationVariables = Exact<{
  data: UpdateFamilyInput;
}>;


export type UpdateFamilyMutation = { __typename?: 'Mutation', updateFamily: { __typename?: 'Family', id: string, name: string, contact: string, relationship: Relationship } };

export type DeleteFamilyMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteFamilyMutation = { __typename?: 'Mutation', deleteFamily: { __typename?: 'Family', id: string, name: string, contact: string, relationship: Relationship } };

export type GetSchoolQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetSchoolQuery = { __typename?: 'Query', school: { __typename?: 'School', id: string, name: string, npsn: string, accreditation: Accreditation, address: string, phone: string, email: string, foundAt: any } };

export type GetSchoolsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSchoolsQuery = { __typename?: 'Query', schools: Array<{ __typename?: 'School', id: string, name: string, npsn: string, accreditation: Accreditation, address: string, phone: string, email: string, foundAt: any, createdAt?: any | null, updatedAt?: any | null, terms: Array<{ __typename?: 'Term', id: string, name: string, startDate: any, endDate: any, schoolId: string, curriculumId: string, createdAt?: any | null, updatedAt?: any | null }>, users: Array<{ __typename?: 'User', id: string, username: string, role: Role, nik?: string | null, nuptk?: string | null, nisn?: string | null, dateOfBirth: any, gender: Gender, address: string, phone: string }> }> };

export type CreateSchoolMutationVariables = Exact<{
  data: CreateSchoolInput;
}>;


export type CreateSchoolMutation = { __typename?: 'Mutation', createSchool: { __typename?: 'School', id: string, name: string, npsn: string, accreditation: Accreditation, address: string, phone: string, email: string, foundAt: any, createdAt?: any | null, updatedAt?: any | null } };

export type UpdateSchoolMutationVariables = Exact<{
  data: UpdateSchoolInput;
}>;


export type UpdateSchoolMutation = { __typename?: 'Mutation', updateSchool: { __typename?: 'School', id: string, name: string, npsn: string, accreditation: Accreditation, address: string, phone: string, email: string, foundAt: any } };

export type DeleteSchoolMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteSchoolMutation = { __typename?: 'Mutation', deleteSchool: { __typename?: 'School', id: string, name: string, npsn: string, accreditation: Accreditation, address: string, phone: string, email: string, foundAt: any, createdAt?: any | null, updatedAt?: any | null } };

export type GetEnrollmentQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetEnrollmentQuery = { __typename?: 'Query', enrollment: { __typename?: 'Enrollment', id: string, studentId: string, classroomId: string, termId: string, term?: { __typename?: 'Term', id: string, name: string, startDate: any, endDate: any, schoolId: string, curriculumId: string } | null, classroom?: { __typename?: 'Classroom', id: string, name: string, guardian: { __typename?: 'User', id: string, name?: string | null } } | null, student?: { __typename?: 'User', id: string, name?: string | null, username: string, role: Role, gender: Gender, address: string, phone: string } | null } };

export type GetEnrollmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEnrollmentsQuery = { __typename?: 'Query', enrollments: Array<{ __typename?: 'Enrollment', id: string, studentId: string, classroomId: string, termId: string, term?: { __typename?: 'Term', id: string, name: string } | null, classroom?: { __typename?: 'Classroom', id: string, name: string } | null, student?: { __typename?: 'User', id: string, name?: string | null } | null }> };

export type CreateEnrollmentMutationVariables = Exact<{
  data: CreateEnrollmentInput;
}>;


export type CreateEnrollmentMutation = { __typename?: 'Mutation', createEnrollment: { __typename?: 'Enrollment', id: string, studentId: string, classroomId: string, termId: string } };

export type UpdateEnrollmentMutationVariables = Exact<{
  data: UpdateEnrollmentInput;
}>;


export type UpdateEnrollmentMutation = { __typename?: 'Mutation', updateEnrollment: { __typename?: 'Enrollment', id: string, studentId: string, classroomId: string, termId: string } };

export type DeleteEnrollmentMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteEnrollmentMutation = { __typename?: 'Mutation', deleteEnrollment: { __typename?: 'Enrollment', id: string, studentId: string, classroomId: string, termId: string } };

export type GetScheduleQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetScheduleQuery = { __typename?: 'Query', schedule: { __typename?: 'Schedule', id: string, day: Day, classroomId: string, subjectId: string, createdAt?: any | null, updatedAt?: any | null } };

export type GetSchedulesQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetSchedulesQuery = { __typename?: 'Query', schedules: Array<{ __typename?: 'Schedule', id: string, day: Day, classroomId: string, subjectId: string, createdAt?: any | null, updatedAt?: any | null, subject?: { __typename?: 'Subject', id: string, name: string } | null, classroom?: { __typename?: 'Classroom', id: string, name: string, guardian: { __typename?: 'User', id: string, name?: string | null, nuptk?: string | null }, students: Array<{ __typename?: 'User', id: string, name?: string | null, nisn?: string | null }> } | null }> };

export type CreateScheduleMutationVariables = Exact<{
  data: CreateScheduleInput;
}>;


export type CreateScheduleMutation = { __typename?: 'Mutation', createSchedule: { __typename?: 'Schedule', id: string, day: Day, classroomId: string, subjectId: string } };

export type UpdateScheduleMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: UpdateScheduleInput;
}>;


export type UpdateScheduleMutation = { __typename?: 'Mutation', updateSchedule: { __typename?: 'Schedule', id: string, day: Day, classroomId: string, subjectId: string } };

export type DeleteScheduleMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteScheduleMutation = { __typename?: 'Mutation', deleteSchedule: { __typename?: 'Schedule', id: string, day: Day, classroomId: string, subjectId: string } };

export type GetAttendanceQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetAttendanceQuery = { __typename?: 'Query', attendance: { __typename?: 'Attendance', id: string, classroomId: string, studentId: string, date: any, status: AttendanceStatus, student: { __typename?: 'User', id: string, name?: string | null, username: string } } };

export type GetAttendancesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAttendancesQuery = { __typename?: 'Query', attendances: Array<{ __typename?: 'Attendance', id: string, classroomId: string, studentId: string, date: any, status: AttendanceStatus, student: { __typename?: 'User', id: string, name?: string | null, username: string } }> };

export type CreateAttendanceMutationVariables = Exact<{
  data: Array<CreateAttendanceInput> | CreateAttendanceInput;
}>;


export type CreateAttendanceMutation = { __typename?: 'Mutation', createAttendance: Array<{ __typename?: 'Attendance', id: string, classroomId: string, studentId: string, date: any, status: AttendanceStatus }> };

export type UpdateAttendanceMutationVariables = Exact<{
  data: Array<UpdateAttendanceInput> | UpdateAttendanceInput;
}>;


export type UpdateAttendanceMutation = { __typename?: 'Mutation', updateAttendance: Array<{ __typename?: 'Attendance', id: string, classroomId: string, studentId: string, date: any, status: AttendanceStatus }> };

export type DeleteAttendanceMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteAttendanceMutation = { __typename?: 'Mutation', deleteAttendance: { __typename?: 'Attendance', id: string, classroomId: string, studentId: string, date: any, status: AttendanceStatus } };

export type GetTermQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetTermQuery = { __typename?: 'Query', term: { __typename?: 'Term', id: string, name: string, startDate: any, endDate: any, schoolId: string, curriculumId: string } };

export type GetTermsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTermsQuery = { __typename?: 'Query', terms: Array<{ __typename?: 'Term', id: string, name: string, startDate: any, endDate: any, schoolId: string, curriculumId: string, createdAt?: any | null, updatedAt?: any | null }> };

export type CreateTermMutationVariables = Exact<{
  data: CreateTermInput;
}>;


export type CreateTermMutation = { __typename?: 'Mutation', createTerm: { __typename?: 'Term', id: string, name: string, startDate: any, endDate: any, schoolId: string, curriculumId: string, createdAt?: any | null, updatedAt?: any | null } };

export type UpdateTermMutationVariables = Exact<{
  data: UpdateTermInput;
}>;


export type UpdateTermMutation = { __typename?: 'Mutation', updateTerm: { __typename?: 'Term', id: string, name: string, startDate: any, endDate: any, schoolId: string, curriculumId: string } };

export type DeleteTermMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteTermMutation = { __typename?: 'Mutation', deleteTerm: { __typename?: 'Term', id: string, name: string, startDate: any, endDate: any, schoolId: string, curriculumId: string, createdAt?: any | null, updatedAt?: any | null } };

export type GetCurriculumQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetCurriculumQuery = { __typename?: 'Query', curriculum: { __typename?: 'Curriculum', id: string, name: string, createdAt?: any | null, updatedAt?: any | null, subjects: Array<{ __typename?: 'Subject', id: string, name: string, code: string, teachers: Array<{ __typename?: 'User', id: string, name?: string | null, nuptk?: string | null }> }> } };

export type GetCurriculumsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurriculumsQuery = { __typename?: 'Query', curriculums: Array<{ __typename?: 'Curriculum', id: string, name: string, createdAt?: any | null, updatedAt?: any | null, subjects: Array<{ __typename?: 'Subject', id: string, name: string, code: string, teachers: Array<{ __typename?: 'User', id: string, name?: string | null, nuptk?: string | null }> }> }> };

export type CreateCurriculumMutationVariables = Exact<{
  data: CreateCurriculumInput;
}>;


export type CreateCurriculumMutation = { __typename?: 'Mutation', createCurriculum: { __typename?: 'Curriculum', id: string, name: string, createdAt?: any | null, updatedAt?: any | null } };

export type UpdateCurriculumMutationVariables = Exact<{
  data: UpdateCurriculumInput;
}>;


export type UpdateCurriculumMutation = { __typename?: 'Mutation', updateCurriculum: { __typename?: 'Curriculum', id: string, name: string, createdAt?: any | null, updatedAt?: any | null } };

export type DeleteCurriculumMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteCurriculumMutation = { __typename?: 'Mutation', deleteCurriculum: { __typename?: 'Curriculum', id: string, name: string, createdAt?: any | null, updatedAt?: any | null } };

export type GetSubjectQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetSubjectQuery = { __typename?: 'Query', subject: { __typename?: 'Subject', id: string, name: string, code: string, description?: string | null, teachers: Array<{ __typename?: 'User', id: string, username: string, role: Role, nik?: string | null, nuptk?: string | null, nisn?: string | null, dateOfBirth: any, gender: Gender, address: string, phone: string }> } };

export type GetSubjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubjectsQuery = { __typename?: 'Query', subjects: Array<{ __typename?: 'Subject', id: string, name: string, code: string, description?: string | null }> };

export type CreateSubjectMutationVariables = Exact<{
  data: CreateSubjectInput;
}>;


export type CreateSubjectMutation = { __typename?: 'Mutation', createSubject: { __typename?: 'Subject', id: string, name: string, code: string, description?: string | null } };

export type UpdateSubjectMutationVariables = Exact<{
  data: UpdateSubjectInput;
}>;


export type UpdateSubjectMutation = { __typename?: 'Mutation', updateSubject: { __typename?: 'Subject', id: string, name: string, code: string, description?: string | null } };

export type DeleteSubjectMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteSubjectMutation = { __typename?: 'Mutation', deleteSubject: { __typename?: 'Subject', id: string, name: string, code: string, description?: string | null } };

export type GetMaterialQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetMaterialQuery = { __typename?: 'Query', material: { __typename?: 'Material', id: string, title: string, content: string, createdAt?: any | null, updatedAt?: any | null, subject: { __typename?: 'Subject', id: string, name: string, code: string, description?: string | null, teachers: Array<{ __typename?: 'User', id: string, username: string }> }, assignments: Array<{ __typename?: 'Assignment', id: string, title: string, description: string, dueDate: any, type: AssignmentType }>, teachers: Array<{ __typename?: 'User', id: string, username: string }>, curriculum: { __typename?: 'Curriculum', id: string, name: string }, grades: { __typename?: 'Grade', id: string, name: string }, references: Array<{ __typename?: 'Reference', id: string, url: string, type: ReferenceType, authorId: string, author: { __typename?: 'User', id: string, name?: string | null } }> } };

export type GetMaterialsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMaterialsQuery = { __typename?: 'Query', materials: Array<{ __typename?: 'Material', id: string, title: string, content: string, createdAt?: any | null, updatedAt?: any | null, subject: { __typename?: 'Subject', id: string, name: string, code: string, description?: string | null, teachers: Array<{ __typename?: 'User', id: string, username: string }> }, assignments: Array<{ __typename?: 'Assignment', id: string, title: string, description: string, dueDate: any, type: AssignmentType }>, teachers: Array<{ __typename?: 'User', id: string, username: string }>, curriculum: { __typename?: 'Curriculum', id: string, name: string }, grades: { __typename?: 'Grade', id: string, name: string }, references: Array<{ __typename?: 'Reference', id: string, url: string, type: ReferenceType, authorId: string }> }> };

export type CreateMaterialMutationVariables = Exact<{
  data: CreateMaterialInput;
}>;


export type CreateMaterialMutation = { __typename?: 'Mutation', createMaterial: { __typename?: 'Material', id: string, title: string, content: string } };

export type UpdateMaterialMutationVariables = Exact<{
  data: UpdateMaterialInput;
}>;


export type UpdateMaterialMutation = { __typename?: 'Mutation', updateMaterial: { __typename?: 'Material', id: string, title: string, content: string } };

export type DeleteMaterialMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteMaterialMutation = { __typename?: 'Mutation', deleteMaterial: { __typename?: 'Material', id: string, title: string, content: string } };

export type GetAssignmentQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetAssignmentQuery = { __typename?: 'Query', assignment: { __typename?: 'Assignment', id: string, title: string, description: string, dueDate: any, type: AssignmentType, extendedData?: string | null, subjectId: string, subject: { __typename?: 'Subject', id: string, name: string, code: string, description?: string | null, teachers: Array<{ __typename?: 'User', id: string, username: string }> }, submissions: Array<{ __typename?: 'Submission', id: string, extendedData?: string | null, assignmentId: string, studentId: string, score?: { __typename?: 'Score', id: string, value?: number | null, notes?: string | null } | null }> } };

export type GetAssignmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAssignmentsQuery = { __typename?: 'Query', assignments: Array<{ __typename?: 'Assignment', id: string, title: string, description: string, dueDate: any, type: AssignmentType, extendedData?: string | null, subjectId: string, subject: { __typename?: 'Subject', id: string, name: string, code: string, description?: string | null, teachers: Array<{ __typename?: 'User', id: string, username: string }> }, submissions: Array<{ __typename?: 'Submission', id: string, extendedData?: string | null, assignmentId: string, studentId: string, score?: { __typename?: 'Score', id: string, value?: number | null, notes?: string | null } | null }> }> };

export type CreateAssignmentMutationVariables = Exact<{
  data: CreateAssignmentInput;
}>;


export type CreateAssignmentMutation = { __typename?: 'Mutation', createAssignment: { __typename?: 'Assignment', id: string, title: string, description: string, extendedData?: string | null, dueDate: any, type: AssignmentType, subjectId: string } };

export type UpdateAssignmentMutationVariables = Exact<{
  data: UpdateAssignmentInput;
}>;


export type UpdateAssignmentMutation = { __typename?: 'Mutation', updateAssignment: { __typename?: 'Assignment', id: string, title: string, description: string, extendedData?: string | null, dueDate: any, type: AssignmentType, subjectId: string } };

export type DeleteAssignmentMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteAssignmentMutation = { __typename?: 'Mutation', deleteAssignment: { __typename?: 'Assignment', id: string, title: string, description: string, extendedData?: string | null, dueDate: any, type: AssignmentType, subjectId: string } };

export type GetSubmissionQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetSubmissionQuery = { __typename?: 'Query', submission: { __typename?: 'Submission', id: string, assignmentId: string, studentId: string, extendedData?: string | null, createdAt?: any | null, updatedAt?: any | null, score?: { __typename?: 'Score', id: string, value?: number | null, notes?: string | null } | null } };

export type GetSubmissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubmissionsQuery = { __typename?: 'Query', submissions: Array<{ __typename?: 'Submission', id: string, assignmentId: string, studentId: string, extendedData?: string | null, createdAt?: any | null, updatedAt?: any | null, score?: { __typename?: 'Score', id: string, value?: number | null, notes?: string | null } | null, student: { __typename?: 'User', id: string, username: string, role: Role }, assignment: { __typename?: 'Assignment', title: string, dueDate: any, type: AssignmentType, description: string, extendedData?: string | null, subject: { __typename?: 'Subject', id: string, name: string, code: string, teachers: Array<{ __typename?: 'User', id: string, username: string, role: Role }> } } }> };

export type CreateSubmissionMutationVariables = Exact<{
  data: CreateSubmissionInput;
}>;


export type CreateSubmissionMutation = { __typename?: 'Mutation', createSubmission: { __typename?: 'Submission', id: string, assignmentId: string, studentId: string, extendedData?: string | null } };

export type UpdateSubmissionMutationVariables = Exact<{
  data: UpdateSubmissionInput;
}>;


export type UpdateSubmissionMutation = { __typename?: 'Mutation', updateSubmission: { __typename?: 'Submission', id: string, assignmentId: string, studentId: string, extendedData?: string | null } };

export type DeleteSubmissionMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteSubmissionMutation = { __typename?: 'Mutation', deleteSubmission: { __typename?: 'Submission', id: string } };

export type GetScoreQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetScoreQuery = { __typename?: 'Query', score: { __typename?: 'Score', id: string, value?: number | null, notes?: string | null, createdAt?: any | null, updatedAt?: any | null } };

export type GetScoresQueryVariables = Exact<{
  filter: FilterScoresInput;
}>;


export type GetScoresQuery = { __typename?: 'Query', scores: Array<{ __typename?: 'Score', id: string, value?: number | null, notes?: string | null, createdAt?: any | null, updatedAt?: any | null }> };

export type CreateScoreMutationVariables = Exact<{
  data: CreateScoreInput;
}>;


export type CreateScoreMutation = { __typename?: 'Mutation', createScore: { __typename?: 'Score', id: string, submissionId: string, value?: number | null, notes?: string | null } };

export type UpdateScoreMutationVariables = Exact<{
  data: UpdateScoreInput;
}>;


export type UpdateScoreMutation = { __typename?: 'Mutation', updateScore: { __typename?: 'Score', id: string, submissionId: string, value?: number | null, notes?: string | null } };

export type DeleteScoreMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteScoreMutation = { __typename?: 'Mutation', deleteScore: { __typename?: 'Score', id: string } };

export type GetGradeQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetGradeQuery = { __typename?: 'Query', grade: { __typename?: 'Grade', id: string, name: string, classrooms: Array<{ __typename?: 'Classroom', id: string, name: string }>, subjects: Array<{ __typename?: 'Classroom', id: string, name: string }> } };

export type GetGradesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGradesQuery = { __typename?: 'Query', grades: Array<{ __typename?: 'Grade', id: string, name: string, classrooms: Array<{ __typename?: 'Classroom', id: string, name: string, students: Array<{ __typename?: 'User', id: string, name?: string | null, nisn?: string | null }>, guardian: { __typename?: 'User', id: string, name?: string | null } }> }> };

export type CreateGradeMutationVariables = Exact<{
  data: CreateGradeInput;
}>;


export type CreateGradeMutation = { __typename?: 'Mutation', createGrade: { __typename?: 'Grade', id: string, name: string } };

export type UpdateGradeMutationVariables = Exact<{
  data: UpdateGradeInput;
}>;


export type UpdateGradeMutation = { __typename?: 'Mutation', updateGrade: { __typename?: 'Grade', id: string, name: string } };

export type DeleteGradeMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteGradeMutation = { __typename?: 'Mutation', deleteGrade: { __typename?: 'Grade', id: string, name: string } };

export type GetClassroomQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetClassroomQuery = { __typename?: 'Query', classroom: { __typename?: 'Classroom', id: string, name: string, guardian: { __typename?: 'User', id: string, name?: string | null, nuptk?: string | null }, schedules: Array<{ __typename?: 'Schedule', id: string, day: Day, classroomId: string, subjectId: string }>, students: Array<{ __typename?: 'User', id: string, name?: string | null, nisn?: string | null }> } };

export type GetClassroomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClassroomsQuery = { __typename?: 'Query', classrooms: Array<{ __typename?: 'Classroom', id: string, name: string, guardian: { __typename?: 'User', id: string, name?: string | null, nuptk?: string | null }, schedules: Array<{ __typename?: 'Schedule', id: string, day: Day, classroomId: string, subjectId: string, subject?: { __typename?: 'Subject', id: string, name: string } | null }>, students: Array<{ __typename?: 'User', id: string, name?: string | null, nisn?: string | null, classroom?: { __typename?: 'Classroom', id: string, name: string, schedules: Array<{ __typename?: 'Schedule', id: string, day: Day, subjectId: string, subject?: { __typename?: 'Subject', id: string, name: string } | null }> } | null, school?: { __typename?: 'School', id: string, name: string, npsn: string } | null }> }> };

export type CreateClassroomMutationVariables = Exact<{
  data: CreateClassroomInput;
}>;


export type CreateClassroomMutation = { __typename?: 'Mutation', createClassroom: { __typename?: 'Classroom', id: string, name: string, guardian: { __typename?: 'User', id: string }, students: Array<{ __typename?: 'User', id: string }> } };

export type UpdateClassroomMutationVariables = Exact<{
  data: UpdateClassroomInput;
}>;


export type UpdateClassroomMutation = { __typename?: 'Mutation', updateClassroom: { __typename?: 'Classroom', id: string, name: string } };

export type DeleteClassroomMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteClassroomMutation = { __typename?: 'Mutation', deleteClassroom: { __typename?: 'Classroom', id: string, name: string } };

export type GetAnnouncementQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetAnnouncementQuery = { __typename?: 'Query', announcement: { __typename?: 'Announcement', id: string, title: string, content: string, target: AnnouncementTarget, createdAt?: any | null, updatedAt?: any | null } };

export type GetAnnouncementsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnnouncementsQuery = { __typename?: 'Query', announcements: Array<{ __typename?: 'Announcement', id: string, title: string, content: string, target: AnnouncementTarget, createdAt?: any | null, updatedAt?: any | null }> };

export type CreateAnnouncementMutationVariables = Exact<{
  data: CreateAnnouncementInput;
}>;


export type CreateAnnouncementMutation = { __typename?: 'Mutation', createAnnouncement: { __typename?: 'Announcement', id: string, title: string, content: string, target: AnnouncementTarget, createdAt?: any | null, updatedAt?: any | null } };

export type UpdateAnnouncementMutationVariables = Exact<{
  data: UpdateAnnouncementInput;
}>;


export type UpdateAnnouncementMutation = { __typename?: 'Mutation', updateAnnouncement: { __typename?: 'Announcement', id: string, title: string, content: string, target: AnnouncementTarget, createdAt?: any | null, updatedAt?: any | null } };

export type DeleteAnnouncementMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteAnnouncementMutation = { __typename?: 'Mutation', deleteAnnouncement: { __typename?: 'Announcement', id: string, title: string, content: string, target: AnnouncementTarget, createdAt?: any | null, updatedAt?: any | null } };

export type GetReferenceQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetReferenceQuery = { __typename?: 'Query', reference: { __typename?: 'Reference', id: string, url: string, type: ReferenceType, authorId: string, author: { __typename?: 'User', id: string, name?: string | null, username: string }, materials: Array<{ __typename?: 'Material', id: string, title: string }> } };

export type GetReferencesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReferencesQuery = { __typename?: 'Query', references: Array<{ __typename?: 'Reference', id: string, url: string, type: ReferenceType, authorId: string, author: { __typename?: 'User', id: string, name?: string | null }, materials: Array<{ __typename?: 'Material', id: string, title: string }> }> };

export type CreateReferenceMutationVariables = Exact<{
  data: CreateReferenceInput;
}>;


export type CreateReferenceMutation = { __typename?: 'Mutation', createReference: { __typename?: 'Reference', id: string, url: string, type: ReferenceType, authorId: string } };

export type UpdateReferenceMutationVariables = Exact<{
  data: UpdateReferenceInput;
}>;


export type UpdateReferenceMutation = { __typename?: 'Mutation', updateReference: { __typename?: 'Reference', id: string, url: string, type: ReferenceType, authorId: string } };

export type DeleteReferenceMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteReferenceMutation = { __typename?: 'Mutation', deleteReference: { __typename?: 'Reference', id: string, url: string, type: ReferenceType, authorId: string } };

export type GetPaymentQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetPaymentQuery = { __typename?: 'Query', payment: { __typename?: 'Payment', id: string, status: PaymentStatus, reference: string, method: PaymentMethod, pricing?: { __typename?: 'Pricing', id: string, name: string, amount: number, createdAt?: any | null, updatedAt?: any | null } | null, enrollment?: { __typename?: 'Enrollment', id: string } | null } };

export type GetPaymentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaymentsQuery = { __typename?: 'Query', payments: Array<{ __typename?: 'Payment', id: string, status: PaymentStatus, reference: string, method: PaymentMethod, pricing?: { __typename?: 'Pricing', id: string, name: string, amount: number, createdAt?: any | null, updatedAt?: any | null } | null, enrollment?: { __typename?: 'Enrollment', id: string } | null }> };

export type CreatePaymentMutationVariables = Exact<{
  data: CreatePaymentInput;
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'Payment', id: string, status: PaymentStatus, reference: string, method: PaymentMethod, pricing?: { __typename?: 'Pricing', id: string } | null, enrollment?: { __typename?: 'Enrollment', id: string } | null } };

export type UpdatePaymentMutationVariables = Exact<{
  data: UpdatePaymentInput;
}>;


export type UpdatePaymentMutation = { __typename?: 'Mutation', updatePayment: { __typename?: 'Payment', id: string, status: PaymentStatus, reference: string, method: PaymentMethod, pricing?: { __typename?: 'Pricing', id: string } | null, enrollment?: { __typename?: 'Enrollment', id: string } | null } };

export type DeletePaymentMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeletePaymentMutation = { __typename?: 'Mutation', deletePayment: { __typename?: 'Payment', id: string, status: PaymentStatus, reference: string, method: PaymentMethod, pricing?: { __typename?: 'Pricing', id: string } | null, enrollment?: { __typename?: 'Enrollment', id: string } | null } };

export type GetPricingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPricingQuery = { __typename?: 'Query', pricing: { __typename?: 'Pricing', id: string, name: string, amount: number, createdAt?: any | null, updatedAt?: any | null } };

export type GetPricingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPricingsQuery = { __typename?: 'Query', pricings: Array<{ __typename?: 'Pricing', id: string, name: string, amount: number, createdAt?: any | null, updatedAt?: any | null }> };

export type CreatePricingMutationVariables = Exact<{
  data: CreatePricingInput;
}>;


export type CreatePricingMutation = { __typename?: 'Mutation', createPricing: { __typename?: 'Pricing', id: string, name: string, amount: number } };

export type UpdatePricingMutationVariables = Exact<{
  data: UpdatePricingInput;
}>;


export type UpdatePricingMutation = { __typename?: 'Mutation', updatePricing: { __typename?: 'Pricing', id: string, name: string, amount: number } };

export type DeletePricingMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeletePricingMutation = { __typename?: 'Mutation', deletePricing: { __typename?: 'Pricing', id: string, name: string, amount: number } };


export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    authToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UserPayloadDocument = gql`
    query UserPayload {
  me {
    id
    username
    name
    role
  }
}
    `;

/**
 * __useUserPayloadQuery__
 *
 * To run a query within a React component, call `useUserPayloadQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPayloadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPayloadQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserPayloadQuery(baseOptions?: Apollo.QueryHookOptions<UserPayloadQuery, UserPayloadQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserPayloadQuery, UserPayloadQueryVariables>(UserPayloadDocument, options);
      }
export function useUserPayloadLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserPayloadQuery, UserPayloadQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserPayloadQuery, UserPayloadQueryVariables>(UserPayloadDocument, options);
        }
export function useUserPayloadSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserPayloadQuery, UserPayloadQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserPayloadQuery, UserPayloadQueryVariables>(UserPayloadDocument, options);
        }
export type UserPayloadQueryHookResult = ReturnType<typeof useUserPayloadQuery>;
export type UserPayloadLazyQueryHookResult = ReturnType<typeof useUserPayloadLazyQuery>;
export type UserPayloadSuspenseQueryHookResult = ReturnType<typeof useUserPayloadSuspenseQuery>;
export type UserPayloadQueryResult = Apollo.QueryResult<UserPayloadQuery, UserPayloadQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($data: String!) {
  user(id: $data) {
    id
    name
    username
    role
    nik
    nuptk
    nisn
    dateOfBirth
    gender
    address
    phone
    classroom {
      id
      name
      guardian {
        id
        name
        nuptk
      }
      schedules {
        id
        day
        classroomId
      }
    }
    families {
      id
      name
      contact
      relationship
    }
    school {
      id
      name
      accreditation
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    name
    username
    role
    nik
    nuptk
    nisn
    dateOfBirth
    gender
    address
    phone
    classroom {
      id
      name
      guardian {
        id
        name
        nuptk
      }
      schedules {
        id
        subject {
          id
          name
        }
        day
      }
    }
    families {
      id
      name
      contact
      relationship
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data) {
    id
    name
    username
    role
    nik
    nuptk
    nisn
    dateOfBirth
    gender
    address
    phone
    schoolId
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UpdateUserInput!) {
  updateUser(data: $data) {
    id
    name
    username
    role
    nik
    nuptk
    nisn
    dateOfBirth
    gender
    address
    phone
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($data: String!) {
  deleteUser(id: $data) {
    id
    username
    role
    nik
    nuptk
    nisn
    dateOfBirth
    gender
    address
    phone
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const GetFamilyDocument = gql`
    query GetFamily($data: String!) {
  family(id: $data) {
    id
    name
    contact
    relationship
    user {
      id
      username
      role
      nik
      nuptk
      nisn
      dateOfBirth
      gender
      address
      phone
    }
  }
}
    `;

/**
 * __useGetFamilyQuery__
 *
 * To run a query within a React component, call `useGetFamilyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFamilyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFamilyQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetFamilyQuery(baseOptions: Apollo.QueryHookOptions<GetFamilyQuery, GetFamilyQueryVariables> & ({ variables: GetFamilyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFamilyQuery, GetFamilyQueryVariables>(GetFamilyDocument, options);
      }
export function useGetFamilyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFamilyQuery, GetFamilyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFamilyQuery, GetFamilyQueryVariables>(GetFamilyDocument, options);
        }
export function useGetFamilySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFamilyQuery, GetFamilyQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFamilyQuery, GetFamilyQueryVariables>(GetFamilyDocument, options);
        }
export type GetFamilyQueryHookResult = ReturnType<typeof useGetFamilyQuery>;
export type GetFamilyLazyQueryHookResult = ReturnType<typeof useGetFamilyLazyQuery>;
export type GetFamilySuspenseQueryHookResult = ReturnType<typeof useGetFamilySuspenseQuery>;
export type GetFamilyQueryResult = Apollo.QueryResult<GetFamilyQuery, GetFamilyQueryVariables>;
export const GetFamiliesDocument = gql`
    query GetFamilies {
  families {
    id
    name
    contact
    relationship
  }
}
    `;

/**
 * __useGetFamiliesQuery__
 *
 * To run a query within a React component, call `useGetFamiliesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFamiliesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFamiliesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFamiliesQuery(baseOptions?: Apollo.QueryHookOptions<GetFamiliesQuery, GetFamiliesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFamiliesQuery, GetFamiliesQueryVariables>(GetFamiliesDocument, options);
      }
export function useGetFamiliesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFamiliesQuery, GetFamiliesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFamiliesQuery, GetFamiliesQueryVariables>(GetFamiliesDocument, options);
        }
export function useGetFamiliesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFamiliesQuery, GetFamiliesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFamiliesQuery, GetFamiliesQueryVariables>(GetFamiliesDocument, options);
        }
export type GetFamiliesQueryHookResult = ReturnType<typeof useGetFamiliesQuery>;
export type GetFamiliesLazyQueryHookResult = ReturnType<typeof useGetFamiliesLazyQuery>;
export type GetFamiliesSuspenseQueryHookResult = ReturnType<typeof useGetFamiliesSuspenseQuery>;
export type GetFamiliesQueryResult = Apollo.QueryResult<GetFamiliesQuery, GetFamiliesQueryVariables>;
export const CreateFamilyDocument = gql`
    mutation CreateFamily($data: CreateFamilyInput!) {
  createFamily(data: $data) {
    id
    name
    contact
    relationship
  }
}
    `;
export type CreateFamilyMutationFn = Apollo.MutationFunction<CreateFamilyMutation, CreateFamilyMutationVariables>;

/**
 * __useCreateFamilyMutation__
 *
 * To run a mutation, you first call `useCreateFamilyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFamilyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFamilyMutation, { data, loading, error }] = useCreateFamilyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFamilyMutation(baseOptions?: Apollo.MutationHookOptions<CreateFamilyMutation, CreateFamilyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFamilyMutation, CreateFamilyMutationVariables>(CreateFamilyDocument, options);
      }
export type CreateFamilyMutationHookResult = ReturnType<typeof useCreateFamilyMutation>;
export type CreateFamilyMutationResult = Apollo.MutationResult<CreateFamilyMutation>;
export type CreateFamilyMutationOptions = Apollo.BaseMutationOptions<CreateFamilyMutation, CreateFamilyMutationVariables>;
export const UpdateFamilyDocument = gql`
    mutation UpdateFamily($data: UpdateFamilyInput!) {
  updateFamily(data: $data) {
    id
    name
    contact
    relationship
  }
}
    `;
export type UpdateFamilyMutationFn = Apollo.MutationFunction<UpdateFamilyMutation, UpdateFamilyMutationVariables>;

/**
 * __useUpdateFamilyMutation__
 *
 * To run a mutation, you first call `useUpdateFamilyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFamilyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFamilyMutation, { data, loading, error }] = useUpdateFamilyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateFamilyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFamilyMutation, UpdateFamilyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFamilyMutation, UpdateFamilyMutationVariables>(UpdateFamilyDocument, options);
      }
export type UpdateFamilyMutationHookResult = ReturnType<typeof useUpdateFamilyMutation>;
export type UpdateFamilyMutationResult = Apollo.MutationResult<UpdateFamilyMutation>;
export type UpdateFamilyMutationOptions = Apollo.BaseMutationOptions<UpdateFamilyMutation, UpdateFamilyMutationVariables>;
export const DeleteFamilyDocument = gql`
    mutation DeleteFamily($data: String!) {
  deleteFamily(id: $data) {
    id
    name
    contact
    relationship
  }
}
    `;
export type DeleteFamilyMutationFn = Apollo.MutationFunction<DeleteFamilyMutation, DeleteFamilyMutationVariables>;

/**
 * __useDeleteFamilyMutation__
 *
 * To run a mutation, you first call `useDeleteFamilyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFamilyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFamilyMutation, { data, loading, error }] = useDeleteFamilyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteFamilyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFamilyMutation, DeleteFamilyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFamilyMutation, DeleteFamilyMutationVariables>(DeleteFamilyDocument, options);
      }
export type DeleteFamilyMutationHookResult = ReturnType<typeof useDeleteFamilyMutation>;
export type DeleteFamilyMutationResult = Apollo.MutationResult<DeleteFamilyMutation>;
export type DeleteFamilyMutationOptions = Apollo.BaseMutationOptions<DeleteFamilyMutation, DeleteFamilyMutationVariables>;
export const GetSchoolDocument = gql`
    query GetSchool($data: String!) {
  school(id: $data) {
    id
    name
    npsn
    accreditation
    address
    phone
    email
    foundAt
  }
}
    `;

/**
 * __useGetSchoolQuery__
 *
 * To run a query within a React component, call `useGetSchoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSchoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSchoolQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetSchoolQuery(baseOptions: Apollo.QueryHookOptions<GetSchoolQuery, GetSchoolQueryVariables> & ({ variables: GetSchoolQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSchoolQuery, GetSchoolQueryVariables>(GetSchoolDocument, options);
      }
export function useGetSchoolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSchoolQuery, GetSchoolQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSchoolQuery, GetSchoolQueryVariables>(GetSchoolDocument, options);
        }
export function useGetSchoolSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSchoolQuery, GetSchoolQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSchoolQuery, GetSchoolQueryVariables>(GetSchoolDocument, options);
        }
export type GetSchoolQueryHookResult = ReturnType<typeof useGetSchoolQuery>;
export type GetSchoolLazyQueryHookResult = ReturnType<typeof useGetSchoolLazyQuery>;
export type GetSchoolSuspenseQueryHookResult = ReturnType<typeof useGetSchoolSuspenseQuery>;
export type GetSchoolQueryResult = Apollo.QueryResult<GetSchoolQuery, GetSchoolQueryVariables>;
export const GetSchoolsDocument = gql`
    query GetSchools {
  schools {
    id
    name
    npsn
    accreditation
    address
    phone
    email
    foundAt
    createdAt
    updatedAt
    terms {
      id
      name
      startDate
      endDate
      schoolId
      curriculumId
      createdAt
      updatedAt
    }
    users {
      id
      username
      role
      nik
      nuptk
      nisn
      dateOfBirth
      gender
      address
      phone
    }
  }
}
    `;

/**
 * __useGetSchoolsQuery__
 *
 * To run a query within a React component, call `useGetSchoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSchoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSchoolsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSchoolsQuery(baseOptions?: Apollo.QueryHookOptions<GetSchoolsQuery, GetSchoolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSchoolsQuery, GetSchoolsQueryVariables>(GetSchoolsDocument, options);
      }
export function useGetSchoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSchoolsQuery, GetSchoolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSchoolsQuery, GetSchoolsQueryVariables>(GetSchoolsDocument, options);
        }
export function useGetSchoolsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSchoolsQuery, GetSchoolsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSchoolsQuery, GetSchoolsQueryVariables>(GetSchoolsDocument, options);
        }
export type GetSchoolsQueryHookResult = ReturnType<typeof useGetSchoolsQuery>;
export type GetSchoolsLazyQueryHookResult = ReturnType<typeof useGetSchoolsLazyQuery>;
export type GetSchoolsSuspenseQueryHookResult = ReturnType<typeof useGetSchoolsSuspenseQuery>;
export type GetSchoolsQueryResult = Apollo.QueryResult<GetSchoolsQuery, GetSchoolsQueryVariables>;
export const CreateSchoolDocument = gql`
    mutation CreateSchool($data: CreateSchoolInput!) {
  createSchool(data: $data) {
    id
    name
    npsn
    accreditation
    address
    phone
    email
    foundAt
    createdAt
    updatedAt
  }
}
    `;
export type CreateSchoolMutationFn = Apollo.MutationFunction<CreateSchoolMutation, CreateSchoolMutationVariables>;

/**
 * __useCreateSchoolMutation__
 *
 * To run a mutation, you first call `useCreateSchoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSchoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSchoolMutation, { data, loading, error }] = useCreateSchoolMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSchoolMutation(baseOptions?: Apollo.MutationHookOptions<CreateSchoolMutation, CreateSchoolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSchoolMutation, CreateSchoolMutationVariables>(CreateSchoolDocument, options);
      }
export type CreateSchoolMutationHookResult = ReturnType<typeof useCreateSchoolMutation>;
export type CreateSchoolMutationResult = Apollo.MutationResult<CreateSchoolMutation>;
export type CreateSchoolMutationOptions = Apollo.BaseMutationOptions<CreateSchoolMutation, CreateSchoolMutationVariables>;
export const UpdateSchoolDocument = gql`
    mutation UpdateSchool($data: UpdateSchoolInput!) {
  updateSchool(data: $data) {
    id
    name
    npsn
    accreditation
    address
    phone
    email
    foundAt
  }
}
    `;
export type UpdateSchoolMutationFn = Apollo.MutationFunction<UpdateSchoolMutation, UpdateSchoolMutationVariables>;

/**
 * __useUpdateSchoolMutation__
 *
 * To run a mutation, you first call `useUpdateSchoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSchoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSchoolMutation, { data, loading, error }] = useUpdateSchoolMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateSchoolMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSchoolMutation, UpdateSchoolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSchoolMutation, UpdateSchoolMutationVariables>(UpdateSchoolDocument, options);
      }
export type UpdateSchoolMutationHookResult = ReturnType<typeof useUpdateSchoolMutation>;
export type UpdateSchoolMutationResult = Apollo.MutationResult<UpdateSchoolMutation>;
export type UpdateSchoolMutationOptions = Apollo.BaseMutationOptions<UpdateSchoolMutation, UpdateSchoolMutationVariables>;
export const DeleteSchoolDocument = gql`
    mutation DeleteSchool($data: String!) {
  deleteSchool(id: $data) {
    id
    name
    npsn
    accreditation
    address
    phone
    email
    foundAt
    createdAt
    updatedAt
  }
}
    `;
export type DeleteSchoolMutationFn = Apollo.MutationFunction<DeleteSchoolMutation, DeleteSchoolMutationVariables>;

/**
 * __useDeleteSchoolMutation__
 *
 * To run a mutation, you first call `useDeleteSchoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSchoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSchoolMutation, { data, loading, error }] = useDeleteSchoolMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteSchoolMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSchoolMutation, DeleteSchoolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSchoolMutation, DeleteSchoolMutationVariables>(DeleteSchoolDocument, options);
      }
export type DeleteSchoolMutationHookResult = ReturnType<typeof useDeleteSchoolMutation>;
export type DeleteSchoolMutationResult = Apollo.MutationResult<DeleteSchoolMutation>;
export type DeleteSchoolMutationOptions = Apollo.BaseMutationOptions<DeleteSchoolMutation, DeleteSchoolMutationVariables>;
export const GetEnrollmentDocument = gql`
    query GetEnrollment($id: String!) {
  enrollment(id: $id) {
    id
    studentId
    classroomId
    termId
    term {
      id
      name
      startDate
      endDate
      schoolId
      curriculumId
    }
    classroom {
      id
      name
      guardian {
        id
        name
      }
    }
    student {
      id
      name
      username
      role
      gender
      address
      phone
    }
  }
}
    `;

/**
 * __useGetEnrollmentQuery__
 *
 * To run a query within a React component, call `useGetEnrollmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEnrollmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEnrollmentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEnrollmentQuery(baseOptions: Apollo.QueryHookOptions<GetEnrollmentQuery, GetEnrollmentQueryVariables> & ({ variables: GetEnrollmentQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEnrollmentQuery, GetEnrollmentQueryVariables>(GetEnrollmentDocument, options);
      }
export function useGetEnrollmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEnrollmentQuery, GetEnrollmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEnrollmentQuery, GetEnrollmentQueryVariables>(GetEnrollmentDocument, options);
        }
export function useGetEnrollmentSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetEnrollmentQuery, GetEnrollmentQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEnrollmentQuery, GetEnrollmentQueryVariables>(GetEnrollmentDocument, options);
        }
export type GetEnrollmentQueryHookResult = ReturnType<typeof useGetEnrollmentQuery>;
export type GetEnrollmentLazyQueryHookResult = ReturnType<typeof useGetEnrollmentLazyQuery>;
export type GetEnrollmentSuspenseQueryHookResult = ReturnType<typeof useGetEnrollmentSuspenseQuery>;
export type GetEnrollmentQueryResult = Apollo.QueryResult<GetEnrollmentQuery, GetEnrollmentQueryVariables>;
export const GetEnrollmentsDocument = gql`
    query GetEnrollments {
  enrollments {
    id
    studentId
    classroomId
    termId
    term {
      id
      name
    }
    classroom {
      id
      name
    }
    student {
      id
      name
    }
  }
}
    `;

/**
 * __useGetEnrollmentsQuery__
 *
 * To run a query within a React component, call `useGetEnrollmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEnrollmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEnrollmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEnrollmentsQuery(baseOptions?: Apollo.QueryHookOptions<GetEnrollmentsQuery, GetEnrollmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEnrollmentsQuery, GetEnrollmentsQueryVariables>(GetEnrollmentsDocument, options);
      }
export function useGetEnrollmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEnrollmentsQuery, GetEnrollmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEnrollmentsQuery, GetEnrollmentsQueryVariables>(GetEnrollmentsDocument, options);
        }
export function useGetEnrollmentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetEnrollmentsQuery, GetEnrollmentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEnrollmentsQuery, GetEnrollmentsQueryVariables>(GetEnrollmentsDocument, options);
        }
export type GetEnrollmentsQueryHookResult = ReturnType<typeof useGetEnrollmentsQuery>;
export type GetEnrollmentsLazyQueryHookResult = ReturnType<typeof useGetEnrollmentsLazyQuery>;
export type GetEnrollmentsSuspenseQueryHookResult = ReturnType<typeof useGetEnrollmentsSuspenseQuery>;
export type GetEnrollmentsQueryResult = Apollo.QueryResult<GetEnrollmentsQuery, GetEnrollmentsQueryVariables>;
export const CreateEnrollmentDocument = gql`
    mutation CreateEnrollment($data: CreateEnrollmentInput!) {
  createEnrollment(data: $data) {
    id
    studentId
    classroomId
    termId
  }
}
    `;
export type CreateEnrollmentMutationFn = Apollo.MutationFunction<CreateEnrollmentMutation, CreateEnrollmentMutationVariables>;

/**
 * __useCreateEnrollmentMutation__
 *
 * To run a mutation, you first call `useCreateEnrollmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEnrollmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEnrollmentMutation, { data, loading, error }] = useCreateEnrollmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateEnrollmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateEnrollmentMutation, CreateEnrollmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEnrollmentMutation, CreateEnrollmentMutationVariables>(CreateEnrollmentDocument, options);
      }
export type CreateEnrollmentMutationHookResult = ReturnType<typeof useCreateEnrollmentMutation>;
export type CreateEnrollmentMutationResult = Apollo.MutationResult<CreateEnrollmentMutation>;
export type CreateEnrollmentMutationOptions = Apollo.BaseMutationOptions<CreateEnrollmentMutation, CreateEnrollmentMutationVariables>;
export const UpdateEnrollmentDocument = gql`
    mutation UpdateEnrollment($data: UpdateEnrollmentInput!) {
  updateEnrollment(data: $data) {
    id
    studentId
    classroomId
    termId
  }
}
    `;
export type UpdateEnrollmentMutationFn = Apollo.MutationFunction<UpdateEnrollmentMutation, UpdateEnrollmentMutationVariables>;

/**
 * __useUpdateEnrollmentMutation__
 *
 * To run a mutation, you first call `useUpdateEnrollmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEnrollmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEnrollmentMutation, { data, loading, error }] = useUpdateEnrollmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateEnrollmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEnrollmentMutation, UpdateEnrollmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEnrollmentMutation, UpdateEnrollmentMutationVariables>(UpdateEnrollmentDocument, options);
      }
export type UpdateEnrollmentMutationHookResult = ReturnType<typeof useUpdateEnrollmentMutation>;
export type UpdateEnrollmentMutationResult = Apollo.MutationResult<UpdateEnrollmentMutation>;
export type UpdateEnrollmentMutationOptions = Apollo.BaseMutationOptions<UpdateEnrollmentMutation, UpdateEnrollmentMutationVariables>;
export const DeleteEnrollmentDocument = gql`
    mutation DeleteEnrollment($id: String!) {
  deleteEnrollment(id: $id) {
    id
    studentId
    classroomId
    termId
  }
}
    `;
export type DeleteEnrollmentMutationFn = Apollo.MutationFunction<DeleteEnrollmentMutation, DeleteEnrollmentMutationVariables>;

/**
 * __useDeleteEnrollmentMutation__
 *
 * To run a mutation, you first call `useDeleteEnrollmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEnrollmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEnrollmentMutation, { data, loading, error }] = useDeleteEnrollmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEnrollmentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEnrollmentMutation, DeleteEnrollmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEnrollmentMutation, DeleteEnrollmentMutationVariables>(DeleteEnrollmentDocument, options);
      }
export type DeleteEnrollmentMutationHookResult = ReturnType<typeof useDeleteEnrollmentMutation>;
export type DeleteEnrollmentMutationResult = Apollo.MutationResult<DeleteEnrollmentMutation>;
export type DeleteEnrollmentMutationOptions = Apollo.BaseMutationOptions<DeleteEnrollmentMutation, DeleteEnrollmentMutationVariables>;
export const GetScheduleDocument = gql`
    query GetSchedule($data: String!) {
  schedule(id: $data) {
    id
    day
    classroomId
    subjectId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetScheduleQuery__
 *
 * To run a query within a React component, call `useGetScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScheduleQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetScheduleQuery(baseOptions: Apollo.QueryHookOptions<GetScheduleQuery, GetScheduleQueryVariables> & ({ variables: GetScheduleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetScheduleQuery, GetScheduleQueryVariables>(GetScheduleDocument, options);
      }
export function useGetScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetScheduleQuery, GetScheduleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetScheduleQuery, GetScheduleQueryVariables>(GetScheduleDocument, options);
        }
export function useGetScheduleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetScheduleQuery, GetScheduleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetScheduleQuery, GetScheduleQueryVariables>(GetScheduleDocument, options);
        }
export type GetScheduleQueryHookResult = ReturnType<typeof useGetScheduleQuery>;
export type GetScheduleLazyQueryHookResult = ReturnType<typeof useGetScheduleLazyQuery>;
export type GetScheduleSuspenseQueryHookResult = ReturnType<typeof useGetScheduleSuspenseQuery>;
export type GetScheduleQueryResult = Apollo.QueryResult<GetScheduleQuery, GetScheduleQueryVariables>;
export const GetSchedulesDocument = gql`
    query GetSchedules($data: String!) {
  schedules(classroomId: $data) {
    id
    day
    classroomId
    subjectId
    subject {
      id
      name
    }
    classroom {
      id
      name
      guardian {
        id
        name
        nuptk
      }
      students {
        id
        name
        nisn
      }
    }
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetSchedulesQuery__
 *
 * To run a query within a React component, call `useGetSchedulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSchedulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSchedulesQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetSchedulesQuery(baseOptions: Apollo.QueryHookOptions<GetSchedulesQuery, GetSchedulesQueryVariables> & ({ variables: GetSchedulesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSchedulesQuery, GetSchedulesQueryVariables>(GetSchedulesDocument, options);
      }
export function useGetSchedulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSchedulesQuery, GetSchedulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSchedulesQuery, GetSchedulesQueryVariables>(GetSchedulesDocument, options);
        }
export function useGetSchedulesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSchedulesQuery, GetSchedulesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSchedulesQuery, GetSchedulesQueryVariables>(GetSchedulesDocument, options);
        }
export type GetSchedulesQueryHookResult = ReturnType<typeof useGetSchedulesQuery>;
export type GetSchedulesLazyQueryHookResult = ReturnType<typeof useGetSchedulesLazyQuery>;
export type GetSchedulesSuspenseQueryHookResult = ReturnType<typeof useGetSchedulesSuspenseQuery>;
export type GetSchedulesQueryResult = Apollo.QueryResult<GetSchedulesQuery, GetSchedulesQueryVariables>;
export const CreateScheduleDocument = gql`
    mutation CreateSchedule($data: CreateScheduleInput!) {
  createSchedule(data: $data) {
    id
    day
    classroomId
    subjectId
  }
}
    `;
export type CreateScheduleMutationFn = Apollo.MutationFunction<CreateScheduleMutation, CreateScheduleMutationVariables>;

/**
 * __useCreateScheduleMutation__
 *
 * To run a mutation, you first call `useCreateScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createScheduleMutation, { data, loading, error }] = useCreateScheduleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateScheduleMutation(baseOptions?: Apollo.MutationHookOptions<CreateScheduleMutation, CreateScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateScheduleMutation, CreateScheduleMutationVariables>(CreateScheduleDocument, options);
      }
export type CreateScheduleMutationHookResult = ReturnType<typeof useCreateScheduleMutation>;
export type CreateScheduleMutationResult = Apollo.MutationResult<CreateScheduleMutation>;
export type CreateScheduleMutationOptions = Apollo.BaseMutationOptions<CreateScheduleMutation, CreateScheduleMutationVariables>;
export const UpdateScheduleDocument = gql`
    mutation UpdateSchedule($id: String!, $data: UpdateScheduleInput!) {
  updateSchedule(id: $id, data: $data) {
    id
    day
    classroomId
    subjectId
  }
}
    `;
export type UpdateScheduleMutationFn = Apollo.MutationFunction<UpdateScheduleMutation, UpdateScheduleMutationVariables>;

/**
 * __useUpdateScheduleMutation__
 *
 * To run a mutation, you first call `useUpdateScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateScheduleMutation, { data, loading, error }] = useUpdateScheduleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateScheduleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateScheduleMutation, UpdateScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateScheduleMutation, UpdateScheduleMutationVariables>(UpdateScheduleDocument, options);
      }
export type UpdateScheduleMutationHookResult = ReturnType<typeof useUpdateScheduleMutation>;
export type UpdateScheduleMutationResult = Apollo.MutationResult<UpdateScheduleMutation>;
export type UpdateScheduleMutationOptions = Apollo.BaseMutationOptions<UpdateScheduleMutation, UpdateScheduleMutationVariables>;
export const DeleteScheduleDocument = gql`
    mutation DeleteSchedule($data: String!) {
  deleteSchedule(id: $data) {
    id
    day
    classroomId
    subjectId
  }
}
    `;
export type DeleteScheduleMutationFn = Apollo.MutationFunction<DeleteScheduleMutation, DeleteScheduleMutationVariables>;

/**
 * __useDeleteScheduleMutation__
 *
 * To run a mutation, you first call `useDeleteScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteScheduleMutation, { data, loading, error }] = useDeleteScheduleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteScheduleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteScheduleMutation, DeleteScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteScheduleMutation, DeleteScheduleMutationVariables>(DeleteScheduleDocument, options);
      }
export type DeleteScheduleMutationHookResult = ReturnType<typeof useDeleteScheduleMutation>;
export type DeleteScheduleMutationResult = Apollo.MutationResult<DeleteScheduleMutation>;
export type DeleteScheduleMutationOptions = Apollo.BaseMutationOptions<DeleteScheduleMutation, DeleteScheduleMutationVariables>;
export const GetAttendanceDocument = gql`
    query GetAttendance($data: String!) {
  attendance(id: $data) {
    id
    classroomId
    studentId
    date
    status
    student {
      id
      name
      username
    }
  }
}
    `;

/**
 * __useGetAttendanceQuery__
 *
 * To run a query within a React component, call `useGetAttendanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAttendanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAttendanceQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetAttendanceQuery(baseOptions: Apollo.QueryHookOptions<GetAttendanceQuery, GetAttendanceQueryVariables> & ({ variables: GetAttendanceQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAttendanceQuery, GetAttendanceQueryVariables>(GetAttendanceDocument, options);
      }
export function useGetAttendanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAttendanceQuery, GetAttendanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAttendanceQuery, GetAttendanceQueryVariables>(GetAttendanceDocument, options);
        }
export function useGetAttendanceSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAttendanceQuery, GetAttendanceQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAttendanceQuery, GetAttendanceQueryVariables>(GetAttendanceDocument, options);
        }
export type GetAttendanceQueryHookResult = ReturnType<typeof useGetAttendanceQuery>;
export type GetAttendanceLazyQueryHookResult = ReturnType<typeof useGetAttendanceLazyQuery>;
export type GetAttendanceSuspenseQueryHookResult = ReturnType<typeof useGetAttendanceSuspenseQuery>;
export type GetAttendanceQueryResult = Apollo.QueryResult<GetAttendanceQuery, GetAttendanceQueryVariables>;
export const GetAttendancesDocument = gql`
    query GetAttendances {
  attendances {
    id
    classroomId
    studentId
    date
    status
    student {
      id
      name
      username
    }
  }
}
    `;

/**
 * __useGetAttendancesQuery__
 *
 * To run a query within a React component, call `useGetAttendancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAttendancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAttendancesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAttendancesQuery(baseOptions?: Apollo.QueryHookOptions<GetAttendancesQuery, GetAttendancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAttendancesQuery, GetAttendancesQueryVariables>(GetAttendancesDocument, options);
      }
export function useGetAttendancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAttendancesQuery, GetAttendancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAttendancesQuery, GetAttendancesQueryVariables>(GetAttendancesDocument, options);
        }
export function useGetAttendancesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAttendancesQuery, GetAttendancesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAttendancesQuery, GetAttendancesQueryVariables>(GetAttendancesDocument, options);
        }
export type GetAttendancesQueryHookResult = ReturnType<typeof useGetAttendancesQuery>;
export type GetAttendancesLazyQueryHookResult = ReturnType<typeof useGetAttendancesLazyQuery>;
export type GetAttendancesSuspenseQueryHookResult = ReturnType<typeof useGetAttendancesSuspenseQuery>;
export type GetAttendancesQueryResult = Apollo.QueryResult<GetAttendancesQuery, GetAttendancesQueryVariables>;
export const CreateAttendanceDocument = gql`
    mutation CreateAttendance($data: [CreateAttendanceInput!]!) {
  createAttendance(data: $data) {
    id
    classroomId
    studentId
    date
    status
  }
}
    `;
export type CreateAttendanceMutationFn = Apollo.MutationFunction<CreateAttendanceMutation, CreateAttendanceMutationVariables>;

/**
 * __useCreateAttendanceMutation__
 *
 * To run a mutation, you first call `useCreateAttendanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAttendanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAttendanceMutation, { data, loading, error }] = useCreateAttendanceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAttendanceMutation(baseOptions?: Apollo.MutationHookOptions<CreateAttendanceMutation, CreateAttendanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAttendanceMutation, CreateAttendanceMutationVariables>(CreateAttendanceDocument, options);
      }
export type CreateAttendanceMutationHookResult = ReturnType<typeof useCreateAttendanceMutation>;
export type CreateAttendanceMutationResult = Apollo.MutationResult<CreateAttendanceMutation>;
export type CreateAttendanceMutationOptions = Apollo.BaseMutationOptions<CreateAttendanceMutation, CreateAttendanceMutationVariables>;
export const UpdateAttendanceDocument = gql`
    mutation UpdateAttendance($data: [UpdateAttendanceInput!]!) {
  updateAttendance(data: $data) {
    id
    classroomId
    studentId
    date
    status
  }
}
    `;
export type UpdateAttendanceMutationFn = Apollo.MutationFunction<UpdateAttendanceMutation, UpdateAttendanceMutationVariables>;

/**
 * __useUpdateAttendanceMutation__
 *
 * To run a mutation, you first call `useUpdateAttendanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAttendanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAttendanceMutation, { data, loading, error }] = useUpdateAttendanceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAttendanceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAttendanceMutation, UpdateAttendanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAttendanceMutation, UpdateAttendanceMutationVariables>(UpdateAttendanceDocument, options);
      }
export type UpdateAttendanceMutationHookResult = ReturnType<typeof useUpdateAttendanceMutation>;
export type UpdateAttendanceMutationResult = Apollo.MutationResult<UpdateAttendanceMutation>;
export type UpdateAttendanceMutationOptions = Apollo.BaseMutationOptions<UpdateAttendanceMutation, UpdateAttendanceMutationVariables>;
export const DeleteAttendanceDocument = gql`
    mutation DeleteAttendance($data: String!) {
  deleteAttendance(id: $data) {
    id
    classroomId
    studentId
    date
    status
  }
}
    `;
export type DeleteAttendanceMutationFn = Apollo.MutationFunction<DeleteAttendanceMutation, DeleteAttendanceMutationVariables>;

/**
 * __useDeleteAttendanceMutation__
 *
 * To run a mutation, you first call `useDeleteAttendanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAttendanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAttendanceMutation, { data, loading, error }] = useDeleteAttendanceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteAttendanceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAttendanceMutation, DeleteAttendanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAttendanceMutation, DeleteAttendanceMutationVariables>(DeleteAttendanceDocument, options);
      }
export type DeleteAttendanceMutationHookResult = ReturnType<typeof useDeleteAttendanceMutation>;
export type DeleteAttendanceMutationResult = Apollo.MutationResult<DeleteAttendanceMutation>;
export type DeleteAttendanceMutationOptions = Apollo.BaseMutationOptions<DeleteAttendanceMutation, DeleteAttendanceMutationVariables>;
export const GetTermDocument = gql`
    query GetTerm($data: String!) {
  term(id: $data) {
    id
    name
    startDate
    endDate
    schoolId
    curriculumId
  }
}
    `;

/**
 * __useGetTermQuery__
 *
 * To run a query within a React component, call `useGetTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTermQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetTermQuery(baseOptions: Apollo.QueryHookOptions<GetTermQuery, GetTermQueryVariables> & ({ variables: GetTermQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTermQuery, GetTermQueryVariables>(GetTermDocument, options);
      }
export function useGetTermLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTermQuery, GetTermQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTermQuery, GetTermQueryVariables>(GetTermDocument, options);
        }
export function useGetTermSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTermQuery, GetTermQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTermQuery, GetTermQueryVariables>(GetTermDocument, options);
        }
export type GetTermQueryHookResult = ReturnType<typeof useGetTermQuery>;
export type GetTermLazyQueryHookResult = ReturnType<typeof useGetTermLazyQuery>;
export type GetTermSuspenseQueryHookResult = ReturnType<typeof useGetTermSuspenseQuery>;
export type GetTermQueryResult = Apollo.QueryResult<GetTermQuery, GetTermQueryVariables>;
export const GetTermsDocument = gql`
    query GetTerms {
  terms {
    id
    name
    startDate
    endDate
    schoolId
    curriculumId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetTermsQuery__
 *
 * To run a query within a React component, call `useGetTermsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTermsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTermsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTermsQuery(baseOptions?: Apollo.QueryHookOptions<GetTermsQuery, GetTermsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTermsQuery, GetTermsQueryVariables>(GetTermsDocument, options);
      }
export function useGetTermsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTermsQuery, GetTermsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTermsQuery, GetTermsQueryVariables>(GetTermsDocument, options);
        }
export function useGetTermsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTermsQuery, GetTermsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTermsQuery, GetTermsQueryVariables>(GetTermsDocument, options);
        }
export type GetTermsQueryHookResult = ReturnType<typeof useGetTermsQuery>;
export type GetTermsLazyQueryHookResult = ReturnType<typeof useGetTermsLazyQuery>;
export type GetTermsSuspenseQueryHookResult = ReturnType<typeof useGetTermsSuspenseQuery>;
export type GetTermsQueryResult = Apollo.QueryResult<GetTermsQuery, GetTermsQueryVariables>;
export const CreateTermDocument = gql`
    mutation CreateTerm($data: CreateTermInput!) {
  createTerm(data: $data) {
    id
    name
    startDate
    endDate
    schoolId
    curriculumId
    createdAt
    updatedAt
  }
}
    `;
export type CreateTermMutationFn = Apollo.MutationFunction<CreateTermMutation, CreateTermMutationVariables>;

/**
 * __useCreateTermMutation__
 *
 * To run a mutation, you first call `useCreateTermMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTermMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTermMutation, { data, loading, error }] = useCreateTermMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTermMutation(baseOptions?: Apollo.MutationHookOptions<CreateTermMutation, CreateTermMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTermMutation, CreateTermMutationVariables>(CreateTermDocument, options);
      }
export type CreateTermMutationHookResult = ReturnType<typeof useCreateTermMutation>;
export type CreateTermMutationResult = Apollo.MutationResult<CreateTermMutation>;
export type CreateTermMutationOptions = Apollo.BaseMutationOptions<CreateTermMutation, CreateTermMutationVariables>;
export const UpdateTermDocument = gql`
    mutation UpdateTerm($data: UpdateTermInput!) {
  updateTerm(data: $data) {
    id
    name
    startDate
    endDate
    schoolId
    curriculumId
  }
}
    `;
export type UpdateTermMutationFn = Apollo.MutationFunction<UpdateTermMutation, UpdateTermMutationVariables>;

/**
 * __useUpdateTermMutation__
 *
 * To run a mutation, you first call `useUpdateTermMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTermMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTermMutation, { data, loading, error }] = useUpdateTermMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTermMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTermMutation, UpdateTermMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTermMutation, UpdateTermMutationVariables>(UpdateTermDocument, options);
      }
export type UpdateTermMutationHookResult = ReturnType<typeof useUpdateTermMutation>;
export type UpdateTermMutationResult = Apollo.MutationResult<UpdateTermMutation>;
export type UpdateTermMutationOptions = Apollo.BaseMutationOptions<UpdateTermMutation, UpdateTermMutationVariables>;
export const DeleteTermDocument = gql`
    mutation DeleteTerm($data: String!) {
  deleteTerm(id: $data) {
    id
    name
    startDate
    endDate
    schoolId
    curriculumId
    createdAt
    updatedAt
  }
}
    `;
export type DeleteTermMutationFn = Apollo.MutationFunction<DeleteTermMutation, DeleteTermMutationVariables>;

/**
 * __useDeleteTermMutation__
 *
 * To run a mutation, you first call `useDeleteTermMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTermMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTermMutation, { data, loading, error }] = useDeleteTermMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteTermMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTermMutation, DeleteTermMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTermMutation, DeleteTermMutationVariables>(DeleteTermDocument, options);
      }
export type DeleteTermMutationHookResult = ReturnType<typeof useDeleteTermMutation>;
export type DeleteTermMutationResult = Apollo.MutationResult<DeleteTermMutation>;
export type DeleteTermMutationOptions = Apollo.BaseMutationOptions<DeleteTermMutation, DeleteTermMutationVariables>;
export const GetCurriculumDocument = gql`
    query GetCurriculum($data: String!) {
  curriculum(id: $data) {
    id
    name
    createdAt
    updatedAt
    subjects {
      id
      name
      code
      teachers {
        id
        name
        nuptk
      }
    }
  }
}
    `;

/**
 * __useGetCurriculumQuery__
 *
 * To run a query within a React component, call `useGetCurriculumQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurriculumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurriculumQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetCurriculumQuery(baseOptions: Apollo.QueryHookOptions<GetCurriculumQuery, GetCurriculumQueryVariables> & ({ variables: GetCurriculumQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurriculumQuery, GetCurriculumQueryVariables>(GetCurriculumDocument, options);
      }
export function useGetCurriculumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurriculumQuery, GetCurriculumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurriculumQuery, GetCurriculumQueryVariables>(GetCurriculumDocument, options);
        }
export function useGetCurriculumSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCurriculumQuery, GetCurriculumQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurriculumQuery, GetCurriculumQueryVariables>(GetCurriculumDocument, options);
        }
export type GetCurriculumQueryHookResult = ReturnType<typeof useGetCurriculumQuery>;
export type GetCurriculumLazyQueryHookResult = ReturnType<typeof useGetCurriculumLazyQuery>;
export type GetCurriculumSuspenseQueryHookResult = ReturnType<typeof useGetCurriculumSuspenseQuery>;
export type GetCurriculumQueryResult = Apollo.QueryResult<GetCurriculumQuery, GetCurriculumQueryVariables>;
export const GetCurriculumsDocument = gql`
    query GetCurriculums {
  curriculums {
    id
    name
    createdAt
    updatedAt
    subjects {
      id
      name
      code
      teachers {
        id
        name
        nuptk
      }
    }
  }
}
    `;

/**
 * __useGetCurriculumsQuery__
 *
 * To run a query within a React component, call `useGetCurriculumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurriculumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurriculumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurriculumsQuery(baseOptions?: Apollo.QueryHookOptions<GetCurriculumsQuery, GetCurriculumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurriculumsQuery, GetCurriculumsQueryVariables>(GetCurriculumsDocument, options);
      }
export function useGetCurriculumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurriculumsQuery, GetCurriculumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurriculumsQuery, GetCurriculumsQueryVariables>(GetCurriculumsDocument, options);
        }
export function useGetCurriculumsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCurriculumsQuery, GetCurriculumsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurriculumsQuery, GetCurriculumsQueryVariables>(GetCurriculumsDocument, options);
        }
export type GetCurriculumsQueryHookResult = ReturnType<typeof useGetCurriculumsQuery>;
export type GetCurriculumsLazyQueryHookResult = ReturnType<typeof useGetCurriculumsLazyQuery>;
export type GetCurriculumsSuspenseQueryHookResult = ReturnType<typeof useGetCurriculumsSuspenseQuery>;
export type GetCurriculumsQueryResult = Apollo.QueryResult<GetCurriculumsQuery, GetCurriculumsQueryVariables>;
export const CreateCurriculumDocument = gql`
    mutation CreateCurriculum($data: CreateCurriculumInput!) {
  createCurriculum(data: $data) {
    id
    name
    createdAt
    updatedAt
  }
}
    `;
export type CreateCurriculumMutationFn = Apollo.MutationFunction<CreateCurriculumMutation, CreateCurriculumMutationVariables>;

/**
 * __useCreateCurriculumMutation__
 *
 * To run a mutation, you first call `useCreateCurriculumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCurriculumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCurriculumMutation, { data, loading, error }] = useCreateCurriculumMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCurriculumMutation(baseOptions?: Apollo.MutationHookOptions<CreateCurriculumMutation, CreateCurriculumMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCurriculumMutation, CreateCurriculumMutationVariables>(CreateCurriculumDocument, options);
      }
export type CreateCurriculumMutationHookResult = ReturnType<typeof useCreateCurriculumMutation>;
export type CreateCurriculumMutationResult = Apollo.MutationResult<CreateCurriculumMutation>;
export type CreateCurriculumMutationOptions = Apollo.BaseMutationOptions<CreateCurriculumMutation, CreateCurriculumMutationVariables>;
export const UpdateCurriculumDocument = gql`
    mutation UpdateCurriculum($data: UpdateCurriculumInput!) {
  updateCurriculum(data: $data) {
    id
    name
    createdAt
    updatedAt
  }
}
    `;
export type UpdateCurriculumMutationFn = Apollo.MutationFunction<UpdateCurriculumMutation, UpdateCurriculumMutationVariables>;

/**
 * __useUpdateCurriculumMutation__
 *
 * To run a mutation, you first call `useUpdateCurriculumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCurriculumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCurriculumMutation, { data, loading, error }] = useUpdateCurriculumMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCurriculumMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCurriculumMutation, UpdateCurriculumMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCurriculumMutation, UpdateCurriculumMutationVariables>(UpdateCurriculumDocument, options);
      }
export type UpdateCurriculumMutationHookResult = ReturnType<typeof useUpdateCurriculumMutation>;
export type UpdateCurriculumMutationResult = Apollo.MutationResult<UpdateCurriculumMutation>;
export type UpdateCurriculumMutationOptions = Apollo.BaseMutationOptions<UpdateCurriculumMutation, UpdateCurriculumMutationVariables>;
export const DeleteCurriculumDocument = gql`
    mutation DeleteCurriculum($data: String!) {
  deleteCurriculum(id: $data) {
    id
    name
    createdAt
    updatedAt
  }
}
    `;
export type DeleteCurriculumMutationFn = Apollo.MutationFunction<DeleteCurriculumMutation, DeleteCurriculumMutationVariables>;

/**
 * __useDeleteCurriculumMutation__
 *
 * To run a mutation, you first call `useDeleteCurriculumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCurriculumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCurriculumMutation, { data, loading, error }] = useDeleteCurriculumMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteCurriculumMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCurriculumMutation, DeleteCurriculumMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCurriculumMutation, DeleteCurriculumMutationVariables>(DeleteCurriculumDocument, options);
      }
export type DeleteCurriculumMutationHookResult = ReturnType<typeof useDeleteCurriculumMutation>;
export type DeleteCurriculumMutationResult = Apollo.MutationResult<DeleteCurriculumMutation>;
export type DeleteCurriculumMutationOptions = Apollo.BaseMutationOptions<DeleteCurriculumMutation, DeleteCurriculumMutationVariables>;
export const GetSubjectDocument = gql`
    query GetSubject($data: String!) {
  subject(id: $data) {
    id
    name
    code
    description
    teachers {
      id
      username
      role
      nik
      nuptk
      nisn
      dateOfBirth
      gender
      address
      phone
    }
  }
}
    `;

/**
 * __useGetSubjectQuery__
 *
 * To run a query within a React component, call `useGetSubjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubjectQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetSubjectQuery(baseOptions: Apollo.QueryHookOptions<GetSubjectQuery, GetSubjectQueryVariables> & ({ variables: GetSubjectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubjectQuery, GetSubjectQueryVariables>(GetSubjectDocument, options);
      }
export function useGetSubjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubjectQuery, GetSubjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubjectQuery, GetSubjectQueryVariables>(GetSubjectDocument, options);
        }
export function useGetSubjectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSubjectQuery, GetSubjectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSubjectQuery, GetSubjectQueryVariables>(GetSubjectDocument, options);
        }
export type GetSubjectQueryHookResult = ReturnType<typeof useGetSubjectQuery>;
export type GetSubjectLazyQueryHookResult = ReturnType<typeof useGetSubjectLazyQuery>;
export type GetSubjectSuspenseQueryHookResult = ReturnType<typeof useGetSubjectSuspenseQuery>;
export type GetSubjectQueryResult = Apollo.QueryResult<GetSubjectQuery, GetSubjectQueryVariables>;
export const GetSubjectsDocument = gql`
    query GetSubjects {
  subjects {
    id
    name
    code
    description
  }
}
    `;

/**
 * __useGetSubjectsQuery__
 *
 * To run a query within a React component, call `useGetSubjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSubjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetSubjectsQuery, GetSubjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubjectsQuery, GetSubjectsQueryVariables>(GetSubjectsDocument, options);
      }
export function useGetSubjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubjectsQuery, GetSubjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubjectsQuery, GetSubjectsQueryVariables>(GetSubjectsDocument, options);
        }
export function useGetSubjectsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSubjectsQuery, GetSubjectsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSubjectsQuery, GetSubjectsQueryVariables>(GetSubjectsDocument, options);
        }
export type GetSubjectsQueryHookResult = ReturnType<typeof useGetSubjectsQuery>;
export type GetSubjectsLazyQueryHookResult = ReturnType<typeof useGetSubjectsLazyQuery>;
export type GetSubjectsSuspenseQueryHookResult = ReturnType<typeof useGetSubjectsSuspenseQuery>;
export type GetSubjectsQueryResult = Apollo.QueryResult<GetSubjectsQuery, GetSubjectsQueryVariables>;
export const CreateSubjectDocument = gql`
    mutation CreateSubject($data: CreateSubjectInput!) {
  createSubject(data: $data) {
    id
    name
    code
    description
  }
}
    `;
export type CreateSubjectMutationFn = Apollo.MutationFunction<CreateSubjectMutation, CreateSubjectMutationVariables>;

/**
 * __useCreateSubjectMutation__
 *
 * To run a mutation, you first call `useCreateSubjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubjectMutation, { data, loading, error }] = useCreateSubjectMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSubjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubjectMutation, CreateSubjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSubjectMutation, CreateSubjectMutationVariables>(CreateSubjectDocument, options);
      }
export type CreateSubjectMutationHookResult = ReturnType<typeof useCreateSubjectMutation>;
export type CreateSubjectMutationResult = Apollo.MutationResult<CreateSubjectMutation>;
export type CreateSubjectMutationOptions = Apollo.BaseMutationOptions<CreateSubjectMutation, CreateSubjectMutationVariables>;
export const UpdateSubjectDocument = gql`
    mutation UpdateSubject($data: UpdateSubjectInput!) {
  updateSubject(data: $data) {
    id
    name
    code
    description
  }
}
    `;
export type UpdateSubjectMutationFn = Apollo.MutationFunction<UpdateSubjectMutation, UpdateSubjectMutationVariables>;

/**
 * __useUpdateSubjectMutation__
 *
 * To run a mutation, you first call `useUpdateSubjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubjectMutation, { data, loading, error }] = useUpdateSubjectMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateSubjectMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSubjectMutation, UpdateSubjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSubjectMutation, UpdateSubjectMutationVariables>(UpdateSubjectDocument, options);
      }
export type UpdateSubjectMutationHookResult = ReturnType<typeof useUpdateSubjectMutation>;
export type UpdateSubjectMutationResult = Apollo.MutationResult<UpdateSubjectMutation>;
export type UpdateSubjectMutationOptions = Apollo.BaseMutationOptions<UpdateSubjectMutation, UpdateSubjectMutationVariables>;
export const DeleteSubjectDocument = gql`
    mutation DeleteSubject($data: String!) {
  deleteSubject(id: $data) {
    id
    name
    code
    description
  }
}
    `;
export type DeleteSubjectMutationFn = Apollo.MutationFunction<DeleteSubjectMutation, DeleteSubjectMutationVariables>;

/**
 * __useDeleteSubjectMutation__
 *
 * To run a mutation, you first call `useDeleteSubjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubjectMutation, { data, loading, error }] = useDeleteSubjectMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteSubjectMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSubjectMutation, DeleteSubjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSubjectMutation, DeleteSubjectMutationVariables>(DeleteSubjectDocument, options);
      }
export type DeleteSubjectMutationHookResult = ReturnType<typeof useDeleteSubjectMutation>;
export type DeleteSubjectMutationResult = Apollo.MutationResult<DeleteSubjectMutation>;
export type DeleteSubjectMutationOptions = Apollo.BaseMutationOptions<DeleteSubjectMutation, DeleteSubjectMutationVariables>;
export const GetMaterialDocument = gql`
    query GetMaterial($data: String!) {
  material(id: $data) {
    id
    title
    content
    createdAt
    updatedAt
    subject {
      id
      name
      code
      description
      teachers {
        id
        username
      }
    }
    assignments {
      id
      title
      description
      dueDate
      type
    }
    teachers {
      id
      username
    }
    curriculum {
      id
      name
    }
    grades {
      id
      name
    }
    references {
      id
      url
      type
      authorId
      author {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetMaterialQuery__
 *
 * To run a query within a React component, call `useGetMaterialQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMaterialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMaterialQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetMaterialQuery(baseOptions: Apollo.QueryHookOptions<GetMaterialQuery, GetMaterialQueryVariables> & ({ variables: GetMaterialQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMaterialQuery, GetMaterialQueryVariables>(GetMaterialDocument, options);
      }
export function useGetMaterialLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMaterialQuery, GetMaterialQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMaterialQuery, GetMaterialQueryVariables>(GetMaterialDocument, options);
        }
export function useGetMaterialSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMaterialQuery, GetMaterialQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMaterialQuery, GetMaterialQueryVariables>(GetMaterialDocument, options);
        }
export type GetMaterialQueryHookResult = ReturnType<typeof useGetMaterialQuery>;
export type GetMaterialLazyQueryHookResult = ReturnType<typeof useGetMaterialLazyQuery>;
export type GetMaterialSuspenseQueryHookResult = ReturnType<typeof useGetMaterialSuspenseQuery>;
export type GetMaterialQueryResult = Apollo.QueryResult<GetMaterialQuery, GetMaterialQueryVariables>;
export const GetMaterialsDocument = gql`
    query GetMaterials {
  materials {
    id
    title
    content
    createdAt
    updatedAt
    subject {
      id
      name
      code
      description
      teachers {
        id
        username
      }
    }
    assignments {
      id
      title
      description
      dueDate
      type
    }
    teachers {
      id
      username
    }
    curriculum {
      id
      name
    }
    grades {
      id
      name
    }
    references {
      id
      url
      type
      authorId
    }
  }
}
    `;

/**
 * __useGetMaterialsQuery__
 *
 * To run a query within a React component, call `useGetMaterialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMaterialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMaterialsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMaterialsQuery(baseOptions?: Apollo.QueryHookOptions<GetMaterialsQuery, GetMaterialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMaterialsQuery, GetMaterialsQueryVariables>(GetMaterialsDocument, options);
      }
export function useGetMaterialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMaterialsQuery, GetMaterialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMaterialsQuery, GetMaterialsQueryVariables>(GetMaterialsDocument, options);
        }
export function useGetMaterialsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMaterialsQuery, GetMaterialsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMaterialsQuery, GetMaterialsQueryVariables>(GetMaterialsDocument, options);
        }
export type GetMaterialsQueryHookResult = ReturnType<typeof useGetMaterialsQuery>;
export type GetMaterialsLazyQueryHookResult = ReturnType<typeof useGetMaterialsLazyQuery>;
export type GetMaterialsSuspenseQueryHookResult = ReturnType<typeof useGetMaterialsSuspenseQuery>;
export type GetMaterialsQueryResult = Apollo.QueryResult<GetMaterialsQuery, GetMaterialsQueryVariables>;
export const CreateMaterialDocument = gql`
    mutation CreateMaterial($data: CreateMaterialInput!) {
  createMaterial(data: $data) {
    id
    title
    content
  }
}
    `;
export type CreateMaterialMutationFn = Apollo.MutationFunction<CreateMaterialMutation, CreateMaterialMutationVariables>;

/**
 * __useCreateMaterialMutation__
 *
 * To run a mutation, you first call `useCreateMaterialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMaterialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMaterialMutation, { data, loading, error }] = useCreateMaterialMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMaterialMutation(baseOptions?: Apollo.MutationHookOptions<CreateMaterialMutation, CreateMaterialMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMaterialMutation, CreateMaterialMutationVariables>(CreateMaterialDocument, options);
      }
export type CreateMaterialMutationHookResult = ReturnType<typeof useCreateMaterialMutation>;
export type CreateMaterialMutationResult = Apollo.MutationResult<CreateMaterialMutation>;
export type CreateMaterialMutationOptions = Apollo.BaseMutationOptions<CreateMaterialMutation, CreateMaterialMutationVariables>;
export const UpdateMaterialDocument = gql`
    mutation UpdateMaterial($data: UpdateMaterialInput!) {
  updateMaterial(data: $data) {
    id
    title
    content
  }
}
    `;
export type UpdateMaterialMutationFn = Apollo.MutationFunction<UpdateMaterialMutation, UpdateMaterialMutationVariables>;

/**
 * __useUpdateMaterialMutation__
 *
 * To run a mutation, you first call `useUpdateMaterialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMaterialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMaterialMutation, { data, loading, error }] = useUpdateMaterialMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateMaterialMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMaterialMutation, UpdateMaterialMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMaterialMutation, UpdateMaterialMutationVariables>(UpdateMaterialDocument, options);
      }
export type UpdateMaterialMutationHookResult = ReturnType<typeof useUpdateMaterialMutation>;
export type UpdateMaterialMutationResult = Apollo.MutationResult<UpdateMaterialMutation>;
export type UpdateMaterialMutationOptions = Apollo.BaseMutationOptions<UpdateMaterialMutation, UpdateMaterialMutationVariables>;
export const DeleteMaterialDocument = gql`
    mutation DeleteMaterial($data: String!) {
  deleteMaterial(id: $data) {
    id
    title
    content
  }
}
    `;
export type DeleteMaterialMutationFn = Apollo.MutationFunction<DeleteMaterialMutation, DeleteMaterialMutationVariables>;

/**
 * __useDeleteMaterialMutation__
 *
 * To run a mutation, you first call `useDeleteMaterialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMaterialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMaterialMutation, { data, loading, error }] = useDeleteMaterialMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteMaterialMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMaterialMutation, DeleteMaterialMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMaterialMutation, DeleteMaterialMutationVariables>(DeleteMaterialDocument, options);
      }
export type DeleteMaterialMutationHookResult = ReturnType<typeof useDeleteMaterialMutation>;
export type DeleteMaterialMutationResult = Apollo.MutationResult<DeleteMaterialMutation>;
export type DeleteMaterialMutationOptions = Apollo.BaseMutationOptions<DeleteMaterialMutation, DeleteMaterialMutationVariables>;
export const GetAssignmentDocument = gql`
    query GetAssignment($data: String!) {
  assignment(id: $data) {
    id
    title
    description
    dueDate
    type
    extendedData
    subjectId
    subject {
      id
      name
      code
      description
      teachers {
        id
        username
      }
    }
    submissions {
      id
      extendedData
      assignmentId
      studentId
      score {
        id
        value
        notes
      }
    }
  }
}
    `;

/**
 * __useGetAssignmentQuery__
 *
 * To run a query within a React component, call `useGetAssignmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssignmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssignmentQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetAssignmentQuery(baseOptions: Apollo.QueryHookOptions<GetAssignmentQuery, GetAssignmentQueryVariables> & ({ variables: GetAssignmentQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAssignmentQuery, GetAssignmentQueryVariables>(GetAssignmentDocument, options);
      }
export function useGetAssignmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAssignmentQuery, GetAssignmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAssignmentQuery, GetAssignmentQueryVariables>(GetAssignmentDocument, options);
        }
export function useGetAssignmentSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAssignmentQuery, GetAssignmentQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAssignmentQuery, GetAssignmentQueryVariables>(GetAssignmentDocument, options);
        }
export type GetAssignmentQueryHookResult = ReturnType<typeof useGetAssignmentQuery>;
export type GetAssignmentLazyQueryHookResult = ReturnType<typeof useGetAssignmentLazyQuery>;
export type GetAssignmentSuspenseQueryHookResult = ReturnType<typeof useGetAssignmentSuspenseQuery>;
export type GetAssignmentQueryResult = Apollo.QueryResult<GetAssignmentQuery, GetAssignmentQueryVariables>;
export const GetAssignmentsDocument = gql`
    query GetAssignments {
  assignments {
    id
    title
    description
    dueDate
    type
    extendedData
    subjectId
    subject {
      id
      name
      code
      description
      teachers {
        id
        username
      }
    }
    submissions {
      id
      extendedData
      assignmentId
      studentId
      score {
        id
        value
        notes
      }
    }
  }
}
    `;

/**
 * __useGetAssignmentsQuery__
 *
 * To run a query within a React component, call `useGetAssignmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssignmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssignmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAssignmentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAssignmentsQuery, GetAssignmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAssignmentsQuery, GetAssignmentsQueryVariables>(GetAssignmentsDocument, options);
      }
export function useGetAssignmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAssignmentsQuery, GetAssignmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAssignmentsQuery, GetAssignmentsQueryVariables>(GetAssignmentsDocument, options);
        }
export function useGetAssignmentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAssignmentsQuery, GetAssignmentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAssignmentsQuery, GetAssignmentsQueryVariables>(GetAssignmentsDocument, options);
        }
export type GetAssignmentsQueryHookResult = ReturnType<typeof useGetAssignmentsQuery>;
export type GetAssignmentsLazyQueryHookResult = ReturnType<typeof useGetAssignmentsLazyQuery>;
export type GetAssignmentsSuspenseQueryHookResult = ReturnType<typeof useGetAssignmentsSuspenseQuery>;
export type GetAssignmentsQueryResult = Apollo.QueryResult<GetAssignmentsQuery, GetAssignmentsQueryVariables>;
export const CreateAssignmentDocument = gql`
    mutation CreateAssignment($data: CreateAssignmentInput!) {
  createAssignment(data: $data) {
    id
    title
    description
    extendedData
    dueDate
    type
    subjectId
  }
}
    `;
export type CreateAssignmentMutationFn = Apollo.MutationFunction<CreateAssignmentMutation, CreateAssignmentMutationVariables>;

/**
 * __useCreateAssignmentMutation__
 *
 * To run a mutation, you first call `useCreateAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAssignmentMutation, { data, loading, error }] = useCreateAssignmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateAssignmentMutation, CreateAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAssignmentMutation, CreateAssignmentMutationVariables>(CreateAssignmentDocument, options);
      }
export type CreateAssignmentMutationHookResult = ReturnType<typeof useCreateAssignmentMutation>;
export type CreateAssignmentMutationResult = Apollo.MutationResult<CreateAssignmentMutation>;
export type CreateAssignmentMutationOptions = Apollo.BaseMutationOptions<CreateAssignmentMutation, CreateAssignmentMutationVariables>;
export const UpdateAssignmentDocument = gql`
    mutation UpdateAssignment($data: UpdateAssignmentInput!) {
  updateAssignment(data: $data) {
    id
    title
    description
    extendedData
    dueDate
    type
    subjectId
  }
}
    `;
export type UpdateAssignmentMutationFn = Apollo.MutationFunction<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>;

/**
 * __useUpdateAssignmentMutation__
 *
 * To run a mutation, you first call `useUpdateAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssignmentMutation, { data, loading, error }] = useUpdateAssignmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>(UpdateAssignmentDocument, options);
      }
export type UpdateAssignmentMutationHookResult = ReturnType<typeof useUpdateAssignmentMutation>;
export type UpdateAssignmentMutationResult = Apollo.MutationResult<UpdateAssignmentMutation>;
export type UpdateAssignmentMutationOptions = Apollo.BaseMutationOptions<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>;
export const DeleteAssignmentDocument = gql`
    mutation DeleteAssignment($data: String!) {
  deleteAssignment(id: $data) {
    id
    title
    description
    extendedData
    dueDate
    type
    subjectId
  }
}
    `;
export type DeleteAssignmentMutationFn = Apollo.MutationFunction<DeleteAssignmentMutation, DeleteAssignmentMutationVariables>;

/**
 * __useDeleteAssignmentMutation__
 *
 * To run a mutation, you first call `useDeleteAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAssignmentMutation, { data, loading, error }] = useDeleteAssignmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAssignmentMutation, DeleteAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAssignmentMutation, DeleteAssignmentMutationVariables>(DeleteAssignmentDocument, options);
      }
export type DeleteAssignmentMutationHookResult = ReturnType<typeof useDeleteAssignmentMutation>;
export type DeleteAssignmentMutationResult = Apollo.MutationResult<DeleteAssignmentMutation>;
export type DeleteAssignmentMutationOptions = Apollo.BaseMutationOptions<DeleteAssignmentMutation, DeleteAssignmentMutationVariables>;
export const GetSubmissionDocument = gql`
    query GetSubmission($data: String!) {
  submission(id: $data) {
    id
    assignmentId
    studentId
    extendedData
    createdAt
    updatedAt
    score {
      id
      value
      notes
    }
  }
}
    `;

/**
 * __useGetSubmissionQuery__
 *
 * To run a query within a React component, call `useGetSubmissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubmissionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubmissionQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetSubmissionQuery(baseOptions: Apollo.QueryHookOptions<GetSubmissionQuery, GetSubmissionQueryVariables> & ({ variables: GetSubmissionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubmissionQuery, GetSubmissionQueryVariables>(GetSubmissionDocument, options);
      }
export function useGetSubmissionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubmissionQuery, GetSubmissionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubmissionQuery, GetSubmissionQueryVariables>(GetSubmissionDocument, options);
        }
export function useGetSubmissionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSubmissionQuery, GetSubmissionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSubmissionQuery, GetSubmissionQueryVariables>(GetSubmissionDocument, options);
        }
export type GetSubmissionQueryHookResult = ReturnType<typeof useGetSubmissionQuery>;
export type GetSubmissionLazyQueryHookResult = ReturnType<typeof useGetSubmissionLazyQuery>;
export type GetSubmissionSuspenseQueryHookResult = ReturnType<typeof useGetSubmissionSuspenseQuery>;
export type GetSubmissionQueryResult = Apollo.QueryResult<GetSubmissionQuery, GetSubmissionQueryVariables>;
export const GetSubmissionsDocument = gql`
    query GetSubmissions {
  submissions {
    id
    assignmentId
    studentId
    extendedData
    createdAt
    updatedAt
    score {
      id
      value
      notes
    }
    student {
      id
      username
      role
    }
    assignment {
      title
      dueDate
      type
      description
      extendedData
      subject {
        id
        name
        code
        teachers {
          id
          username
          role
        }
      }
    }
  }
}
    `;

/**
 * __useGetSubmissionsQuery__
 *
 * To run a query within a React component, call `useGetSubmissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubmissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubmissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSubmissionsQuery(baseOptions?: Apollo.QueryHookOptions<GetSubmissionsQuery, GetSubmissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubmissionsQuery, GetSubmissionsQueryVariables>(GetSubmissionsDocument, options);
      }
export function useGetSubmissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubmissionsQuery, GetSubmissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubmissionsQuery, GetSubmissionsQueryVariables>(GetSubmissionsDocument, options);
        }
export function useGetSubmissionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSubmissionsQuery, GetSubmissionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSubmissionsQuery, GetSubmissionsQueryVariables>(GetSubmissionsDocument, options);
        }
export type GetSubmissionsQueryHookResult = ReturnType<typeof useGetSubmissionsQuery>;
export type GetSubmissionsLazyQueryHookResult = ReturnType<typeof useGetSubmissionsLazyQuery>;
export type GetSubmissionsSuspenseQueryHookResult = ReturnType<typeof useGetSubmissionsSuspenseQuery>;
export type GetSubmissionsQueryResult = Apollo.QueryResult<GetSubmissionsQuery, GetSubmissionsQueryVariables>;
export const CreateSubmissionDocument = gql`
    mutation CreateSubmission($data: CreateSubmissionInput!) {
  createSubmission(data: $data) {
    id
    assignmentId
    studentId
    extendedData
  }
}
    `;
export type CreateSubmissionMutationFn = Apollo.MutationFunction<CreateSubmissionMutation, CreateSubmissionMutationVariables>;

/**
 * __useCreateSubmissionMutation__
 *
 * To run a mutation, you first call `useCreateSubmissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubmissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubmissionMutation, { data, loading, error }] = useCreateSubmissionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSubmissionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubmissionMutation, CreateSubmissionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSubmissionMutation, CreateSubmissionMutationVariables>(CreateSubmissionDocument, options);
      }
export type CreateSubmissionMutationHookResult = ReturnType<typeof useCreateSubmissionMutation>;
export type CreateSubmissionMutationResult = Apollo.MutationResult<CreateSubmissionMutation>;
export type CreateSubmissionMutationOptions = Apollo.BaseMutationOptions<CreateSubmissionMutation, CreateSubmissionMutationVariables>;
export const UpdateSubmissionDocument = gql`
    mutation UpdateSubmission($data: UpdateSubmissionInput!) {
  updateSubmission(data: $data) {
    id
    assignmentId
    studentId
    extendedData
  }
}
    `;
export type UpdateSubmissionMutationFn = Apollo.MutationFunction<UpdateSubmissionMutation, UpdateSubmissionMutationVariables>;

/**
 * __useUpdateSubmissionMutation__
 *
 * To run a mutation, you first call `useUpdateSubmissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubmissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubmissionMutation, { data, loading, error }] = useUpdateSubmissionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateSubmissionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSubmissionMutation, UpdateSubmissionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSubmissionMutation, UpdateSubmissionMutationVariables>(UpdateSubmissionDocument, options);
      }
export type UpdateSubmissionMutationHookResult = ReturnType<typeof useUpdateSubmissionMutation>;
export type UpdateSubmissionMutationResult = Apollo.MutationResult<UpdateSubmissionMutation>;
export type UpdateSubmissionMutationOptions = Apollo.BaseMutationOptions<UpdateSubmissionMutation, UpdateSubmissionMutationVariables>;
export const DeleteSubmissionDocument = gql`
    mutation DeleteSubmission($data: String!) {
  deleteSubmission(id: $data) {
    id
  }
}
    `;
export type DeleteSubmissionMutationFn = Apollo.MutationFunction<DeleteSubmissionMutation, DeleteSubmissionMutationVariables>;

/**
 * __useDeleteSubmissionMutation__
 *
 * To run a mutation, you first call `useDeleteSubmissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubmissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubmissionMutation, { data, loading, error }] = useDeleteSubmissionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteSubmissionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSubmissionMutation, DeleteSubmissionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSubmissionMutation, DeleteSubmissionMutationVariables>(DeleteSubmissionDocument, options);
      }
export type DeleteSubmissionMutationHookResult = ReturnType<typeof useDeleteSubmissionMutation>;
export type DeleteSubmissionMutationResult = Apollo.MutationResult<DeleteSubmissionMutation>;
export type DeleteSubmissionMutationOptions = Apollo.BaseMutationOptions<DeleteSubmissionMutation, DeleteSubmissionMutationVariables>;
export const GetScoreDocument = gql`
    query GetScore($data: String!) {
  score(id: $data) {
    id
    value
    notes
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetScoreQuery__
 *
 * To run a query within a React component, call `useGetScoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScoreQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetScoreQuery(baseOptions: Apollo.QueryHookOptions<GetScoreQuery, GetScoreQueryVariables> & ({ variables: GetScoreQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetScoreQuery, GetScoreQueryVariables>(GetScoreDocument, options);
      }
export function useGetScoreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetScoreQuery, GetScoreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetScoreQuery, GetScoreQueryVariables>(GetScoreDocument, options);
        }
export function useGetScoreSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetScoreQuery, GetScoreQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetScoreQuery, GetScoreQueryVariables>(GetScoreDocument, options);
        }
export type GetScoreQueryHookResult = ReturnType<typeof useGetScoreQuery>;
export type GetScoreLazyQueryHookResult = ReturnType<typeof useGetScoreLazyQuery>;
export type GetScoreSuspenseQueryHookResult = ReturnType<typeof useGetScoreSuspenseQuery>;
export type GetScoreQueryResult = Apollo.QueryResult<GetScoreQuery, GetScoreQueryVariables>;
export const GetScoresDocument = gql`
    query GetScores($filter: FilterScoresInput!) {
  scores(filter: $filter) {
    id
    value
    notes
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetScoresQuery__
 *
 * To run a query within a React component, call `useGetScoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScoresQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetScoresQuery(baseOptions: Apollo.QueryHookOptions<GetScoresQuery, GetScoresQueryVariables> & ({ variables: GetScoresQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetScoresQuery, GetScoresQueryVariables>(GetScoresDocument, options);
      }
export function useGetScoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetScoresQuery, GetScoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetScoresQuery, GetScoresQueryVariables>(GetScoresDocument, options);
        }
export function useGetScoresSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetScoresQuery, GetScoresQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetScoresQuery, GetScoresQueryVariables>(GetScoresDocument, options);
        }
export type GetScoresQueryHookResult = ReturnType<typeof useGetScoresQuery>;
export type GetScoresLazyQueryHookResult = ReturnType<typeof useGetScoresLazyQuery>;
export type GetScoresSuspenseQueryHookResult = ReturnType<typeof useGetScoresSuspenseQuery>;
export type GetScoresQueryResult = Apollo.QueryResult<GetScoresQuery, GetScoresQueryVariables>;
export const CreateScoreDocument = gql`
    mutation CreateScore($data: CreateScoreInput!) {
  createScore(data: $data) {
    id
    submissionId
    value
    notes
  }
}
    `;
export type CreateScoreMutationFn = Apollo.MutationFunction<CreateScoreMutation, CreateScoreMutationVariables>;

/**
 * __useCreateScoreMutation__
 *
 * To run a mutation, you first call `useCreateScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createScoreMutation, { data, loading, error }] = useCreateScoreMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateScoreMutation(baseOptions?: Apollo.MutationHookOptions<CreateScoreMutation, CreateScoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateScoreMutation, CreateScoreMutationVariables>(CreateScoreDocument, options);
      }
export type CreateScoreMutationHookResult = ReturnType<typeof useCreateScoreMutation>;
export type CreateScoreMutationResult = Apollo.MutationResult<CreateScoreMutation>;
export type CreateScoreMutationOptions = Apollo.BaseMutationOptions<CreateScoreMutation, CreateScoreMutationVariables>;
export const UpdateScoreDocument = gql`
    mutation UpdateScore($data: UpdateScoreInput!) {
  updateScore(data: $data) {
    id
    submissionId
    value
    notes
  }
}
    `;
export type UpdateScoreMutationFn = Apollo.MutationFunction<UpdateScoreMutation, UpdateScoreMutationVariables>;

/**
 * __useUpdateScoreMutation__
 *
 * To run a mutation, you first call `useUpdateScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateScoreMutation, { data, loading, error }] = useUpdateScoreMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateScoreMutation(baseOptions?: Apollo.MutationHookOptions<UpdateScoreMutation, UpdateScoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateScoreMutation, UpdateScoreMutationVariables>(UpdateScoreDocument, options);
      }
export type UpdateScoreMutationHookResult = ReturnType<typeof useUpdateScoreMutation>;
export type UpdateScoreMutationResult = Apollo.MutationResult<UpdateScoreMutation>;
export type UpdateScoreMutationOptions = Apollo.BaseMutationOptions<UpdateScoreMutation, UpdateScoreMutationVariables>;
export const DeleteScoreDocument = gql`
    mutation DeleteScore($data: String!) {
  deleteScore(id: $data) {
    id
  }
}
    `;
export type DeleteScoreMutationFn = Apollo.MutationFunction<DeleteScoreMutation, DeleteScoreMutationVariables>;

/**
 * __useDeleteScoreMutation__
 *
 * To run a mutation, you first call `useDeleteScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteScoreMutation, { data, loading, error }] = useDeleteScoreMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteScoreMutation(baseOptions?: Apollo.MutationHookOptions<DeleteScoreMutation, DeleteScoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteScoreMutation, DeleteScoreMutationVariables>(DeleteScoreDocument, options);
      }
export type DeleteScoreMutationHookResult = ReturnType<typeof useDeleteScoreMutation>;
export type DeleteScoreMutationResult = Apollo.MutationResult<DeleteScoreMutation>;
export type DeleteScoreMutationOptions = Apollo.BaseMutationOptions<DeleteScoreMutation, DeleteScoreMutationVariables>;
export const GetGradeDocument = gql`
    query GetGrade($data: String!) {
  grade(id: $data) {
    id
    name
    classrooms {
      id
      name
    }
    subjects {
      id
      name
    }
  }
}
    `;

/**
 * __useGetGradeQuery__
 *
 * To run a query within a React component, call `useGetGradeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGradeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGradeQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetGradeQuery(baseOptions: Apollo.QueryHookOptions<GetGradeQuery, GetGradeQueryVariables> & ({ variables: GetGradeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGradeQuery, GetGradeQueryVariables>(GetGradeDocument, options);
      }
export function useGetGradeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGradeQuery, GetGradeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGradeQuery, GetGradeQueryVariables>(GetGradeDocument, options);
        }
export function useGetGradeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetGradeQuery, GetGradeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGradeQuery, GetGradeQueryVariables>(GetGradeDocument, options);
        }
export type GetGradeQueryHookResult = ReturnType<typeof useGetGradeQuery>;
export type GetGradeLazyQueryHookResult = ReturnType<typeof useGetGradeLazyQuery>;
export type GetGradeSuspenseQueryHookResult = ReturnType<typeof useGetGradeSuspenseQuery>;
export type GetGradeQueryResult = Apollo.QueryResult<GetGradeQuery, GetGradeQueryVariables>;
export const GetGradesDocument = gql`
    query GetGrades {
  grades {
    id
    name
    classrooms {
      id
      name
      students {
        id
        name
        nisn
      }
      guardian {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetGradesQuery__
 *
 * To run a query within a React component, call `useGetGradesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGradesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGradesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGradesQuery(baseOptions?: Apollo.QueryHookOptions<GetGradesQuery, GetGradesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGradesQuery, GetGradesQueryVariables>(GetGradesDocument, options);
      }
export function useGetGradesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGradesQuery, GetGradesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGradesQuery, GetGradesQueryVariables>(GetGradesDocument, options);
        }
export function useGetGradesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetGradesQuery, GetGradesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGradesQuery, GetGradesQueryVariables>(GetGradesDocument, options);
        }
export type GetGradesQueryHookResult = ReturnType<typeof useGetGradesQuery>;
export type GetGradesLazyQueryHookResult = ReturnType<typeof useGetGradesLazyQuery>;
export type GetGradesSuspenseQueryHookResult = ReturnType<typeof useGetGradesSuspenseQuery>;
export type GetGradesQueryResult = Apollo.QueryResult<GetGradesQuery, GetGradesQueryVariables>;
export const CreateGradeDocument = gql`
    mutation CreateGrade($data: CreateGradeInput!) {
  createGrade(data: $data) {
    id
    name
  }
}
    `;
export type CreateGradeMutationFn = Apollo.MutationFunction<CreateGradeMutation, CreateGradeMutationVariables>;

/**
 * __useCreateGradeMutation__
 *
 * To run a mutation, you first call `useCreateGradeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGradeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGradeMutation, { data, loading, error }] = useCreateGradeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateGradeMutation(baseOptions?: Apollo.MutationHookOptions<CreateGradeMutation, CreateGradeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGradeMutation, CreateGradeMutationVariables>(CreateGradeDocument, options);
      }
export type CreateGradeMutationHookResult = ReturnType<typeof useCreateGradeMutation>;
export type CreateGradeMutationResult = Apollo.MutationResult<CreateGradeMutation>;
export type CreateGradeMutationOptions = Apollo.BaseMutationOptions<CreateGradeMutation, CreateGradeMutationVariables>;
export const UpdateGradeDocument = gql`
    mutation UpdateGrade($data: UpdateGradeInput!) {
  updateGrade(data: $data) {
    id
    name
  }
}
    `;
export type UpdateGradeMutationFn = Apollo.MutationFunction<UpdateGradeMutation, UpdateGradeMutationVariables>;

/**
 * __useUpdateGradeMutation__
 *
 * To run a mutation, you first call `useUpdateGradeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGradeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGradeMutation, { data, loading, error }] = useUpdateGradeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateGradeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGradeMutation, UpdateGradeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGradeMutation, UpdateGradeMutationVariables>(UpdateGradeDocument, options);
      }
export type UpdateGradeMutationHookResult = ReturnType<typeof useUpdateGradeMutation>;
export type UpdateGradeMutationResult = Apollo.MutationResult<UpdateGradeMutation>;
export type UpdateGradeMutationOptions = Apollo.BaseMutationOptions<UpdateGradeMutation, UpdateGradeMutationVariables>;
export const DeleteGradeDocument = gql`
    mutation DeleteGrade($data: String!) {
  deleteGrade(id: $data) {
    id
    name
  }
}
    `;
export type DeleteGradeMutationFn = Apollo.MutationFunction<DeleteGradeMutation, DeleteGradeMutationVariables>;

/**
 * __useDeleteGradeMutation__
 *
 * To run a mutation, you first call `useDeleteGradeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGradeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGradeMutation, { data, loading, error }] = useDeleteGradeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteGradeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGradeMutation, DeleteGradeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGradeMutation, DeleteGradeMutationVariables>(DeleteGradeDocument, options);
      }
export type DeleteGradeMutationHookResult = ReturnType<typeof useDeleteGradeMutation>;
export type DeleteGradeMutationResult = Apollo.MutationResult<DeleteGradeMutation>;
export type DeleteGradeMutationOptions = Apollo.BaseMutationOptions<DeleteGradeMutation, DeleteGradeMutationVariables>;
export const GetClassroomDocument = gql`
    query GetClassroom($data: String!) {
  classroom(id: $data) {
    id
    name
    guardian {
      id
      name
      nuptk
    }
    schedules {
      id
      day
      classroomId
      subjectId
    }
    students {
      id
      name
      nisn
    }
  }
}
    `;

/**
 * __useGetClassroomQuery__
 *
 * To run a query within a React component, call `useGetClassroomQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClassroomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClassroomQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetClassroomQuery(baseOptions: Apollo.QueryHookOptions<GetClassroomQuery, GetClassroomQueryVariables> & ({ variables: GetClassroomQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClassroomQuery, GetClassroomQueryVariables>(GetClassroomDocument, options);
      }
export function useGetClassroomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClassroomQuery, GetClassroomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClassroomQuery, GetClassroomQueryVariables>(GetClassroomDocument, options);
        }
export function useGetClassroomSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClassroomQuery, GetClassroomQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClassroomQuery, GetClassroomQueryVariables>(GetClassroomDocument, options);
        }
export type GetClassroomQueryHookResult = ReturnType<typeof useGetClassroomQuery>;
export type GetClassroomLazyQueryHookResult = ReturnType<typeof useGetClassroomLazyQuery>;
export type GetClassroomSuspenseQueryHookResult = ReturnType<typeof useGetClassroomSuspenseQuery>;
export type GetClassroomQueryResult = Apollo.QueryResult<GetClassroomQuery, GetClassroomQueryVariables>;
export const GetClassroomsDocument = gql`
    query GetClassrooms {
  classrooms {
    id
    name
    guardian {
      id
      name
      nuptk
    }
    schedules {
      id
      day
      classroomId
      subjectId
      subject {
        id
        name
      }
    }
    students {
      id
      name
      nisn
      classroom {
        id
        name
        schedules {
          id
          day
          subjectId
          subject {
            id
            name
          }
        }
      }
      school {
        id
        name
        npsn
      }
    }
  }
}
    `;

/**
 * __useGetClassroomsQuery__
 *
 * To run a query within a React component, call `useGetClassroomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClassroomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClassroomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClassroomsQuery(baseOptions?: Apollo.QueryHookOptions<GetClassroomsQuery, GetClassroomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClassroomsQuery, GetClassroomsQueryVariables>(GetClassroomsDocument, options);
      }
export function useGetClassroomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClassroomsQuery, GetClassroomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClassroomsQuery, GetClassroomsQueryVariables>(GetClassroomsDocument, options);
        }
export function useGetClassroomsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetClassroomsQuery, GetClassroomsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetClassroomsQuery, GetClassroomsQueryVariables>(GetClassroomsDocument, options);
        }
export type GetClassroomsQueryHookResult = ReturnType<typeof useGetClassroomsQuery>;
export type GetClassroomsLazyQueryHookResult = ReturnType<typeof useGetClassroomsLazyQuery>;
export type GetClassroomsSuspenseQueryHookResult = ReturnType<typeof useGetClassroomsSuspenseQuery>;
export type GetClassroomsQueryResult = Apollo.QueryResult<GetClassroomsQuery, GetClassroomsQueryVariables>;
export const CreateClassroomDocument = gql`
    mutation CreateClassroom($data: CreateClassroomInput!) {
  createClassroom(data: $data) {
    id
    name
    guardian {
      id
    }
    students {
      id
    }
  }
}
    `;
export type CreateClassroomMutationFn = Apollo.MutationFunction<CreateClassroomMutation, CreateClassroomMutationVariables>;

/**
 * __useCreateClassroomMutation__
 *
 * To run a mutation, you first call `useCreateClassroomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClassroomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClassroomMutation, { data, loading, error }] = useCreateClassroomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateClassroomMutation(baseOptions?: Apollo.MutationHookOptions<CreateClassroomMutation, CreateClassroomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateClassroomMutation, CreateClassroomMutationVariables>(CreateClassroomDocument, options);
      }
export type CreateClassroomMutationHookResult = ReturnType<typeof useCreateClassroomMutation>;
export type CreateClassroomMutationResult = Apollo.MutationResult<CreateClassroomMutation>;
export type CreateClassroomMutationOptions = Apollo.BaseMutationOptions<CreateClassroomMutation, CreateClassroomMutationVariables>;
export const UpdateClassroomDocument = gql`
    mutation UpdateClassroom($data: UpdateClassroomInput!) {
  updateClassroom(data: $data) {
    id
    name
  }
}
    `;
export type UpdateClassroomMutationFn = Apollo.MutationFunction<UpdateClassroomMutation, UpdateClassroomMutationVariables>;

/**
 * __useUpdateClassroomMutation__
 *
 * To run a mutation, you first call `useUpdateClassroomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClassroomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClassroomMutation, { data, loading, error }] = useUpdateClassroomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateClassroomMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClassroomMutation, UpdateClassroomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateClassroomMutation, UpdateClassroomMutationVariables>(UpdateClassroomDocument, options);
      }
export type UpdateClassroomMutationHookResult = ReturnType<typeof useUpdateClassroomMutation>;
export type UpdateClassroomMutationResult = Apollo.MutationResult<UpdateClassroomMutation>;
export type UpdateClassroomMutationOptions = Apollo.BaseMutationOptions<UpdateClassroomMutation, UpdateClassroomMutationVariables>;
export const DeleteClassroomDocument = gql`
    mutation DeleteClassroom($data: String!) {
  deleteClassroom(id: $data) {
    id
    name
  }
}
    `;
export type DeleteClassroomMutationFn = Apollo.MutationFunction<DeleteClassroomMutation, DeleteClassroomMutationVariables>;

/**
 * __useDeleteClassroomMutation__
 *
 * To run a mutation, you first call `useDeleteClassroomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClassroomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClassroomMutation, { data, loading, error }] = useDeleteClassroomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteClassroomMutation(baseOptions?: Apollo.MutationHookOptions<DeleteClassroomMutation, DeleteClassroomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteClassroomMutation, DeleteClassroomMutationVariables>(DeleteClassroomDocument, options);
      }
export type DeleteClassroomMutationHookResult = ReturnType<typeof useDeleteClassroomMutation>;
export type DeleteClassroomMutationResult = Apollo.MutationResult<DeleteClassroomMutation>;
export type DeleteClassroomMutationOptions = Apollo.BaseMutationOptions<DeleteClassroomMutation, DeleteClassroomMutationVariables>;
export const GetAnnouncementDocument = gql`
    query GetAnnouncement($data: String!) {
  announcement(id: $data) {
    id
    title
    content
    target
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetAnnouncementQuery__
 *
 * To run a query within a React component, call `useGetAnnouncementQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnnouncementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnnouncementQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetAnnouncementQuery(baseOptions: Apollo.QueryHookOptions<GetAnnouncementQuery, GetAnnouncementQueryVariables> & ({ variables: GetAnnouncementQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnnouncementQuery, GetAnnouncementQueryVariables>(GetAnnouncementDocument, options);
      }
export function useGetAnnouncementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnnouncementQuery, GetAnnouncementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnnouncementQuery, GetAnnouncementQueryVariables>(GetAnnouncementDocument, options);
        }
export function useGetAnnouncementSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAnnouncementQuery, GetAnnouncementQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnnouncementQuery, GetAnnouncementQueryVariables>(GetAnnouncementDocument, options);
        }
export type GetAnnouncementQueryHookResult = ReturnType<typeof useGetAnnouncementQuery>;
export type GetAnnouncementLazyQueryHookResult = ReturnType<typeof useGetAnnouncementLazyQuery>;
export type GetAnnouncementSuspenseQueryHookResult = ReturnType<typeof useGetAnnouncementSuspenseQuery>;
export type GetAnnouncementQueryResult = Apollo.QueryResult<GetAnnouncementQuery, GetAnnouncementQueryVariables>;
export const GetAnnouncementsDocument = gql`
    query GetAnnouncements {
  announcements {
    id
    title
    content
    target
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetAnnouncementsQuery__
 *
 * To run a query within a React component, call `useGetAnnouncementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnnouncementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnnouncementsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAnnouncementsQuery(baseOptions?: Apollo.QueryHookOptions<GetAnnouncementsQuery, GetAnnouncementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnnouncementsQuery, GetAnnouncementsQueryVariables>(GetAnnouncementsDocument, options);
      }
export function useGetAnnouncementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnnouncementsQuery, GetAnnouncementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnnouncementsQuery, GetAnnouncementsQueryVariables>(GetAnnouncementsDocument, options);
        }
export function useGetAnnouncementsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAnnouncementsQuery, GetAnnouncementsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnnouncementsQuery, GetAnnouncementsQueryVariables>(GetAnnouncementsDocument, options);
        }
export type GetAnnouncementsQueryHookResult = ReturnType<typeof useGetAnnouncementsQuery>;
export type GetAnnouncementsLazyQueryHookResult = ReturnType<typeof useGetAnnouncementsLazyQuery>;
export type GetAnnouncementsSuspenseQueryHookResult = ReturnType<typeof useGetAnnouncementsSuspenseQuery>;
export type GetAnnouncementsQueryResult = Apollo.QueryResult<GetAnnouncementsQuery, GetAnnouncementsQueryVariables>;
export const CreateAnnouncementDocument = gql`
    mutation CreateAnnouncement($data: CreateAnnouncementInput!) {
  createAnnouncement(data: $data) {
    id
    title
    content
    target
    createdAt
    updatedAt
  }
}
    `;
export type CreateAnnouncementMutationFn = Apollo.MutationFunction<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>;

/**
 * __useCreateAnnouncementMutation__
 *
 * To run a mutation, you first call `useCreateAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnnouncementMutation, { data, loading, error }] = useCreateAnnouncementMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>(CreateAnnouncementDocument, options);
      }
export type CreateAnnouncementMutationHookResult = ReturnType<typeof useCreateAnnouncementMutation>;
export type CreateAnnouncementMutationResult = Apollo.MutationResult<CreateAnnouncementMutation>;
export type CreateAnnouncementMutationOptions = Apollo.BaseMutationOptions<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>;
export const UpdateAnnouncementDocument = gql`
    mutation UpdateAnnouncement($data: UpdateAnnouncementInput!) {
  updateAnnouncement(data: $data) {
    id
    title
    content
    target
    createdAt
    updatedAt
  }
}
    `;
export type UpdateAnnouncementMutationFn = Apollo.MutationFunction<UpdateAnnouncementMutation, UpdateAnnouncementMutationVariables>;

/**
 * __useUpdateAnnouncementMutation__
 *
 * To run a mutation, you first call `useUpdateAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnnouncementMutation, { data, loading, error }] = useUpdateAnnouncementMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAnnouncementMutation, UpdateAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAnnouncementMutation, UpdateAnnouncementMutationVariables>(UpdateAnnouncementDocument, options);
      }
export type UpdateAnnouncementMutationHookResult = ReturnType<typeof useUpdateAnnouncementMutation>;
export type UpdateAnnouncementMutationResult = Apollo.MutationResult<UpdateAnnouncementMutation>;
export type UpdateAnnouncementMutationOptions = Apollo.BaseMutationOptions<UpdateAnnouncementMutation, UpdateAnnouncementMutationVariables>;
export const DeleteAnnouncementDocument = gql`
    mutation DeleteAnnouncement($data: String!) {
  deleteAnnouncement(id: $data) {
    id
    title
    content
    target
    createdAt
    updatedAt
  }
}
    `;
export type DeleteAnnouncementMutationFn = Apollo.MutationFunction<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>;

/**
 * __useDeleteAnnouncementMutation__
 *
 * To run a mutation, you first call `useDeleteAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnnouncementMutation, { data, loading, error }] = useDeleteAnnouncementMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>(DeleteAnnouncementDocument, options);
      }
export type DeleteAnnouncementMutationHookResult = ReturnType<typeof useDeleteAnnouncementMutation>;
export type DeleteAnnouncementMutationResult = Apollo.MutationResult<DeleteAnnouncementMutation>;
export type DeleteAnnouncementMutationOptions = Apollo.BaseMutationOptions<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>;
export const GetReferenceDocument = gql`
    query GetReference($data: String!) {
  reference(id: $data) {
    id
    url
    type
    authorId
    author {
      id
      name
      username
    }
    materials {
      id
      title
    }
  }
}
    `;

/**
 * __useGetReferenceQuery__
 *
 * To run a query within a React component, call `useGetReferenceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferenceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferenceQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetReferenceQuery(baseOptions: Apollo.QueryHookOptions<GetReferenceQuery, GetReferenceQueryVariables> & ({ variables: GetReferenceQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferenceQuery, GetReferenceQueryVariables>(GetReferenceDocument, options);
      }
export function useGetReferenceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferenceQuery, GetReferenceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferenceQuery, GetReferenceQueryVariables>(GetReferenceDocument, options);
        }
export function useGetReferenceSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetReferenceQuery, GetReferenceQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetReferenceQuery, GetReferenceQueryVariables>(GetReferenceDocument, options);
        }
export type GetReferenceQueryHookResult = ReturnType<typeof useGetReferenceQuery>;
export type GetReferenceLazyQueryHookResult = ReturnType<typeof useGetReferenceLazyQuery>;
export type GetReferenceSuspenseQueryHookResult = ReturnType<typeof useGetReferenceSuspenseQuery>;
export type GetReferenceQueryResult = Apollo.QueryResult<GetReferenceQuery, GetReferenceQueryVariables>;
export const GetReferencesDocument = gql`
    query GetReferences {
  references {
    id
    url
    type
    authorId
    author {
      id
      name
    }
    materials {
      id
      title
    }
  }
}
    `;

/**
 * __useGetReferencesQuery__
 *
 * To run a query within a React component, call `useGetReferencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferencesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReferencesQuery(baseOptions?: Apollo.QueryHookOptions<GetReferencesQuery, GetReferencesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReferencesQuery, GetReferencesQueryVariables>(GetReferencesDocument, options);
      }
export function useGetReferencesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReferencesQuery, GetReferencesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReferencesQuery, GetReferencesQueryVariables>(GetReferencesDocument, options);
        }
export function useGetReferencesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetReferencesQuery, GetReferencesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetReferencesQuery, GetReferencesQueryVariables>(GetReferencesDocument, options);
        }
export type GetReferencesQueryHookResult = ReturnType<typeof useGetReferencesQuery>;
export type GetReferencesLazyQueryHookResult = ReturnType<typeof useGetReferencesLazyQuery>;
export type GetReferencesSuspenseQueryHookResult = ReturnType<typeof useGetReferencesSuspenseQuery>;
export type GetReferencesQueryResult = Apollo.QueryResult<GetReferencesQuery, GetReferencesQueryVariables>;
export const CreateReferenceDocument = gql`
    mutation CreateReference($data: CreateReferenceInput!) {
  createReference(data: $data) {
    id
    url
    type
    authorId
  }
}
    `;
export type CreateReferenceMutationFn = Apollo.MutationFunction<CreateReferenceMutation, CreateReferenceMutationVariables>;

/**
 * __useCreateReferenceMutation__
 *
 * To run a mutation, you first call `useCreateReferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReferenceMutation, { data, loading, error }] = useCreateReferenceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateReferenceMutation(baseOptions?: Apollo.MutationHookOptions<CreateReferenceMutation, CreateReferenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReferenceMutation, CreateReferenceMutationVariables>(CreateReferenceDocument, options);
      }
export type CreateReferenceMutationHookResult = ReturnType<typeof useCreateReferenceMutation>;
export type CreateReferenceMutationResult = Apollo.MutationResult<CreateReferenceMutation>;
export type CreateReferenceMutationOptions = Apollo.BaseMutationOptions<CreateReferenceMutation, CreateReferenceMutationVariables>;
export const UpdateReferenceDocument = gql`
    mutation UpdateReference($data: UpdateReferenceInput!) {
  updateReference(data: $data) {
    id
    url
    type
    authorId
  }
}
    `;
export type UpdateReferenceMutationFn = Apollo.MutationFunction<UpdateReferenceMutation, UpdateReferenceMutationVariables>;

/**
 * __useUpdateReferenceMutation__
 *
 * To run a mutation, you first call `useUpdateReferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReferenceMutation, { data, loading, error }] = useUpdateReferenceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateReferenceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReferenceMutation, UpdateReferenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReferenceMutation, UpdateReferenceMutationVariables>(UpdateReferenceDocument, options);
      }
export type UpdateReferenceMutationHookResult = ReturnType<typeof useUpdateReferenceMutation>;
export type UpdateReferenceMutationResult = Apollo.MutationResult<UpdateReferenceMutation>;
export type UpdateReferenceMutationOptions = Apollo.BaseMutationOptions<UpdateReferenceMutation, UpdateReferenceMutationVariables>;
export const DeleteReferenceDocument = gql`
    mutation DeleteReference($data: String!) {
  deleteReference(id: $data) {
    id
    url
    type
    authorId
  }
}
    `;
export type DeleteReferenceMutationFn = Apollo.MutationFunction<DeleteReferenceMutation, DeleteReferenceMutationVariables>;

/**
 * __useDeleteReferenceMutation__
 *
 * To run a mutation, you first call `useDeleteReferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReferenceMutation, { data, loading, error }] = useDeleteReferenceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteReferenceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReferenceMutation, DeleteReferenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReferenceMutation, DeleteReferenceMutationVariables>(DeleteReferenceDocument, options);
      }
export type DeleteReferenceMutationHookResult = ReturnType<typeof useDeleteReferenceMutation>;
export type DeleteReferenceMutationResult = Apollo.MutationResult<DeleteReferenceMutation>;
export type DeleteReferenceMutationOptions = Apollo.BaseMutationOptions<DeleteReferenceMutation, DeleteReferenceMutationVariables>;
export const GetPaymentDocument = gql`
    query GetPayment($data: String!) {
  payment(id: $data) {
    id
    status
    reference
    method
    pricing {
      id
      name
      amount
      createdAt
      updatedAt
    }
    enrollment {
      id
    }
  }
}
    `;

/**
 * __useGetPaymentQuery__
 *
 * To run a query within a React component, call `useGetPaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetPaymentQuery(baseOptions: Apollo.QueryHookOptions<GetPaymentQuery, GetPaymentQueryVariables> & ({ variables: GetPaymentQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaymentQuery, GetPaymentQueryVariables>(GetPaymentDocument, options);
      }
export function useGetPaymentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentQuery, GetPaymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaymentQuery, GetPaymentQueryVariables>(GetPaymentDocument, options);
        }
export function useGetPaymentSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPaymentQuery, GetPaymentQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPaymentQuery, GetPaymentQueryVariables>(GetPaymentDocument, options);
        }
export type GetPaymentQueryHookResult = ReturnType<typeof useGetPaymentQuery>;
export type GetPaymentLazyQueryHookResult = ReturnType<typeof useGetPaymentLazyQuery>;
export type GetPaymentSuspenseQueryHookResult = ReturnType<typeof useGetPaymentSuspenseQuery>;
export type GetPaymentQueryResult = Apollo.QueryResult<GetPaymentQuery, GetPaymentQueryVariables>;
export const GetPaymentsDocument = gql`
    query GetPayments {
  payments {
    id
    status
    reference
    method
    pricing {
      id
      name
      amount
      createdAt
      updatedAt
    }
    enrollment {
      id
    }
  }
}
    `;

/**
 * __useGetPaymentsQuery__
 *
 * To run a query within a React component, call `useGetPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPaymentsQuery(baseOptions?: Apollo.QueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(GetPaymentsDocument, options);
      }
export function useGetPaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(GetPaymentsDocument, options);
        }
export function useGetPaymentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(GetPaymentsDocument, options);
        }
export type GetPaymentsQueryHookResult = ReturnType<typeof useGetPaymentsQuery>;
export type GetPaymentsLazyQueryHookResult = ReturnType<typeof useGetPaymentsLazyQuery>;
export type GetPaymentsSuspenseQueryHookResult = ReturnType<typeof useGetPaymentsSuspenseQuery>;
export type GetPaymentsQueryResult = Apollo.QueryResult<GetPaymentsQuery, GetPaymentsQueryVariables>;
export const CreatePaymentDocument = gql`
    mutation CreatePayment($data: CreatePaymentInput!) {
  createPayment(data: $data) {
    id
    status
    reference
    method
    pricing {
      id
    }
    enrollment {
      id
    }
  }
}
    `;
export type CreatePaymentMutationFn = Apollo.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, options);
      }
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = Apollo.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const UpdatePaymentDocument = gql`
    mutation UpdatePayment($data: UpdatePaymentInput!) {
  updatePayment(data: $data) {
    id
    status
    reference
    method
    pricing {
      id
    }
    enrollment {
      id
    }
  }
}
    `;
export type UpdatePaymentMutationFn = Apollo.MutationFunction<UpdatePaymentMutation, UpdatePaymentMutationVariables>;

/**
 * __useUpdatePaymentMutation__
 *
 * To run a mutation, you first call `useUpdatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePaymentMutation, { data, loading, error }] = useUpdatePaymentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePaymentMutation, UpdatePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePaymentMutation, UpdatePaymentMutationVariables>(UpdatePaymentDocument, options);
      }
export type UpdatePaymentMutationHookResult = ReturnType<typeof useUpdatePaymentMutation>;
export type UpdatePaymentMutationResult = Apollo.MutationResult<UpdatePaymentMutation>;
export type UpdatePaymentMutationOptions = Apollo.BaseMutationOptions<UpdatePaymentMutation, UpdatePaymentMutationVariables>;
export const DeletePaymentDocument = gql`
    mutation DeletePayment($data: String!) {
  deletePayment(id: $data) {
    id
    status
    reference
    method
    pricing {
      id
    }
    enrollment {
      id
    }
  }
}
    `;
export type DeletePaymentMutationFn = Apollo.MutationFunction<DeletePaymentMutation, DeletePaymentMutationVariables>;

/**
 * __useDeletePaymentMutation__
 *
 * To run a mutation, you first call `useDeletePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePaymentMutation, { data, loading, error }] = useDeletePaymentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeletePaymentMutation(baseOptions?: Apollo.MutationHookOptions<DeletePaymentMutation, DeletePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePaymentMutation, DeletePaymentMutationVariables>(DeletePaymentDocument, options);
      }
export type DeletePaymentMutationHookResult = ReturnType<typeof useDeletePaymentMutation>;
export type DeletePaymentMutationResult = Apollo.MutationResult<DeletePaymentMutation>;
export type DeletePaymentMutationOptions = Apollo.BaseMutationOptions<DeletePaymentMutation, DeletePaymentMutationVariables>;
export const GetPricingDocument = gql`
    query GetPricing {
  pricing {
    id
    name
    amount
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetPricingQuery__
 *
 * To run a query within a React component, call `useGetPricingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPricingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPricingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPricingQuery(baseOptions?: Apollo.QueryHookOptions<GetPricingQuery, GetPricingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPricingQuery, GetPricingQueryVariables>(GetPricingDocument, options);
      }
export function useGetPricingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPricingQuery, GetPricingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPricingQuery, GetPricingQueryVariables>(GetPricingDocument, options);
        }
export function useGetPricingSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPricingQuery, GetPricingQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPricingQuery, GetPricingQueryVariables>(GetPricingDocument, options);
        }
export type GetPricingQueryHookResult = ReturnType<typeof useGetPricingQuery>;
export type GetPricingLazyQueryHookResult = ReturnType<typeof useGetPricingLazyQuery>;
export type GetPricingSuspenseQueryHookResult = ReturnType<typeof useGetPricingSuspenseQuery>;
export type GetPricingQueryResult = Apollo.QueryResult<GetPricingQuery, GetPricingQueryVariables>;
export const GetPricingsDocument = gql`
    query GetPricings {
  pricings {
    id
    name
    amount
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetPricingsQuery__
 *
 * To run a query within a React component, call `useGetPricingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPricingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPricingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPricingsQuery(baseOptions?: Apollo.QueryHookOptions<GetPricingsQuery, GetPricingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPricingsQuery, GetPricingsQueryVariables>(GetPricingsDocument, options);
      }
export function useGetPricingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPricingsQuery, GetPricingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPricingsQuery, GetPricingsQueryVariables>(GetPricingsDocument, options);
        }
export function useGetPricingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPricingsQuery, GetPricingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPricingsQuery, GetPricingsQueryVariables>(GetPricingsDocument, options);
        }
export type GetPricingsQueryHookResult = ReturnType<typeof useGetPricingsQuery>;
export type GetPricingsLazyQueryHookResult = ReturnType<typeof useGetPricingsLazyQuery>;
export type GetPricingsSuspenseQueryHookResult = ReturnType<typeof useGetPricingsSuspenseQuery>;
export type GetPricingsQueryResult = Apollo.QueryResult<GetPricingsQuery, GetPricingsQueryVariables>;
export const CreatePricingDocument = gql`
    mutation CreatePricing($data: CreatePricingInput!) {
  createPricing(data: $data) {
    id
    name
    amount
  }
}
    `;
export type CreatePricingMutationFn = Apollo.MutationFunction<CreatePricingMutation, CreatePricingMutationVariables>;

/**
 * __useCreatePricingMutation__
 *
 * To run a mutation, you first call `useCreatePricingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePricingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPricingMutation, { data, loading, error }] = useCreatePricingMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePricingMutation(baseOptions?: Apollo.MutationHookOptions<CreatePricingMutation, CreatePricingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePricingMutation, CreatePricingMutationVariables>(CreatePricingDocument, options);
      }
export type CreatePricingMutationHookResult = ReturnType<typeof useCreatePricingMutation>;
export type CreatePricingMutationResult = Apollo.MutationResult<CreatePricingMutation>;
export type CreatePricingMutationOptions = Apollo.BaseMutationOptions<CreatePricingMutation, CreatePricingMutationVariables>;
export const UpdatePricingDocument = gql`
    mutation UpdatePricing($data: UpdatePricingInput!) {
  updatePricing(data: $data) {
    id
    name
    amount
  }
}
    `;
export type UpdatePricingMutationFn = Apollo.MutationFunction<UpdatePricingMutation, UpdatePricingMutationVariables>;

/**
 * __useUpdatePricingMutation__
 *
 * To run a mutation, you first call `useUpdatePricingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePricingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePricingMutation, { data, loading, error }] = useUpdatePricingMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePricingMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePricingMutation, UpdatePricingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePricingMutation, UpdatePricingMutationVariables>(UpdatePricingDocument, options);
      }
export type UpdatePricingMutationHookResult = ReturnType<typeof useUpdatePricingMutation>;
export type UpdatePricingMutationResult = Apollo.MutationResult<UpdatePricingMutation>;
export type UpdatePricingMutationOptions = Apollo.BaseMutationOptions<UpdatePricingMutation, UpdatePricingMutationVariables>;
export const DeletePricingDocument = gql`
    mutation DeletePricing($data: String!) {
  deletePricing(id: $data) {
    id
    name
    amount
  }
}
    `;
export type DeletePricingMutationFn = Apollo.MutationFunction<DeletePricingMutation, DeletePricingMutationVariables>;

/**
 * __useDeletePricingMutation__
 *
 * To run a mutation, you first call `useDeletePricingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePricingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePricingMutation, { data, loading, error }] = useDeletePricingMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeletePricingMutation(baseOptions?: Apollo.MutationHookOptions<DeletePricingMutation, DeletePricingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePricingMutation, DeletePricingMutationVariables>(DeletePricingDocument, options);
      }
export type DeletePricingMutationHookResult = ReturnType<typeof useDeletePricingMutation>;
export type DeletePricingMutationResult = Apollo.MutationResult<DeletePricingMutation>;
export type DeletePricingMutationOptions = Apollo.BaseMutationOptions<DeletePricingMutation, DeletePricingMutationVariables>;