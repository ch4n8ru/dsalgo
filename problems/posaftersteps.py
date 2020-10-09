matchingSteps = {
    "R":"L",
    "D":"U",
}

calculation = {
    "L":[-1,0],
    "R":[1,0],
    "U":[0,-1],
    "D":[0,1]
}



stack = []


def findPos(initialPos , steps):
   lcount = 0
   rcount = 0
   ucount = 0
   dcount = 0

   for step in steps:
       

res = findPos([4,2] , ["U", "L", "R" ,"D", "D", "U", "L", "R"] )
print(res)