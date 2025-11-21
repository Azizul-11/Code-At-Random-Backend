const express = require("express");
const cors = require("cors");
const careerRoutes = require("./routes/careerRoutes");


const app = express();
app.use(cors());


app.use(express.json());

app.use("/api", careerRoutes);




app.get("/", (req, res) => {
  res.send("Backend working!");
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



