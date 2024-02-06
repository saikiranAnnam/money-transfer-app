const zod = require("zod")

const updateBody = zod.object({
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});

module.exports = updateBody;