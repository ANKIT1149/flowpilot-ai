export interface VideoPreviewInfo {
  title: string;
  channel: string;
  channel_url?: string | null;
  webpage_url?: string | null;
  verified: boolean;
  views: number;
  upload_date: string;
  timestamp: number
}

export interface HeroPreviewProps {
  data?: VideoPreviewInfo;
}