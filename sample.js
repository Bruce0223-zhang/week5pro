class Queue {
    constructor() {
        this.q = [];
    }
// get the current number of elements in the queue
//Getter function
    get length() {
        return this.q.length
    };
//Get all the elements 
    get queue() {
        return this.q;
    }
// Boolean function: returns true if the queue is empty, false otherwise 
    isEmpty() {
        return 0 == this.q.length;
    };
//adds new element to the end of the quue
    enqueue(newItem) {
        this.q.push(newItem)
    };

// pop an item from the queue
    dequeue() {
        if (0 != this.q.length) {
            let c = this.q[0];
            this.q.splice(0, 1);
            return c
        }
    };

    removeAll() {
        this.q = [];
        // return q;
    }

    addAll(newItem) {
        for (let i =0; i <= newItem.length ; i++) {
            this.q.push(newItem[i]);
        };
        return this.q;

    }

    dequeueN(num) {
        if (num <= this.q.length) {
            for (let i = 1; i <= num; i++) {
                this.q.pop();
            }
            return this.q
        

        }
        else {
            console.log("no enough element to be removed");
            
        }

    }

    printQueue () {
        for (let i = 0; i < this.q.length; i++) {
            console.log(i+1 + "->" + this.q[i]);
            
        }
    }


};
// let queue = new Queue();
// queue.enqueue(1);
// queue.removeAll();
// console.log(queue.q);
// queue.addAll([2,3]);
// queue.dequeueN(1);
// queue.printQueue();
// console.log(queue.q);

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.q);
queue.removeAll();
console.log(queue.q);







