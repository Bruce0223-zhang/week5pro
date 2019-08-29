class Queue{
    constructor() {
        this.q = [];
    };

    removeAll() {
        this.q =[];
    };

    addAll(Item) {
        for (let i =0; i < Item.length; i++) {
            this.q.push(Item[i]);
        };

        return this.q;
    };
};

let queue = new Queue;
queue.removeAll();
queue.addAll(1,2,3);
console.log(queue.q);





