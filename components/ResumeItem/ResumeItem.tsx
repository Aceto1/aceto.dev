import { FC } from "react";

import styles from './ResumeItem.module.css';

export interface ResumeItem {
  title: string;
  company: string;
  active?: boolean;
  startingDate: Date;
  endingDate?: Date;
}

const ResumeItem: FC<ResumeItem> = (props) => {
  const cssClasses = [
    styles.container,
    props.active ? styles.active : ''
  ]

  const startingDateString = `${props.startingDate.getFullYear()}-${props.startingDate.getMonth().toString().padStart(2, '0')}`

  const endingDateString = `${props.endingDate?.getFullYear()}-${props.endingDate?.getMonth().toString().padStart(2, '0')}`

  let dateString = ``;

  if (props.active)
    dateString = `From ${startingDateString} until now`;
  else if ((props.active == null || !props.active) && props.endingDate != null)
    dateString = `From ${startingDateString} until ${endingDateString}`
  else
    dateString = startingDateString;

  return (
    <div className={cssClasses.join(' ')}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.company}>{props.company}</p>
      <p className={styles.dates}>{dateString}</p>
    </div>
  );
}

export default ResumeItem;