const mockNextAuth = jest.createMockFromModule("next-auth") as any;

mockNextAuth.useSession = jest.fn(() => ({
  data: {
    user: { name: "Admin", work_id: "ID001", role: "admin", id: "11" },
    expires: "2024-07-25T03:19:57.467Z",
  },
  status: "authenticated",
}));

module.exports = mockNextAuth;
