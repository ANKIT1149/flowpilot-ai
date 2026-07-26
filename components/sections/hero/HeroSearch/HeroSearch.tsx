/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { GlassPannel } from '@/components/ui/Glass/GlassPannel';
import { HeroSearchInput } from './HeroSearchInputs';
import { HeroSearchButton } from './HeroSearchButtons';
import { HeroPreview } from '@/components/hero_preview';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { VideoPreview } from '@/interface/FetchURLData';

export function HeroSearch() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('');
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [showData, setShowData] = useState<VideoPreview>({
    id: '',
    title: '',
    thumbnail: '',
    duration: 0,
    channel: '',
    channel_url: '',
    timestamp: 12,
    upload_date: '',
    verified: false,
    views: 12345,
    webpage_url: '',
  });

  const SetUrlValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    console.log(url);
  };

  const disableButton = loading || url.trim() === '';

  const FetchURLData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log(process.env.BACKEND_URL!);

    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/url_validate`,
        { url }
      );

      if (response.status === 200) {
        const data = response.data;
        setShowData(data);

        setLoading(false);
        setShowPreview(true);
        toast.success('Youtube data fetch Successfully', {
          position: 'top-left',
        });
      }

      setLoading(false);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.detail ?? 'Something went wrong');
        setLoading(false);
        setShowPreview(false);
        setError(error.message);
        console.log(error);
      }
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl">
      <GlassPannel
        className="
          group
          relative
          overflow-visible
          rounded-4xl
          transition-all
          duration-500
        "
      >
        <div
          className="
            flex
            min-h-23
            items-center
            gap-4
            p-4
          "
        >
          <HeroSearchInput value={url} SetUrlValue={SetUrlValue} />

          <HeroSearchButton
            FetchURLData={FetchURLData}
            loading={loading}
            disableButton={disableButton}
          />
        </div>
      </GlassPannel>

      {showPreview ? <HeroPreview showData={showData} /> : ''}
    </div>
  );
}
