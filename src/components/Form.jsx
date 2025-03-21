import React, { useState } from "react";
import InputField from "./InputFields/Input";
import FileInput from "./InputFields/FileInput";
import TextArea from "./InputFields/TextArea";
import { Button } from "./Button";

const Form = ({title,subTitle,data}) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    specialty: "",
    medicalReport: "",
    country: "",
    summary: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.number || !formData.specialty || !formData.country) {
      setErrorMessage("Please fill in all required fields.");
      setSuccessMessage("");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
   
      setTimeout(() => {
        setSuccessMessage("Appointment booked successfully!");
        setErrorMessage("");

        
        setFormData({
          name: "",
          number: "",
          specialty: "",
          medicalReport: "",
          country: "",
          summary: "",
        });
      }, 1000);
    } catch (err) {
      setErrorMessage(`Failed to book appointment. Please try again.${err}`);
      setSuccessMessage("");
    }
  };

  return (
    <section id="formsection" className="py-10  my-10 bg-[#ECF2FF] mx-auto w-[1800px] rounded-4xl">
      <div className=" mx-10 px-4 lg:px-10  flex flex-col items-center xl:flex-row gap-30">
        <div className="flex-1">
          <form
            className="space-y-6 bg-white p-8 shadow-lg rounded-4xl"
            onSubmit={handleSubmit}
          >
            <h1 className=" font-semibold font-figtree text-2xl md:text-3xl  leading-[66px] text-[#5057E5]">
        {title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                value={formData.name}
                onChange={(value) => handleChange("name", value)}
                label="Name"
                placeholder="Enter your name"
              />
              <InputField
                onChange={(value) => handleChange("number", value)}
                value={formData.number}
                label="Number"
                placeholder="Enter your number"
                type="tel"
                id="phone"
              />
              <InputField
                label="Specialty"
                placeholder="Select specialty"
                value={formData.specialty}
                onChange={(value) => handleChange("specialty", value)}
              />
              <InputField
                label="Country"
                placeholder="Enter your country"
                value={formData.country}
                onChange={(value) => handleChange("country", value)}
              />
            </div>

            <FileInput
              label="Medical Report"
              id="file-upload"
              value={formData.medicalReport}
              onChange={(value) => handleChange("medicalReport", value)}
            />
            <TextArea
              value={formData.summary}
              onChange={(value) => handleChange("summary", value)}
              label="Medical summary"
              placeholder="Describe the medical problem"
            />

            <div id="formbox" className="flex  -mx-20  w-140 items-center ">
              <input type="checkbox" id="terms" required />
              <label className=" w-400 -mx-15 mt-2 md:text-md text-[#1E1E1E]" htmlFor="terms">
                By submitting, I agree to the terms and conditions.
              </label>
            </div>

           
            {successMessage && (
              <div className="text-green-600 font-semibold">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="text-red-600 font-semibold">{errorMessage}</div>
            )}

            <Button name="Submit" type="submit" />
          </form>
        </div>

        <div className="flex-1">
          <div>
            <h1 className="lg:text-6xl mb-20 font-semibold font-figtree text-3xl  text-[#29569c] ">
       {subTitle}
            </h1>

            {data.map((data, index) => (
              <div key={index} className="flex gap-10 items-center mt-8 mb-6">
                <div className="border-l-2   border-[#5057E5] h-25"></div>
                <div>
                  <h2 className="w-full font-figtree mb-3 xl:text-3xl md:text-2xl font-medium text-[#2D3436]">
                    {data.title}
                  </h2>
                  <p className="text-[#666666] w-150 xl:text-xl md:text-base font-manrope">{data.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
