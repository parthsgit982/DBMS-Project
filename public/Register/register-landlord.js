const stud_form_register = document.getElementById('registration-form');

stud_form_register.addEventListener('submit', async (event)=>{
  event.preventDefault();
  
  const data = {
    Name: name_l.value,
    Email: email_l.value,
    Rental_Address: address_l.value,
    Phone: phone_l.value,
    Property_Type: property_type.value,
    Password: password_l.value
  };

  await fetch('http://localhost:3000/api/register_landlord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
        if (data.status == 'error_R') {
            Sucz_R.style.display = 'none';
            err_R.style.display = 'block';
            err_R.innerText = data.error;
        }
        else {
            err_R.style.display = 'none';
            Sucz_R.style.display = 'block';
            Sucz_R.innerText = data.success;
        }
    });
});