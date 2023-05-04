const userSchme = new Schema({
  name: String,
  age: Number,
})

const User = mongoose.model('User', userSchme)
