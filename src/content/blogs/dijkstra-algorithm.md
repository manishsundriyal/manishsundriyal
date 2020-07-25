---
title: Dijkstra's Algorithm
date: "July 23, 2020"
template: "blog"
slug: "dijkstra-algorithm"
tags: ["Dijkstra", "Algorithm", "Graph", "Negative Weight Cycle", "Min-Heap"]
description: 'Dijkstra's Algorithm finds the shortest path from source vertex to all the vertices of the Graph.”.'
media: "a-quick-way-for-hashing-passwords-using-bcrypt-with-nodejs"
---

# Dijkstra's Algorithm

### Problem
Find shortest path form source vertex to all the vertices of the graph.
### About Algorithm
We have to find the shortest path from a starting vertex to all the other vertices, here shortest path means sum of weight of all edges in the path (cost) should be minimum. Dijkstra's Algorithm uses greedy approach to solve this problem. In Dijkstra's algorithm we use Relax operation which performs a check weather going from current vertex to a neighbouring vertex will reduce the path cost of reaching this vertex.
```sh
Relax(u,v,cost[u][v]){
    If(d[v]>d[u]+cost[u][v]){
		d[v]=d[u]+cost[u][v];
    }
}
```
d[v] = distance between source vertex to vertex ‘v’ so far.

d[u] = distance between source vertex to vertex ‘u’ so far.

cost[u][v] = weight of edge (u,v).

This means we are checking weather going to vertex ‘v’ from some vertex ‘u’ will improve the path for reaching vertex ‘v’ or not.

### Algorithm
In dijkstra's algorithm each vertex is will be assigned a number and when algorithm terminates this number is going to be the shortest path from source to that vertex. Let call this number d[u], and for source vertex this number is given value 0 (i.e, d[s]=0) and for all other vertices it is given largest possible value (i.e, d[u]=INT_MAX). We select the vertex ‘u’ with shortest value of d[u] and relax all the edges from that vertex to all those vertices which are not selected yet, in the beginning this vertex will be source vertex. When a vertex ‘u’ is selected the value of d[u] is the shortest path form source to vertex ‘u’. 
```sh
Dijkstra(G,W,S){
	//G is given Graph.
	//W is Weight Matrix of the Graph.
    //S is Source Vertex.
	InitializeVertices(G,S);		//Initialize d[S]=0 and other vertices to INT_MAX
	Q=buildHeap(G);		//returns a Min-Heap containing vertices of graph
	
	While(!Q.empty()){
		u=extractMin(Q);	//returns vertex ‘u’ with minimum d[u] in O(log V)
		//selectedVertices is a set of selected vertices. 
		selectedVertices.add(u); 
		
        for each vertex ‘v’ adjacent to ‘u’
			Relax(u,v,w[u][v]);
    }
}
```

### Example
In the following graph we assign zero to source vertex and infinite (INT_MAX) to all other vertices.

===========

Now, we select the vertex (vertex in red colour) with lowest number (source vertex in the beginning), then relax the outgoing edges from this vertex. After this Relax operation number assigned to some vertices will be changed (Numbers in green colour), this means we get a better path when we reach to them through selected vertex. Again we will select a vertex with lowest number which in not yet selected and perform relax operation on all the outgoing edges that does not reach any vertices which was selected in previous iterations (vertices in green colour). We repeat this step till all the vertices are selected.
 
=================

### Extras
We can't find the shortest path from source vertex to every vertex if:
- Graph is disconnected
- Graph contains negative weight cycle (sum of weight of each edge of the cycle is negative).

Dijkstra's Algorithm can be used on graphs with negative weighted edges but there should be no negative weight cycle. In general we don’t use dijkstra's Algorithm on graphs with negative weight edges because if there are negative weight edges, there could be negative weight cycle(s) in the graph.

### Complexity
Implementing Dijkstra's Algorithm using Min-Heap we get: 
- Time Complexity = O(E log V)
- Space Complexity = O(V)

Where, E = Number of Edges and V = Number of Vertices.
