package com.self.app;

import java.util.Arrays;

public class MinHeap {

    int[] elements;
    int size;
    int currSize;

    public MinHeap(int size){
        this.elements = new int[size+1]; // 1 indexed
        this.elements[0]=-1;
        this.size=size;
        this.currSize=0;
    }

    //insert item into the heap
    public void insert(int item){
        if(currSize == size){
            throw new IndexOutOfBoundsException("heap is full");
        }
        elements[currSize+1] = item;
        currSize++;
        heapify(currSize);
    }

    private int parent(int currentIndex) {
        return currentIndex/2;
    }
    private int left(int i) {
        return 2*i;
    }
    private int right(int i) {
        return 2*i+1;
    }

    private void heapify(int currentIndex) {
        //get parent 
        int parentIndex = parent(currentIndex);
        if(parentIndex  < 1){
            return;
        }

        if(this.elements[currentIndex] < this.elements[parentIndex]){
            swap(currentIndex,parentIndex);
            heapify(parentIndex);
        }

    }

    private void swap(int currentIndex, int parentIndex) {
        int temp = this.elements[currentIndex];
        this.elements[currentIndex]=this.elements[parentIndex];
        this.elements[parentIndex]=temp;
        return;
    }

    //pop - remove the least from the top and rearrange 
    public int pop(){
        if(currSize == 0){
            throw new IndexOutOfBoundsException("heap is empty");
        }

        int returnValue = this.elements[1];
        swap(1,currSize);
        currSize--;
        bottomDownHeapify(1);
        return returnValue;
    }

    private void bottomDownHeapify(int i) {
        if(left(i)<=currSize && this.elements[left(i)] < this.elements[i]){
            if(right(i)<=currSize){
                if(this.elements[left(i)] < this.elements[right(i)]){
                    swap(left(i),i);
                    bottomDownHeapify(left(i));
                }else{
                    swap(right(i), i);
                    bottomDownHeapify(right(i));
                }
            } 
        }else if(right(i) <=currSize && this.elements[right(i)]<this.elements[i]){
            swap(right(i), i);
            bottomDownHeapify(right(i));
        }
    }

    @Override
    public String toString() {
        return "MinHeap [currSize=" + currSize + ", elements=" + Arrays.toString(Arrays.copyOfRange(elements, 1, currSize+1)) + ", size=" + size + "]";
    }

    

    
    
}
