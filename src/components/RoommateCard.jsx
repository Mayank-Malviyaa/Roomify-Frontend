import { useState } from "react";

function RoommateCard({
  id,
  name,
  city,
  budget,
  lifestyle,
  occupation,
  phone,
  email,
  onDelete,
}) {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <div className="card-dark">
        <h3>{name}</h3>

        <p>
          <strong>City:</strong> {city}
        </p>

        <p>
          <strong>Budget:</strong> ₹{budget}
        </p>

        <div className="badge-row">
          <span
            className={
              lifestyle === "Non-Smoker"
                ? "badge badge-non-smoker"
                : "badge badge-smoker"
            }
          >
            {lifestyle}
          </span>

          <span className="badge badge-occupation">
            {occupation}
          </span>
        </div>

        <div className="card-actions">
          <button
            className="contact-btn"
            onClick={() => setShowContact(true)}
          >
            Contact
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>

      {showContact && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Contact {name}</h3>

            <div className="modal-info">
              <p>📞 {phone}</p>
              <p>📧 {email}</p>
            </div>

            <a
              href={`https://wa.me/91${phone}`}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>

            <button
              className="close-btn"
              onClick={() => setShowContact(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default RoommateCard;
