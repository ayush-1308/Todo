const zod = require('zod');

const createtodoSchema = zod.object({
  title: zod.string(),
  description: zod.string()
})

const updatetodoSchema = zod.object({
  id: zod.string()
})

module.exports = { createtodoSchema, updatetodoSchema };