package com.self.app;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        // Day 6 - Today's task is create the best sorting algorithm implementation from scratch . 
        // How to define a array of fixed length in Java and test its size restriction
        int[] array = new int[10];
        array[0]=1;
        System.out.println(array.length);
        try{
            for(int i=0;i<11;i++){
                array[i]=-1;
            }
        }catch(Exception e){
            //expect array index out of bounds exception
            System.out.printf("Exception is of Class %s",e.getClass());
        }
        // Define a ArrayList of Integers and Sort them . 
        //day6();
        //sort using comparator - need to do custom sorting objects with back of a hand 
        //day7();
    }

    private static void day7() {
        ArrayList<Student> arrayOfObjects = new ArrayList<>();
        // Sort a array of classmates 
        createManyStudents(arrayOfObjects);
        System.out.println(arrayOfObjects.toString());

    }

    private static void createManyStudents(ArrayList<Student> arrayOfObjects) {
        for(int i=0;i<45;i++){
            Student stu = new Student.StudentBuilder(i, "xysd", "11", "11").fatherName("fatherName").motherName("motherName").build();
            arrayOfObjects.add(stu);
        }
        
    }

    private static void day6() {
        final Random rand = new Random();
        int[] items = new int[450];
        List<Integer> sortItems= new ArrayList<>();
        // write a random int array generator
        for(int j=0;j<6;j++){
            items[j]=rand.nextInt(10000000);
            sortItems.add(items[j]);
            System.out.println(items[j]);
        }
        Collections.sort(sortItems);
        quickSort(items,0,5);
        printall(items);
        System.out.println(sortItems.toString());
    }

    private static void printall(int[] items) {
        for(int elem  : items){
            if(elem ==0 ){
                break;
            }
            System.out.print(elem+" ");
        }
        System.out.println("");
        return;
    }

    private static void quickSort(int[] items,int start,int end) {
        if(end-start <= 0)
            return;
        //chossing end as the pivot everytime
        int pivot = end;
        int partitIndex = partition(items,start,end-1,pivot);
        quickSort(items, start, partitIndex-1);
        quickSort(items, partitIndex+1, end);
    }

    private static int partition(int[] items, int start, int end,int pivot) {
        int left= start;
        int right = end;
        while(true){
            while(items[left] < items[pivot]){
                left++;
            }
            while(right>0 && items[right] >items[pivot]){
                right--;
            }
            if(left >=right){
                break;
            }
            else{
                System.out.println(left+" "+right);
                int temp = items[left];
                items[left]=items[right];
                items[right]=temp;
            }
            printall(items);
        }
        //swap pivot and the partition index
        int temp=items[left];
        items[left]=items[pivot];
        items[pivot]=temp;
        return left;
    }

}
