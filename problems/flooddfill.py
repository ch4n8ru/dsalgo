

def floodFillUtil(x , y , prevC , newC , screen):
    if(x >= M or x < 0 or y >= N or y < 0):
        return
    if(screen[x][y] == newC or screen[x][y] != prevC):
        return
    
    screen[x][y] = newC

    floodFillUtil(x-1 , y , prevC , newC , screen)
    floodFillUtil(x , y-1 , prevC , newC , screen)
    floodFillUtil(x-1 , y-1 , prevC , newC , screen)
    floodFillUtil(x+1 , y+1 , prevC , newC , screen)


def floodFill(screen , x , y , newC ):
    prevC = screen[x][y]
    floodFillUtil(x , y , prevC , newC , screen)



screen = [[1, 1, 1, 1, 1, 1, 1, 1],  
          [1, 1, 1, 1, 1, 1, 0, 0],  
          [1, 0, 0, 1, 1, 0, 1, 1],  
          [1, 2, 2, 2, 2, 0, 1, 0],  
          [1, 1, 1, 2, 2, 0, 1, 0],  
          [1, 1, 1, 2, 2, 2, 2, 0],  
          [1, 1, 1, 1, 1, 2, 1, 1],  
          [1, 1, 1, 1, 1, 2, 2, 1]] 
  
r = 4
c = 4
newC = 3

M = 8

N = 8
floodFill(screen, N-1, N-1, newC) 
  
print ("Updated screen after call to floodFill:") 
for i in range(M): 
    for j in range(N): 
        print(screen[i][j], end = ' ') 
    print() 
  