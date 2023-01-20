import Node from "./Node.ts";
import TLinkedNode from "./types/TLinkedNode.ts";

export default class LinkedNode extends Node {
  private _prevLinkedNode: TLinkedNode;

  constructor(data: any) {
    super(data);
    this._prevLinkedNode = null;
  }

  set prevLinkedNode(linkedNode) {
    this._prevLinkedNode = linkedNode;
  }

  get prevLinkedNode() {
    return this._prevLinkedNode;
  }
}
