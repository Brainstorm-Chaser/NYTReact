const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
// This is similar to a Sequelize model
const ArticleSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  url: {
    type: String,
    unique: true
  },

   saved: {
    type: Boolean,
    default:false,
    required: true
  },

   note: [
   {
    type: Schema.Types.ObjectId,
    ref: "note"
   }
  ],

});

// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);

// Export the Library model
module.exports = Article;