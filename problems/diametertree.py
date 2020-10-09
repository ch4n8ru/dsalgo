

res = 0
def height(head):
    if head == null:
        return 0

    lh = height(head.left)
    rh = height(head.right)

    res = Math.max(lh + 1, rh + 1 , res)

    return 1 + Math.max(lh , rh)