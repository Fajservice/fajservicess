import { useState } from "react";

// TRIGGERS
const triggers = [
  {
    keywords: ["ac", "air condition", "cooling"],
    reply: "We provide AC Repair, Installation & Maintenance services in Dubai."
  },
  {
    keywords: ["fridge", "refrigerator"],
    reply: "We provide Refrigerator Repair, Gas Refilling, Compressor Fix."
  },
  {
    keywords: ["washing", "washer"],
    reply: "We offer Washing Machine Repair, Leakage Fix, Drum Repair."
  },
  {
    keywords: ["dishwasher", "dish washer"],
    reply: "We offer Dishwasher Repair, Water Leakage Fix, Installation."
  },
  {
    keywords: ["any real agent", "contact number"],
    reply: "you can contact our cutomer support: (+971 4 330 0002) Email: info@fajservices.ae"
  }
];

const getBotReply = (msg) => {
  msg = msg.toLowerCase();
  for (const t of triggers) {
    if (t.keywords.some(k => msg.includes(k))) return t.reply;
  }
  return "Sorry, I didn't understand. Tell me the appliance (AC, Fridge, Washer, etc.)";
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const botMsg = { from: "bot", text: getBotReply(input) };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          left: "20px",
          bottom: "20px",
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          background: "#2563eb",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "26px",
          zIndex: 9999,
        }}
      >
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            left: "20px",
            bottom: "90px",
            width: "320px",
            height: "420px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#2563eb",
              color: "white",
              padding: "12px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            FAJ Services Chat Support
          </div>

          {/* Message Area */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              background: "#f1f5f9",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "10px",
                  textAlign: m.from === "user" ? "right" : "left",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    background: m.from === "user" ? "#2563eb" : "#e5e7eb",
                    color: m.from === "user" ? "white" : "black",
                    maxWidth: "80%",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div style={{ display: "flex", borderTop: "1px solid #ddd" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                background: "#2563eb",
                color: "white",
                padding: "10px 15px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
