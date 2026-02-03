const User = require("../models/User");
const transporter = require("../config/mail");

exports.sendMonthlyEmails = async function() {
  const users = await User.find({});

  for (const user of users) {
    await transporter.sendMail({
      to: user.email,
      subject: "📊 Your Monthly Summary",
      html: `
        <h2>Hello ${user.fullName}</h2>
        <p>Your monthly summary is ready.</p>
        <p>Thank you for using our app 🙌</p>
      `,
    });
  }
}
