import LinkedNode from "./LinkedNode.ts";
import TLinkedNode from "./types/TLinkedNode.ts";

export default class Stack {
  private _top: TLinkedNode;
  private _bottom: TLinkedNode;

  constructor() {
    this._top = null;
    this._bottom = null;
  }

  set top(linkedNode: TLinkedNode) {
    this._top = linkedNode;
  }

  get top() {
    return this._top;
  }

  set bottom(linkedNode: TLinkedNode) {
    this._bottom = linkedNode;
  }

  get bottom() {
    return this._bottom;
  }
  push(value: number) {
    const linkedNode = new LinkedNode(value);
    if (this.top != null) {
      linkedNode.prevLinkedNode = this.top;
    } else {
      this.bottom = linkedNode;
    }
    this.top = linkedNode;
  }

  pop() {
    const top = this.top;
    if (this.top != this.bottom && this.top?.prevLinkedNode != null) {
      this.top = this.top.prevLinkedNode;
    } else {
      this.bottom = null;
      this.top = null;
    }
    return top;
  }
}
