const DB = require("../DB/DB-config");
const jwt = require("jsonwebtoken");

const Log_Stud = async (req, res) => {
  const { Email, Password } = req.body;
  if (!Email || !Password) {
    return res.json({
      status: "error_L",
      error: "Please Enter Both Email & Password",
    });
  } else {
    DB.query(
      "SELECT * FROM student_user WHERE Email = ?",
      [Email],
      async (err3, result3) => {
        if (err3) {
          throw err3;
        }
        if (result3.length == 0 || Password !== result3[0].Password) {
          return res.json({
            status: "error_L",
            error: "Incorrect Email OR Password",
          });
        } else {
          const jwt_Token = jwt.sign(
            { id: result3[0].User_ID },
            process.env.JWT_SECRET,
            {
              expiresIn: process.env.JWT_EXPIRES,
            }
          );
          const cookieOptions = {
            expiresIn: new Date(
              Date.now() + process.env.COOKIES_EXPIRES * 24 * 60 * 1000
            ),
            httpOnly: true,
          };
          res.cookie("Login_Cookie_Token", jwt_Token, cookieOptions);

          res.json({
            status: "Success_L",
            success: "Student User Has Been Logged In!!",
            whoami: "Dashboard_Stud"
          });    
        }
      }
    );
  }
};

const Log_LndLrd = async (req, res) => {
  const { Email, Password } = req.body;
  if (!Email || !Password) {
    return res.json({
      status: "error_L",
      error: "Please Enter Both Email & Password",
    });
  } else {
    DB.query(
      "SELECT * FROM landlord_user WHERE Email = ?",
      [Email],
      async (err3, result3) => {
        if (err3) {
          throw err3;
        }
        if (result3.length == 0 || Password !== result3[0].Password) {
          return res.json({
            status: "error_L",
            error: "Incorrect Email OR Password",
          });
        } else {
          const jwt_Token = jwt.sign(
            { id: result3[0].User_ID },
            process.env.JWT_SECRET,
            {
              expiresIn: process.env.JWT_EXPIRES,
            }
          );
          const cookieOptions = {
            expiresIn: new Date(
              Date.now() + process.env.COOKIES_EXPIRES * 24 * 60 * 1000
            ),
            httpOnly: true,
          };
          res.cookie("Login_Cookie_Token", jwt_Token, cookieOptions);

          return res.json({
            status: "Success_L",
            success: "LandLord User Has Been Logged In!!",
            whoami: "Dashboard_LL"
          });
        }
      }
    );
  }
};

module.exports = { Log_Stud, Log_LndLrd };
