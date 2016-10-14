/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var newHead = new ListNode(0);
	var p = newHead;
	var sum = 0;
	while(l1 !== null || l2 !== null) {
		if(l1 !== null) {
			sum += l1.val;
			l1 = l1.next;
		}
		if(l2 !== null) {
			sum += l2.val;
			l2 = l2.next;
		}
		p.next = new ListNode(sum % 10);
		p = p.next;
		sum = parseInt(sum / 10); 
	}
	if(sum === 1) {
		p.next = new ListNode(1);
	}
	return newHead.next;
};