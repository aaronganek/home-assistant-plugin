const axios = require('axios');

exports.handler = async function (event, context) {
  const targetUrl = 'https://wdiiuv7qa8yxuax5l7z513u7vtj53orr.ui.nabu.casa' + event.path;
  const method = event.httpMethod;
  const data = event.body ? JSON.parse(event.body) : null; // Check for empty event.body before parsing

  // Construct the Authorization header for Basic Authentication
  const username = 'chatgpt';
  const password = 'lahs9s8d231!';
  const authHeaderValue = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

  // Create a new headers object with only the headers you want to forward
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': authHeaderValue,
  };

  try {
    const response = await axios({
      method: method,
      url: targetUrl,
      headers: headers,
      data: data,
    });
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: JSON.stringify(error.response.data),
    };
  }
};
