export const authText =
  // : Record<string, Record<"login" | "register", string>>
  {
    submitButtonText: {
      login: "Sign in",
      register: "Sign up",
    },
    title: {
      login: "Sign in to Recharge Direct",
      register: "Sign up to Recharge Driect",
    },
    subTitle: {
      login: "Don't have an account? You can",
      register: "if you have an account you can",
    },
    subTitleLink: {
      login: "Register here!",
      register: "Sign in here!",
    },
  } as const;
