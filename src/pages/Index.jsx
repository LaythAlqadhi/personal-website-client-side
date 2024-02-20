import React from 'react';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';

function Index() {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Introduction />
      <Projects />
    </div>
  );
}

export default Index;
