export interface PostDetailData {
    id: number;
    user_id: number;
    location: string;
    address: string;
    created_date: string,
    bedroom: number,
    bathroom: number,
    floor: string,
    square:  string,
    layout: string,
    about_home: string,
    about_rommates: string,
    about_renters: string,
    description: string;
    price: number;
    image: string[];
    rental_period: string,
    amenteties: [],
    age: string,
    gender: string
  }
export interface PostListData {
    data: PostDetailData[]
}