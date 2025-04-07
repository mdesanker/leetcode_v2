// the difference in length of leg A and leg B is removed by moving pA to leg B and vice versa
var getIntersectionNode = function (headA, headB) {
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    if (!pA) pA = headB;
    else pA = pA.next;
    if (!pB) pB = headA;
    else pB = pB.next;
  }
  return pA;
};

// Time: O(n)
// Space: O(1)
