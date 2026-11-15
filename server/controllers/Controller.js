const User = require("../models/RegistrationModel");
const nodemailer = require("nodemailer");
const pattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "imamprogrammer09@gmail.com",
    pass: "rtfgyjcxuzyclpty",
  },
});
const registrationController = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  // this is for emply field errors==================================================
  const errors = {};
  if (!name || !email || !password || !confirmPassword) {
    if (!name) errors.name = "name is required";
    if (!email) errors.email = "email is required";
    if (!password) errors.password = "password is required";
    if (!confirmPassword)
      errors.confirmPassword = "confirmPassword is required";
    return res.status(400).json({
      success: false,
      message: errors,
    });
  }

  // this is for password chacking================================================
  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "password and confirmpassword should be match",
    });
  }

  // this is for email  chacking============================================
  let result = email.match(pattern);
  if (!result) {
    return res.status(400).json({
      success: false,
      message: "Please give a valid email",
    });
  }
  const existing_Email = await User.findOne({ email: email });
  if (existing_Email) {
    return res.status(400).json({
      success: false,
      message: "this E-mail is exist",
    });
  }
  //  email  chacking done============================================

  // this is for store datas on database==============================
  const data = new User({
    name: name,
    email: email,
    password: password,
  });
  data.save();
  res.status(200).json({
    success: true,
    message: "Registration Successfully done",
  });
  // data store done========================================================
  try {
    await transporter.sendMail({
      from: '"Md.Imam" <imamprogrammer09@gmail.com>', // sender address
      to: email, // list of recipients
      subject: "Verify your account", // subject line

      html: `<body style="margin:0;padding:0;background:#f4f4f7;font-family:Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 10px;background:#f4f4f7;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;"><tr><td align="center" style="background:#2563eb;padding:35px 20px;color:#ffffff;"><h1 style="margin:0;font-size:28px;">Welcome Aboard! 🎉</h1><p style="margin:10px 0 0;font-size:15px;">We're happy to have you with us.<tr><td style="padding:35px 30px;color:#333333;"><h2>Hello, ${name}! 👋</h2><p style="font-size:15px;line-height:1.7;color:#555;">Thank you for registering with <strong>Foodlover</strong>. Your account has been successfully created.<p style="font-size:15px;line-height:1.7;color:#555;">We're excited to have you as part of our community. You can now log in and explore our platform.</p><table width="100%" cellpadding="12" style="background:#f8fafc;border-radius:8px;"><tr><td><strong>Account Details</strong><p>Name: ${name}<p>Email:${email}<p>Status: Successfully Registered</table><table align="center" cellpadding="0" cellspacing="0" style="margin:30px auto;"><tr><td bgcolor="#2563eb" style="border-radius:6px;"><a href="{{loginUrl}}" style="display:inline-block;padding:14px 30px; color:#ffffff;text-decoration:none; font-weight:bold;">Login to Your Account</a></table><p style="font-size:14px;color:#666;line-height:1.7;">If you have any questions, feel free to contact our support team.<p style="margin-top:30px;line-height:1.7;">Best Regards,<br><strong>Foodlover Team</strong><tr><td align="center" style="background:#f8fafc;padding:20px;color:#999;font-size:12px;">© 2026 Foodlover. All rights reserved.<br>This is an automated email. Please do not reply.</table></table>`, // HTML body
    });
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const EmailData= await User.findOne({email})
    const PasswordData= await User.findOne({password})
  const errors = {};
  if (!email || !password) {
    if (!email) errors.email = "email is required";
    if (!password) errors.password = "password is required";
    return res.status(400).json({
      success: false,
      message: errors,
    });
  }

  if(!EmailData || !PasswordData){
    if(!EmailData)errors.email="email not match"
    if(!PasswordData)errors.password="password not match"
    return res.status(400).json({
      success:false,
      message:errors
    })
  }

  if(EmailData.email==email && PasswordData.password==password){
    res.send("Login successfully")
  }


  const now = new Date().toLocaleTimeString();
   try {
    await transporter.sendMail({
      from: '"Md.Imam" <imamprogrammer09@gmail.com>', 
      to: email, 
      subject: "login info", 

      html: `<body style="margin:0;padding:0;background:#f4f4f7;font-family:Arial,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 10px;background:#f4f4f7;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;"><tr><td align="center" style="background:#2563eb;padding:35px 20px;color:#ffffff;"><h1 style="margin:0;font-size:28px;">Login Successful! 🎉</h1><p style="margin:10px 0 0;font-size:15px;">Welcome back to your account.<tr><td style="padding:35px 30px;color:#333333;"><h2>Hello, ${EmailData.name}! 👋</h2><p style="font-size:15px;line-height:1.7;color:#555;">We're glad to see you again! You have successfully logged in to <strong>Foodlover</strong>.<p style="font-size:15px;line-height:1.7;color:#555;">Here are your recent login details:</p><table width="100%" cellpadding="12" cellspacing="0" style="background:#f8fafc;border-radius:8px;"><tr><td><strong>Login Information</strong><p>Email: ${EmailData.email}<p>Status: <strong style="color:#16a34a;">Successful</strong><p>Login Time: ${now}</table><table align="center" cellpadding="0" cellspacing="0" style="margin:30px auto;"><tr><td bgcolor="#2563eb" style="border-radius:6px;"><a href=${"https://github.com/"} style="display:inline-block;padding:14px 30px; color:#ffffff;text-decoration:none; font-weight:bold;">Visit Dashboard</a></table><table width="100%" cellpadding="15" cellspacing="0" style="background:#fff7ed;border-radius:8px;"><tr><td><strong style="color:#c2410c;">Security Notice ⚠️</strong><p style="font-size:14px;line-height:1.7;color:#666;">If you didn't perform this login, please change your password immediately and secure your account.</table><p style="margin-top:30px;line-height:1.7;">Best Regards,<br><strong>Foodlover Team</strong><tr><td align="center" style="background:#f8fafc;padding:20px; color:#999;font-size:12px;">© 2026 Foodlover. All rights reserved.<br><br>This is an automated email. Please do not reply.</table></table>`, // HTML body
    });
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
};
module.exports = { registrationController, loginController };
