export default interface ResumeDataItem {
  company: string;
  title: string;
  startingDate: Date;
  endingDate?: Date;
  active?: boolean;
}