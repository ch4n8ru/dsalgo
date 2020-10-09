matrix =[[1,1,0,1],[1,0,1,1],[0,0,0,0]]
M = 3
N = 4




def markOne(m ,n):
    if(m < M and n < N):
        matrix[m][n] = 1
        

        
for row in range(M):
    for col in range(N):
        if(matrix[row][col] == 0):
            markOne(row - 1, col )
            markOne(row + 1, col)
            markOne(row, col - 1)
            markOne(row, col + 1)
print(matrix)

        
