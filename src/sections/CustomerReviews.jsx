import ReviewCard from "../Components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-rose-500"> Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satsfied customers about their exceptional expereiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard 
          key={review.customerName}
          imgURL = {review.imgURL}
        customerName = {review.customerName}
        review = {review.rating}
        feedback = {review.feedback} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews