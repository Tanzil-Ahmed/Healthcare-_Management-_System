import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know
        </p>
        <form action="#" className="space-y-8">
          <div className="relative mb-8">
            {" "}
            {/* Added margin-bottom */}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm18 0a10 10 0 11-20 0 10 10 0 0120 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm18 0a10 10 0 11-20 0 10 10 0 0120 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              rows={6}
              type="text"
              id="message"
              placeholder="Leave a comment..."
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm18 0a10 10 0 11-20 0 10 10 0 0120 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="btn rounded sm:w-fit transform transition-transform duration-300 hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
