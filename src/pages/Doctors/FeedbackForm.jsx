import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState(""); // Corrected state variable name

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    // Later, you can use your API to submit the review
  };

  return (
    <form onSubmit={handleSubmitReview}>
      {" "}
      {/* Added onSubmit event handler */}
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall experience?*
        </h3>

        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your Feedback or Suggestions*
        </h3>

        <textarea
          className="border border-solid border-[#0066ff34] focus:outline-primaryColor w-full px-4 py-3 rounded-md"
          rows="5"
          placeholder="Write your message"
          value={reviewText} // Updated value attribute
          onChange={(e) => setReviewText(e.target.value)} // Corrected state updater function
        ></textarea>
      </div>
      <button type="submit" className="btn animate-pulse">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
