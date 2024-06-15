// const sendemail = async ({ email }) => {
//   console.log(email);
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.email",
//       service: "gmail",
//       auth: {
//         user: "abhiram777777@gmail.com",
//         pass: "yrnn bpel euyc puwc",
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     // Craft the email content
//     const mailOptions = {
//       from: "noreply@gmail.com",
//       to: email,
//       subject: "Bla Bla",
//       html: `
//          <h1> HAi Guys ela unnaru Tinnara </h1>
//         `,
//     };

//     // Send the email
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.messageId);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// const mails = [
//   {
//     email: "n191080@rguktn.ac.in",
//   },
//   {
//     email: "n190501@rguktn.ac.in",
//   },
//   {
//     email: "n190499@rguktn.ac.in",
//   },
// ];

// (async () => {
//   for (const mail of mails) {
//     await sendemail(mail.email);
//   }
// })();
// const nodemailer = require("nodemailer");

// const sendEmail = async ({ email, name, id }) => {
//   console.log(email);
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com", // corrected host name
//       service: "gmail",
//       auth: {
//         user: "abhiram777777@gmail.com",
//         pass: "yrnn bpel euyc puwc",
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     // Craft the email content
//     const mailOptions = {
//       from: "noreply@gmail.com",
//       to: email,
//       subject:
//         "This mail you recieved under a test case from your CR do ignore this",
//       html: `
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Invitation</title>
//       <style>
//         body {
//           font-family: Arial, sans-serif;
//           background-color: #f5f5f5;
//           margin: 0;
//           padding: 0;
//         }

//         .container {
//           max-width: 600px;
//           margin: 20px auto;
//           background-color: #ffffff;
//           padding: 20px;
//           border-radius: 10px;
//           box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }

//         h1 {
//           color: #333333;
//           text-align: center;
//         }

//         p {
//           color: #666666;
//           text-align: center;
//           margin-bottom: 20px;
//         }

//         .btn {
//           display: inline-block;
//           background-color: #007bff;
//           color: #ffffff;
//           text-decoration: none;
//           padding: 10px 20px;
//           border-radius: 5px;
//           transition: background-color 0.3s ease;
//         }

//         .btn:hover {
//           background-color: #0056b3;
//         }
//       </style>
//       </head>
//       <body>

//       <div class="container">
//         <h1>`{$name}`(`{$id}`) You're Invited!</h1>
//         <p>We're excited to invite you to our special event.</p>
//         <p>Date: January 1, 20xx</p>
//         <p>Time: 7:00 PM</p>
//         <p>Location: [Venue Name], [Address]</p>
//         <p>Please RSVP by December 25th.</p>
//         <p>
//           <a href="#" class="btn">RSVP Now</a>
//         </p>
//       </div>

//       </body>
//       </html>

//         `,
//     };

//     // Send the email
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.messageId);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// const emails = [
//   { email: "n191080@rguktn.ac.in", Name: "Abhiram Cheekala", Id: "N191080" },
//   {
//     email: "n191115@rguktn.ac.in",
//     Name: "Yashuu",
//     Id: "N191115",
//   },
//   {
//     email: "n190413@rguktn.ac.in",
//     Name: "Sravanthi",
//     Id: "N190413",
//   },
//   {
//     email: "n190920@rguktn.ac.in",
//     Name: "Ravi",
//     Id: "N190920",
//   },
// ];

// (async () => {
//   for (const emaill of emails) {
//     await sendEmail({ emaill.email,emaill.Name,emaill.Id }); // pass email as an object property
//   }
// })();

const nodemailer = require("nodemailer");

const sendEmail = async (obj) => {
  // Destructure the parameters
  console.log(obj.Email);
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      auth: {
        user: "abhiram777777@gmail.com",
        pass: "yrnn bpel euyc puwc",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Craft the email content
    const mailOptions = {
      from: "noreply@gmail.com",
      to: obj.Email,
      subject: "Invitation to C.O.D.E",
      html: `
      <!DOCTYPE html>
<html lang="en">
<head>
  <title>Club Sign-Up</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 2rem;
    }

    h1, h4 {
      margin: 1rem 0;
    }

    p {
      line-height: 1.5;
    }

    a {
      color: #333;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      text-decoration: none;
    }

    a:hover {
      background-color: #eee;
    }
  </style>
</head>
<body>
  <h1>Hi ${obj.NAME}!</h1>
  <p>Here is the link for your assigned club. Don't worry if you didn't receive your preferred choice. In all clubs, you'll gain valuable management skills.</p>
  <p>Join Here ${obj.Wlink}</p>
  <h4>Thank you</h4>
</body>
</html>
 `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const emails = [
  {
    Email: "n210086@rguktn.ac.in",
    ID: "n210086",
    NAME: "A.Neeraja",
    "INTRESTED DOMAIN": "Full stack",
    Given_Domain: "AR",
    Wlink: "https://chat.whatsapp.com/Iz2CFyAyaZMFiBMkihssrf",
  },
  {
    Email: "n210219@rguktn.ac.in",
    ID: "n210219",
    NAME: "M.Swathi",
    "INTRESTED DOMAIN": "Full Stack",
    Given_Domain: "AR",
    Wlink: "https://chat.whatsapp.com/Iz2CFyAyaZMFiBMkihssrf",
  },
  {
    Email: "n210294@rguktn.ac.in",
    ID: "n210294",
    NAME: "D.Navya sree",
    "INTRESTED DOMAIN": "Full Stack",
    Given_Domain: "AR",
    Wlink: "https://chat.whatsapp.com/Iz2CFyAyaZMFiBMkihssrf",
  },
  {
    Email: "n210954@rguktn.ac.in",
    ID: "n210954",
    NAME: "K.Satya priya",
    "INTRESTED DOMAIN": "Full Stack",
    Given_Domain: "GATE",
    Wlink: "https://chat.whatsapp.com/JjGUOGtpSfDLVzsgUUwFE6",
  },
  {
    Email: "n210157@rguktn.ac.in",
    ID: "n210157",
    NAME: "I.Prasanna",
    "INTRESTED DOMAIN": "Full Stack",
    Given_Domain: "GATE",
    Wlink: "https://chat.whatsapp.com/JjGUOGtpSfDLVzsgUUwFE6",
  },
  {
    Email: "n210964@rguktn.ac.in",
    ID: "n210964",
    NAME: "G.Bindu chaitanya",
    "INTRESTED DOMAIN": "Full Stack",
    Given_Domain: "Fs",
    Wlink: "https://chat.whatsapp.com/BDjalB9AN831IcNawUBFNu",
  },
  {
    Email: "n210765@rguktn.ac.in",
    ID: "n210765",
    NAME: "K.Meghana sri",
    "INTRESTED DOMAIN": "AI/Ml",
    Given_Domain: "AI/ML",
    Wlink: "https://chat.whatsapp.com/BGfoozDULLdH5MSrC9SIwu",
  },
  {
    Email: "n210221@rguktn.ac.in",
    ID: "n210221",
    NAME: "K.Nanda kishore",
    "INTRESTED DOMAIN": "Full Stack",
    Given_Domain: "FS",
    Wlink: "https://chat.whatsapp.com/BDjalB9AN831IcNawUBFNu",
  },
  {
    Email: "n210999@rguktn.ac.in",
    ID: "n210999",
    NAME: "R.Mallikarjun",
    "INTRESTED DOMAIN": "AI/Ml",
    Given_Domain: "AI/ML",
    Wlink: "https://chat.whatsapp.com/BGfoozDULLdH5MSrC9SIwu",
  },
  {
    Email: "n210665@rguktn.ac.in",
    ID: "n210665",
    NAME: "CH.Uday kiran",
    "INTRESTED DOMAIN": "Cyber security",
    Given_Domain: "Cs And Poster Design",
    Wlink: "https://chat.whatsapp.com/BZH8m3oLMjH0q6B5Am2lMZ",
  },
  {
    Email: "n210184@rguktn.ac.in",
    ID: "n210184",
    NAME: "P.Yaswanth",
    "INTRESTED DOMAIN": "AI/Ml",
    Given_Domain: "CP",
    Wlink: "https://chat.whatsapp.com/LlkKiKoZePiKUevOWldqWM",
  },
  {
    Email: "n210836@rguktn.ac.in",
    ID: "n210836",
    NAME: "G.Sudarshan paul",
    "INTRESTED DOMAIN": "AI/Ml",
    Given_Domain: "AI/ML",
    Wlink: "https://chat.whatsapp.com/BGfoozDULLdH5MSrC9SIwu",
  },
  {
    Email: "n211055@rguktn.ac.in",
    ID: "n211055",
    NAME: "P.Raghavendra raju",
    "INTRESTED DOMAIN": "Competetive programming",
    Given_Domain: "CP",
    Wlink: "https://chat.whatsapp.com/LlkKiKoZePiKUevOWldqWM",
  },
  {
    Email: "n210432@rguktn.ac.in",
    ID: "n210432",
    NAME: "Anil patnala",
    "INTRESTED DOMAIN": "Full Stack",
    Given_Domain: "FS",
    Wlink: "https://chat.whatsapp.com/BDjalB9AN831IcNawUBFNu",
  },
  {
    Email: "n210236@rguktn.ac.in",
    ID: "n210236",
    NAME: "G.Jyotirmayee",
    "INTRESTED DOMAIN": "AI/Ml",
    Given_Domain: "CP",
    Wlink: "https://chat.whatsapp.com/LlkKiKoZePiKUevOWldqWM",
  },
  {
    Email: "n210678@rguktn.ac.in",
    ID: "n210678",
    NAME: "S.Madhulatha",
    "INTRESTED DOMAIN": "AI/Ml",
    Given_Domain: "AI",
    Wlink: "https://chat.whatsapp.com/BGfoozDULLdH5MSrC9SIwu",
  },
  {
    Email: "n210132@rguktn.ac.in",
    ID: "n210132",
    NAME: "P.Sai kiran",
    "INTRESTED DOMAIN": "AI/Ml",
    Given_Domain: "AR",
    Wlink: "https://chat.whatsapp.com/Iz2CFyAyaZMFiBMkihssrf",
  },
  {
    Email: "n210278@rguktn.ac.in",
    ID: "n210278",
    NAME: "I.Praneetha",
    "INTRESTED DOMAIN": "Full Stack",
    Given_Domain: "Overall E1 CoOrdinatior",
    Wlink: "",
  },
];

(async () => {
  for (const emailObj of emails) {
    // Iterate over email objects
    await sendEmail(emailObj); // Pass the entire email object
  }
})();
