const stud_form_register = document.getElementById('registration-form');

stud_form_register.addEventListener('submit', async (event)=>{
  event.preventDefault();
  
  const data = {
    Name: name_s.value,
    Email: email_s.value,
    Address: address_s.value,
    Phone: phone_s.value,
    Gender: gender_s.value,
    Age: age_s.value,
    Password: password_s.value
  };

  await fetch('http://localhost:3000/api/register_student', {
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