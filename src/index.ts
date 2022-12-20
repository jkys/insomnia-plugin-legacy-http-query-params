const legacyHttpQueryPlugin = (context) => {
  const parameters = context.request.getParameters();
  
  if (parameters.length <= 0) {
    return;
  }

  const params: string[] = [];
  parameters.forEach(({ name, value }: { name: string, value: string }) => {
    const keyValuePair = `${name}=${value}`;
    params.push(keyValuePair);

    context.request.removeParameter(name); // Remove parameter from query params
  });


  const query = params.join(';');
  const intialUrl = context.request.getUrl();
  
  const url = `${intialUrl}?${query}`;
  context.request.setUrl(url);
};

module.exports.requestHooks = [legacyHttpQueryPlugin];
