class Solution {
public:
      bool canBeValid(string s, string locked) {
          
        if (s.length() % 2 == 1) 
            return false;
          
        int unlocked = 0, open = 0, closed = 0, unpaired;
        for(int i = 0; i <s.length(); i++) {
            if (locked[i] == '0')
                unlocked++;
            else if (s[i] == '(')
                open++;
            else if (s[i] == ')')
                closed++;
            unpaired = closed-open;
            if (unpaired > unlocked)
                return false;
        }
          
        unlocked = 0, open = 0, closed = 0, unpaired=0;
        for(int i = s.length() - 1; i >= 0; i--) {
            if (locked[i] == '0')
                unlocked++;
            else if (s[i] == '(')
                open++;
            else if (s[i] == ')')
                closed++;
            unpaired = open-closed;
            if (unpaired > unlocked)
                return false;
        }
          
        return true;
    }
};