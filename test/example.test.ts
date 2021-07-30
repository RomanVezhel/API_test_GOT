import got from "got";
import { strict as assert } from "assert";
import { URLSearchParams } from "url";
import { user } from "../api/controller/user.controller"

describe("User", () => {
  it("can be received by id", async function () {
    const body = await user.getById(18686)
    // console.log(body);
    assert(body.items[0].id == 18686)    

  });
});
