function sendMessage() {
  const textarea = document.querySelector(".message-form textarea");
  const messageList = document.querySelector(".message-list");

  if (textarea.value.trim() !== "") {
    const messageItem = document.createElement("div");
    messageItem.classList.add("message-item");
    messageItem.innerHTML = `
            <img src="user-icon.png" alt="User Icon">
            <div class="message-content">
                <p class="user-name">You</p>
                <p class="message-text">${textarea.value}</p>
            </div>
        `;
    messageList.appendChild(messageItem);
    textarea.value = "";
    messageList.scrollTop = messageList.scrollHeight;
  }
}
