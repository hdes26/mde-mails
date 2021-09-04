const nodemailer = require('nodemailer');



// async..await is not allowed in global scope, must use a wrapper
exports.sendMail = async function (req, res) {
    console.log(req.body);
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'mdesoficial@gmail.com', // generated ethereal user
            pass: 'hrqdbvbilldkdryn', // generated ethereal password
        },
    });

    // send mail with defined transport object
    await transporter.sendMail({
        from: '"Muebles, diseño y estilo 👻" <alosi@gmail.com>', // sender address
        to: "mdesoficial@gmail.com", // list of receivers
        subject: "Correo enviado desde la web ✔", // Subject line
        text: `${req.body.mensaje}`, // plain text body
        html: `<b>Nombre:</b> ${req.body.nombre}
                <br><br>
                <b>Email:</b> ${req.body.email}
                <br><br>
                <b>Mensaje:</b> ${req.body.mensaje} `, // html body
    });
    res.send("Correo enviado satisfactoriamente");
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

