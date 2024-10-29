const form = document.querySelector('form');

form.addEventListener('submit',(event) => {
    event.preventDefault();

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    console.log(`Ad: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Mesajınız: ${message}`);
    alert(`${name} olarak giriş yaptınız `);


    form.reset();
});