import axios, { AxiosResponse } from "axios";

export interface NewsItem {
  id: number;
  newsTag: string;
  newsTitle: string;
  desc: string;
}

interface NewsResponse {
  NewsData: NewsItem[];
}

export interface FetchNewsResult {
  data?: NewsItem[];
  error?: string;
}

export async function fetchNews() {
  try {
    const data = await axios.get<NewsResponse>(
      "http://localhost:3000/NewsData"
    );
    if (data.status === 200) {
      return data?.data;
    } else {
      return "Request was successful, but data could not be retrieved.";
    }
  } catch (error) {
    return `Error while fetching news: ${error.message}`;
  }
}
