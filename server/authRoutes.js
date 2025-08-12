const express = require("express");
const collection = require("./MongoDB");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// In-memory storage for development (when MongoDB is not available)
let inMemoryUsers = [
  {
    name: "Test User",
    email: "test@test.com",
    password: "$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi" // "password"
  }
];

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Try MongoDB first
    const check = await collection.findOne({ email });
    
    if (check) {
      const isMatch = await bcrypt.compare(password, check.password);
      if (isMatch) {
        res.json("exist");
      } else {
        res.json("incorrect password");
      }
    } else {
      // Fallback to in-memory storage
      const inMemoryUser = inMemoryUsers.find(user => user.email === email);
      if (inMemoryUser) {
        const isMatch = await bcrypt.compare(password, inMemoryUser.password);
        if (isMatch) {
          res.json("exist");
        } else {
          res.json("incorrect password");
        }
      } else {
        res.json("notexist");
      }
    }
  } catch (e) {
    // If MongoDB fails, use in-memory storage
    const inMemoryUser = inMemoryUsers.find(user => user.email === email);
    if (inMemoryUser) {
      const isMatch = await bcrypt.compare(password, inMemoryUser.password);
      if (isMatch) {
        res.json("exist");
      } else {
        res.json("incorrect password");
      }
    } else {
      res.json("notexist");
    }
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Try MongoDB first
    const check = await collection.findOne({email: email });

    if (check) {
      return res.json("exist");
    } 
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = {
      name,
      email,
      password: hashedPassword,
    };
    
    await collection.insertMany([data]);
    res.json("Sign Up Successfull");
    
  } catch (e) {
    // If MongoDB fails, use in-memory storage
    const existingUser = inMemoryUsers.find(user => user.email === email);
    if (existingUser) {
      return res.json("exist");
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name,
      email,
      password: hashedPassword,
    };
    
    inMemoryUsers.push(newUser);
    res.json("Sign Up Successfull");
  }
});

app.listen(8000, () => {
  console.log("Auth Port Connected");
});

