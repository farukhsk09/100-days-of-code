package com.self.app;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.PriorityQueue;
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
            System.out.println("done");
        }
        // Define a ArrayList of Integers and Sort them . 
        //day6();
        //sort using comparator - need to do custom sorting objects with back of a hand 
        //day7();
        //day8();
        //day9();
        int[] arrayvalues = new int[20];
        minheap(arrayvalues);
    }

    public static void minheap(int[] array) {
        //what does a min heap has 
        //available size for the array - n
        //current number of elements for the array - k
        MinHeap min_heap = new MinHeap(11);
        min_heap.insert(1);
        min_heap.insert(9);
        min_heap.insert(15);
        System.out.println(min_heap.toString());
        min_heap.insert(4);
        min_heap.insert(11);
        min_heap.insert(18);
        System.out.println(min_heap.toString());
        System.out.println(min_heap.pop());
        System.out.println(min_heap.toString());

        //minheap stratergy that recursively heapifys from bottom to top
        //add 
        //remove - minimum element 
            // just put top at right bottom and remove bottom ( decrease k) - minheapify
    }

    private static void day9() {
        //create a queue with heterogenous data
        //add priority to the queue using the age filter
        //output the queue items in relevant priority order
        PriorityQueue<User> usersqueue = new PriorityQueue<>();
        usersqueue.add(new User("adam", 21, 1000));
        usersqueue.add(new User("sam", 21, 1450));
        usersqueue.add(new User("ram", 42, 100));
        usersqueue.add(new User("terry", 30, 2000));
        usersqueue.add(new User("yustry", 20, 4000));
        //iterate through queue
        for(User members : usersqueue){
            System.out.println(members.toString());
        }
        System.out.println("polling from queue");
        while(usersqueue.peek()!=null){
            System.out.println(usersqueue.poll().toString());
        }
        //poll() - removes head , and returns null if its empty
        //peek() - checks and returns head and returns null if empty
        //element() - check and returns head but returns exception if empty
        //remove() - removes head but throws exception when its empty
    }

    private static void day8() {
        //in this function - we will explore data regarding the String class 

        String inputString = "PALINDROMExyZZFER is a random Gibberish word";

        //split a string 
        System.out.println(inputString.split(" ")[0]);

        //regex match - check for a string for a match
        System.out.println(inputString.split(" ")[0].matches("(A-Z)xyZZFER"));

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
