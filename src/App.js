import './App.css';

import { useState } from "react";

// IMAGES
import alien from "./images/AlienHead.png";
import woman1 from "./images/WomanHead.png";
import woman2 from "./images/WomanHead2.png";
import woman3 from "./images/WomanHead3.png";
import male1 from "./images/Head.png";
import male2 from "./images/Head2.png";

function App() {

  const [profile, setProfile] = useState(null);

  // contains generated usernames
  const [usernames, setUsernames] = useState([]);

  // username + message strings
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const profiles = [
    {
      name: "Head One",
      image: alien
    },
    {
      name: "Head Two",
      image: woman1
    },
    {
      name: "Head Three",
      image: woman2
    },
    {
      name: "Head Four",
      image: woman3
    },
    {
      name: "Head Five",
      image: male1
    },
    {
      name: "Head Six",
      image: male2
    }
  ]

  const prefix = [
    "code",
    "pseudo",
    "love",
    "dream",
    "maple",
    "sunny",
    "byte",
    "echo",
    "cosmic",
    "neon",
    "lunar",
    "misty",
    "terra",
    "pixel",
    "zen",
    "ghost",
    "coffee",
    "sugar",
    "fluent",
    "aurora",
    "cloud",
    "amber",
    "silver",
    "vapor",
    "ember",
    "crimson",
    "nova",
    "icy",
    "static",
    "velvet",
    "midnight",
    "orchid",
    "pluto",
    "moss",
    "cyan",
    "astro",
    "serene",
    "bloom",
    "frost",
    "opal"
  ];

  const suffix = [
    "violet",
    "rose",
    "brulee",
    "time",
    "dev",
    "storm",
    "nova",
    "byte",
    "loop",
    "flow",
    "mint",
    "spark",
    "flare",
    "dust",
    "dream",
    "bee",
    "sage",
    "kit",
    "heart",
    "line",
    "cloud",
    "cube",
    "glow",
    "ray",
    "pulse",
    "wave",
    "drop",
    "leaf",
    "core",
    "field",
    "mode",
    "path",
    "light",
    "seed",
    "tone",
    "dash",
    "wish",
    "soul",
    "echo"
  ];

  const generateUsername = () => {
    const start = prefix[Math.floor(Math.random() * prefix.length)];
    const end = suffix[Math.floor(Math.random() * suffix.length)];

    const name = `${start}${Math.floor(Math.random() * 100)}${end}`
    setUsernames([name]);

  }

  return (
    <div className="container">
      <section className="profile-img-container">
        {profiles.map((p, idx) => (
          <button key={idx} className="profile-img-btn" type="button" onClick={() => setProfile(profile === p.image ? null : p.image)} aria-pressed="mixed">
            <img src={p.image} alt={`${p.name}`} aria-label={`${p.name}`} className={profile === p.image ? "selected" : ""}/>
          </button>
        ))}
      </section>
      <section className="input-container">
        <input
            type="text"
            value={username || usernames[0] || ""} // originally username ? `${usernames}` : "" - react stringifies output
            placeholder="Enter or generate username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="generate-btn" onClick={generateUsername}>Get Username</button>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={100} // originally message.length === 100 *use native maxLength for better UX
            placeholder="Type a message (limit: 100)"
          />
          <p className="msg-counter" style={{ color: message.length === 100 ? "red" : "black"}}>
            Character limit: {message.length} / 100
          </p>
      </section>
      <section className="profile-preview-container">
        <div className="profile-card">
          {!profile ? (
            <p className="msg">Select an image</p>
          ) : (
            <img src={profile} alt="Avatar" />
          )}
          <h3 className="username">{username || usernames[0]}</h3>
          <div className="decorative-divider"></div>
          <p className="blurb">{message}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
