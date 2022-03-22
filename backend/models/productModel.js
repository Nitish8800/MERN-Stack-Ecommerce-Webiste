const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name "],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description "],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Product Price "],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: string,
        required: true,
      },
      url: {
        type: string,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Category "],
  },

  Stock: {
    type: Number,
    required: [true, "Please Enter Product Stock"],
    maxLength: [4, ""],
  },
});
