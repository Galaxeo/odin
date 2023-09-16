class LinkedList {
  constructor() {
    this.lst = [];
  }
  head = null;
  tail = null;
  size = 0;
  append(value) {
    this.size += 1;
    let newNode = new Node();
    newNode.value = value;
    this.lst.push(newNode);

    if (this.head == null) {
      this.head = this.lst[0];
    }
    if (this.tail != null) {
      this.tail.nextNode = newNode;
    }
    this.tail = this.lst[this.lst.length - 1];
  }
  prepend(value) {
    this.size += 1;
    let newNode = new Node();
    newNode.value = value;
    this.lst.unshift(newNode);
    newNode.nextNode = this.head;
    this.head = this.lst[0];
  }
  at(index) {
    return lst[index];
  }
  pop() {
    this.size -= 1;
    this.lst.pop();
    this.tail = this.lst[this.lst.length - 1];
    this.tail.nextNode = null;
  }
  contains(value) {
    for (var i in this.lst) {
      if (this.lst[i].value == value) {
        return true;
      }
    }
    return false;
  }
  find(value) {
    for (var i in this.lst) {
      if (this.lst[i].value == value) {
        return i;
      }
    }
    return null;
  }
  toString() {
    let retLst = [];
    for (var i in this.lst) {
      retLst.push(this.lst[i].value);
    }
    return retLst;
  }
}
class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}
let dog = new LinkedList;
dog.append(1);
dog.append(2);
dog.append(3);
dog.prepend(0);
dog.pop();
console.log(dog);
console.log(dog.contains(4));
console.log(dog.contains(2));
console.log(dog.find(1));
console.log(dog.toString());
