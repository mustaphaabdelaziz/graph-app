
export default [
 {
  info: {
   id: 1,
   name: "Graph 1",
   description: "this is the graph 1"
  },
  nodes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  relations: [{ id: 1, right: 1, left: 2 }, { id: 2, right: 1, left: 4 }, { id: 3, left: 2, right: 3 }, { id: 4, left: 4, right: 3 }, { id: 5, left: 1, right: 3 }]
 },
 {
  info: {
   id: 2,
   name: "Graph 2",
   description: "this is the graph 2"
  },
  nodes: [{ id: 1 }, { id: 2 }, { id: 3 }],
  relations: [{ id: 1, right: 1, left: 3 }, { id: 2, right: 2, left: 3 }, { id: 3, left: 3, right: 1 }]
 },
 {
  info: {
   id: 3,
   name: "Graph 3",
   description: "this is the graph 3"
  },
  nodes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  relations: [{ id: 1, right: 1, left: 2 }, { id: 2, right: 3, left: 4 }, { id: 3, left: 5, right: 3 }]
 },
 {
  info: {
   id: 4,
   name: "Graph 4",
   description: "this is the graph 4"
  },
  nodes: [{ id: 1 }, { id: 2 }],
  relations: [{ id: 1, right: 1, left: 2 }]
 },

]
