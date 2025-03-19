import React from "react";
import { useState } from "react";
import InputField from "./InputFields/Input";
import TextArea from "./InputFields/TextArea";
import { Button } from "./Button";
import { Icon } from "@iconify/react";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    country: "",
    city: "",
    medicalProblem: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.number.trim()) {
      newErrors.number = "Number is required";
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = "Invalid phone number (10 digits required)";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.medicalProblem.trim())
      newErrors.medicalProblem = "Medical problem is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      setSuccessMessage("Form submitted successfully!");
      setFormData({
        name: "",
        number: "",
        email: "",
        country: "",
        city: "",
        medicalProblem: "",
      });
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 space-y-4  bg-[#f1f4fb] shadow-2xl rounded-b-lg"
    >
      <InputField
        label="Name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(value) => handleChange("name", value)}
        error={errors.name}
      />
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(value) => handleChange("email", value)}
        error={errors.email}
      />
      <InputField
        label="Number"
        type="tel"
        placeholder="Enter your number"
        value={formData.number}
        onChange={(value) => handleChange("number", value)}
        error={errors.number}
      />

      <InputField
        label="Country"
        placeholder="Enter your country"
        value={formData.country}
        onChange={(value) => handleChange("country", value)}
        error={errors.country}
      />
      <InputField
        label="City"
        placeholder="Enter your city"
        value={formData.city}
        onChange={(value) => handleChange("city", value)}
        error={errors.city}
      />
      <TextArea
        label="Medical Problem"
        placeholder="Describe the medical issues"
        value={formData.medicalProblem}
        onChange={(value) => handleChange("medicalProblem", value)}
        error={errors.medicalProblem}
      />

      <div className="flex items-center justify-center   flex-wrap gap-2">
        <Button name="Book an appointment" />
        <Button
          startIcon={<Icon icon="mdi:whatsapp" className="text-xl" />}
          name="Chat Support"
        />
      </div>

      {successMessage && (
        <p className="text-green-600 text-center">{successMessage}</p>
      )}
      {Object?.keys(errors).length > 0 && (
        <p className="text-red-500 text-center">Please fix the errors above.</p>
      )}
      <p className="text-[#6B7280] text-center mx-auto font-manrope max-w-80">
        By submitting the form, I agree to the terms & conditions of the
        company’s policy.
      </p>
    </form>
  );
}

export default Appointment;
