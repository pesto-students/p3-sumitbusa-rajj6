var isValidBST = function(root) {
    let result = [];
    const inOrder = (node) => {
        if(node!= null){
            inOrder(node.left);
            result.push(node.val);
            inOrder(node.right);
        }
    }
    inOrder(root);
    for(let i =1; i < result.length; i++) {
        if(result[i-1] >= result[i]) return false;
    }
    console.log(result);
    return true;
};
