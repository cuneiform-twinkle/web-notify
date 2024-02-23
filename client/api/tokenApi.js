// TokenApi.js
const storeToken = async (token) => {
  try {
    const response = await fetch('http://localhost:5000/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    });

    if (response.ok) {
      console.log('Token Stored in db successfully.');
    } else {
      console.error('Failed to store token in db.');
    }
  } catch (error) {
    console.error('Error storing token in db:', error);
  }
};

module.exports = {
  storeToken,
};
