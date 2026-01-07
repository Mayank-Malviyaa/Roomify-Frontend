import { useState } from "react";

function AddListing() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");
  const [lifestyle, setLifestyle] = useState("Non-Smoker");
  const [occupation, setOccupation] = useState("Working");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newListing = {
      id: Date.now(),
      name,
      city,
      budget,
      lifestyle,
      occupation,
      phone,
      email,
    };

    const existing =
      JSON.parse(localStorage.getItem("roommates")) || [];

    localStorage.setItem(
      "roommates",
      JSON.stringify([...existing, newListing])
    );

    alert("Listing added successfully!");

    setName("");
    setCity("");
    setBudget("");
    setLifestyle("Non-Smoker");
    setOccupation("Working");
    setPhone("");
    setEmail("");
  }

  return (
    <div className="container">
      <div className="section section-gradient">
        <h2 className="section-title">Add Your Room Listing</h2>
        <p className="section-subtitle">
          Share details so others can contact you.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Monthly Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />

            <select
              value={lifestyle}
              onChange={(e) => setLifestyle(e.target.value)}
            >
              <option value="Non-Smoker">Non-Smoker</option>
              <option value="Smoker">Smoker</option>
            </select>

            <select
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            >
              <option value="Working">Working</option>
              <option value="Student">Student</option>
            </select>

            <input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button className="primary-btn" type="submit">
              Add Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
