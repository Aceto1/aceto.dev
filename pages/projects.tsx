import { NextPage } from 'next';
import Link from 'next/link';
import ProjectItem, { ProjectItemProps } from '../components/ProjectItem/ProjectItem';

import styles from '../styles/Projects.module.css';

const projectItems: ProjectItemProps[] = [
  {
    title: "sshmngr",
    text: "A minimalistic SSH connection manager that lets you save and connect to your servers via the CLI.",
    image: "/sshmngr.png",
    url: "https://github.com/Aceto1/sshmngr"
  },
  {
    title: "Demos",
    text: "Some demo implementations of data structures and algorithms with visualizations.",
    image: "/demos.png",
    url: "https://demo.aceto.dev/"
  },
  {
    title: "awesome-nord",
    text: "A repository containing a collection of nord-theme related things I maintain.",
    image: "/awesome-nord.png",
    url: "https://github.com/Aceto1/awesome-nord"
  }
];

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <p>Here are some of my projects I have done (or am actively working on)! They are all available on my <Link href='https://github.com/Aceto1/'>GitHub page</Link>. You can also just click them if you&apos;d like to find out more!</p>
      {projectItems.map((projectItem, i) => <ProjectItem
        key={i}
        image={projectItem.image}
        text={projectItem.text}
        title={projectItem.title}
        url={projectItem.url}
      />)}
    </div>
  )
}

export default Projects;