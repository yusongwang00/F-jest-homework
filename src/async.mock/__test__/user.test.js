import axios from "axios";
import { register } from "../user";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const mockUsername = "mockUsername";
    const mockPassword = "mockPassword";
    axios.post.mockImplementation(() =>
      Promise.resolve({ data: { user: "name" } })
    );
    await expect(register(mockUsername, mockPassword)).resolves.toEqual({
      user: "name",
    });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const mockUsername = "FakeUsername";
    const mockPassword = "mockPassword";
    await expect(register(mockUsername, mockPassword)).rejects.toEqual(
      Error("wrong username or password")
    );
  });
});
