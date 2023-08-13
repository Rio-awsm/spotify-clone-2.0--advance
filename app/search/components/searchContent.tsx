"use client";

import { Song } from "@/types";
import MediaItem from "@/components/MediaItem";

interface SearchContentProps {
  songs: Song[];
}

const searchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div
        className="flex 
            flex-col 
            gap-y-2 
            w-full 
            px-6 
            text-neutral-400"
      >
        No Songs Found 😕
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song: Song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={song} />
          </div>
          {/*add like btn*/ }
        </div>
      ))}
    </div>
  );
};

export default searchContent;
