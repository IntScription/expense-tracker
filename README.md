# Expense Tracker App

A responsive React-based expense tracker that allows users to log, categorize, and analyze their expenses with real-time currency conversion.

---

## 🚀 Features

- Add, view, and delete expenses  
- Category-based expense breakdown  
- Live total calculation  
- Real-time currency conversion using API  
- Persistent data using localStorage  
- Responsive design (mobile + desktop)  
- Input validation and error handling  

---

## 🧱 Project Structure

```
src/
├── components/
│ ├── ExpenseForm.jsx # Handles user input for new expenses
│ ├── ExpenseList.jsx # Displays all expenses
│ ├── ExpenseItem.jsx # Individual expense card
│ ├── SummaryPanel.jsx # Shows total + breakdown
│ ├── CurrencyConverter.jsx # Currency conversion UI + logic
│
├── hooks/
│ ├── useCurrency.js # Custom hook for API calls
│
├── utils/
│ ├── formatCurrency.js # Helper functions (optional)
│
├── App.jsx # Main state + app layout
├── main.jsx # Entry point
├── index.css # Global styles
```

---

## 🧠 Architecture & Approach

The application follows a component-based architecture, ensuring separation of concerns and reusability.

- UI is divided into independent components  
- State is lifted to the top-level (App.jsx)  
- Logic is abstracted into reusable hooks (e.g., useCurrency)  

This makes the app scalable, maintainable, and easy to extend.

---

## ⚙️ State Management

State is managed using React hooks:

- useState → manages expenses and form inputs  
- useEffect → handles API calls and localStorage synchronization  
- useMemo → optimizes total expense calculation and category breakdown  

---

## 🌐 API Integration

The app integrates with a public currency API.

- API Used: Frankfurter API  
- Fetches real-time exchange rates  
- Supports multiple currencies (USD, EUR, GBP, INR)  

### Key Handling:
- Loading states for better UX  
- Error handling to prevent UI crashes  

---

## 💾 Data Persistence

- Implemented using localStorage  
- Ensures expenses remain after page refresh  
- Improves overall user experience  

---

## 🎨 UI & Responsiveness

- Built with custom CSS (no UI libraries)  
- Uses Flexbox, CSS Grid, and media queries  

Designed to work on:
- Desktop (1600px)  
- Mobile (~414px)  

---

## 🛠 Tech Stack

**Frontend:**
- React (Vite)

**Language:**
- JavaScript (ES6+)

**Styling:**
- CSS (custom)

**API:**
- Frankfurter Currency API

**Tools:**
- Git & GitHub (version control)  
- Vercel (deployment)  
- LazyVim (development)  
- tmux (workflow management)  

---

## 📦 Installation & Setup

```bash
npm install
npm run dev
npm run build
npm run preview
```
---

## 🌍 Live Demo

https://expense-tracker-two-weld-69.vercel.app/

---

## ⚠️ Challenges & Learnings

- Managing shared state across multiple components while keeping the structure clean  
- Handling asynchronous API calls with proper loading and error states  
- Designing a responsive UI without using external libraries  

---

## 🔧 Future Improvements

- Add charts for visual expense analysis  
- Implement edit/update expense functionality  
- Add filters (date/category-based)  
- Add user authentication and cloud storage  

---

## 📌 Conclusion

This project demonstrates core frontend development skills including:

- Component-based design  
- State management with React hooks  
- API integration  
- Responsive UI development  
- Deployment workflow  
