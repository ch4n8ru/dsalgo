# 1.Print all possible subsets of the given array whose sum equal to given N




result = []

def subsetSum(index , target , availableNumbers , usedNumbers , result ):
    if(target == 0):
        # print(usedNumbers)
        result.append(list(usedNumbers))
        return
    if(target < 0):
        return
    
    for i in range(index , len(availableNumbers)):
        candidate = availableNumbers[i]

        usedNumbers.append(candidate)

        subsetSum(i + 1 , target - candidate , availableNumbers , usedNumbers , result)

        usedNumbers.pop()

def solve(array , target):
    subsetSum(0 , target , array , [] ,result)
    return result

res = solve([1,1, 2, 3, 4, 5] , 10)

print(res)
    