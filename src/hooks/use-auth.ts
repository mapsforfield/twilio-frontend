export function useAuth() {
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
    signInGoogle: async () => {},
    signInMagicLink: async () => {},
    impersonateUser: async () => {},
  };
}
