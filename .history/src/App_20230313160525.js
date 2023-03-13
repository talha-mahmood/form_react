import './App.css';
import React, { useState } from 'react';

const App=()=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [level, setLevel] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  }

  return (
    <div>
      <h1>Quran LMS registraton </h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <br/>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <br/>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </div>
      <br/>
      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          required
        />
      </div>
      <br/>
      <div>
        <label htmlFor="level">Level</label>
        <select id="level" value={level} onChange={(event) => setLevel(event.target.value)} required>
          <option value="">-- Select Level --</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <br/>
      <div>
        <label htmlFor="course">Course</label>
        <select id="course" value={course} onChange={(event) => setCourse(event.target.value)} required>
          <option value="">-- Select Course --</option>
          <option value="Quranic Arabic">Quranic Arabic</option>
          <option value="Tafseer">Tafseer</option>
          <option value="Hifz">Hifz</option>
        </select>
      </div>
           <br/>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
