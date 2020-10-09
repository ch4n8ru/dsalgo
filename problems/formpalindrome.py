# https://www.geeksforgeeks.org/find-longest-palindrome-formed-by-removing-or-shuffling-chars-from-string/

def formPalindrome(string):
    countArray = [0]*26
    string = string.lower()

    for ch in string:
        countArray[ord(ch) - 97]+=1
    
    beg = ""
    mid = ""
    end = ""
    i = 0

    while i < len(countArray):
        code = i
        if countArray[i] % 2 != 0:
            mid = chr(code + 97)
            countArray[i]-=1
            i-=1
        else:
            for _ in range(0 , countArray[i] // 2):
                beg += chr(code + 97)
        i+=1
    
    end = beg[::-1]
    sent = beg+mid+end
    print(sent)

formPalindrome('forgeeksskeegfor')

