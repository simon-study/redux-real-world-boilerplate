import axios from 'axios';
import {
  API_ROOT,
  DEFAULT_LIMIT,
  DEFAULT_OFFSET,
} from './constants';

export function getArticles() {
  return axios.get(`${API_ROOT}/articles?limit=${DEFAULT_LIMIT}`);
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
  return axios.get(`${API_ROOT}/articles?limit=${DEFAULT_LIMIT}&offset=${DEFAULT_OFFSET}&tag=${tag}`)
}