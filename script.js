document.addEventListener('DOMContentLoaded', function() {
    const cardNumber = document.getElementById('card-number');
    const expiryDate = document.getElementById('expiry-date');
    const cvv = document.getElementById('cvv');
    const form = document.getElementById('card-form');

    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.substring(0,16);
        let formatted = value.match(/.{1,4}/g);
        e.target.value = formatted ? formatted.join(' ') : value;
    });

    expiryDate.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value.length > 2 ? value.substring(0,2) + '/' + value.substring(2,4) : value;
    });

    cvv.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value.substring(0,3);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Ой, кажется, что-то пошло не так... Попробуйте ещё раз, мы почти богаты!");
        form.reset();
    });
});
