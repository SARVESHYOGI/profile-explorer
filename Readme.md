# 🎟️ Book my Event

A full-stack web application built with Spring Boot (Java) for the backend and React.js for the frontend. This platform enables users to browse events, book tickets, and manage participation, with role-based access for Admin, Organizer, and User.

## 🚀 Features

### 👥 Users
- Sign up, log in, and manage profiles
- Browse upcoming events
- Book tickets and view booking history

### 🧑‍💼 Organizers
- Create and manage events
- View ticket bookings for their events

### 👨‍💻 Admins
- Manage users, organizers, and events
- Approve or reject event listings

## 🛠️ Tech Stack

**Frontend**
- React.js
- Axios (API calls)
- React Router
- Bootstrap / Tailwind CSS

**Backend**
- Spring Boot
- Spring Security
- Spring Data JPA
- MySQL / PostgreSQL
- JWT Authentication

**Tools**
- Maven – dependency management
- Eclipse / IntelliJ – backend development
- VS Code – frontend development
- Postman – API testing

## 📂 Project Structure

```plaintext
BookMyEvent/
├── backend/
│   ├── src/main/java/com/...
│   └── pom.xml
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── README.md
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/SARVESHYOGI/BookMyEvent.git
cd BookMyEvent
```

---

### 🧩 Backend Setup (Spring Boot)

**Prerequisites:**
- ☕ Java 17+
- 📦 Maven
- 🛢️ MySQL / PostgreSQL

**Steps:**
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Edit `application.properties`:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/event_ticket
    spring.datasource.username=your_db_username
    spring.datasource.password=your_db_password
    spring.jpa.hibernate.ddl-auto=update
    jwt.secret=your_jwt_secret_key
    ```
3. Run the backend:
    ```bash
    mvn spring-boot:run
    ```

---

### 🎨 Frontend Setup (React)

**Prerequisites:**
- 🟢 Node.js v18+
- 📦 npm or yarn

**Steps:**
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend:
    ```bash
    npm start
    ```
   App runs at: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Authentication

- JWT-based token authentication
- Role-based access for `USER`, `ORGANIZER`, and `ADMIN`

---

## 🧪 API Testing

Test with Postman or Swagger:

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/events`
- `POST /api/tickets`
- `GET /api/admin/*`

---

## ✅ Future Enhancements

- 💳 Payment integration (Stripe / Razorpay)
- 📧 Email notifications for ticket confirmations
- 📱 QR code-based ticket validation
- 🔍 Event search & filtering
- ⭐ User reviews & ratings

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Submit a Pull Request 🚀

---

## 📄 License

This project is licensed under the MIT License.

---

## 📬 Contact

Created by **Sarvesh Yogi**  
💼 Feel free to connect!