const express = require("express");
const app = express();
const cc = require("./controllers/contactController");
const SERVER_PORT = 4200;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/api/contacts", cc.getContacts);
app.post("/api/contacts", cc.addContact);
app.put("/api/contacts/:id", cc.editContact);
app.delete("/api/contacts/:id", cc.deleteContact);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening from port ${SERVER_PORT}`);
});
