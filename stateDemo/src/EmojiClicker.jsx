import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function EmojiClicker() {
  function randomEmoji() {
    const emojis = ["🚀", "🐱‍👤", "🐱‍🚀", "🐱‍🐉", "🐱‍🏍"];
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  function addEmoji() {
    setEmojis((prevEmojis) => {
      return [...prevEmojis, { id: uuid(), emoji: randomEmoji() }];
    });
  }
  function deleteEmoji(id) {
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((emoji) => emoji.id !== id);
    });
  }
  function makeHearts() {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((emoji) => {
        return { ...emoji, emoji: "❤️" };
      });
    });
  }
  return (
    <div>
      {emojis.map((emoji, index) => (
        <>
          <span onClick={() => deleteEmoji(emoji.id)} key={index.id}>
            {emoji.emoji}
          </span>
          <br />
        </>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeHearts}>Make hearts</button>
    </div>
  );
}
