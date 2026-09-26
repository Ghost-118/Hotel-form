document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Extraer datos del formulario y armar el objeto
  const formData = new FormData(e.target);
  const choices = formData.getAll('choice');

  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    age: formData.get('age') ? parseInt(formData.get('age')) : null,
    hotelStay: formData.get('hotel-stay'),
    choice: choices,
    service: formData.get('service'),
    food: formData.get('food'),
    comments: formData.get('comments')
  };

  try {
    // Enviar información al servidor
    const response = await fetch('http://localhost:3000/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    // Procesar respuesta
    if (response.ok) {
      alert('¡Gracias! Tus datos se han guardado correctamente.');
      e.target.reset();
    } else {
      alert('Error: ' + data.error);
    }
  } catch (error) {
    console.error('Error de red:', error);
    alert('No se pudo conectar con el servidor backend.');
  }
});
