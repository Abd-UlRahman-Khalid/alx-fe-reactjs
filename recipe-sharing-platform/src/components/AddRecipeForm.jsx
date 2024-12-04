import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error for the field
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (formData.ingredients.split(",").length < 2) {
      newErrors.ingredients = "Provide at least two ingredients.";
    }
    if (!formData.steps.trim())
      newErrors.steps = "Preparation steps are required.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setFormData({ title: "", ingredients: "", steps: "" }); // Reset form
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Add a New Recipe
      </h1>
      {submitted && (
        <div className="p-4 mb-4 text-green-800 bg-green-100 border border-green-200 rounded">
          Recipe submitted successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 ${
              errors.title
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="Enter recipe title"
            aria-invalid={!!errors.title}
          />
          {errors.title && (
            <p className="text-red-600 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label
            htmlFor="ingredients"
            className="block text-lg font-medium text-gray-700"
          >
            Ingredients (separate by commas)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="3"
            className={`w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 ${
              errors.ingredients
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="e.g., Flour, Sugar, Eggs"
            aria-invalid={!!errors.ingredients}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label
            htmlFor="steps"
            className="block text-lg font-medium text-gray-700"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="5"
            className={`w-full p-2 border rounded mt-1 focus:outline-none focus:ring-2 ${
              errors.steps
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="Describe the preparation steps"
            aria-invalid={!!errors.steps}
          ></textarea>
          {errors.steps && (
            <p className="text-red-600 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
