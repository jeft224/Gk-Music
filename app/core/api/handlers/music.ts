/**
 * 详细接口类型定义在: @/typescript/api-interface/*
 */

/**
 *  查询推荐歌单
 * @param params
 * @param options
 * @returns
 */
export function queryRecommendSong(
  params?: queryRecommendSongUsingGET.Params,
  options?: RequestOptions
): Promise<queryRecommendSongUsingGET.Response> {
  return $api.request('/top/playlist/highquality', params, options)
}

export function queryRankList(
  params?: queryRankUsingGET.Params,
  options?: RequestOptions
): Promise<queryRankUsingGET.Response> {
  return $api.request('/toplist/detail', params, options)
}

export function queryDJBannerList(
  params?: queryDJBannerGET.Params,
  options?: RequestOptions
): Promise<queryDJBannerGET.Response> {
  return $api.request('/dj/banner', params, options)
}

// /**
//  * 查询所有网址链接
//  * @param params
//  * @param options
//  */
// export function querySiteCategories(
//   params?: querySiteCategoriesUsingGET.Params,
//   options?: RequestOptions
// ): Promise<querySiteCategoriesUsingGET.Response> {
//   return $api.request('/siteCategories', params, options)
// }

// /**
//  * 增加一条分类
//  * @param params
//  * @param options
//  */
// export function addSiteCategory(
//   params?: addSiteCategoryUsingPOST.Params,
//   options?: RequestOptions
// ): Promise<addSiteCategoryUsingPOST.Response> {
//   return $api.request('/siteCategories', params, options)
// }

// /**
//  * 删除一条分类
//  * @param id
//  * @param params
//  * @param options
//  */
// export function deleteSiteCategory(
//   id: number,
//   params?: deleteSiteCategoryUsingDELETE.Params,
//   options?: RequestOptions
// ): Promise<deleteSiteCategoryUsingDELETE.Response> {
//   return $api.request(`/siteCategories/${id}`, params, options)
// }

// /**
//  * 更新一条分类信息
//  * @param id
//  * @param params
//  * @param options
//  */
// export function updateSiteCategory(
//   id: number,
//   params?: updateSiteCategoryUsingPUT.Params,
//   options?: RequestOptions
// ): Promise<updateSiteCategoryUsingPUT.Response> {
//   return $api.request(`/siteCategories/${id}`, params, options)
// }
