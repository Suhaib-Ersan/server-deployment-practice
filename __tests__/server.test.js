"use strict";

const supertest = require("supertest");
const server = require("../server");
const request = supertest(server.app);

describe("express server", () => {
  it("check if the domain / works", async () => {
    // arrange
    let param = "/";
    let status = 200;
    let text = "working fine";
    // act
    const res = await request.get(param);
    // assert
    expect(res.status).toBe(status);
    expect(res.text).toBe(text);
  });

  it("check if /data works", async () => {
    // arrange
    let param = "/data";
    let status = 200;
    // act
    const res = await request.get(param);
    // assert
    expect(res.status).toBe(status);
    expect(typeof res.body).toEqual("object");
  });

  it("check for 500 internal server errors", async () => {
    // arrange
    let param = "/badAccess";
    let status = 500;
    // act
    const response = await request.get(param);
    // assert
    expect(response.status).toBe(status);
    expect(response.body.route).toBe(param);
  });

  it("check for 404 not found errors", async () => {
    // arrange
    let param = "/notFound";
    let status = 404;
    // act
    const response = await request.get(param);
    // assert
    expect(response.status).toBe(status);
  });
});
