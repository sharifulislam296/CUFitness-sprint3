document.addEventListener('DOMContentLoaded', function() {
  // Get references to the chat elements
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');

  chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const userMessage = chatInput.value.trim();
    if (userMessage) {
      // Display user's message
      const userMessageDiv = document.createElement('div');
      userMessageDiv.className = 'chat-message user-message';
      userMessageDiv.innerText = userMessage;
      chatMessages.appendChild(userMessageDiv);
      chatInput.value = '';

      // Determine the bot's response based on user input (all in lowercase)
      const lowerCaseMsg = userMessage.toLowerCase();
      let botResponse = "";

      // Check for diet plan request
      if (lowerCaseMsg.includes("give me my diet plan")) {
          botResponse = "Here is your Diet Plan:\n\n" +
                        "Diet Plan for 2 kg Weight Loss:\n" +
                        "• Breakfast: Oatmeal with berries and a handful of almonds\n" +
                        "• Snack: Greek yogurt with honey\n" +
                        "• Lunch: Grilled chicken salad with mixed greens and vinaigrette\n" +
                        "• Snack: A piece of fruit (apple or orange)\n" +
                        "• Dinner: Steamed fish, quinoa, and vegetables\n" +
                        "Recommended Daily Calorie Intake: 2100 calories\n\n" +
                        "For full details, please visit our Diet Chart page.";
      }
      // Check for workout plan request
      else if (lowerCaseMsg.includes("give me my workout plan")) {
          botResponse = "Here is your Workout Plan:\n\n" +
                        "Sample Workout Plan:\n" +
                        "• Cardio: 30 mins running\n" +
                        "• Weights: 3 sets x 10 reps (bench press, squats, etc.)\n" +
                        "• Flexibility: 10 mins stretching\n" +
                        "• Balance: 3 sets of core exercises\n\n" +
                        "For complete details, please visit our Workout Plan page.";
      }
      // Other rule-based responses or a default reply
      else if (lowerCaseMsg.includes("hi") || lowerCaseMsg.includes("hello")) {
          botResponse = "Hello! How can I assist you with your fitness journey today?";
      }
      else if (lowerCaseMsg.includes("help")) {
          botResponse = "Sure, I'm here to help. You can ask me for your diet plan or workout plan.";
      }
      else {
          botResponse = "I'm not sure I understand. Could you please rephrase?";
      }

      // Create bot message element
      const botMessageDiv = document.createElement('div');
      botMessageDiv.className = 'chat-message bot-message';
      botMessageDiv.innerText = botResponse;
      chatMessages.appendChild(botMessageDiv);

      // Scroll the chat window to the bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
});
