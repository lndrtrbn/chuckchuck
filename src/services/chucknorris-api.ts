import axios from "axios";

import Joke from "../types/joke";

const CHUCK_NORRIS_API_URL = "https://api.chucknorris.io/jokes";

function getRandom() {
  return axios
    .get<Joke>(`${CHUCK_NORRIS_API_URL}/random`)
    .then(res => res.data);
}

const ChuckApi = {
  getRandom
};

export default ChuckApi;