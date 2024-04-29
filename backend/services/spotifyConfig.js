const axios = require("axios");
let Bearer = getBearer();

async function getBearer() {
  let token;

  let { data } = await axios.post(
    "https://accounts.spotify.com/api/token",
    {
      grant_type: "client_credentials",
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    },
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );
  token = data?.access_token;

  return token;
}

module.exports = { Bearer };
