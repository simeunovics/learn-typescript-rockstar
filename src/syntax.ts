export interface AbstractNode {
  evaluate(): iThing;
}
interface iThing {
  result: any;
  action?: "quit";
}
export abstract class BinaryNode implements AbstractNode {
  public abstract evaluate(): iThing;
  public constructor(
    public readonly lhs: RockStarNode,
    public readonly rhs: RockStarNode
  ) {}
}

export type RockStarNode =
  | AdditionNode
  | MultiplicationNode
  | NumberNode
  | OutputNode
  | QuitNode;

export class AdditionNode extends BinaryNode {
  public evaluate(): iThing {
    return { result: this.lhs.evaluate().result + this.rhs.evaluate().result };
  }
}
export class MultiplicationNode extends BinaryNode {
  public evaluate(): iThing {
    return { result: this.lhs.evaluate().result * this.rhs.evaluate().result };
  }
}
export class NumberNode implements AbstractNode {
  public constructor(public readonly value: number) {}
  public evaluate(): iThing {
    return { result: this.value };
  }
}
export class OutputNode implements AbstractNode {
  public constructor(public readonly expr: RockStarNode) {}
  public evaluate(): iThing {
    const { result } = this.expr.evaluate();
    console.log(result);
    return { result };
  }
}
export class QuitNode implements AbstractNode {
  public constructor(public readonly expr: RockStarNode) {}
  public evaluate(): iThing {
    return { action: "quit", result: null };
  }
}
