# algorithms-4th-edition

Reading notes on [Algorithms 4th Edition](https://algs4.cs.princeton.edu/home/)

Implementing it's algorithms in TypeScript

## Algorithms In This Repo

### Union Find

- [Quick Find](https://github.com/Vyse12138/algorithms-4th-edition/tree/main/src/algorithms/unionFind/quickFind.ts)
- [Quick Union](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/unionFind/quickUnion.ts)
- [Weighted Quick Union](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/unionFind/weightQuickUnion.ts)
- [Weighted Quick Union With Path Compression](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/unionFind/weightedQuickUnionWithPathCompression.ts)

### Sort

- [Selection Sort](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/sort/selection.ts)
- [Insertion Sort](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/sort/insertion.ts)
- [Shell Sort](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/sort/shell.ts)
- [Merge Sort (top down)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/sort/mergeTopDown.ts)
- [Merge Sort (bottom up)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/sort/mergeBottomUp.ts)
- [Quick Sort](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/sort/quick.ts)
- [Quick Sort (3 ways)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/sort/quick3Way.ts)
- [Priority Queue](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/sort/priorityQueue.ts)
- [Indexed Priority Queue](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/sort/indexedPriorityQueue.ts)

### Search

- [Sequential Symbol Table](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/search/sequentialSearchST.ts)
- [Binary Search Symbol Table](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/search/binarySearchST.ts)
- [Binary Search Tree](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/search/binarySearchTree.ts)
- [Red Black Binary Search Tree](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/search/redBlackBST.ts)
- [Hash Table (linear probing)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/search/hashTable.ts)

### Graph

- [Undirected Graph](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/graph/graph.ts)

  - [DFS (search)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/graph/depthFirstSearch.ts)
  - [DFS (path)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/graph/depthFirstPath.ts)
  - [BFS (path)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/graph/breadthFirstPath.ts)
  - [Connected Components](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/graph/connectedComponents.ts)

- [Directed Graph](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/diGraph/diGraph.ts)

  - [DFS (search)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/diGraph/diDepthFirstSearch.ts)
  - [DFS (order)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/diGraph/diDepthFirstOrder.ts)
  - [Cycle](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/diGraph/diCycle.ts)
  - [Topological Order](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/diGraph/diTopologicalOrder.ts)
  - [Strongly Connected Components](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/diGraph/diSCC.ts)

- [Undirected Edge-Weighted Graph](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/edgeWeightedGraph/edgeWeightedGraph.ts)

  - [Minimal Spanning Tree (Prim algorithm)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/edgeWeightedGraph/lazyPrimMST.ts)
  - [Minimal Spanning Tree (Kruskal algorithm)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/edgeWeightedGraph/kruskalMST.ts)

- [Directed Edge-Weighted Graph](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/edgeWeightedDiGraph/edgeWeightedDiGraph.ts)

  - [Shortest Path](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/edgeWeightedDiGraph/shortestPath.ts)
  - [Shortest Path (dijkstra algorithm)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/edgeWeightedDiGraph/dijkstraSP.ts)
  - [Shortest Path (acyclic algorithm)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/graph/edgeWeightedDiGraph/acyclicSP.ts)

### String

- [Radix Sort](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/string/radixSort)

  - [Radix Sort (LSD)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/string/radixSort/radixSortLSD.ts)
  - [Radix Sort (MSD)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/string/radixSort/radixSortMSD.ts)

- [Search](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/string/search)

  - [Search (Burtal)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/string/search/search.ts)
  - [Search (KMP algorithm)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/string/search/searchKMP.ts)
  - [Search (BM algorithm)](https://github.com/Vyse12138/algorithms-4th-edition/blob/main/src/algorithms/string/search/searchBM.ts)

## Try It Yourself

There are speed testing for each algorithm above, u can check it out by clone the repo then navigate to it and:

1. Install dependencies: `yarn`

2. Start local server: `yarn dev`

3. Go to `http://localhost:3000/`

4. Check out console
