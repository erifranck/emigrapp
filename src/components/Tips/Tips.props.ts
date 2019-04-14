export interface Tip {
    id: string,
    title: string,
    createdAt: string,
    updatedAt: string,
    description?: string,
    thumbnail?: string,
    body: string,
    url: string,
}

export interface TipsProps {
    className: string,
    tips: Tip[]
}