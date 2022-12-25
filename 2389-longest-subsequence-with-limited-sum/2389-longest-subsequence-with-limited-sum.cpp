class Solution
{
public:
    vector<int> answerQueries(vector<int> &nums, vector<int> &queries)
    {
        vector<int> answer;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < queries.size(); i++)
        {
            int count = 0;
            int sum = 0;
            for (int j = 0; j < nums.size(); j++)
            {
                if (sum + nums[j] <= queries[i])
                {
                    sum += nums[j];
                    count++;
                }
                else
                {
                    break;
                }
            }
            answer.push_back(count);
        }
        return answer;
    }
};