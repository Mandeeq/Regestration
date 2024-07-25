document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = document.querySelector('#first-name').value;
        const lastName = document.querySelector('#last-name').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const number = document.querySelector('#number').value;

        console.log(`First Name: ${firstName}`);
        console.log(`Last Name: ${lastName}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log(`Number: ${number}`);


        alert('Form submitted successfully!');


    });

    const loginLink = document.querySelector('.login');
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();

        window.location.href = 'Login.html';
    });
});
