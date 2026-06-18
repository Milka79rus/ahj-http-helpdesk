const createRequest = async (options = {}) => {
  const { url, method = 'GET', data } = options;
  const config = {
    method,
    headers: {},
  };

  if (data && (method === 'POST' || method === 'PUT')) {
    config.headers['Content-Type'] = 'application/json';
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  if (response.status === 204) {
    return true;
  }
  return response.json();
};

export default createRequest;
