import {useState} from "react";
function SuccessToast() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <div
      class="fixed top-5 left-[50%] -translate-x-[50%] font-nunito shadow-xl px-5 border-1 border-green-400 p-4 mb-4 text-md text-green-800 rounded-lg bg-green-50 flex gap-4"
      role="alert"
    >
      <span>Mail sent Successfully!</span>
      <button
        onClick={handleClose}
        className="top-2 right-2 text-green-800 hover:text-green-600 cursor-pointer"
      >
        &times; {/* The "×" symbol is commonly used for a close button */}
      </button>
    </div>
  );
}

export default SuccessToast;
