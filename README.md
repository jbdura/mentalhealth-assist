Here's the updated README, reflecting the folder structure with separate directories for the API and frontend:

---

# **Mental health Assist**

This web application leverages Google's Gemini API to deliver an interactive, AI-powered chat experience. The project is structured with a **NestJS API backend** (`gemini-api`) and a **RemixJS frontend** (`remix-gemini-app`), making it an excellent showcase for hackathons or innovative AI-based solutions.

---

## **Features**

- **Interactive AI Chat**: Conduct multi-turn conversations with advanced AI.
- **Text Generation**: Generate responses for a variety of queries and tasks.
- **Modern Architecture**: Clean separation of backend and frontend for scalability.
- **Real-Time Response**: Instant feedback via efficient API calls.
- **Hackathon Ready**: Polished and functional setup for fast deployment.

---

## **Folder Structure**

```plaintext
.
├── remix-gemini-app  # Frontend application built with RemixJS
└── gemini-api        # Backend API built with NestJS
```

---

## **Tech Stack**

### **Backend (gemini-api)**
- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: TypeScript
- **AI Integration**: [Google Generative AI (Gemini API)](https://developers.google.com/)

### **Frontend (remix-gemini-app)**
- **Framework**: [RemixJS](https://remix.run/)
- **Styling**: TailwindCSS (or other as applicable)
- **Deployment**: [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) (optional)

---

## **Setup Instructions**

### **1. Backend (gemini-api)**

1. Navigate to the backend directory:
   ```bash
   cd gemini-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. Start the backend server:
   ```bash
   npm run start:dev
   ```

### **2. Frontend (remix-gemini-app)**

1. Navigate to the frontend directory:
   ```bash
   cd remix-gemini-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the API base URL in the frontend config file (e.g., `config.ts` or `env`):
   ```javascript
   export const API_BASE_URL = 'http://localhost:3000'; // Backend URL
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

---

## **How It Works**

1. **User Interaction**: Enter messages through the frontend chat interface.
2. **Backend Processing**: The message is sent to the backend (`gemini-api`), which:
   - Sends the message to Google's Gemini API.
   - Maintains the conversation context for multi-turn interactions.
3. **Response Delivery**: The AI-generated response is displayed in the chat interface.

---

## **Usage**

1. Start both servers:
   - Backend: `gemini-api` on [http://localhost:3000](http://localhost:3000).
   - Frontend: `remix-gemini-app` on [http://localhost:3001](http://localhost:3001).
2. Open your browser and visit [http://localhost:3001](http://localhost:3001).
3. Start a conversation and enjoy the AI-powered chat.

---

## **Future Enhancements**
- **User Sessions**: Enable user-based session management for personalized chats.
- **Streaming Responses**: Implement real-time response streaming.
- **Media Inputs**: Add support for multimodal inputs like images.
- **UI Improvements**: Enhance the frontend with animations and advanced styling.

---

## **Contributors**

- **Johnson Bidura** - Backend Development & API Integration and Front end development

---

## **License**

This project is licensed under the [MIT License](LICENSE).