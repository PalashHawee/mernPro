const { v1: uuidv1, v4: uuidv4 } = require("uuid");

uuidv1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
uuidv4();

const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Palash Hawee",
    email: "test@gmail.com",
    password: "testers",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;
  const hasUser = DUMMY_USERS.find((u) => u.email === email);
  if (hasUser) {
    throw new HttpError("User already exists", 422);
  }
  const createdUsers = {
    id: uuidv4(),
    name,
    email,
    password,
  };
  DUMMY_USERS.push(createdUsers);

  res.status(201).json({ user: createdUsers });
};

const login = (req, res, next) => {
  const { email, password } = req.body();

  //findig if the user exists in the DUMMY_PLACES matching email
  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password != password) {
    throw new HttpError("Could not identify user", 401);
  }
  res.json({ message: "Logged in!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
