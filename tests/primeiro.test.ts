import app from "../src/index";
import supertest from "supertest";

const api = supertest(app);

describe("Testando a API", () => {
  it("Testando GET: /fruits", async () => {
    const result = await api.get("/fruits");
    expect(result.status).toBe(200);
    expect(result.body).toHaveLength(0)
  });
});
