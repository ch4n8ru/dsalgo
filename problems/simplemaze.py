# 30.Given a matrix NxN, you are initially in the 0, 0 position. 
# The matrix is filled with ones and zeros. 
# Value “one” represents the path is available, while “zero” represents the wall. 
# You need to find the can you able to reach the (N-1)x(N-1) index in the matrix.
#  You can move only along the right and down directions if there’s “one” available.
# Input:
# 5 //N value
# 1 0 1 0 0
# 1 1 1 1 1
# 0 0 0 1 0
# 1 0 1 1 1
# 0 1 1 0 1
# Output:
# Yes



def solveMaze(r , c , targetrow , targetcolumn , grid , path , isPath):
    if(r > targetrow or c > targetcolumn): 
        return False
    if(grid[r][c] != 1): 
        return False
    if(r == targetrow and c == targetcolumn):
        # print('Yes')
        return True
    
    isPath = solveMaze(r+1 , c ,  targetrow , targetcolumn , grid , path , isPath) or solveMaze(r , c + 1 ,  targetrow , targetcolumn , grid ,path , isPath)

    if(isPath):
        tempPath = [r , c]
        path.append(list(tempPath))

    return path



N = 5
grid =[
[1 ,0 ,1 ,0 ,0],
[1, 1, 1, 1, 1],
[1, 0, 1, 0, 0],
[1, 0, 0, 0, 1],
[0, 1, 1, 1, 1]
]
def driver():
    path = []
    res = solveMaze(0 , 0 , N - 1 , N - 1 , grid , path , False)
    print(res)

driver()

