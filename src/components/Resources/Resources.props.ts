export interface Resource {
  id: string,
  title: string,
  createdAt: string,
  updatedAt: string,
  description?: string,
  thumbnail?: string,
  body: string,
  url: string,
}

export interface ResourcesProps {
  className: string,
  resources: Resource[]
}