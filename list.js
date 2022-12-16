
class Node{
    constructor(value=null,nextNode=null){
        this.value=value
        this.next=nextNode
    }
}

class LinkedList{
    constructor(value=null,nextNode=null){
        this.head=value
        this.next=nextNode
    }

    prepend(value){
        const newNode=new Node(value);
        if (this.head){
            const oldNode=new Node(this.head,this.next)
            this.next=oldNode;
        }
        this.head=newNode.value;
    }

    append(value){
        if (this.head===null){
            return this.prepend(value);
        }
        let currentNode=this;
        while(currentNode.next!==null){
            currentNode=currentNode.next;
        }
        currentNode.next=new Node(value);
    }

    size(){
        if (this.head===null){
            return 0
        }
        let count=1;
        let currentNode=this;
        while(currentNode.next!==null){
            currentNode=currentNode.next;
            count+=1;
        }
        return count;
    }
}