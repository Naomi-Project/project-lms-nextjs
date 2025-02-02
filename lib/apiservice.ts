import axios from "axios";

class BaseService {
  baseUrl: string = process.env.BASE_URL || "http://localhost:3000/graphql";
  constructor() {}
}

class AuthService extends BaseService {
  constructor() {
    super();
  }

  async login() {
    const response = await axios.post(this.baseUrl, {
      query: `
        mutation Login {
          login(data: { username: "admin", password: "admin" }) {
            authToken
          }
        }
      `,
    });

    return response;
  }

  async me() {
    const response = await axios.post(this.baseUrl, {
      query: `
        query Me {
          me {
            username
          }
        }
      `,
    });

    return response;
  }

  async logout() {}
}

class SchoolService extends BaseService {
  constructor() {
    super();
  }

  async getSchools() {
    const response = await axios.get(this.baseUrl, {
      params: {
        query: `
        
        `,
      }
    });

    return response;
  }
}

class UserService extends BaseService {
  constructor() {
    super();
  }
  async users() {
    const response = await axios.get(this.baseUrl, {
      params: {
        query: `
        
        `,
      }
    });

    return response;
  }
  async user(id: string) {
    const response = await axios.get(this.baseUrl, {
      params: {
        query: `
        
        `,
      }
    });

    return response;
  }
  async createUser() {
    const response = await axios.post(this.baseUrl, {
      query: `
        
        `,
    });

    return response;
  }
  async deleteUser() {
    const response = await axios.delete(this.baseUrl, {
      data: {
        query: ``,
      }
    });

    return response;
  }
  async updateUser() {
    const response = await axios.put(this.baseUrl, {
      data: {
        query: ``,
      }
    });

    return response;
  }
}

class CourseService extends BaseService {
  constructor() {
    super();
  }
  async courses() {
    const response = await axios.get(this.baseUrl, {
      params: {
        query: `
        
        `,
      }
    });

    return response;
  }
  async course(id: string) {
    const response = await axios.get(this.baseUrl, {
      params: {
        query: `
        
        `,
      }
    });

    return response;
  }
  async createCourse() {
    const response = await axios.post(this.baseUrl, {
      query: `
        
        `,
    });

    return response;
  }
  async deleteCourse() {
    const response = await axios.delete(this.baseUrl, {
      data: {
        query: ``,
      }
    });

    return response;
  }
  async updateCourse() {
    const response = await axios.put(this.baseUrl, {
      data: {
        query: ``,
      }
    });
    
    return response;
  }
}

class TermService extends BaseService {
  constructor() {
    super();
  }
  async terms() {
    const response = await axios.get(this.baseUrl, {
      params: {
        query: `
        
        `,
      }
    });

    return response;
  }
  async term(id: string) {
    const response = await axios.get(this.baseUrl, {
      params: {
        query: `
        
        `,
      }
    });

    return response;
  }
  async createTerm() {
    const response = await axios.post(this.baseUrl, {
      query: `
        
        `,
    });

    return response;
  }
  async deleteTerm() {
    const response = await axios.delete(this.baseUrl, {
      data: {
        query: ``,
      }
    });

    return response;
  }
  async updateTerm() {
    const response = await axios.put(this.baseUrl, {
      data: {
        query: ``,
      }
    });

    return response;
  }
}

class EnrollmentService extends BaseService {
  constructor() {
    super();
  }
  async enrollments() {
    const response = await axios.get(this.baseUrl, {
      params: {
        query: `
        
        `,
      }
    });

    return response;
  }
  async enrollment(id: string) {
    const response = await axios.get(this.baseUrl, {
      params: {
        query: `
        
        `,
      }
    });

    return response;
  }
  async createEnrollment() {
    const response = await axios.post(this.baseUrl, {
      query: `
        
        `,
    });

    return response;
  }
  async deleteEnrollment() {
    const response = await axios.delete(this.baseUrl, {
      data: {
        query: ``,
      }
    });

    return response;
  }
  async updateEnrollment() {
    const response = await axios.put(this.baseUrl, {
      data: {
        query: ``,
      }
    });

    return response;
  }
}

class AssignmentService extends BaseService {
  constructor() {
    super();
  }
  async assignments() {
    const response = await axios.get(this.baseUrl, {
      params: {
        query: `
        
        `,
      }
    });

    return response;
  }
  async assignment(id: string) {
    const response = await axios.get(this.baseUrl, {
      params: {
        query: `
        
        `,
      }
    });

    return response;
  }
  async createAssignment() {
    const response = await axios.post(this.baseUrl, {
      query: `
        
        `,
    });

    return response;
  }
  async deleteAssignment() {
    const response = await axios.delete(this.baseUrl, {
      data: {
        query: ``,
      }
    });

    return response;
  }
  async updateAssignment() {
    const response = await axios.put(this.baseUrl, {
      data: {
        query: ``,
      }
    });

    return response;
  }
}

class LMSApi {
  authService: AuthService = new AuthService();
  userService: UserService = new UserService();
  schoolService: SchoolService = new SchoolService();
  courseService: CourseService = new CourseService();
  termService: TermService = new TermService();
  enrollmentService: EnrollmentService = new EnrollmentService();
  assignmentService: AssignmentService = new AssignmentService();

  constructor() {}
}

async function main() {
  const lms = new LMSApi();
  await lms.authService.login();
}

main();