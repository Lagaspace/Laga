using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Laga.GeneticAlgorithm;

namespace mathFunctionOptimization
{
    class Program
    {
        // fields... //
        private static int popSize = 10; //population size...
        private static int chromeSize = 15; //chromosome size....
        private static int[] result; //to store the results of the evaluation.
        private static char[][] charPop;

        static void Main(string[] args)
        {

            GenrPopulation genPop = new GenrPopulation(popSize);
            charPop = genPop.BinaryPopulationChr(chromeSize);

            RankingSort sr = new RankingSort();
            NaturalSelection roulette = new NaturalSelection();
            Crossover cross = new Crossover();
            Mutation mut = new Mutation(0.01f);

            result = new int[popSize];
            int eval = 0;

            char[][] selChro;
            char[][] sonPop;
            char[][] mutPop;

            //GA loop
            do
            {
                for (int i = 0; i < popSize; i++)
                    result[i] = Fitness(charPop[i]);

                sr.BidirectionalBubbleSort(charPop, result, false);
                eval = result[0];

                Console.WriteLine(eval.ToString());

                selChro = roulette.RouletteWheel(charPop, result, popSize);
                sonPop = cross.SinglePointCrossover(selChro, 0.2f, 7);
                mutPop = mut.BinaryCharMutation(charPop, 0.02f);
                charPop = CreateTheNewPopulation(selChro, mutPop);

            } while (eval != 0);
            Console.ReadLine();
        }

        private static char[][] CreateTheNewPopulation(char[][] theOldPop, char[][] sonPop)
        {
            Random rnd = new Random();
            int index;
            int scope = theOldPop.Length;
            for (int i = 0; i < sonPop.Length; ++i)
            {
                index = rnd.Next(scope);//rnd.nextInt(scope);

                theOldPop[index] = new char[sonPop[i].Length];
                Array.Copy(sonPop[i], 0, theOldPop[index], 0, sonPop[i].Length);
            }
            return theOldPop;
        }

        private static int Fitness(char[] arrChr)
        {
            char[] firstNum = LagaTools.ExtractDNA(arrChr, 0, 5);
            char[] secondNum = LagaTools.ExtractDNA(arrChr, 5, 5);
            char[] thirdNum = LagaTools.ExtractDNA(arrChr, 10, 5);

            int a = LagaTools.BinaryChromosomeToInteger(firstNum);
            int b = LagaTools.BinaryChromosomeToInteger(secondNum);
            int c = LagaTools.BinaryChromosomeToInteger(thirdNum);

            int res = 2 * a + 3 * b + 4 * c;
            return Math.Abs(res - 60); //we want to go closer to 0 here.
        }

    }
}
