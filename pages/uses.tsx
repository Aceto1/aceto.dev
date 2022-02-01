import { NextPage } from "next";

import styles from '../styles/Uses.module.css';

const Uses: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>This is a list of the hard- and software I use for those interested.</p>
      <h2>Software</h2>
      <ul>
        <li>
          Editors
          <ul>
            <li>VS Code for most things</li>
            <li>Visual Studio for .NET development</li>
            <li><a href="https://marktext.app/">MarkText</a> for markdown</li>
          </ul>
        </li>
        <li>Sourcetree as my git GUI client</li>
        <li>Firefox as my browser with Chrome for testing</li>
        <li>Microsoft Powertoys to make my life easier</li>
      </ul>
      <h2>Hardware</h2>
      <ul>
        <li>
          Monitors
          <ul>
            <li>Samsung Odyssey G5 27&quot;</li>
            <li>Philips 242V8A 24&quot; - vertically</li>
          </ul>
          <li>Keyboard: Keychron K6 ISO, Tealios V2 L&F spring-wapped with 60g SPRiT springs</li>
          <li>Mouse: Roccat Kone EMP</li>
          <li>
            Headphones
            <ul>
              <li>AKG K240 for daily use</li>
              <li>Bose NC700 for on the go</li>
            </ul>
          </li>
          <li>Microphone: Auna 900B</li>
        </li>
      </ul>
    </div>
  );
}

export default Uses;