const zod = require("zod")

const updateBody = zod.object({
    password : zod.string().optional,
    firstname : zod.string().optional,
    lastname : zod.string().optional,
})

module.exports = updateBody;