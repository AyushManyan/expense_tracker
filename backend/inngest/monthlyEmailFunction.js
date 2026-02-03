const { inngest } = require("../inngest/client.js");
const {sendMonthlyEmails} = require("../services/sendMonthlyEmails.js");

exports.monthlyEmailFunction = inngest.createFunction(
  { id: "monthly-email-job" },
  { cron: "0 23 * * *" }, // every day at 11 PM
  async () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // If tomorrow is the 1st, today is last day of month
    if (tomorrow.getDate() === 1) {
      await sendMonthlyEmails();
      return { status: "sent" };
    }
    return { status: "skipped" };
  }
);
