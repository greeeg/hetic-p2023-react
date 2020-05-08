import React from 'react';

export const ChatMessage = ({
  authorName,
  authorPicture,
  timestamp,
  message
}) => (
  <div class="flex items-start mb-4 text-sm">
    <img src={authorPicture} class="w-10 h-10 rounded mr-3" />
    <div class="flex-1 overflow-hidden">
      <div>
        <span class="font-bold">{authorName}</span>
        <span class="text-grey text-xs">{timestamp}</span>
      </div>
      <p
        class="text-black leading-normal"
        dangerouslySetInnerHTML={{ __html: message }}
      />
    </div>
  </div>
);
