export interface AbstractNode {
  readonly kind: NodeTypes;
  evaluate(): any;
}
export abstract class BinaryNode implements AbstractNode {
  abstract kind: NodeTypes;
  abstract evaluate(): any;
  public constructor(
    public readonly lhs: RockStarNode,
    public readonly rhs: RockStarNode
  ) {}
}
export enum NodeTypes {
  Addition,
  Multiplication,
  Number,
}

export type RockStarNode = AdditionNode | MultiplicationNode | NumberNode;

export class AdditionNode extends BinaryNode {
  kind = NodeTypes.Addition;
  public evaluate = () => this.lhs.evaluate() + this.rhs.evaluate();
}
export class MultiplicationNode extends BinaryNode {
  kind = NodeTypes.Multiplication;
  public evaluate = () => this.lhs.evaluate() * this.rhs.evaluate();
}
export class NumberNode implements AbstractNode {
  kind: NodeTypes.Number;
  public constructor(public readonly value: number) {}
  public evaluate = (): number => this.value;
}
