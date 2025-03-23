export const LoginFormKeys = {
  email: 'email',
  password: 'password',
} as const;

export const LoginFormDefaults = {
  email: '',
  password: '',
};

export const LoginFormValidations = {
  email: {
    minLength: 5,
  },
  password: {
    minLength: 5,
  },
};
