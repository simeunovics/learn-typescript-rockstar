export interface AbstractNode {
  //   readonly kind: NodeTypes;
  evaluate(): any;
}
export abstract class BinaryNode implements AbstractNode {
  //   abstract kind: NodeTypes;
  abstract evaluate(): any;
  public constructor(
    public readonly lhs: RockStarNode,
    public readonly rhs: RockStarNode
  ) {}
}
export enum NodeTypes {
  AdditionNode,
  MultiplicationNode,
  NumberNode,
  OutputNode,
}

export type RockStarNode = AdditionNode | MultiplicationNode | NumberNode;

export class AdditionNode extends BinaryNode {
  //   kind = NodeTypes.AdditionNode;
  public evaluate = () => this.lhs.evaluate() + this.rhs.evaluate();
}
export class MultiplicationNode extends BinaryNode {
  //   kind = NodeTypes.MultiplicationNode;
  public evaluate = () => this.lhs.evaluate() * this.rhs.evaluate();
}
export class NumberNode implements AbstractNode {
  //   kind: NodeTypes.NumberNode;
  public constructor(public readonly value: number) {}
  public evaluate = (): number => this.value;
}
export class OutputNode implements AbstractNode {
  //   kind: NodeTypes.OutputNode;
  public constructor(public readonly expr: RockStarNode) {}
  public evaluate = (): void => console.log(this.expr.evaluate());
}
