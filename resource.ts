export interface BaseResource {
  id?: number
  url: string
  thumb?: string
  type?: 'image' | 'video'
  description?: string
}

export interface AddResourceReq {
  resources: BaseResource[]
}

export interface GetResourceReq {
  resource_ids: number[]
}

export interface GetResourceRes {
  resources: BaseResource[]
}

export interface DeleteResourceReq {
  ids: number[]
}
