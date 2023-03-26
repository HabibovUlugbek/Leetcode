class Solution {
public:
    TreeNode* createBinaryTree(vector<vector<int>>& nums) {
        unordered_map<int,TreeNode*> hash;
        unordered_set<int> rootcomp;
        for(int i=0;i<nums.size();i++){
            if(!hash.count(nums[i][0])) hash[nums[i][0]]=new TreeNode(nums[i][0]);
            if(!hash.count(nums[i][1])) hash[nums[i][1]]=new TreeNode(nums[i][1]);
            rootcomp.insert(nums[i][1]);
            TreeNode* parent=hash[nums[i][0]]; TreeNode* child=hash[nums[i][1]];
            nums[i][2]==1?parent->left=child:parent->right=child;
        }
        for(int i=0;i<nums.size();i++) if(!rootcomp.count(nums[i][0])) return hash[nums[i][0]];
        return nullptr;
    }
};