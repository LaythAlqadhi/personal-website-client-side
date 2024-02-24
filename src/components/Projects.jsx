import React from 'react';
import Project from './Project';
import odinbookImg from '../assets/odinbook.jpeg';
import messagingAppImg from '../assets/messaging-app.jpeg';
import whereIsWaldoImg from '../assets/where-is-waldo.jpeg';

function Projects() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-4">
      <Project
        title="Odinbook"
        desc="A MERN stack social media platform styled with Tailwind CSS. Users sign in via GitHub, create/share posts, like/comment, and follow others. It includes authentication, home, search, profile, and follow request pages, with immediate input validation."
        viewCode="https://github.com/LaythAlqadhi/odin-book-client-side"
        livePreview="https://odinbook-eight.vercel.app"
        imgSrc={odinbookImg}
      />
      <Project
        title="Messging App"
        desc="A MERN stack messaging platform styled with Tailwind CSS. Users authenticate to access private chat rooms, send/receive messages, and add others by username. It includes authentication, chat, initial, and not found pages, with immediate input validation."
        viewCode="https://github.com/LaythAlqadhi/messaging-app-client-side"
        livePreview="https://messaging-app-three.vercel.app"
        imgSrc={messagingAppImg}
      />
      <Project
        title="Where's Waldo (A Photo Tagging App)"
        desc="A MERN stack web game styled with CSS Modules. Players locate characters in photos, accessing features like a character menu, feedback, and tracking time to complete. It includes home, game, leaderboard, and not found pages, with a modal for recording completion times."
        viewCode="https://github.com/LaythAlqadhi/where-is-waldo-client-side"
        livePreview="https://where-is-waldo-five.vercel.app"
        imgSrc={whereIsWaldoImg}
      />
    </div>
  );
}

export default Projects;
