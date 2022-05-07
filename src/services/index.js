// const API_URL = `https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook`;

export async function getDomains(requiredDomain) {
  try {
    await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=${requiredDomain}}`
     )
      .then((response) => {
       return response.json();
      })
      .then((data) => {
        console.log(data)
      });
  } catch (error) {
    console.error(error);
  }
}
