import React from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatFooter } from './ChatFooter';
import { ChatMessage } from './ChatMessage';

export const Chat = () => (
  <div class="flex-1 flex flex-col bg-white overflow-hidden">
    <ChatHeader
      title="#general"
      description="Chit-chattin' about ugly HTML and mixing of concerns."
    />

    <div class="px-6 py-4 flex-1 overflow-y-scroll">
      <ChatMessage
        authorName="Steve Schoger"
        authorPicture="https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg"
        timestamp="11:46"
        message="The slack from the other side."
      />

      <ChatMessage
        authorName="Adam Wathan"
        authorPicture="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg"
        timestamp="12:45"
        message="How are we supposed to control the marquee space without an utilit for it?"
      />

      <ChatMessage
        authorName="David Hemphill"
        authorPicture="https://pbs.twimg.com/profile_images/1182792316093906944/lEBD5qmF_400x400.jpg"
        timestamp="12:46"
        message={`<a href="#" class="inline-block bg-blue-lightest text-blue no-underline">@Adam Wathan</a> the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!`}
      />

      <ChatMessage
        authorName="Steve Schoger"
        authorPicture="https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg"
        timestamp="11:46"
        message="The slack from the other side."
      />

      <ChatMessage
        authorName="Adam Wathan"
        authorPicture="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg"
        timestamp="12:45"
        message="How are we supposed to control the marquee space without an utilit for it?"
      />

      <ChatMessage
        authorName="David Hemphill"
        authorPicture="https://pbs.twimg.com/profile_images/1182792316093906944/lEBD5qmF_400x400.jpg"
        timestamp="12:46"
        message={`<a href="#" class="inline-block bg-blue-lightest text-blue no-underline">@Adam Wathan</a> the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!`}
      />

      <ChatMessage
        authorName="Steve Schoger"
        authorPicture="https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg"
        timestamp="11:46"
        message="The slack from the other side."
      />

      <ChatMessage
        authorName="Adam Wathan"
        authorPicture="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg"
        timestamp="12:45"
        message="How are we supposed to control the marquee space without an utilit for it?"
      />

      <ChatMessage
        authorName="David Hemphill"
        authorPicture="https://pbs.twimg.com/profile_images/1182792316093906944/lEBD5qmF_400x400.jpg"
        timestamp="12:46"
        message={`<a href="#" class="inline-block bg-blue-lightest text-blue no-underline">@Adam Wathan</a> the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!`}
      />

      <ChatMessage
        authorName="Steve Schoger"
        authorPicture="https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg"
        timestamp="11:46"
        message="The slack from the other side."
      />

      <ChatMessage
        authorName="Adam Wathan"
        authorPicture="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg"
        timestamp="12:45"
        message="How are we supposed to control the marquee space without an utilit for it?"
      />

      <ChatMessage
        authorName="David Hemphill"
        authorPicture="https://pbs.twimg.com/profile_images/1182792316093906944/lEBD5qmF_400x400.jpg"
        timestamp="12:46"
        message={`<a href="#" class="inline-block bg-blue-lightest text-blue no-underline">@Adam Wathan</a> the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!`}
      />

      <ChatMessage
        authorName="Steve Schoger"
        authorPicture="https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg"
        timestamp="11:46"
        message="The slack from the other side."
      />

      <ChatMessage
        authorName="Adam Wathan"
        authorPicture="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg"
        timestamp="12:45"
        message="How are we supposed to control the marquee space without an utilit for it?"
      />

      <ChatMessage
        authorName="David Hemphill"
        authorPicture="https://pbs.twimg.com/profile_images/1182792316093906944/lEBD5qmF_400x400.jpg"
        timestamp="12:46"
        message={`<a href="#" class="inline-block bg-blue-lightest text-blue no-underline">@Adam Wathan</a> the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!`}
      />
    </div>

    <ChatFooter placeholder="Message #general" />
  </div>
);
