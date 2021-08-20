const fs = require('fs')

// promisify is a neat tool in the util module that transforms a callback function into a promise one
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

const writeAndRead = async (req, res) => {
  await writeFile('./test.txt', 'Hello World')
  const content = await readFile('./test.txt', 'utf-8')

  return content 
  
  res.status(200).json({ name: 'John Doe' })
  

}

writeAndRead()
  .then(content => console.log(content)) // Hello World