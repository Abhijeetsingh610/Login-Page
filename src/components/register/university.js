import React, { useState } from 'react';
import "./university.css"


const universities = [
    "Bharati Vidyapeeth",
    "Deccan College Post-Graduate and Research Institute",
    "Defence Institute of Advanced Technology (formerly Institute of Armament Technology)",
    "Dnyaneshwar Vidyapeeth",
    "FLAME University",
    "Gokhale Institute of Politics and Economics",
    "Indian Institute of Information Technology, Pune",
    "Indian Institute of Science Education and Research, Pune",
    "Christ University Pune Lavasa, Campus",
    "Indian Institute of Science Education and Research, Pune",
    "National Institute of Construction Management and Research",
    "National Defence Academy",
    "Tilak Maharashtra University",
    "Savitribai Phule Pune University",
    "Spicer Adventist University",
    "Symbiosis International University",
    "MIT University - MIT Art, Design and Technology University",
    "Ajeenkya DY Patil University",
    "Flame University",
    "MIT - World Peace University",
    "Spicer Adventist University",
    "Christ University Pune Lavasa, Campus",
    "Symbiosis International University",
    "Symbiosis Skills and Professional University"
];

/*const universityToEmailDomain = {
  "Bharati Vidyapeeth": "bharatividyapeeth.edu.in",
  "Deccan College Post-Graduate and Research Institute": "deccancollege.edu.in",
  "MIT - World Peace University": "mitwpu.edu.in",
  "MIT University - MIT Art, Design and Technology University": "mitwpu.edu.in",
  
*/;

function UniversityEmailForm() {
  const [selectedUniversity, setSelectedUniversity] = useState('');
  

  const handleUniversityChange = (event) => {
    const newValue = event.target.value;
    setSelectedUniversity(newValue);
    
    
  };

  return (
    <div>
    <select onChange={handleUniversityChange} value={selectedUniversity}>
      <option value="">Select a University</option>
      {universities.map((university, index) => (
        <option key={index} value={university}>
          {university}
        </option>
      ))}
    </select>
  </div>
  
  );
}

export default UniversityEmailForm;
