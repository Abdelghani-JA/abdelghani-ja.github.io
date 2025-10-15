import { NavBar } from "./components/NavBar";
import htmlUrl from "./assets/html.svg";
import cssUrl from "./assets/css.svg";
import jsUrl from "./assets/javascript.svg";
import tsUrl from "./assets/typescript.svg";
import reactUrl from "./assets/react.svg";
import nodejsUrl from "./assets/nodejs.svg";
import twUrl from "./assets/tailwindcss.svg";
import emailUrl from "./assets/email.svg";
import githubUrl from "./assets/github.svg";
import linkedinUrl from "./assets/linkedin.svg";
import { Button } from "./components/ui/button";
import ProjectCard from "./components/ProjectCard";
import { profileData } from "./data/profileData";
import { Fragment } from "react";

function App() {
  return (
    <>
      <NavBar />
      <main className="flex max-w-[50rem] flex-col gap-4 p-4">
        <div>
          <h1 className="text-3xl font-heading">{profileData.name}</h1>
          <h1 className="text-2xl font-normal">{profileData.role}</h1>
          <div className="flex gap-4 py-2">
            <a href={profileData.email} className="relative">
              <img
                src={emailUrl}
                alt="Email Logo"
                width="25px"
                height="auto"
                className=""
              />
              <div className="absolute top-0 left-0 h-full w-full"></div>
            </a>
            <a href={profileData.githubUrl} className="relative">
              <img
                src={githubUrl}
                alt="Github Logo"
                width="25px"
                height="auto"
                className=""
              />
              <div className="absolute top-0 left-0 h-full w-full"></div>
            </a>
            <a href={profileData.linkedInUrl} className="relative">
              <img
                src={linkedinUrl}
                alt="LinkedIn Logo"
                width="25px"
                height="auto"
                className=""
              />
              <div className="absolute top-0 left-0 h-full w-full"></div>
            </a>
          </div>
          <p className="my-4 text-lg">
            {profileData.roleSummary.map((part, index, parts) => {
              return (
                <Fragment key={part}>
                  {part}
                  {parts.length !== index + 1 && <br />}
                </Fragment>
              );
            })}
          </p>
          <Button className="px-0 py-0">
            <a href={profileData.resumeUrl} className="px-4 py-2">
              My resume 🡭
            </a>
          </Button>
        </div>
        <div>
          <h2 className="my-4 text-2xl font-medium">Web Technologies I used</h2>
          <div className="flex flex-wrap items-center justify-evenly gap-[16px]">
            <div className="relative">
              <img src={htmlUrl} alt="HTML Logo" width="40px" height="auto" />
              <div className="absolute top-0 left-0 h-full w-full"></div>
            </div>
            <div className="relative">
              <img src={cssUrl} alt="CSS Logo" width="40px" height="auto" />
              <div className="absolute top-0 left-0 h-full w-full"></div>
            </div>
            <div className="relative">
              <img
                src={jsUrl}
                alt="JavaScript Logo"
                width="40px"
                height="auto"
              />
              <div className="absolute top-0 left-0 h-full w-full"></div>
            </div>
            <div className="relative">
              <img
                src={tsUrl}
                alt="TypeScript Logo"
                width="40px"
                height="auto"
              />
              <div className="absolute top-0 left-0 h-full w-full"></div>
            </div>
            <div className="relative">
              <img src={reactUrl} alt="React Logo" width="40px" height="auto" />
              <div className="absolute top-0 left-0 h-full w-full"></div>
            </div>
            <div className="relative">
              <img
                src={nodejsUrl}
                alt="NodeJS Logo"
                width="40px"
                height="auto"
              />
              <div className="absolute top-0 left-0 h-full w-full"></div>
            </div>
            <div className="relative">
              <img src={twUrl} alt="NodeJS Logo" width="40px" height={"auto"} />
              <div className="absolute top-0 left-0 h-full w-full"></div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="my-4 text-2xl font-medium">My Projects</h2>
          <div className="flex flex-wrap justify-evenly gap-4">
            {profileData.projects.map((project) => (
              <ProjectCard
                key={project.key}
                type={project.type}
                title={project.title}
                description={project.description}
                moreUrl={project.moreUrl}
              />
            ))}
          </div>
        </div>
      </main>
      <footer className="flex w-full justify-center bg-main p-2">
        <p>{profileData.name} 2025.</p>
      </footer>
    </>
  );
}

export default App;
