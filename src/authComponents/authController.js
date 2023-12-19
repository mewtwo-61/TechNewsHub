const bcrypt = require('bcrypt');
// need to import user schema.  for now I have referenced the schema as "User"


// REGISTER USER MIDDLEWEAR
const registerUser = async (req, res, next) => {
  try {
      // Get the username & password from the req.body, assign them to variables username and password
      // This step also purifies data
    { username, password } = req.body;

      // Check if username exists in DB
    const existingUser = await User.findOne({ username });

      // If user already exists, return error
    if (existingUser){
    return next('User Already Exists!')
    };

      // Hash password
    const hashedPasssword = await bcrypt.hash(password, 10);

      // Creates new User from schema and saves it to DB
    const newUser = User.create({
    username: username,
    password: hashedPasssword
    });

      // Set sucess message
    res.locals.sucess = "User Creation Sucessful!";
  }
    // Error Handling
  catch {
    next('error creating user')
  }
  return next();
};


// LOGIN USER MIDDLEWEAR
const loginUser = async (req,res,next) => {
  try{
      // Get the username & password from the req.body, assign them to variables username and password
      // This step also purifies data
    { username, password } = req.body;

      // Check DB for User schema with matching username
    const loginUser = await User.findOne({ username });

      // If the user does not exist, return an error
      // We do not specify wether username or password was incorrect because we don't want to give hackers any info
    if(!loginUser){
      next('Invalid Username or Password!')
    };

    const validatePassword = await bcrypt.compare(password, loginUser.password);

    if(!validatePassword){
      next('Invalid Username or Password!');
    };
  }
}