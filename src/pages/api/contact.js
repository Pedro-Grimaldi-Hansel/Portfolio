export default function (req, res) {
    // Importe o módulo dotenv
require('dotenv').config()

// Importe o módulo nodemailer
let nodemailer = require('nodemailer')

// Use a variável de ambiente EMAIL_PASSWORD em vez da senha direta
const password = process.env.EMAIL_PASSWORD;

// Crie o transporte do nodemailer
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: { 
        user: 'portifolionext.contato@gmail.com',
        pass: password,
    },
    secure: true,
});

// Defina as informações do email
const mailData = {
    from: 'portifolionext.contato@gmail.com',
    to: 'pedroghansel@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
}

// Envie o email
transporter.sendMail(mailData, function (err, info) {
    if(err) {
        console.log(err);
        res.status(500).send('Erro ao enviar o email');
    } else {
        console.log(info);
        res.status(200).send('Email enviado com sucesso');
    }
})

  }