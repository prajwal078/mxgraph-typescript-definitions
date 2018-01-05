declare class mxGraphLayout {
}

declare class mxStackLayout extends mxGraphLayout {

}

declare class mxCompactTreeLayout extends mxGraphLayout {
  constructor(graph, horizontal?, invert?);
  execute(parent);
}

declare class mxHierarchicalLayout extends mxGraphLayout {
  forceConstant: number;
  constructor(graph, orientation?, deterministic?);
  execute(parent, roots?);
}