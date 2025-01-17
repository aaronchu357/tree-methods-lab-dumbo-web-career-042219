function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if (currentNode.right) {
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode) {

  if (rootNode.data === newNode.data) {
    return true;
  }

  if (rootNode.data > newNode.data) {
    if (rootNode.left) {
      return findOrAdd(rootNode.left, newNode)
    } else {
      rootNode.left = newNode
    }
  } 

  if (rootNode.data < newNode.data) {
    if (rootNode.right) {
      return findOrAdd(rootNode.right, newNode)
    } else {
      rootNode.right = newNode
    }
  } 
  return 
}

function max(node) {
  if (node.right) {
    return max(node.right)
  } else {
    return node
  }
}

function min(node) {
  if (node.left) {
    return min(node.left)
  } else {
    return node
  }
}