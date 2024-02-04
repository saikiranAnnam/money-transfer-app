// zod validation
const zod = require("zod");

const signupBody = zod.object({
  username: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string(),
});

module.exports = signupBody;
