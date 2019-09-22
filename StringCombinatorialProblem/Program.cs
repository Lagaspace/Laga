using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Laga.GeneticAlgorithm;

namespace Piscosour
{
    class Program
    {
        
        private static int sizePop = 200;
        private static string target = "pneumonoultramicroscopicsilicovolcanoconiosis"; //"piscosour";

        private static Population pop = new Population(sizePop);
        static void Main(string[] args)
        {
            Console.ReadLine();
            GenrChromosome genrChromosome = new GenrChromosome(target.Length);
            for(int i = 0; i < sizePop; i++)
            {
                Chromosome chr = new Chromosome();
                chr.chromosome =  genrChromosome.CharChromosome(97, 122).ToList();
                pop.Add(chr);
            }

            int count = 0;
            float mutRate = 0.0015f;
            Chromosome best;
            do
            {
                Evaluation();

                best = pop.Higher();
                PrintData(best, count, mutRate, pop.FitnessAverage());

                Population nPop = NaturalSelection.RouletteWheelNonPolinomicMin(pop, 60);
                Population cPop = Crossover.RandomPointCrossover(nPop, sizePop);
                pop = Mutation.CharMutation(cPop, mutRate, 97, 122);

                count++;
            } while (best.Fitness < 0.999);

            Console.ReadLine();
        }

        //we evaluate the whole population at once.
        private static void Evaluation()
        {
            int c = 0;
            int le = target.Length;
            for (int i = 0; i < sizePop; i++)
            {
                c = 0;
                Chromosome chromosome = pop.GetChromosome(i);

                for (int j = 0; j < chromosome.Count; ++j)
                {
                    if (chromosome.GetDNA(j) == target[j])
                        c++;
                }
                chromosome.Fitness = (float)c / (float)target.Length;
            }
        }
        private static void PrintData(Chromosome best, int genCount, float mut, float ave)
        {
            Console.SetCursorPosition(0, 1);
            Console.Write(" Best individual: ");
            Console.WriteLine(best.Chrom2String());
            Console.WriteLine(" ");
            Console.WriteLine(" ////////////// GA data");
            Console.WriteLine(" Generation: " + genCount.ToString());
            Console.WriteLine(" Highest fitness: " + Math.Round(best.Fitness, 3).ToString());
            Console.WriteLine(" Average fitness: " + Math.Round(ave, 3).ToString());
            Console.WriteLine(" Mutation Rate: " + mut.ToString());
        }
    }
}
