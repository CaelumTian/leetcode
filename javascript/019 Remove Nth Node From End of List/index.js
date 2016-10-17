/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(n <= 0 || !head) {
        return head;
    }
    var p1 = head,
        p2 = head;
    for(var i = 0; i < n; i++) {
        if(!p2) {
            break;
        }
        p2 = p2.next;
    }
    if(i != n) {
        return head;  //n的值大于链表长度
    }
    if (!p2) {
		var temp = head;
		head = head.next;
		return head;
	}
    while(p2.next) {
        p1 = p1.next;
        p2 = p2.next;
    }
    var temp = p1.next;
    p1.next = temp.next;
    return head;
};