class LinkedList {
    constructor(){
        this.nodes = [];
    }

    get size(){
        return this.nodes.length;
    }

    get head() {
        return this.sizze ? this.nodes[0] : null;
    }

    get tail() {
        return this.size ? this.nodes[this.size - 1] : null;
    }

    appendValue(index,value) {
       const prevNode = this.nodes[index-1] || null;
       const nextNode = this.nodes[index] || null;
       const node = {
        value,
        next:nextNode,
       }
       if(prevNode) prevNode.next = node;
       this.nodes.splice(index, 0, node);
    }

    appendFirst(value) {
        this.appendValue(0, value);
    }
    appendLast(value) {
        this.appendValue(this.size, value);
    }

    getAt(index) {
        return this.nodes[index]
    }

}
class Node {
    constructor(value,nextNode) {
        this.value = null;
        this.nextNode = null;
    }
}