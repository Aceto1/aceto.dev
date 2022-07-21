import { NextPage } from 'next';
import Link from 'next/link';
import ResumeItem from '../components/ResumeItem/ResumeItem';

import ResumeDataItem from '../types/ResumeDataItem';

import styles from '../styles/Resume.module.css';

const workItems: ResumeDataItem[] = [
  {
    company: 'GreenGate AG',
    title: 'Student Developer',
    startingDate: new Date(2022, 4),
    active: true,
  },
  {
    company: 'Ibykus AG',
    title: 'Student Developer',
    startingDate: new Date(2020, 10),
    endingDate: new Date(2022, 3),
  },
  {
    company: 'Ibykus AG',
    title: 'Fullstack Developer',
    startingDate: new Date(2019, 8),
    endingDate: new Date(2020, 10),
  },
  {
    company: 'GreenGate AG',
    title: 'Computer Science Apprentice',
    startingDate: new Date(2017, 8),
    endingDate: new Date(2019, 8)
  }
]

const educationItems: ResumeDataItem[] = [
  {
    company: 'Friedrich-Schiller-University Jena',
    title: 'B.Sc. Computer Science (est. late 2023)',
    startingDate: new Date(2020, 10),
    active: true,
  },
  {
    company: 'Bodelschwingh-Gymnasium Herchen',
    title: 'Abitur',
    startingDate: new Date(2016, 6),
  }
]

const skills = [
  'React, Redux, Next.js',
  'TypeScript',
  '.NET (Core) and WPF',
  'Java (EE)',
  'CI/CD',
  'Automated Testing',
  'Docker',
  'Linux and Windows operating systems'
]

const mapToResumeItem = (resumeDataItem: ResumeDataItem) => {
  return <ResumeItem
    key={resumeDataItem.company + resumeDataItem.startingDate}
    active={resumeDataItem.active}
    company={resumeDataItem.company}
    title={resumeDataItem.title}
    startingDate={resumeDataItem.startingDate}
    endingDate={resumeDataItem.endingDate} />
}

const Resume: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>Resume</h2>

      <p>This is just a short summary of where I&apos;ve worked and what I&apos;ve done. More can be found on my different social profiles linked above. If you have any questions or are interested in working with me, please <Link href='mailto:lucas@aceto.dev'><a>contact me</a></Link>! 💬</p>

      <div className={styles.resumeContainer}>
        <div>
          <h3>Work</h3>

          {workItems.map((resumeDataItem: ResumeDataItem) => mapToResumeItem(resumeDataItem))}

        </div>
        <div>
          <h3>Education</h3>

          {educationItems.map((resumeDataItem: ResumeDataItem) => mapToResumeItem(resumeDataItem))}
        </div>
        <div>
          <h3>Skills</h3>

          <ul>
            {skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;