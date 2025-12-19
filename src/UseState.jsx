import { useState } from "react";

function UseState() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    skills: [],
  });

  const [skill, setSkill] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const addSkill = () => {
    if (skill.trim() === "") return;

    setUser(prevUser => ({
      ...prevUser,
      skills: [...prevUser.skills, skill],
    }));

    setSkill("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Info:\nName: ${user.name}\nEmail: ${user.email}\nSkills: ${user.skills.join(", ")}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />

      <input
        placeholder="Add Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button type="button" onClick={addSkill}>
        Add Skill
      </button>

      <ul>
        {user.skills.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UseState;
