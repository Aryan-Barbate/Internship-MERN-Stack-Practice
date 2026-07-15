const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

const API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "openai/gpt-oss-20b";
const API_KEY = window.CHATBOT_CONFIG?.groqApiKey || "";

const history = [];

function addMessage(text, role) {
  const msg = document.createElement("div");
  msg.className = "msg msg--" + role;
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function getBotReply(userText) {
  history.push({ role: "user", content: userText });

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + API_KEY,
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: "You are a helpful chatbot. Reply in PLAIN TEXT only.",
        },
        ...history,
      ],
    }),
  });

  if (!res.ok) {
    throw new Error("Request failed");
  }

  const data = await res.json();
  const reply = data.choices[0].message.content.trim();
  history.push({ role: "assistant", content: reply });
  return reply;
}

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userText = chatInput.value.trim();
  if (!userText) return;

  addMessage(userText, "user");
  chatInput.value = "";
  chatInput.disabled = true;
  sendBtn.disabled = true;

  const typing = document.createElement("div");
  typing.className = "msg msg--bot msg--typing";
  typing.textContent = "Typing...";
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  try {
    let botText;

    if (!API_KEY) {
      botText = "Set the Groq key in config.js.";
    } else {
      botText = await getBotReply(userText);
    }

    typing.remove();
    addMessage(botText, "bot");
  } catch (err) {
    typing.remove();
    addMessage("Something went wrong: " + err.message, "bot");
  } finally {
    chatInput.disabled = false;
    sendBtn.disabled = false;
    chatInput.focus();
  }
});

addMessage(
  API_KEY
    ? "Hello! I am your chatbot. Ask me anything."
    : "Hello! I am your chatbot. Set the Groq key in config.js.",
  "bot",
);
