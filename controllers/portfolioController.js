
const mailjet = require('node-mailjet');

const mailjetClient = mailjet.apiConnect(
   process.env.MAILJET_APIKEY,
  process.env.MAILJET_SECRET
);

const emailSendController = async (req, res) => {
  try {
    const { name, mobile, email, msg } = req.body;

    if (!name || !mobile || !email || !msg) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const emailBody = `
      <h3>New Contact Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${msg}</p>
    `;

    const request = await mailjetClient
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: "atresanskar@gmail.com",
              Name: "mern-portfolio",
            },
            To: [
              {
                Email: "atresanskar55@gmail.com",
                Name: `${name}`,
              },
            ],
            Subject: "New Contact Us Submission",
            HTMLPart: emailBody,
          },
        ],
      });

    return res.status(200).send({
      success: true,
      message: "Email sent successfully.",
      response: request.body,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Send email API error.",
      error: error.message,
    });
  }
};

module.exports = { emailSendController };
