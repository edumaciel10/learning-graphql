import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const movieSchema = new Schema({
  name: {
    type: String,
    required:true
  },
  rating: {
    type: Number,
    required: true
  },
  producer: {
    type: String,
    required: true
  }
}, {
  timestamps:true
})

export const Movies = mongoose.model('Movie', movieSchema);

