import axios from 'axios';
import {
  API_ROOT,
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
} from './constants';

// export function getArticles() {
//   return axios.get(`${API_ROOT}/articles?limit=${DEFAULT_LIMIT}`);
// }

// export function getArticlesWithAuth(token) {
//   return axios.get(`${API_ROOT}/articles?limit=${DEFAULT_LIMIT}`, {
//     headers: { Authorization: `Token ${token}` },
//   });
// }

export const getArticlesAPI = (token) => {
  return axios({
    method: 'GET',
    url: `${API_ROOT}/articles?limit=${DEFAULT_LIMIT}`,
    headers: { Authorization: token ? `Token ${token}` : '' },
  });
}

// export function getArticle(slug) {
//   return axios.get(`${API_ROOT}/articles/${slug}`);
// }

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
  });
}

export function login(email, password) {
  return axios.post(`${API_ROOT}/users/login`, {
    user: {
      email,
      password,
    },
  });
}

export function updateProfile(user, token) {
  return axios.put(`${API_ROOT}/user`,
    { user },
    { headers: { Authorization: `Token ${token}` } }
  );
}


export const followRequest = (method, username, token) => {
  return axios({
    method,
    url: `${API_ROOT}/profiles/${username}/follow`,
    headers: {
      Authorization: `Token ${token}`
    },
  })
}

export const toggleFavoriteAPI = (slug, method, token) => {
  return axios({
    method,
    url: `${API_ROOT}/articles/${slug}/favorite`,
    headers: {
      Authorization: `Token ${token}`
    },
  });
}

// Comments

export const postComment = (slug, body, token) => {
  return axios({
    method: 'POST',
    url: `${API_ROOT}/articles/${slug}/comments`,
    data: {
      comment: {
        body
      }
    },
    headers: {
      Authorization: `Token ${token}`
    },
  });
}

export const deleteCommentAPI = (slug, id, token) => {
  return axios({
    method: 'DELETE',
    url: `${API_ROOT}/articles/${slug}/comments/${id}`,
    headers: { Authorization: `Token ${token}` },
  });
}

// Article
export const deleteArticleAPI = (slug, token) => {
  return axios({
    method: 'DELETE',
    url: `${API_ROOT}/articles/${slug}`,
    headers: { Authorization: `Token ${token}` },
  });
}

export const getArticleDetailAPI = (slug, token) => {
  return axios({
    method: 'GET',
    url: `${API_ROOT}/articles/${slug}`,
    headers: { Authorization: token ? `Token ${token}` : '' },
  });
}

export const newArticleAPi = (article, token) => {
  return axios({
    method: 'POST',
    url: `${API_ROOT}/articles`,
    headers: { authorization: `Token ${token}` },
    data: {
      article
    },
  });
}

export const getListFeed = (token) => {
  return axios({
    method: 'GET',
    url: `${API_ROOT}/articles/feed?limit=${DEFAULT_LIMIT}`,
    headers: { authorization: token ? `Token ${token}` : '' },
  })
}


