export interface Story {
    id: string,
    title: string,
    createdAt: string,
    updatedAt: string,
    description?: string,
    thumbnail?: string,
    body: string,
    url: string,
}

export interface StoriesProps {
    className: string,
    stories: Story[]
}