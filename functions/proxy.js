const axios = require('axios');

exports.handler = async function (event, context) {
  console.log('Received event:', JSON.stringify(event)); // Log the received event
  const targetUrl = 'https://wdiiuv7qa8yxuax5l7z513u7vtj53orr.ui.nabu.casa' + event.path;
  const method = event.httpMethod;
  const data = event.body ? JSON.parse(event.body) : null;

  const username = 'chatgpt';
  const password = 'lahs9s8d231!';
  const authHeaderValue = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': authHeaderValue,
  };

  console.log('Sending request to target URL:', targetUrl); // Log the target URL

  try {
    const response = await axios({
      method: method,
      url: targetUrl,
      headers: headers,
      data: data,
    });
    console.log('Received response:', JSON.stringify(response.data)); // Log the received response
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error occurred:', JSON.stringify(error.response.data)); // Log the error
    return {
      statusCode: error.response.status,
      body: JSON.stringify(error.response.data),
    };
  }
};
