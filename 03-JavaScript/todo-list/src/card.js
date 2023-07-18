export class Card {
  constructor(task, dueDate, details, project) {
    this.task = task;
    this.dueDate = dueDate;
    this.details = details;
    this.project = project;
  }
}
function card() {
  const cardEle = document.createElement('div');
  return cardEle;
}
export default card;
