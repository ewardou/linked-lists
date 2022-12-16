
class Node{
    constructor(value=null,nextNode=null){
        this.value=value
        this.next=nextNode
    }
}

class LinkedList{
    // constructor(value=null,nextNode=null){
    //     this.head=value
    //     this.next=nextNode
    // }

    prepend(value){
        const newNode=new Node(value);
        if (this.value || this.value===0){
            const oldNode=new Node(this.value,this.next)
            this.next=oldNode;
        } else {
            this.next=null
        }
        this.value=newNode.value;
    }

    append(value){
        if (!this.value && this.value!==0){
            return this.prepend(value);
        }
        let currentNode=this;
        while(currentNode.next!==null){
            currentNode=currentNode.next;
        }
        currentNode.next=new Node(value);
    }

    size(){
        if (!this.value && this.value!==0){
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

    head(){
        return new Node(this.value,this.next);
    }

    tail(){
        let currentNode=this;
        while(currentNode.next!==null){
            currentNode=currentNode.next;
        }
        return currentNode;
    }

    at(index){
        if (index<0){
            throw new Error("Index cannot be less than 0");
        }
        if (index>this.size()-1){
            throw new Error("Requested index is higher than list size");
        }
        let currentNode=this;
        for (let i=0; i<index;i++){
            currentNode=currentNode.next;
        }
        return currentNode;
    }

    pop(){
        if (this.size()===1){
            delete this.value;
            delete this.next;
            return 
        }
        const lastIndex=this.size()-1;
        const previousNode = this.at(lastIndex-1);
        previousNode.next=null;
    }

    contains(value){
        let currentNode=this;
        while (currentNode.next!==null){
            currentNode=currentNode.next;
            if (currentNode.value===value){
                return true;
            }
        }
        return this.value===value;
    }

    find(value){
        if (this.contains(value)===false){
            return null;
        }
        let index=0;
        let currentValue=this.value;
        let currentNode=this;
        while(currentValue!==value){
            currentNode=currentNode.next;
            currentValue=currentNode.value;
            index+=1;
        }
        return index;
    }

    toString(){
        if (this.size()===0) return 
        let string="";
        let currentNode=this;
        while (currentNode.next!==null){
            string+=`(${currentNode.value}) -> `;
            currentNode=currentNode.next;
        }
        return string + `(${currentNode.value}) -> null`
    }

    insertAt(value,index){
        if (index===0) return this.prepend(value);
        let newNode = new Node(value);
        let nodeAtIndex = this.at(index);
        newNode.next=nodeAtIndex;
        let nodeBehindIndex = this.at(index-1);
        nodeBehindIndex.next = newNode;
    }

    removeAt(index){
        if (index===this.size()-1) return this.pop();
        if (index===0){
            let nodeOne=this.at(1);
            this.value=nodeOne.value;
            this.next = nodeOne.next;
            return
        }
        let nodeBehindIndex=this.at(index-1);
        let nodeAfterIndex=this.at(index+1);
        nodeBehindIndex.next=nodeAfterIndex;
    }
}

let testList= new LinkedList();
testList.append(0);
testList.append(1);
testList.append(2);
testList.append(3);