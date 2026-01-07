import { useEffect, useState } from "react";
import defaultRoommates from "../data/dummydata";
import RoommateCard from "../components/RoommateCard";

function RoommateList() {
  const [roommates, setRoommates] = useState([]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedLifestyle, setSelectedLifestyle] = useState("All");
  const [selectedOccupation, setSelectedOccupation] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Load from localStorage or dummy data
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("roommates")) || [];

    if (saved.length === 0) {
      localStorage.setItem(
        "roommates",
        JSON.stringify(defaultRoommates)
      );
      setRoommates(defaultRoommates);
    } else {
      setRoommates(saved);
    }
  }, []);

  // DELETE HANDLER
  function handleDelete(id) {
    const updated = roommates.filter(
      (person) => person.id !== id
    );

    setRoommates(updated);
    localStorage.setItem(
      "roommates",
      JSON.stringify(updated)
    );
  }

  // FILTER LOGIC
  const filteredRoommates = roommates.filter((person) => {
    const cityMatch =
      selectedCity === "All" || person.city === selectedCity;

    const lifestyleMatch =
      selectedLifestyle === "All" ||
      person.lifestyle === selectedLifestyle;

    const occupationMatch =
      selectedOccupation === "All" ||
      person.occupation === selectedOccupation;

    const searchMatch =
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.city.toLowerCase().includes(searchTerm.toLowerCase());

    return cityMatch && lifestyleMatch && occupationMatch && searchMatch;
  });

  return (
    <div className="container">
      {/* FILTER SECTION */}
      <div className="section section-gradient">
        <h2 className="section-title">Browse Roommates</h2>
        <p className="section-subtitle">
          Use filters to find roommates that match your lifestyle.
        </p>

        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search by name or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="All">All Cities</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>

          <select
            value={selectedLifestyle}
            onChange={(e) =>
              setSelectedLifestyle(e.target.value)
            }
          >
            <option value="All">All Lifestyles</option>
            <option value="Non-Smoker">Non-Smoker</option>
            <option value="Smoker">Smoker</option>
          </select>

          <select
            value={selectedOccupation}
            onChange={(e) =>
              setSelectedOccupation(e.target.value)
            }
          >
            <option value="All">All Occupations</option>
            <option value="Student">Student</option>
            <option value="Working">Working</option>
          </select>
        </div>
      </div>

      {/* EMPTY STATE */}
      {filteredRoommates.length === 0 && (
        <p style={{ marginTop: "20px" }}>
          No roommates found for selected filters.
        </p>
      )}

      {/* CARDS GRID */}
      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredRoommates.map((person) => (
          <RoommateCard
            key={person.id}
            {...person}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default RoommateList;
