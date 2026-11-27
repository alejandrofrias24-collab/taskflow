import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../src/services/api.js", () => ({
  default: {
    post: vi.fn(),
  },
}));

import api from "../src/services/api.js";
import { login } from "../src/services/authService.js";

describe("authService.login", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("sends the credentials to the login endpoint and returns the response data", async () => {
    const credentials = {
      email: "user@example.com",
      password: "test-password",
    };
    const responseData = { token: "test-token", usuario: { id: 42 } };
    api.post.mockResolvedValue({ data: responseData });

    await expect(login(credentials)).resolves.toEqual(responseData);
    expect(api.post).toHaveBeenCalledWith("/auth/login", credentials);
  });
});
