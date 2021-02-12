export interface RockStarNode {
  kind: string;
}

export class AdditionNode implements RockStarNode {
  kind: "addition";
  public constructor(
    public readonly lsh: RockStarNode,
    public readonly rhs: RockStarNode
  ) {}
}
export class MultiplicationNode implements RockStarNode {
  kind: "multiplication";
  public constructor(
    public readonly lsh: RockStarNode,
    public readonly rhs: RockStarNode
  ) {}
}

export class NumberNode implements RockStarNode {
  kind: "number";
  public constructor(public readonly value: number) {}
}
