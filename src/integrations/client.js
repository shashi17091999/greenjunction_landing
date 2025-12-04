let dummyClient = {
  auth: {
    signIn: () => Promise.resolve({ error: null, user: null }),
    signUp: () => Promise.resolve({ error: null, user: null }),
    signOut: () => Promise.resolve({ error: null }),
    getSession: () => Promise.resolve({ data: { session: null } }),
  },
  from: () => ({
    select: () => Promise.resolve({ data: null, error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
  }),
};

export const supabase = dummyClient;
