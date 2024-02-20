import React from 'react';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-64 h-40 bg-sky-500 border border-neutral-900 dark:border-neutral-100"></div>
      <div className="w-64 h-40 flex flex-col gap-4">
        <div>
          <h1 className="font-bold">Consectetur adipiscing elit</h1>
          <p className="hyphens-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link className="button">View code</Link>
          <Link className="button">Live preview</Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
