require("dotenv").config();

const port = 4003;
const express = require("express");
const mongoose = require("mongoose");
const credit = require("express")();
const bcrypt = require("bcrypt");
const http = require("http").createServer(credit);
const hf = "mongodb://localhost:27017/Credit";
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { verify } = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multerError = require("./handleError");
const Users = require("./Model/users");
const Details = require("./Model/details");



credit.use(multerError);

const connectionparams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const corsOption = {
  credentials: true,
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST"],
  optionSucessStatus: 200,
};

credit.use(cors(corsOption));
credit.use(cookieParser());

credit.use(express.json());
credit.use(express.urlencoded({ extended: true }));

const validateToken = async (req, res, next) => {
  const usersToken =
    req.headers["x-access-token"] ||
    req.cookies.soks ||
    req.headers["authorization"];

  if (!usersToken) return res.status(405).json({ message: "No auth found" });

  try {
    verify(usersToken, "ACCESS_TOKEN_SECRET", (err, decoded) => {
      if (err) {
        console.error(err);
        return res.status(403).json({ message: "Invalid token" });
      }
      req.decoded = decoded;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error validating token" });
  }
};

credit.post("/open-an-account", async (req, res) => {
  const {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    address1,
    address2,
    ssn,
    tin,
    username,
    password,
    confirmPassword,
    accountBalance,
    accountNumber,
    appleMarket,
    teslaMarket,
    xMarket,
    sAccountBalance,
    sInterestRates,
    caStartup,
    caInterest,
    hsaStartup,
    hsaInterest,
    iraStartup,
    iraInterest,
    ecaBalance,
    ecaProfits,
    hsaBalance,
    hsaProfits,
    iraBalance,
    iraProfits,
    lAccountBalance,
    lInterestRates,
    plStartup,
    plInterest,
    vlStart,
    vlInterest
  } = req.body;

  try {
    const userExists = await Users.findOne({ emailAddress });

    if (userExists) {
      return res.status(400).send("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new Users({
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      address1,
      address2,
      ssn,
      tin,
      username,
      password: hashPassword,
      confirmPassword
    });

    if (password !== confirmPassword) {
      return res.status(400).send("password does not match");
    }

    await user.save();

    return res.status(200).send("User created sucessfully");
  } catch (error) {
    console.error("Error registering user", error);
    return res.status(500).send("Error registering user");
  }
});


credit.post("/more-details", async (req, res) => {
    const {
      details,
      accountBalance,
      accountNumber,
      appleMarket,
      teslaMarket,
      xMarket,
      sAccountBalance,
      sInterestRates,
      caStartup,
      caInterest,
      hsaStartup,
      hsaInterest,
      iraStartup,
      iraInterest,
      ecaBalance,
      ecaProfits,
      hsaBalance,
      hsaProfits,
      iraBalance,
      iraProfits,
      lAccountBalance,
      lInterestRates,
      plStartup,
      plInterest,
      vlStartup,
      vlInterest
    } = req.body;
  
    try {
      const userExists = await Details.findOne({ details });
  
      if (userExists) {
        return res.status(400).send("User already exists");
      }
  
  
      const user = new Details({
        details,
        accountBalance,
        accountNumber,
        appleMarket,
        teslaMarket,
        xMarket,
        sAccountBalance,
        sInterestRates,
        caStartup,
        caInterest,
        hsaStartup,
        hsaInterest,
        iraStartup,
        iraInterest,
        ecaBalance,
        ecaProfits,
        hsaBalance,
        hsaProfits,
        iraBalance,
        iraProfits,
        lAccountBalance,
        lInterestRates,
        plStartup,
        plInterest,
        vlStartup,
        vlInterest
      });
  
      await user.save();
  
      return res.status(200).send("User created sucessfully");
    } catch (error) {
      console.error("Error registering user", error);
      return res.status(500).send("Error registering user");
    }
  });
  


credit.post("/create-admin", async (req, res) => {
    const {
      admin,
      username,
      password
    } = req.body;
  
    try {
      const userExists = await Users.findOne({ admin });
  
      if (userExists) {
        return res.status(400).send("User already exists");
      }
  
      const hashPassword = await bcrypt.hash(password, 10);
  
      const user = new Users({
        admin,
        username,
        password: hashPassword,
      });
  
      await user.save();
  
      return res.status(200).send("User created sucessfully");
    } catch (error) {
      console.error("Error registering user", error);
      return res.status(500).send("Error registering user");
    }
  });


credit.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await Users.findOne({ username });
      const accountDetails = await Details.find()

      if (user && accountDetails) 
        return res.json({user:user, accountDetails:accountDetails});  
      console.log(user);
  
      const { lastName, firstName, _id: id } = user;
  
      console.log(lastName, firstName, id)
  
      const passkey = await bcrypt.compare(password, user.password);
      console.log(passkey);
  
      if (!passkey) return res.status(400).send("Incorrect Password");
  
      const genToken = await jwt.sign(
        {
          username,
          lastName,
          firstName,
          id,
        },
        "ACCESS_TOKEN_SECRET",
        { expiresIn: "1d" }
      );
      if (!genToken) return res.send("No access token generated");
      console.log(genToken);
  
      res.cookie("soks", genToken, { path: "/" });
  
      return res.status(200).json({user: user, token: genToken})
    } catch (error) {
      console.log(error);
      res.clearCookie("soks");
      return res.status(500).send("error");
    }
  });


credit.post("/login-admin", async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await Users.findOne({ username});
      if (!user) return res.status(400).send("User not found");
  
      console.log(user);
  
      const {admin, _id: id } = user;
  
      console.log(id)
  
      const passkey = await bcrypt.compare(password, user.password);
      console.log(passkey);
  
      if (!passkey) return res.status(400).send("Incorrect Password");
  
      const genToken = await jwt.sign(
        {
          admin,
          username,
          id,
        },
        "ACCESS_TOKEN_SECRET",
        { expiresIn: "1d" }
      );
      if (!genToken) return res.send("No access token generated");
      console.log(genToken);
  
      res.cookie("soks", genToken, { path: "/" });
  
      return res.status(200).json({user: user, token: genToken})
    } catch (error) {
      console.log(error);
      res.clearCookie("soks");
      return res.status(500).send("error");
    }
});


credit.get("/logout", async (req, res, next) => {
    if (req.cookies?.soks) {
      res.clearCookie("soks");
      res.status(203).send("ok");
    } else {
      res.clearCookie("soks");
      res.status(203).send("ok");
    }
    next();
  });


credit.get("/logout-admin", async (req, res, next) => {
    if (req.cookies?.soks) {
      res.clearCookie("soks");
      res.status(203).send("ok");
    } else {
      res.clearCookie("soks");
      res.status(203).send("ok");
    }
    next();
  });

credit.get("/me", validateToken, async (req, res) => {
    var token =
      req.cookies.soks ||
      req.headers["x-access-token"] ||
      req.headers["authorization"];
  
    if (!token) {
      return res
        .status(400)
        .send("You cannot perform any activities until you are logged in");
    }
  
    verify(token, "ACCESS_TOKEN_SECRET", async (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "inavlid token" });
      } else {
        req.decoded = decoded;
  
        try {
          const user = await Users.findOne({username: req.decoded.username}).select(
            "-password -confirmPassword"
          );

          const accountDetails = await Details.find()

          if (user && accountDetails) {
              return res.json({user:user, accountDetails:accountDetails});
              
            } else {
                return res.status(403).send("Unable to fetch your requested data");
            }
        } catch (err) {
          return res.status(403).send("Unable to fetch your requested data");
        }
      }
    });
  });



mongoose
  .connect(hf, connectionparams)
  .then((result) => {
    console.log("sucessfully connected");
  })
  .catch((error) => {
    console.log("error");
  });

http.listen(port, () => {
  console.log("server connected");
});
