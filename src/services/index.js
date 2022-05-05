const API_URL = `https://api.domainsdb.info/v1/domains/search?domain=facebook`;

export async function getDomains() {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.text();
    console.log("data", data)
    return data;
  } catch (error) {
    console.error(error);
  }
}
