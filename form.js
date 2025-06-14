const form = document.getElementById('studentForm');
const messageDiv = document.getElementById('message');
const whatsappBtn = document.getElementById('whatsappBtn');

const googleScriptURL = 'https://script.google.com/macros/s/AKfycbzKmkg2YWBpS4s2E9fOxHYFZBnuLYfoipHkiHhzWXnxXIj6tgCUxAxQ4GqHNC3DJG2u/exec';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    messageDiv.textContent = '';

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = true;
    }

    const formData = new FormData(form);

    const file = formData.get('image');
      if (!file) {
        messageDiv.textContent = 'Please upload an image.';
        return;
    }
    const reader = new FileReader();
    reader.onload = () => {
        const base64Image = reader.result;
        const dataToSend = {
          name: formData.get('name'),
          email: formData.get('email'),
          other: formData.get('other'),
          image: base64Image
        };

        fetch(googleScriptURL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(dataToSend)
        })
        .then(response => {
          // Open confirmation page in new tab after submission
          window.open('confirmation.html', '_self');
          form.reset();

          // Re-enable submit button after submission
          const submitButton = form.querySelector('button[type="submit"]');
          if (submitButton) {
              submitButton.disabled = false;
          }
        })
        .catch((error) => {
          messageDiv.textContent = 'Error submitting data.';
          console.error('Error!', error.message);

          // Re-enable submit button on error
          const submitButton = form.querySelector('button[type="submit"]');
          if (submitButton) {
              submitButton.disabled = false;
          }
        });
    };
    reader.readAsDataURL(file);
});

whatsappBtn.addEventListener('click', () => {
    const url = 'https://wa.me/?text=Hello%20I%20am%20Ram';
    window.open(url, '_blank');
});