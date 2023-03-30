import { mailer } from 'ts-mailer';
import { resolve } from 'path';

const result = await mailer.sendEmail({
	fromEmail: 'my-email@domain.com',
	subject: 'some subject',
	templatePath:resolve("./template.hbs"),
	toEmails: ['destination@domain.com'],
	data: { userName: 'John Doe' },
	bcc: ['financial@domain.com'],
	cc: ['my-email@domain.com']
});

console.log(result);