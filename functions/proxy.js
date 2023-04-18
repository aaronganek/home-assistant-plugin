const axios = require('axios');

exports.handler = async function (event, context) {
  console.log('Received event:', JSON.stringify(event));

  // Extract the portion of the URL that comes after "/.netlify/functions/proxy"
  const proxyPath = '/.netlify/functions/proxy';
  const apiPath = event.rawUrl.substring(event.rawUrl.indexOf(proxyPath) + proxyPath.length);

  const targetUrl = 'https://wdiiuv7qa8yxuax5l7z513u7vtj53orr.ui.nabu.casa' + apiPath;
  const method = event.httpMethod;
  const data = event.body ? JSON.parse(event.body) : null;

  // Extract the Bearer token from the Authorization header
  const token = event.headers.Authorization.split(' ')[1];

  // Use the extracted token in the headers for the target request
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  console.log('Sending request to target URL:', targetUrl);

  try {
    const response = await axios({
      method: method,
      url: targetUrl,
      headers: headers,
      data: data,
    });
    console.log('Received response:', JSON.stringify(response.data));
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error occurred:', JSON.stringify(error.response.data));
    return {
      statusCode: error.response.status,
      body: JSON.stringify(error.response.data),
    };
  }
};
