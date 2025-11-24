const nodemailer = require('nodemailer');

exports.handler = async (request) => {
    // Allow only POST requests
    if (request.httpMethod != 'POST') {
        return {
            statusCode: 405, // Method not supported
            body: JSON.stringify({
                error: `HTTP method ${request.httpMethod} not allowed!`,
            }),
        };
    }

    // Extract provided details from the request body
    const { name, email, subject, message } = JSON.parse(request.body);
    if (!name || !email || !subject || !message) {
        return {
            statusCode: 400, // Bad request
            body: JSON.stringify({
                error: 'All fields are required! Please provide all fields and try again',
            }),
        };
    }

    try {
        // Define information necessary to send the email
        const mailOptions = {
            from: process.env.SENDER_EMAIL_ADDRESS,
            to: process.env.RECEIVER_EMAIL_ADDRESS,
            subject: process.env.EMAIL_SUBJECT,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        };

        // Create a nodemailer transporter which is used to send the email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SENDER_EMAIL_ADDRESS,
                pass: process.env.SENDER_ACCOUNT_PASSWORD,
            },
        });

        // Send the email using the transporter and the information provided above
        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200, // OK
            body: JSON.stringify({
                success: true,
                message: 'Email sent successfully',
            }),
        };
    } catch (error) {
        // Log the error
        console.error('Email error:', error);

        // Send a descriptive  message back to the user
        return {
            statusCode: 500, // Internal server error
            body: JSON.stringify({
                error: 'Something went wrong! Please try again later',
            }),
        };
    }
};
