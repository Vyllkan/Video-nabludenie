import emailjs from '@emailjs/browser';

export const sentEmail = (name, phone, description) => {
    debugger
    emailjs.send('service_2qmv8nb','template_j17tbja', {name: name, phone: phone, description: description}, 'user_MH3KNUNzhOxyH3RAxobWS')
	.then((response) => {
        debugger
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
        debugger
	   console.log('FAILED...', err);
	});
}
// User ID
// user_MH3KNUNzhOxyH3RAxobWS
// Access Token
// d1bd35e08d3cb2cc2c71b085addf77df