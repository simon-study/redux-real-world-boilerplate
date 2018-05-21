/*
 *
 * Test reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
  FETCH_ARTICLES_OFFSET_SUCCESS, FETCH_ARTICLES_OFFSET_FAILURE,
  FETCH_ARTICLES_TAG_SUCCESS, FETCH_ARTICLES_TAG_FAILURE,
  FETCH_TAGS_SUCCESS, FETCH_TAGS_FAILURE,
  RESET_TAGNAME,
} from './constants';

const initialState = fromJS({
  articles: [],
  tags: [],
  articlesTag: [],
  articlesCount: 0,
  currentPage: 0,
  error: null,
  tagName: '',
});

function testReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return state.set('articles', action.payload.articles)
                  .set('articlesCount', action.payload.articlesCount)
                  .set('currentPage', 0);
    case FETCH_DATA_FAILURE:
      return state.set('error', action.payload.error);
    case FETCH_ARTICLES_OFFSET_SUCCESS:
      return state.set('articles', action.payload.data.articles)
                  .set('currentPage', action.payload.page);
    case FETCH_ARTICLES_OFFSET_FAILURE:
      return state.set('error', action.payload.error);
    case FETCH_TAGS_SUCCESS:
      return state.set('tags', action.payload.tags);
    case FETCH_TAGS_FAILURE:
      return state.set('error', action.payload.error);
    case 'FAVORITE_SUCCESS':
      const listArticles = state.get('articles');
      return state.update(
        listArticles.findIndex(function(item) {
          return item.slug === action.payload.article.slug;
        }), function(item) {
          console.log(item)
        }
      )
    // return state

    // case TOGGLE_FAVORITE_SUCCESS:
    //   const {
    //     slug,
    //     favorited,
    //     favoritesCount
    //   } = action.article
    //   return state
    //     .updateIn(
    //       ['articleList'],
    //       list => {
    //         return list.map( item => {
    //           if (item.get('slug') === slug) {
    //             return item
    //               .updateIn(
    //                 ['favorited'],
    //                 fav => favorited
    //               )
    //               .updateIn(
    //                 ['favoritesCount'],
    //                 favsCount => favoritesCount
    //               )
    //           }
    //           return item
    //         })
    //       }
    //     )
    //   const udpatedArticle = action.article
    //   const newArticles = state.get('articleList').map(article => {
    //     if(article.slug === udpatedArticle.slug) {
    //       return {
    //         ...article,
    //         favorited: udpatedArticle.favorited,
    //         favoritesCount: udpatedArticle.favoritesCount
    //       }
    //     }

    //     return article
    //   })

    //   return state
    //     .set('articleList', newArticles)
    case FETCH_ARTICLES_TAG_SUCCESS:
      return state.set('articles', action.payload.data.articles)
                  .set('articlesCount', action.payload.data.articlesCount)
                  .set('currentPage', 0)
                  .set('tagName', action.payload.tagName);
    case FETCH_ARTICLES_TAG_FAILURE:
      return state.set('error', action.payload.error);
    case RESET_TAGNAME:
      return state.set('tagName', null);
    default:
      return state;
  }
}

export default testReducer;
