export function useAuth(..._args: any[]) {
  return {
    isInOrg: false,
    userId: undefined,
    userEmail: undefined,
    isLoading: false,
    isAuthenticated: false,
    isAdmin: false,
    orgMembers: [],
    isOrgAdmin: false,
    errorMessage: undefined,
    signOut: async () => {},
    signInGoogle: async (..._args: any[]) => {},
    signInMagicLink: async (..._args: any[]) => {},
    impersonateUser: async (..._args: any[]) => {},
  };
}
