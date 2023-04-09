const axios = require('axios');

exports.handler = async function (event, context) {
  const targetUrl = 'https://wdiiuv7qa8yxuax5l7z513u7vtj53orr.ui.nabu.casa' + event.path;
  const method = event.httpMethod;
  const headers = event.headers;
  const data = JSON.parse(event.body);

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
