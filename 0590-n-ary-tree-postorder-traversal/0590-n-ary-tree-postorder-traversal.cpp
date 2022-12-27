class Solution {
public:
    void traverse(Node*root,vector<int> &post){
        if(root==NULL)  return;
        for(auto x:root->children){
            traverse(x,post);
        }
        post.push_back(root->val);
    }
    vector<int> postorder(Node* root) {
        vector<int> post;
        traverse(root,post);
        return post;
    }
};