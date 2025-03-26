import React, { useState } from "react";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.comment) {
      setFeedbacks([...feedbacks, formData]);
      setFormData({ name: "", rating: 5, comment: "" }); 
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-[#01b5c5] mb-4">
        Patient Feedback
      </h2>


      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </select>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Your Feedback"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#01b5c5] text-white p-2 rounded hover:bg-[#0195a5]"
        >
          Submit Feedback
        </button>
      </form>

      
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Recent Feedback:</h3>
        {feedbacks.length === 0 ? (
          <p className="text-gray-500">No feedback yet.</p>
        ) : (
          feedbacks.map((feedback, index) => (
            <div key={index} className="p-3 border-b">
              <p className="font-bold">{feedback.name}</p>
              <p className="text-yellow-500">⭐ {feedback.rating} Stars</p>
              <p className="text-gray-700">{feedback.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Feedback;
