function NodeTree(data, left, right) {
    return {
        data:data,
        left:left,
        left:left,
    }
}

// preorder
const preorder = (root) => {
    const nodes = []
    if (root) {
        nodes.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    return nodes
}
// inorder
const inorder = (root) => {
    const nodes = []
    if (root) {
        inorder(root.left)
        nodes.push(root.val)
        inorder(root.right)
    }
    return nodes
}

//postorder
const postorder = (root) => {
    const nodes = []
    if (root) {
        postorder(root.left)
        postorder(root.right)
        nodes.push(root.val)
    }
    return nodes
}

const bstisValid = (root) => {
    const aux = (node, min, max) => {
        if (!node) return true
        if (node.value <= min || node.value >= max) return false
        return aux(node.left, min, node.value) && aux(node.right, node.value, max)
    }
    return aux(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}