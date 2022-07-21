import { NextPage } from 'next';
import Link from 'next/link';
import ProjectItem, { ProjectItemProps } from '../components/ProjectItem/ProjectItem';

import styles from '../styles/projects.module.css';

const projectItems: ProjectItemProps[] = [
  {
    title: "sshmngr",
    text: "A minimalistic SSH connection manager that lets you save and connect to your server via the CLI.",
    image: "/sshmngr.png",
    url: "https://github.com/Aceto1/sshmngr"
  },
  {
    title: "Demos",
    text: "Some demo implementations of data structures and algorithms with visualizations.",
    image: "/demos.png",
    url: "https://demo.aceto.dev/"
  }
];

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
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