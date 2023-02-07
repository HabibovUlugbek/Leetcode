class Solution {
    public int totalFruit(int[] tree) {
        HashMap<Integer, Integer> count = new HashMap<Integer, Integer>();
        int firstIdx = 0;
        int totalMax = 0;

        for (int i = 0; i < tree.length; i++) {
            count.put(tree[i], count.getOrDefault(tree[i], 0) + 1);
            while (count.size() > 2) {
                count.put(tree[firstIdx], count.get(tree[firstIdx]) - 1);
                if (count.get(tree[firstIdx]) == 0) {
                    count.remove(tree[firstIdx]);
                }
                firstIdx++;
            }
            totalMax = Math.max(totalMax, i - firstIdx + 1);
        }
        return totalMax;
    }
}