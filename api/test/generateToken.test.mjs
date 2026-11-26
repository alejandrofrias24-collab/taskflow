import { afterEach, describe, expect, it } from "vitest";
import jwt from "jsonwebtoken";
import generateToken from "../src/utils/generateToken.js";

const originalSecret = process.env.JWT_SECRET;

afterEach(() => {
  if (originalSecret === undefined) {
    delete process.env.JWT_SECRET;
  } else {
    process.env.JWT_SECRET = originalSecret;
  }
});

describe("generateToken", () => {
  it("signs a token with the user's identity and a 24-hour expiry", () => {
    process.env.JWT_SECRET = "taskflow-test-secret";

    const token = generateToken({
      id: 42,
      email: "user@example.com",
      rol: "Administrador",
    });
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    expect(payload).toMatchObject({
      id: 42,
      email: "user@example.com",
      rol: "Administrador",
    });
    expect(payload.exp - payload.iat).toBe(24 * 60 * 60);
  });
});
