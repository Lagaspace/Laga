package laga;
import processing.core.*;

public class A_MathParabola {
	static PApplet parent;
	
	// fields... //
	private static int popSize = 10; //population size...
	private static int chromeSize = 4; //chromosome size....
	private static float[] result; //to store the results of the evaluation.
	private static char[][] charPop;

	char[][] selChro;
	char[][] sonPop; 
	char[][] mutPop;
	
	public static void main(String[] args) {
	GenrPopulation genPop = new GenrPopulation(parent);
	charPop = genPop.BinaryPopulationChr(popSize, chromeSize); //the best way to face the problem
		 
	RankingSort rs = new RankingSort(parent);
	NaturalSelection roulette = new NaturalSelection(parent);  //Initialise the NaturalSelection class.
	Crossover cross = new Crossover(parent);  //Initialise the Crossover class.
	Mutation mut = new Mutation(parent, 0.01f);//Initialise the Mutation class.

	//main Loop.
	result = new float[popSize];
	float eval = 0;
		 
	char[][] selChro;
	char[][] sonPop; 
	char[][] mutPop;

	do{
		 for(int i = 0 ; i < popSize; i++)
		 {
			 result[i] = Evaluation(charPop[i]);
		 }
		 	
		 rs.BidirectionalBubbleSort(charPop, result, true);

		 eval = result[0]; //as soon as we got the evaluation
		 PrintData(charPop[0], eval); //and the population sorted, print!
			
		 selChro = roulette.Elitism(charPop, 5);
		 sonPop = cross.SinglePointCrossover(selChro, 0.2f, 3);
		 mutPop = mut.BinaryCharMutation(sonPop, 0.02f);
		 charPop = ReplacementPop(selChro, sonPop, mutPop, popSize);
		 
	 }while(eval != 9);
	
	}
	
	private static char[][] ReplacementPop(char[][] selIndividuals, char[][] sonPop, char[][] mutPop, int sizePop)
	{
		char[][]replacement = new char[sizePop][];
		char[] tempChromosome;
		int count = 0;
		for (int i = 0; i < mutPop.length; ++i)
		{
			tempChromosome = new char[mutPop[i].length];
			tempChromosome = mutPop[i];
			replacement[count] = tempChromosome;
			count++;
		}
		
		for (int i = 0; i < selIndividuals.length; ++i)
		{
			tempChromosome = new char[selIndividuals[i].length];
			tempChromosome = selIndividuals[i];
			replacement[count] = tempChromosome;
			count++;
		}
		
		for (int i = 0; i < sonPop.length; ++i)
		{
			tempChromosome = new char[sonPop[i].length];
			tempChromosome = sonPop[i];
			replacement[count] = tempChromosome;
			count++;
		}
		
		if(count < sizePop)
		{
			for (int i = count; i < sizePop; ++i){
				tempChromosome = new char[mutPop[0].length];
				tempChromosome = mutPop[0];
				replacement[i] = tempChromosome;
			}
		}
		
		
	  return replacement;
	}
	
	private static void PrintData(char[] arrCh, float e){
		
		String f = String.valueOf(arrCh);
		int x  = Integer.parseInt(f, 2);

		//Maximise f(x) = –x2 + 4x + 5
		float res = (float)(-Math.pow(x, 2) + 4*x + 5);
		
		String dta = "-Math.pow(" + x + ",2) + 4*" + x + " + 5 = " + res; 
		System.out.println(dta);
	}
	
	private static float Evaluation(char[] arrCh){
		
		String f = String.valueOf(arrCh);
		int x  = Integer.parseInt(f, 2);

		//Maximise f(x) = –x2 + 4x + 5
		return (float)(-Math.pow(x, 2) + 4*x + 5);
	}

}
