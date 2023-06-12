var maxSlidingWindow = function (a, wLen) {
    let n = a.length,
        pq = new PriorityQueue({
            compare: (a, b) => b[1] - a[1] || b[0] - a[0],
        }),
        ans = [];

    for (let R = 0; R < n; R++) {
        pq.enqueue([R, a[R]]);
        if (R < wLen - 1) continue;

        while (pq.front()[0] <= R - wLen) {
            pq.dequeue();
        }
        ans.push(pq.front()[1]);
    }
    return ans;
};