// Given a Boolean matrix mat[M][N] of size M X N, modify it such that if a matrix cell mat[i][j] is 1 then make its adjacent cells as 0

#include <iostream>
using namespace std;

#define r 3 
#define c 4 

int main(){


    bool grid[r][c] = { {1, 0, 0, 1}, 
                       {0, 0, 1, 0}, 
                       {0, 0, 0, 0}}; 

    for(int i = 0; i<r; i++ ){
        for(int j = 0; j<c; j++ ){
            cout<<"Entry for "<< i<< j;
            cin>>grid[i][j];        }
    }

    
    for(int i = 0; i<r; i++ ){
        for(int j = 0; j<c; j++ ){
            cout << grid[i][j]<<" ";
        }
        cout<<endl;
    }
}