import React from 'react';
import Project from './Project';

function Projects() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 p-4">
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export default Projects;
