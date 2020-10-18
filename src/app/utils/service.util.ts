export default {
  auth: {
    login: '/login',
    refresh: '/refresh-token'
  },
  demo: {
    employee: {
      create: '/demo/employee',
      list: '/demo/employee/page-search',
      show: (id) => `/demo/employee/${id}`,
      delete: (id) => `/demo/employee/${id}`,
    }
  }
};
