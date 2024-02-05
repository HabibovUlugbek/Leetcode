func firstUniqChar(s string) int {
	var counts = make([]int, 26)
	
	for i := 0; i < len(s); i++ {
		counts[s[i] - 'a']++
	}


    for i := 0; i < len(s); i++ {
		if counts[s[i] - 'a'] == 1 {
			return i
		}
	}

	return -1
}