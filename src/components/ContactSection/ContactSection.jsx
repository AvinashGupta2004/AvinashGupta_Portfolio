import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <div className="h-full bg-white lg:p-14 p-10">
      <h3 className="text-gray-700 font-nunito text-center font-[700] text-3xl">
        Contact Us
      </h3>
      <p className="text-lg font-[500] text-gray-500 text-center font-nunito mt-1">
        Feel free to reach out for collaborations, inquiries, or just to say
        hello!
      </p>
      <ContactForm></ContactForm>
      
    </div>
  );
}

export default ContactSection;
