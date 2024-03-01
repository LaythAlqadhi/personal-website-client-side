import React from 'react';
import Skill from './Skill';
import HtmlIcon from './icons/Html';
import CssIcon from './icons/Css';
import JavascriptIcon from './icons/Javascript';
import ReactJsIcon from './icons/ReactJs';
import CssModulesIcon from './icons/CssModules';
import TailwindCssIcon from './icons/TailwindCss';
import NodeJsIcon from './icons/NodeJs';
import ExpressJsIcon from './icons/ExpressJs';
import MongoDbIcon from './icons/MongoDb';
import MongooseIcon from './icons/Mongoose';
import PugIcon from './icons/Pug';
import JestIcon from './icons/Jest';
import VitestIcon from './icons/Vitest';
import IllustratorIcon from './icons/Illustrator';
import PhotoshopIcon from './icons/Photoshop';
import PostmanIcon from './icons/Postman';
import WebpackIcon from './icons/Webpack';
import GitIcon from './icons/Git';
import GithubIcon from './icons/Github';
import EslintIcon from './icons/Eslint';
import ViteIcon from './icons/Vite';
import NpmIcon from './icons/Npm';
import FigmaIcon from './icons/Figma';
import TestingLibraryIcon from './icons/TestingLibrary';

function Skills() {
  return (
    <div className="m-auto flex w-full flex-col items-center justify-center gap-4 p-4">
      <h2 className="text-primary self-start">Frontend</h2>
      <ul className="flex w-full list-none flex-wrap items-center justify-center gap-4 border border-dotted border-neutral-900 p-4 dark:border-neutral-100">
        <Skill name="HTML">
          <HtmlIcon />
        </Skill>
        <Skill name="CSS">
          <CssIcon />
        </Skill>
        <Skill name="Javascript">
          <JavascriptIcon />
        </Skill>
        <Skill name="React">
          <ReactJsIcon />
        </Skill>
        <Skill name="CSS Modules">
          <CssModulesIcon className="stroke-neutral-900 dark:stroke-neutral-100" />
        </Skill>
        <Skill name="Tailwind CSS">
          <TailwindCssIcon />
        </Skill>
      </ul>
      <h2 className="text-primary self-start">Backend & database</h2>
      <ul className="flex w-full list-none flex-wrap items-center justify-center gap-4 border border-dotted border-neutral-900 p-4 dark:border-neutral-100">
        <Skill name="Node.js">
          <NodeJsIcon />
        </Skill>
        <Skill name="Express.js">
          <ExpressJsIcon />
        </Skill>
        <Skill name="Javascript">
          <JavascriptIcon />
        </Skill>
        <Skill name="MongoDB">
          <MongoDbIcon />
        </Skill>
        <Skill name="Mongoose">
          <MongooseIcon />
        </Skill>
        <Skill name="Pug/Jade">
          <PugIcon />
        </Skill>
      </ul>
      <h2 className="text-primary self-start">Testing</h2>
      <ul className="flex w-full list-none flex-wrap items-center justify-center gap-4 border border-dotted border-neutral-900 p-4 dark:border-neutral-100">
        <Skill name="Jest">
          <JestIcon />
        </Skill>
        <Skill name="Vitest">
          <VitestIcon />
        </Skill>
        <Skill name="Testing Library">
          <TestingLibraryIcon />
        </Skill>
        <Skill name="Postman">
          <PostmanIcon />
        </Skill>
      </ul>
      <h2 className="text-primary self-start">Development tools</h2>
      <ul className="flex w-full list-none flex-wrap items-center justify-center gap-4 border border-dotted border-neutral-900 p-4 dark:border-neutral-100">
        <Skill name="Git">
          <GitIcon />
        </Skill>
        <Skill name="GitHub">
          <GithubIcon />
        </Skill>
        <Skill name="NPM">
          <NpmIcon />
        </Skill>
        <Skill name="ESLint">
          <EslintIcon />
        </Skill>
        <Skill name="Webpack">
          <WebpackIcon />
        </Skill>
        <Skill name="Vite">
          <ViteIcon />
        </Skill>
        <Skill name="Photoshop">
          <PhotoshopIcon className="rounded-2xl border border-transparent" />
        </Skill>
        <Skill name="Illustrator">
          <IllustratorIcon className="rounded-2xl border border-transparent" />
        </Skill>
        <Skill name="Figma">
          <FigmaIcon className="rounded-2xl border border-transparent" />
        </Skill>
      </ul>
    </div>
  );
}

export default Skills;
