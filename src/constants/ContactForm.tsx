import React, { useState } from 'react';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  // Email validation function
  const validateEmail = (email:string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Phone number validation function
  const validatePhone = (phone:string) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  // Function to handle input change and validate input
  const handleInputChange = (event:string) => {
    const { name, value } = event.target;
    setFormValues(prevState => ({ ...prevState, [name]: value }));

    // Update form values with the current change
    const allValues = { ...formValues, [name]: value };
    
    // Determine step based on validation
    const stepConditions = [
      allValues.name.length >= 3,
      validateEmail(allValues.email),
      validatePhone(allValues.phone),
      allValues.subject.length >= 3,
      allValues.message.length >= 3
    ];

    // Update the step to the first step that doesn't meet its condition
    const newStep = stepConditions.findIndex(condition => !condition) + 1;
    setCurrentStep(newStep === 0 ? 6 : newStep); // If all conditions are met, set step to show the submit button
  };

  // Check if all inputs before the current step are filled and valid
  const isFormFilled = currentStep >= 6;

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="w-5/6 justify-center">
          <h1 className="font-semibold text-2xl md:text-5xl p-6">Send us a message</h1>
          <div className="flex-wrap p-6">
            <form method="post" name="contact-form" id="contact-form" autoComplete="off" encType="multipart/form-data" className="space-y-6">
              <div className="flex flex-wrap -mx-3">
                <div className="flex justify-around items-center max-w-6xl w-full">
                  <div className={`relative w-full md:w-1/2 px-3 mb-6 ${currentStep >= 1 ? '' : 'hidden'}`}>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <input required  value={formValues.name}  onChange={handleInputChange} type="text" name="name" id="name" className="step-input font-semibold  p-6 bg-white text0-gray-900 text-sm block w-full pl-10 pr-4 border border-white focus:outline-none" placeholder="Your Name"/>
                  </div>
                  <div className={`relative w-full md:w-1/2 px-3 mb-6 ${currentStep >= 2 ? '' : 'hidden'}`}>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2 5.6V18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V5.6l-.9.7-7.9 6a2 2 0 0 1-2.4 0l-8-6-.8-.7Z"/>
                            <path d="M20.7 4.1A2 2 0 0 0 20 4H4a2 2 0 0 0-.6.1l.7.6 7.9 6 7.9-6 .8-.6Z"/>
                        </svg>
                    </div>
                    <input required type="email" value={formValues.email} name="email" id="email" onChange={handleInputChange} placeholder="Your Email" className="font-semibold p-6 bg-white text-gray-900 text-sm block w-full pl-10 pr-4 border border-white focus:outline-none"/>
                  </div>
                </div>
                <div className="flex justify-around items-center max-w-6xl w-full">
                  <div className={`relative w-full md:w-1/2 px-3 mb-6 ${currentStep >= 3 ? '' : 'hidden'}`}>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z"/>
                        </svg>
                        </div>
                        <input required type="text" value={formValues.phone} name="phone" id="phone" onChange={handleInputChange} placeholder="Your Phone" className="font-semibold  p-6 bg-white text-gray-900 text-sm block w-full pl-10 pr-4 border border-white focus:outline-none"/>
                  </div>
                  <div className={`relative w-full md:w-1/2 px-3 mb-6 ${currentStep >= 4 ? '' : 'hidden'}`}>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                    <svg  className="w-5 h-5 text-gray-500 dark:text-white"  aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
                        <path d="M32 32C32 14.3 46.3 0 64 0S96 14.3 96 32V240H32V32zM224 192c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V192zm-64-64c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm160 96c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V352c0 88.4-71.6 160-160 160H162.3c-42.4 0-83.1-16.9-113.1-46.9L37.5 453.5C13.5 429.5 0 396.9 0 363V336c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z"/>
                    </svg>
                    </div>
                        <input required type="text" name="subject" value={formValues.subject} id="subject" onChange={handleInputChange} placeholder="Your Subject" className="font-semibold p-6 bg-white text-gray-900 text-sm block w-full pl-10 pr-4 border border-white focus:outline-none"/>
                  </div>
                </div>
                <div className={`relative w-full px-3 mb-6 flex justify-around items-center max-w-6xl ${currentStep >= 5 ? '' : 'hidden'}`}>
                <div className="absolute inset-y-0 left-0 flex p-6 pl-6 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 5.6V18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V5.6l-.9.7-7.9 6a2 2 0 0 1-2.4 0l-8-6-.8-.7Z"/>
                        <path d="M20.7 4.1A2 2 0 0 0 20 4H4a2 2 0 0 0-.6.1l.7.6 7.9 6 7.9-6 .8-.6Z"/>
                    </svg>
                </div>
                    <textarea required name="message" value={formValues.message} onChange={handleInputChange} id="message" cols="30" rows="10" placeholder="Your Message" className="p-6 font-semibold bg-white text-gray-900 text-sm block w-full pl-10 pr-4 border border-white focus:outline-none"></textarea>
                </div>
                <div className="w-full px-3 text-center mb-6">
                  <button className={`btn btn-icon ml-0 ${!isFormFilled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!isFormFilled} type="submit">
                    <span>+</span>Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;