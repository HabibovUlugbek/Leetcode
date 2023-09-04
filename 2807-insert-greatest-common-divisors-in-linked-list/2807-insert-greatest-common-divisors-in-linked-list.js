var gcd = function(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}
var insertGreatestCommonDivisors = function(head) {
    const ans = head;
    let l = head;
    
    while (l && l.next) {
        l.next = new ListNode(gcd(l.val, l.next.val), l.next);
        l = l.next.next;
    }
        
    return ans;
};