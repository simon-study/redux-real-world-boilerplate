import axios from 'axios';
import {
  API_ROOT,
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
} from './constants';



export function getArticles() {
  return axios.get(`${API_ROOT}/articles?limit=${DEFAULT_LIMIT}`, );
}

export function getArticle(slug) {
  return axios.get(`${API_ROOT}/articles/${slug}`);
}

export function getTags() {
  return axios.get(`${API_ROOT}/tags`);
}

export function getComments(slug) {
  return axios.get(`${API_ROOT}/articles/${slug}/comments`);
}

export function getArticlesWithTag(tag) {
  return axios.get(`${API_ROOT}/articles?limit=${DEFAULT_LIMIT}&offset=${DEFAULT_OFFSET}&tag=${tag}`);
}

export function getArticlesWithOffset(page) {
  return axios.get(`${API_ROOT}/articles?limit=${DEFAULT_LIMIT}&offset=${DEFAULT_LIMIT * page}`);
}

export function getProfile(username) {
  return axios.get(`${API_ROOT}/profiles/${username}`);
}

export function getArticlesByAuthor(username) {
  return axios.get(`${API_ROOT}/articles/?author=${username}&limit=5`);
}

export function register(username, email, password) {
  return axios.post(`${API_ROOT}/users/`, {
    user: {
      username,
      email,
      password,
    },
  })
}

export function login(email, password) {
  return axios.post(`${API_ROOT}/users/login`, {
    user: {
      email,
      password,
    },
  });
}

// export function deleteArticle(slug, token) {
//   return axios.delete(`${ROOT_API}/articles/${slug}`,{
//     headers: { Authorization: "Token " + token }
//   });
// }
