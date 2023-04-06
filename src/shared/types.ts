export interface PostDetailData {
    description: string;
    id: number;
    title: string;
    price: number;
    location: string;
    user_id: number;
    image: string[];
    subcategory_id: number;
  }

export interface PostListData {
    data: PostDetailData[]
}