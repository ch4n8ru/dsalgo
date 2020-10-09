def patternMatch(sIndex , pIndex , string , pattern):
    if  (sIndex == len(string)) and (pIndex == len(pattern))  : 
        return True

    if (pIndex < len(pattern)) and (sIndex == len(string)):
        for pIdx in range(pIndex , len(pattern)):
            if pattern[pIdx] != "*":
                return False
        return True
    
    if (pIndex == len(pattern)) and (sIndex < len(string)):
        return False

    


    """ Case 1 """

    for pIdx in range(pIndex , len(pattern)):
        if pattern[pIdx] != "*":
            if (string[sIndex] == pattern[pIndex]) or pattern[pIndex] == '?':
                return patternMatch(sIndex + 1 , pIndex + 1 , string , pattern) 
            return False 
        else:
            return patternMatch(sIndex + 1 , pIndex , string , pattern) or patternMatch(sIndex , pIndex + 1 , string , pattern)




def match(string , pattern):
   return patternMatch(0 , 0, string , pattern)

res = match('sugr','s*?a')
print(res)
