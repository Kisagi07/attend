const sendRequest = async (input: string | URL | globalThis.Request, init?: RequestInit) => {
  const res = await fetch(input, init);
  if (!res.ok) {
    const error: CustomError = new Error(`${res.status}: ${res.statusText}`);
    error.status = res.status;
    error.info = await res.json();
    throw error;
  }
  const data = await res.json();
  return data;
};
export default sendRequest;
