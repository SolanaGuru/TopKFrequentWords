const PriorityQueue = require('priorityqueuejs');

const topKFrequent = (words, k) => {
    let result = []
    let data = {}
    for (const word of words) {
        if(data[word]) {
            data[word]++;
        } else {
            data[word] = 1;
        }
    }
    const pq = new PriorityQueue((a, b) => a.value - b.value);
    for (const key in data) {
        pq.enq({name: key, value: data[key]})
    }

    for (let i = 0; i < k; i++) {
        result.push(pq.peek().name)
        pq.deq()
    }
    console.log(result)
}

const words =  ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
topKFrequent(words, 4)