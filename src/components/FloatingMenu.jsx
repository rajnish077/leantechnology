import { useState } from "react";
import {
  FaFlag,
  FaThumbsUp,
  FaEdit,
  FaCommentDots,
  FaTimes,
  FaPlus,
} from "react-icons/fa";
import PropTypes from "prop-types";

// Helper function to get the current page
const getCurrentPage = () => {
  return window.location.pathname; // This will return the current page URL
};

// Floating Menu Component
const FloatingMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null); // Track selected button for highlighting
  const currentPage = getCurrentPage();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const openCard = (button) => {
    setSelectedButton(button);
  };

  // Function to close the popup card
  const closeCard = () => {
    setSelectedButton(null);
  };

  // Configurable buttons for specific pages
  const availableButtons = [
    { name: "Report an Issue", icon: <FaFlag />, action: "report" },
    { name: "Share Feedback", icon: <FaThumbsUp />, action: "feedback" },
    { name: "Give Suggestion", icon: <FaEdit />, action: "suggestion" },
    { name: "Contact Us", icon: <FaCommentDots />, action: "contact" },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end">
      {/* Display cards when a button is clicked */}
      {selectedButton && (
        <PopupCard
          selectedButton={selectedButton}
          currentPage={currentPage}
          closeCard={closeCard}
        />
      )}

      {/* Additional Buttons */}
      {menuOpen && (
        <div className="flex flex-col  space-y-4 mb-4 items-end ">
          {availableButtons.map((button) => (
            <div className="flex items-center space-x-4" key={button.action}>
              <span className="text-black bg-white  w-40 text-center py-2 rounded-md shadow">
                {button.name}
              </span>
              <button
                onClick={() => openCard(button.action)}
                className={`bg-white text-black w-12 h-12 flex items-center justify-center rounded-full shadow-lg ${
                  selectedButton === button.action ? "ring-4 ring-gray-500" : ""
                }`}
              >
                {button.icon}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Main Button (Plus or Cross) */}
      <button
        className={`bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? "transform rotate-90" : ""
        }`}
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <FaTimes className="text-xl text-black" />
        ) : (
          <FaPlus className="text-2xl text-black" />
        )}
      </button>
    </div>
  );
};

// Popup Card Component
const PopupCard = ({ selectedButton, closeCard }) => {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [emailValue] = useState("");
  const isLoggedIn = true;

  const handleSubmit = () => {
    // Logic to handle form submission
    alert(`Submitted ${selectedButton}`);
    closeCard();
  };

  const isSubmitDisabled = () => {
    return selectedButton === "feedback"
      ? textFieldValue.trim() === "" ||
          (!isLoggedIn && emailValue.trim() === "")
      : textFieldValue.trim() === "";
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-lg fixed bottom-20 right-4 w-80">
      {/* Close Button */}
      <button
        onClick={closeCard}
        className="absolute top-2 right-2 text-gray-500"
      >
        <FaTimes />
      </button>

      {/* Dynamic content based on the button clicked */}
      {selectedButton === "report" && (
        <div>
          <h2 className="text-lg text-black text-center my-2 font-semibold">
            Report an Issue
          </h2>
          <hr className="text-black" />
          <label className="mt-4 block text-black">
            Describe the issue in detail
          </label>
          <textarea
            className="w-full mt-2 border p-2"
            rows="4"
            value={textFieldValue}
            onChange={(e) => setTextFieldValue(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white w-full mt-4 py-2 rounded cursor-pointer disabled:bg-gray-500"
            onClick={handleSubmit}
            disabled={isSubmitDisabled()}
          >
            Submit
          </button>
        </div>
      )}
      {selectedButton === "feedback" && (
        <div>
          <h2 className="text-lg text-black text-center my-2 font-semibold">
            Share Feedback
          </h2>
          <hr className="text-black" />
          <label className="mt-2 block text-black">
            Share your feedback here
          </label>
          <textarea
            className="w-full mt-2 border p-2"
            rows="4"
            value={textFieldValue}
            onChange={(e) => setTextFieldValue(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white w-full mt-4 py-2 rounded cursor-pointer disabled:bg-gray-500"
            onClick={handleSubmit}
            disabled={isSubmitDisabled()}
          >
            Submit
          </button>
        </div>
      )}
      {selectedButton === "suggestion" && (
        <div>
          <h2 className="text-lg text-black text-center my-2 font-semibold">
            Suggestions
          </h2>
          <hr className="text-black" />
          <label className="mt-2 block text-black">
            Givve some suggestions here
          </label>
          <textarea
            className="w-full mt-2 border p-2"
            rows="4"
            value={textFieldValue}
            onChange={(e) => setTextFieldValue(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white w-full mt-4 py-2 rounded cursor-pointer disabled:bg-gray-500"
            onClick={handleSubmit}
            disabled={isSubmitDisabled()}
          >
            Submit
          </button>
        </div>
      )}
      {selectedButton === "contact" && (
        <div>
          <h2 className="text-lg text-black text-center my-2 font-semibold">
            Contacts
          </h2>
          <hr className="text-black" />
          <text className="w-full mt-2 border p-2" />
        </div>
      )}
    </div>
  );
};

// PropTypes validation
PopupCard.propTypes = {
  selectedButton: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  closeCard: PropTypes.func.isRequired,
};

export default FloatingMenu;
