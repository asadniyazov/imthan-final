import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
const port = 3000
app.use(cors())
app.use(express.json()
)

const blogSchema = new mongoose.Schema({
    title: String,
    des:String,
    icon:String,
  });
  const Blog = mongoose.model("mongoose", blogSchema);
app.get('/', (req, res) => {
  res.send('Hello World!')
})
mongoose.connect('mongodb+srv://NiyazovAsad:Niyazovesed2004@ourdb.n1ga79r.mongodb.net/');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})