import mongoose from "mongoose";
const { Schema } = mongoose;

const BookingSchema = new Schema({
  stripeId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  stayId: {
    type: String,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  nights: {
    type: Number,
    required: true,
  },
  dates: [
    {
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Booking", BookingSchema);
