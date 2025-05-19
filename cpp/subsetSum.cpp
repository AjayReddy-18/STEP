#include <iostream>
#include <vector>

using namespace std;

void findSubsetsWithSumHelper(const vector<int>& nums, int target, int index, vector<int>& current, vector<vector<int>>& result) {
    if (target == 0) {
        result.push_back(current);
        return;
    }
    
    if (index == nums.size() || target < 0) {
        return;
    }
    
    current.push_back(nums[index]);
    findSubsetsWithSumHelper(nums, target - nums[index], index + 1, current, result);
    
    current.pop_back();
    
    findSubsetsWithSumHelper(nums, target, index + 1, current, result);
}

vector<vector<int>> findSubsetsWithSum(const vector<int>& nums, int target) {
    vector<vector<int>> result;
    vector<int> current;
    findSubsetsWithSumHelper(nums, target, 0, current, result);
    return result;
}

int main() {
    vector<int> nums = {2, 4, 6, 10};
    int target = 16;
    
    vector<vector<int>> subsets = findSubsetsWithSum(nums, target);
    
    cout << "Subsets with sum " << target << " are:" << endl;
    for (const auto& subset : subsets) {
        cout << "[ ";
        for (int num : subset) {
            cout << num << " ";
        }
        cout << "]" << endl;
    }
    
    return 0;
}
