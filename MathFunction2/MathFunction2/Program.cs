using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Laga.GeneticAlgorithm;
using Laga.Numbers;

namespace MathFunction2
{
    class Program
    {
        private static int popSize = 100;
        private static Population<double> pop = new Population<double>(popSize);
        static void Main(string[] args)
        {
            float mutRate = 0.025f;
            double best;
            int c = 1;
            double target = 0.93749;

            for (int i = 0; i < popSize; i++)
                pop.Add(new Chromosome<double>(Rand.RandomNumbers(2, 0.0, 1.0)));

            do
            {
                Evaluation();
                best = pop.Higher().Fitness;

                PrintData(pop.Higher(), c, mutRate, pop.FitnessAverage(), target);


                Population<double> matPool = NaturalSelection<double>.RouletteWheelNonPolinomicMin(pop, 30);
                pop = Crossover<double>.SinglePointCrossover(matPool, popSize, 1);
                pop = Mutation.Number(pop, mutRate, 0.0, 1.00);

                c++;
            } while (best <= target);

            Console.ReadLine();
        }

        private static void Evaluation()
        {
            double x, y;
            foreach (Chromosome<double> cr in pop)
            {
                x = cr.GetDNA(0);
                y = cr.GetDNA(1);
                cr.Fitness = 15 * x * y * (1 - x) * (1 - y) * Math.Sin(Math.PI * x) * Math.Sin(Math.PI * y);
            }
        }

        private static void PrintData(Chromosome<double> best, int genCount, float mut, double ave, double th)
        {
            Console.SetCursorPosition(0, 1);
            Console.Write(" Best individual: ");
            Console.WriteLine($" Param X: {best.GetDNA(0).ToString()}, Param Y: {best.GetDNA(1).ToString()}");
            Console.WriteLine(" ");
            Console.WriteLine(" ////////////// GA data");
            Console.WriteLine(" Generation: " + genCount.ToString());
            Console.WriteLine(" Target: " + th.ToString());
            Console.WriteLine(" Highest fitness: " + best.Fitness.ToString());
            Console.WriteLine(" Average fitness: " + ave.ToString());
            Console.WriteLine($" Difference: {best.Fitness - th} ");
            Console.WriteLine(" Mutation Rate: " + mut.ToString());
        }
    }
}
