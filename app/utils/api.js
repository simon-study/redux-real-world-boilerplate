import axios from 'axios';
import {
  API_ROOT,
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
} from './constants';

export const getTags = () => axios.get(`${API_ROOT}/tags`);

export const getComments = (slug) => axios.get(`${API_ROOT}/articles/${slug}/comments`);

export const getArticlesWithTag = (tag) => axios.get(`${API_ROOT}/articles?limit=${DEFAULT_LIMIT}&offset=${DEFAULT_OFFSET}&tag=${tag}`);

export const getProfileAPI = (username) => axios.get(`${API_ROOT}/profiles/${username}`);

export const getArticlesByAuthorAPI = (username) => axios.get(`${API_ROOT}/articles/?author=${username}&limit=5`);

export const getArticlesAPI = (token) => {
  const options = {
    method: 'GET',
    url: `${API_ROOT}/articles?limit=${DEFAULT_LIMIT}`,
    headers: {
      Authorization: token ? `Token ${token}` : '',
    },
  };
  return axios(options);
};

export const getArticlesWithOffset = (page) => {
  const options = {
    method: 'GET',
    url: `${API_ROOT}/articles`,
    params: {
      limit: DEFAULT_LIMIT,
      offset: DEFAULT_LIMIT * page,
    },
  };
  return axios(options);
};

export function registerAPI(username, email, password) {
  return axios.post(`${API_ROOT}/users/`, {
    user: {
      username,
      email,
      password,
    },
  });
}

export const login = (email, password) => {
  const options = {
    method: 'POST',
    url: `${API_ROOT}/users/login`,
    data: {
      user: {
        email,
        password,
      },
    },
  };
  return axios(options);
};

export const updateProfile = (user, token) => {
  const options = {
    method: 'PUT',
    url: `${API_ROOT}/user`,
    data: { user },
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  return axios(options);
};

export const followRequest = (method, username, token) => {
  const options = {
    method,
    url: `${API_ROOT}/profiles/${username}/follow`,
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  return axios(options);
};

export const toggleFavoriteAPI = (slug, method, token) => {
  const options = {
    method,
    url: `${API_ROOT}/articles/${slug}/favorite`,
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  return axios(options);
};

export const postComment = (slug, body, token) => {
  const options = {
    method: 'POST',
    url: `${API_ROOT}/articles/${slug}/comments`,
    data: {
      comment: { body },
    },
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  return axios(options);
};

export const deleteCommentAPI = (slug, id, token) => {
  const options = {
    method: 'DELETE',
    url: `${API_ROOT}/articles/${slug}/comments/${id}`,
    headers: { Authorization: `Token ${token}` },
  };
  return axios(options);
};

export const deleteArticleAPI = (slug, token) => {
  const options = {
    method: 'DELETE',
    url: `${API_ROOT}/articles/${slug}`,
    headers: { Authorization: `Token ${token}` },
  };
  return axios(options);
};

export const getArticleDetailAPI = (slug, token) => {
  const options = {
    method: 'GET',
    url: `${API_ROOT}/articles/${slug}`,
    headers: { Authorization: token ? `Token ${token}` : '' },
  };
  return axios(options);
};

export const newArticleAPi = (article, token) => {
  const options = {
    method: 'POST',
    url: `${API_ROOT}/articles`,
    headers: { authorization: `Token ${token}` },
    data: {
      article,
    },
  };
  return axios(options);
};

export const getListFeed = (token) => {
  const options = {
    method: 'GET',
    url: `${API_ROOT}/articles/feed?`,
    params: {
      limit: DEFAULT_LIMIT,
    },
    headers: {
      authorization: token ? `Token ${token}` : '',
    },
  };
  return axios(options);
};

export const toggleFollowAPI = (method, username, token) => {
  const options = {
    method,
    url: `${API_ROOT}/profiles/${username}/follow`,
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  return axios(options);
};

export const toggleFetchArticleByAuthorAPI = (tab, username, token) => {
  const options = {
    method: 'GET',
    url: `${API_ROOT}/articles/?${tab}=${username}&limit=5`,
    headers: { Authorization: `Token ${token}` },
  };
  return axios(options);
};
