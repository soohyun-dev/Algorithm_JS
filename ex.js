// prettier-ignore
{var fs=require('fs');var filePath=process.platform==='linux'?'/dev/stdin':'./input';var stdin=fs.readFileSync(filePath).toString().trim().split('\n').map(t=>t.trim());var input=(()=>{var t=0;return()=>stdin[t++]})();var SI=()=>input();var NI=()=>parseInt(input());var SAI=(t=' ')=>input().split(t);var NAI=(t=' ')=>input().split(t).map(Number);var CA=(t,r=null)=>Array(t).fill(r);var CAA=(t,r,i=null)=>Array.from(Array(t),()=>Array(r).fill(i));var CAAA=(t,r,i,e=null)=>Array.from(Array(t),()=>Array.from(Array(r),()=>Array(i).fill(e)));var P=console.log;var lowerBound=(t,r)=>{let i=0;let e=t.length;let s;while(i<e){s=Math.floor((i+e)/2);if(t[s]<r){i=s+1}else{e=s}}return e};class QueueNode{constructor(t){this.item=t;this.next=null}}class Queue{constructor(){this._size=0;this._front=null;this._rear=null}push(t){const r=new QueueNode(t);if(this.empty()){this._front=this._rear=r;this._size++;return}this._rear.next=r;this._rear=r;this._size++}pop(){if(this.empty()){return-1}if(this.size()===1){this._size--;const t=this._front.item;this._front=this._rear=null;return t}this._size--;const t=this._front.item;this._front=this._front.next;return t}size(){return this._size}empty(){return!this._size?1:0}front(){if(this.empty()){return-1}return this._front.item}back(){if(this.empty()){return-1}return this._rear.item}}class Heap{constructor(t=(t,r)=>t<r){this.heap=[null];this.compare=t}insert(t){this.heap.push(t);let r=this.heap.length-1;while(r!==1&&this.compare(t,this.heap[Math.floor(r/2)])){this.heap[r]=this.heap[Math.floor(r/2)];r=Math.floor(r/2)}this.heap[r]=t}delete(){const t=this.heap[1],r=this.heap.pop(),i=this.heap.length-1;let e=1,s=2;while(s<=i){if(s<i&&this.compare(this.heap[s+1],this.heap[s])){s+=1}if(this.compare(r,this.heap[s])){break}this.heap[e]=this.heap[s];e=s;s*=2}if(this.heap.length>1){this.heap[e]=r}return t}empty(){return this.heap.length===1}}class PriorityQueue{constructor(t){this.heap=new Heap(t)}empty(){return this.heap.empty()}peek(){return this.heap.heap[1]}push(t){this.heap.insert(t)}pop(){if(!this.empty())return this.heap.delete();else return null}}class DisjointSet{constructor(t){this.parent=Array(t).fill(null).map((t,r)=>r);this.rank=Array(t+1).fill(1)}find(t){if(this.parent[t]===t){return this.parent[t]}return this.parent[t]=this.find(this.parent[t])}merge(t,r){t=this.find(t);r=this.find(r);if(t===r){return}if(this.rank[t]>this.rank[r]){[t,r]=[r,t]}this.parent[t]=r;if(this.rank[t]===this.rank[r]){this.rank[r]++}}}}

const [N, M] = NAI();

const adj = CAA(N + 1, 0);

CA(M).forEach((_) => {
  const [u, v] = NAI();

  adj[u].push(v);
  adj[v].push(u);
});

const dfs = (cur, visited, connect) => {
  for (let i = 0; i < adj[cur].length; i++) {
    const next = adj[cur][i];

    if (visited[next]) {
      continue;
    }

    visited[next] = true;
    connect.push(next);
    dfs(next, visited, connect);
  }
};

const solve = () => {
  let ans = 0;

  const visited = CA(N + 1, false);

  const connect = [];

  for (let cur = 1; cur <= N; cur++) {
    const tmp = [cur];

    if (visited[cur]) {
      continue;
    }

    visited[cur] = true;
    dfs(cur, visited, tmp);
    connect.push(tmp);
  }

  ans += connect.length - 1;

  for (let i = 0; i < connect.length; i++) {
    const tmp = new Set();

    for (let j = 0; j < connect[i].length; j++) {
      let u = connect[i][j];
      let v;

      for (let k = 0; k < adj[u].length; k++) {
        v = adj[u][k];

        const key = u > v ? `${v} ${u}` : `${u} ${v}`;

        tmp.add(key);
      }
    }

    const edgeCnt = tmp.size;
    const need = connect[i].length - 1;

    ans += edgeCnt - need;
  }

  return ans;
};

P(solve());
