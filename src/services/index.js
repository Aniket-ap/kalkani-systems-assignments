const API_URL = `https://api.domainsdb.info/v1/domains/search?domain=facebook`;

export async function getDomains() {
  try {
    const response = await fetch(`${API_URL}`, {mode:'no-cors'});
    const data = await response.json();
    console.log("data", data)
    return data;
  } catch (error) {
    console.error(error);
  }
}
