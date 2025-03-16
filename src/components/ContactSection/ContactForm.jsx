
import { useState } from "react";
import axios from "axios";
import SuccessToast from "../Notification/SuccessToast";

function ContactForm() {
  const [emailDetails, setEmailDetails] = useState({
    name: "",
    fromEmail: "",
    subject: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false); // Track mail sending status

  function handleChange(event) {
    const { name, value } = event.target;
    setEmailDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setShowToast(true); // Show toast when sending starts
      setIsMailSent(false); // Reset mail sent status

      const response = await axios.post(
        "https://email-avg.onrender.com/sendmail",
        emailDetails
      );

      if (response.status === 200) {
        setIsMailSent(true); // Update mail sent status
      }
    } catch (e) {
      console.error("Error sending Mail", e);
      alert(`Error sending Mail: ${e.message}`);
      setShowToast(false); // Hide toast on error
    }
  }

  return (
    <div className="flex lg:flex-row flex-col justify-start items-stretch lg:gap-12 gap-4 my-12 h-full w-full">
      {showToast && (
        <SuccessToast isMailSent={isMailSent} onClose={() => setShowToast(false)} />
      )}
      <div className="lg:w-[50%] h-full flex flex-col lg:gap-8 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-2 outline-0 focus:border-blue-700 w-full text-gray-600 font-nunito font-[600] border-1 border-gray-200 rounded-xl px-3"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Your Email"
          name="fromEmail"
          className="p-2 outline-0 focus:border-blue-700 w-full text-gray-600 font-nunito font-[600] border-1 border-gray-200 rounded-xl px-3"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Your Subject"
          name="subject"
          className="p-2 outline-0 focus:border-blue-700 w-full text-gray-600 font-nunito font-[600] border-1 border-gray-200 rounded-xl px-3"
          onChange={handleChange}
        ></input>
      </div>
      <div className="lg:w-[50%] w-full">
        <textarea
          className="w-full focus:border-blue-700 outline-0 h-full border-1 border-gray-200 rounded-xl p-3"
          placeholder="Type your Message"
          name="message"
          onChange={handleChange}
        ></textarea>
        <div className="flex lg:justify-end justify-center">
          <button
            className="bg-blue-700 max-w-full px-5 p-3 text-white font-rubik font-[500] text-sm text-center rounded-xl my-4 cursor-pointer hover:bg-blue-500"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;