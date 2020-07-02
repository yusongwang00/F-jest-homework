const verifyPassword = jest.fn().mockImplementation(() => true);
const verifyUsername = jest.fn().mockImplementation((usename) => {
  return usename === "mockUsername";
});

export { verifyPassword, verifyUsername };
