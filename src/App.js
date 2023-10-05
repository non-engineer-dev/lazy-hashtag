// Import lib
import { useState } from 'react';

// Import css
import './App.css';

// Import utils
import { deviceOptions, categoryOptions, defaultForm } from './constants';
import { generateHashtags, copyToClipboard } from './utils';

function App() {
  // State
  const [form, setForm] = useState(defaultForm);

  // Handlers
  const handleFormChange = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };
  const handleReset = () => setForm(defaultForm);
  const handleCopy = () => copyToClipboard(generateHashtags(form));

  return (
    <div className="App">
      <h1>Lazy Hashtag</h1>
      <form>
        <label>Title</label>
        <input value={form.title} onChange={handleFormChange} id="title" />
        <br />
        <br />

        <label>Year</label>
        <input value={form.year} onChange={handleFormChange} id="year" />
        <br />
        <br />

        <label>Device</label>
        <select value={form.device} onChange={handleFormChange} id="device">
          {deviceOptions.map((row) => (
            <option key={row} value={row}>
              {row}
            </option>
          ))}
        </select>
        <br />
        <br />

        <label>Category</label>
        <select value={form.category} onChange={handleFormChange} id="category">
          {categoryOptions.map((row) => (
            <option key={row} value={row}>
              {row}
            </option>
          ))}
        </select>
        <br />
        <br />
      </form>

      <button onClick={handleReset}>RESET</button>
      <br />
      <br />
      <button onClick={handleCopy}>COPY</button>
      <br />
      <br />
      <textarea value={generateHashtags(form)} disabled />
    </div>
  );
}

export default App;
