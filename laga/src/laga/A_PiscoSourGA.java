package laga;
import processing.core.*;

public class A_PiscoSourGA {
	static PApplet parent;
	
	private static char[] arrChFitness = {'p', 'i', 's', 'c', 'o', '_', 's', 'o', 'u', 'r'}; 
	private static int[] result; //to store the results of the evaluation.
	private static char[][] charpop;
	
	public static void main(String[] args) {

		///// GA parameters /////
		int sizePop = 100; //size of the population
		int sizeChro = 10; //length of the chromosome
		int cant = 12; //number of chromosome selected in the natural selection...
		float crossPercentPop = 0.4f;
		int cutter = 4;
		float percentMutPop = 0.002f;
		float percentMutChro = 0.001f;
		
		result = new int[sizePop];
		String target = new String(arrChFitness);
		String m;
		
		// genetic operators //
		GenrPopulation pop = new GenrPopulation(parent);
		charpop = pop.CharPopulation(sizePop, sizeChro);
		RankingSort bouble = new RankingSort(parent);//Initialise the RankingSort class.
		NaturalSelection elitism = new NaturalSelection(parent);//Initialise the NaturalSelection class.
		Crossover crossSinglePt = new Crossover(parent);//Initialise the Crossover class.
		Mutation MyMutation = new Mutation(parent, percentMutPop);//Initialise the Mutation class.
		Replacement ReplacePop = new Replacement(parent);//Initialise the GenrReplace class.
		
		char[][] selChro;
		char[][] sonPop; 
		char[][] mutPop;
		char[][] newPop;
		char[][] repPop;

		//evolute Loop...
		do {

			evaluation();
			
			bouble.BidirectionalBubbleSort(charpop, result, true);
			m = Convert(charpop[0]); //.toString();
			System.out.println(m);
			
			selChro = elitism.Elitism(charpop, cant);
			sonPop = crossSinglePt.SinglePointCrossover(selChro, crossPercentPop, cutter);
			mutPop = MyMutation.CharMutation(sonPop, percentMutChro);
			
			//we are interested in replace the new population with the best parents and sons recently mutated.
			newPop = JoinTwoPopulations(selChro, mutPop);
			repPop = ReplacePop.CharRandomReplace(newPop, sizePop);
			
			charpop = CreateTheNewPopulation(charpop, repPop);
			
		} while (!m.equals(target));
	}
	
	private static String Convert(char[] arrCh){
		String message = "";
		for(int i = 0; i < arrCh.length; i++){
			message += arrCh[i];
		}
		
		return message;
	}
	
	private static char[][] CreateTheNewPopulation(char[][] theOldPop, char[][] theNewPop)
	{
	  for (int i = 0; i < theNewPop.length; ++i)
	  {
	    theOldPop[i] = new char[theNewPop[i].length];
	    System.arraycopy(theNewPop[i], 0, theOldPop[i], 0, theNewPop[i].length);
	  }
	  return theOldPop;
	}
	
	//two Join populations, interested in that field...
	private static char[][] JoinTwoPopulations(char[][] parents, char[][] sonMutated)
	{
	  int sizelength = parents.length + sonMutated.length;
	  char[][]replacePop = new char[sizelength][];
	  int c = parents.length;

	  for (int i = 0; i < parents.length; ++i)
	  {
	    replacePop[i] = new char[parents[i].length];
	    System.arraycopy(parents[i], 0, replacePop[i], 0, parents[i].length);
	  }
	  
	  for (int j = 0; j < sonMutated.length; ++j)
	  {
	    replacePop[c] = new char[sonMutated[j].length];
	    System.arraycopy(sonMutated[j], 0, replacePop[c], 0, sonMutated[j].length);
	    c++;
	  }
	  return replacePop;
	}
	//Evaluation...
	private static void evaluation()
	{
	  int c = 0;
	  result = new int[charpop.length];

	  for (int i = 0; i < charpop.length; ++i)
	  {
	    for (int j = 0; j < charpop[i].length; ++j)
	    {
	      if (charpop[i][j] == arrChFitness[j])
	      {
	        c++;
	      }
	    }
	    result[i] = c;
	    c = 0;
	  }
	}
}
