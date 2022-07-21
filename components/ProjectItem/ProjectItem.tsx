import Image from "next/image";
import { FC } from "react";

import styles from './ProjectItem.module.css';

export interface ProjectItemProps {
  title: string,
  text: string,
  image: string,
  url: string
}

const ProjectItem: FC<ProjectItemProps> = (props) => {
  return (
    <a href={props.url}>
      <div className={styles.container}>
        <Image src={props.image} height={300} width={325} layout="fixed" alt="sshmngr cli interface" />
        <div className={styles.textContainer}>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectItem;