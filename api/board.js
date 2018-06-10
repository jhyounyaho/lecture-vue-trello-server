const models = require('../models')

const create = async (req, res) => {
  const userId = req.user.id
  let { title } = req.body
  
  if (!title) res.status(400).end('no title')

  const board = models.Board.build({ title, userId })
  await board.save()
  await models.List.bulkCreate([
    {title: 'Todo', boardId: board.id},
    {title: 'Doing', boardId: board.id},
    {title: 'Done', boardId: board.id},
  ])
  
  const item = await models.Board.findOne({ 
    where: {id: board.dataValues.id},
    include: [{
      model: models.List,
    }]
  })
  res.status(201).json({ item })
}

const query = async (req, res) => {
  const userId = req.user.id
  const list = await models.Board.findAll({ where: {userId} })
  res.json({ list })
}

const get = async (req, res) => {
  const { id } = req.params
  const item = await models.Board.findOne({ 
    where: {id},
    include: [models.List]
  })
  if (!item) return res.status(404).end()
  res.json({ item })
}

const update = async (req, res) => {
  const { id } = req.params
  let item = await models.Board.findOne({ where: { id } })

  if (!item) return res.status(404).end()

  let { title } = req.body
  title = title.trim()

  if (!title) res.status(400).end('no title')

  item.title = title
  await item.save()
  res.json({ item })
}

const destroy = async (req, res) => {
  const { id } = req.params
  await models.Board.destroy({ where: { id } })
  res.status(204).end()
}

module.exports = {
  create,
  query,
  get,
  update,
  destroy
}