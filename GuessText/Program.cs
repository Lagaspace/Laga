using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Laga.GeneticAlgorithm;

namespace GuessText
{
    class Program
    {
        private static char[] arrChFitness = { 'p', 'i', 's', 'c', 'o', 's', 'o', 'u', 'r' };
        private static int[] result; //to store the results of the evaluation.
        private static char[][] charpop;

        static void Main(string[] args)
        {
            //ga parameters...
            int popSize = 100;
            int sizeChro = 9; //length of the chromosome
            int cant = 12; //number of chromosome selected in the natural selection...
            float crossPercentPop = 0.4f;
            int cutter = 4;
            float percentMutPop = 0.002f;
            float percentMutChro = 0.001f;

            result = new int[popSize];
            string target = new string(arrChFitness);
            string m = "";

            //genetic operators...
            GenrPopulation pop = new GenrPopulation(popSize);
            RankingSort rs = new RankingSort();
            NaturalSelection ns = new NaturalSelection();
            Crossover cs = new Crossover();
            Mutation mut = new Mutation(percentMutPop);
            Replacement re = new Replacement();

            char[][] selChro;
            char[][] sonPop;
            char[][] mutPop;
            char[][] newPop;
            char[][] repPop;

            charpop = pop.CharPopulation(sizeChro, 97, 122);
            int i = 0;

            do
            {
                //optimization...
                Evaluation();

                rs.BidirectionalBubbleSort(charpop, result, true); //sort

                m = new string(charpop[0]);
                Console.WriteLine(m + " fit: " + result[0].ToString());//print the best... 

                selChro = ns.Elitism(charpop, cant);

                sonPop = cs.SinglePointCrossover(selChro, crossPercentPop, cutter); //crossover

                mutPop = mut.CharMutation(sonPop, percentMutChro, 97, 122); //mutation

                newPop = JointTwoPopulations(selChro, mutPop);
                charpop = re.CharRandomReplace(newPop, popSize, 97, 122); //replacement
                i++;

            } while (!m.Equals(target));

            Console.WriteLine(i.ToString());
            Console.ReadLine();
        }

        //joint populations...
        private static char[][] JointTwoPopulations(char[][] parents, char[][] sonMutated)
        {
            int sizeLength = parents.Length + sonMutated.Length;
            char[][] replacePop = new char[sizeLength][];
            int c = parents.Length;

            for (int i = 0; i < parents.Length; i++)
            {
                replacePop[i] = new char[parents[i].Length];
                Array.Copy(parents[i], replacePop[i], parents[i].Length);
            }
            for (int j = 0; j < sonMutated.Length; j++)
            {
                replacePop[c] = new char[sonMutated[j].Length];
                Array.Copy(sonMutated[j], replacePop[c], sonMutated[j].Length);
                c++;
            }

            return replacePop;
        }

        //Evaluation...
        private static void Evaluation()
        {
            int c = 0;
            result = new int[charpop.Length];

            for (int i = 0; i < charpop.Length; ++i)
            {
                for (int j = 0; j < charpop[i].Length; ++j)
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
}
