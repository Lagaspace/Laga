package laga;
import java.util.Arrays;
import java.util.Random;

import processing.core.*;

public class A_MathFunction {
	static PApplet parent;
	
	// fields... //
	private static int popSize = 10; //population size...
	private static int chromeSize = 15; //chromosome size....
	private static int[] result; //to store the results of the evaluation.
	private static char[][] charPop;
	
	public static void main(String[] args) {
		
	 GenrPopulation genPop = new GenrPopulation(parent);
	 charPop = genPop.BinaryPopulationChr(popSize, chromeSize); //the best way to face the problem
	 
	 RankingSort rs = new RankingSort(parent);
	 NaturalSelection roulette = new NaturalSelection(parent);  //Initialise the NaturalSelection class.
	 Crossover cross = new Crossover(parent);  //Initialise the Crossover class.
	 Mutation mut = new Mutation(parent, 0.01f);//Initialise the Mutation class.

	 //main Loop.
	 result = new int[popSize];
	 int eval = 0;
	 
	char[][] selChro;
	char[][] sonPop; 
	char[][] mutPop;
		
	 do{
		 for(int i = 0 ; i < popSize; i++)
		 {
			 result[i] = Evaluation(charPop[i]);
		 }
		 
		 rs.BidirectionalBubbleSort(charPop, result, false);
		
		 eval = result[0]; //as soon as we got the evaluation
		 PrintDataConsole(charPop[0], eval); //and the population sorted, print!
			
		 selChro = roulette.RouletteWheel(charPop, result, popSize);
		 sonPop = cross.SinglePointCrossover(selChro, 0.2f, 7);
		 mutPop = mut.BinaryCharMutation(sonPop, 0.02f);
		 charPop = CreateTheNewPopulation(selChro, mutPop);
		 
	 }while(eval != 0);
	 
	}//end method
	
	private static char[][] CreateTheNewPopulation(char[][] theOldPop, char[][] sonPop)
{
	Random rnd = new Random();
	int index;
	int scope = theOldPop.length;
	  for (int i = 0; i < sonPop.length; ++i)
	  {
		index = rnd.nextInt(scope);
		
	    theOldPop[index] = new char[sonPop[i].length];
	    System.arraycopy(sonPop[i], 0, theOldPop[index], 0, sonPop[i].length);
	  }
	  return theOldPop;
	}
	
	private static void PrintDataConsole(char[] arrCh, int val){
		
		//first split chromosome convert to String...
		char[] frstNum = Arrays.copyOfRange(arrCh, 0, 5);
		char[] secnNum = Arrays.copyOfRange(arrCh, 5, 10);
		char[] thrdNum = Arrays.copyOfRange(arrCh, 10, 15);
		
		String f = String.valueOf(frstNum);
		String s = String.valueOf(secnNum);
		String t = String.valueOf(thrdNum);
		
		int a  = Integer.parseInt(f, 2);
		int b  = Integer.parseInt(s, 2);
		int c  = Integer.parseInt(t, 2);
		
		int res = 2*a + 3*b + 4*c;
		String dta = "2x" + a + "+ 3x" + b + "+ 4x" + c + "= " + res; 
		System.out.println(dta + "-> fitness :" + val);
	}
	
	private static int Evaluation(char[] arrCh){
		
		//first split chromosome convert to String...
		char[] frstNum = Arrays.copyOfRange(arrCh, 0, 5);
		char[] secnNum = Arrays.copyOfRange(arrCh, 5, 10);
		char[] thrdNum = Arrays.copyOfRange(arrCh, 10, 15);
		
		String f = String.valueOf(frstNum);
		String s = String.valueOf(secnNum);
		String t = String.valueOf(thrdNum);
		
		int a  = Integer.parseInt(f, 2);
		int b  = Integer.parseInt(s, 2);
		int c  = Integer.parseInt(t, 2);
		
		int res = 2*a + 3*b + 4*c;

		return Math.abs(res - 60); //we want to go closer to 0 here.
	}

}
	
