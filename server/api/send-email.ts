import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  
  const requiredConfigKeys = ['emailHost', 'emailPort', 'emailUser', 'emailPass', 'emailTo', 'emailFrom']
  // Проверка наличия обязательных переменных окружения
  for (const key of requiredConfigKeys) {
    if (!config[key]) {
      throw new Error(`Missing required environment variable: ${key}`)
    }
  }
  
  try {
    const { name, phone } = await readBody(event)

    // Настройка транспорта для nodemailer
    const transporter = nodemailer.createTransport({
      host: config.emailHost,
      port: parseInt(config.emailPort, 10),
      secure: parseInt(config.emailPort, 10) === 465,
      auth: {
        user: config.emailUser,
        pass: config.emailPass
      }
    })

    // Настройка письма
    const mailOptions = {
      from: config.emailFrom,
      to: config.emailTo,
      subject: 'Новая заявка на обучение',
      text: `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}`
    }

    // Отправка письма
    await transporter.sendMail(mailOptions)

    return { success: true }
  } catch (error) {
    console.error('Ошибка при отправке письма:', error)
    throw createError({
      statusCode: 500,
      message: 'Ошибка при отправке заявки'
    })
  }
})