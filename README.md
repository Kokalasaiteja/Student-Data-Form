# 📄 Student Data Form – Google Sheets & WhatsApp Integration

A responsive web form that allows users to submit their details (name, email, contact info, and an image screenshot). Submitted data is automatically sent to a Google Sheet using Google Apps Script, and users can open a pre-filled WhatsApp message for quick contact.

## 🚀 Live Demo

🔗 [Click here to try it](#) <!-- Replace with your live deployment URL -->

---

## ✨ Features

- 📥 Collects Name, Email, Contact Info, and Screenshot Image
- 📁 Converts image to Base64 and sends it to Google Apps Script
- 📊 Stores data in Google Sheets and uploads image to Google Drive
- 📱 One-click **WhatsApp** integration with prefilled message
- 💡 Responsive design with animated gradient background and shadows
- ✅ Form validation and feedback messages

---

## 🛠️ Tech Stack

**HTML/CSS** -> Frontend structure and styling 
**JavaScript** -> Dynamic behavior and data submission 
**Google Apps Script** -> Backend to store form data and image
**Google Sheets** -> Stores user data 
**Google Drive** -> Stores uploaded images 

---

## 📂 File Structure

📁 student-data-form/ <br>
├── index.html # Main HTML form <br>
├── form.css # Stylesheet for the form <br>
├── form.js # JavaScript for submission logic <br>
├── README.md # Project documentation <br>
└── Code.gs # Helps to sumbit form in Google Sheet <br>


---

## ⚙️ Setup Instructions

### 1. Clone the Repository

-> git clone https://github.com/yourusername/student-data-form.git
-> cd student-data-form

### 2. Update the Google Script URL
-> In form.js, replace the googleScriptURL with your own Google Apps Script deployment URL:

-> const googleScriptURL = 'YOUR_DEPLOYED_SCRIPT_URL';

---
## 📖 Google Apps Script Setup Guide

### 🧪 How to Use
-> Fill in the Name, Email, Contact Info, and Upload a Screenshot.

-> Click Submit – data is sent to Google Sheet + image to Google Drive.

-> Click Open WhatsApp to contact using a pre-filled message.

---
### 📱 Responsive Design
-> Designed to work smoothly on mobile and desktop

-> Media queries ensure form adapts on smaller screens

---
### 💬 WhatsApp Integration
-> A button opens this link in a new tab:
https://wa.me/?text=Hello%20I%20am%20Ram
You can modify the message dynamically in form.js.

---
### 📡 Google Apps Script Backend
This Google Apps Script receives form data (including a base64-encoded image), uploads the image to Google Drive, and logs the data to a Google Sheet.

### 🔧 Script Features
-> Accepts JSON POST requests from the frontend.

-> Decodes a base64 image and uploads it to a Drive folder (StudentFormUploads).

-> Appends the following to a Google Sheet:

-> Timestamp, Name, Email, Contact Info, Uploaded image's Google Drive URL

---
### 🪜 How to Set Up
1. Open Google Apps Script
2. Create a new script in your Google account.
3. Paste the Script Code
4. Set Google Sheet Access
5. Create a new Google Sheet and copy its Sheet ID into the sheetId variable.
6. Ensure the sheet name matches FormResponses.
7. Deploy as Web App
8. Click on Deploy → Manage deployments → New deployment
9. Choose Web App
10. Execute as: Me
11. Who has access: Anyone (or anyone with Google account)
12. Click Deploy and copy the deployment URL.
13. Replace googleScriptURL in your frontend JS
const googleScriptURL = 'YOUR_DEPLOYMENT_URL';

### ✅ Example Data Sent
{
  "name": "John Doe",
  "email": "john@example.com",
  "other": "9876543210",
  "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg..."
}

---
### 🧾 License
This project is open source and available under the MIT License.

---
### 🙌 Author
Kokala Sai Teja
📧 kokalasaiteja@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/kokala-sai-teja-245a12299/)
🔗 https://github.com/Kokalasaiteja

### 📸 Screenshot
![image](https://github.com/user-attachments/assets/e5686f96-551c-4ff4-b156-267f2f4bef0e)
