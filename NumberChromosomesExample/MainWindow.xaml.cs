using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Laga.GeneticAlgorithm;
using Laga.Graphics;

namespace GenerateChromosomes
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        // example to create chromosomes in laga.
        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            GenrChromosome allChromosomes = new GenrChromosome(20); //size of the chromosome...

            //number chromosomes supported...
            double[] dblChro = allChromosomes.NumberChromosome(0.0, 1.0);
            float[] flChrom = allChromosomes.NumberChromosome(0.0f, 1.0f);
            int[] intChro = allChromosomes.NumberChromosome(0, 20);
            int[] intChromSwap = allChromosomes.NumberChromosomeSwap(0, 20);
            int[] intChromBin = allChromosomes.NumberChromosomeBinary(); //the size was defined in the constructor...

            //other types of chromosomes...
            char[] chrChromBinary = allChromosomes.CharChromosomeBinary();
            char[] chrChromosome = allChromosomes.CharChromosome(65, 90);

            //parse the chromosomes to print.
            string[] strDblResult = LagaTools.Parse(dblChro);
            string[] strFltResult = LagaTools.Parse(flChrom);
            string[] strRChro = LagaTools.Parse(intChro);
            string[] strRChromSwap = LagaTools.Parse(intChromSwap);
            string[] strRChromBin = LagaTools.Parse(intChromBin);

            Notebook.PrintLines(txtBox, strDblResult, false);
            Notebook.PrintLines(txtBox2, strFltResult, false);
            Notebook.PrintLines(txtBox3, strRChro, false);
            Notebook.PrintLines(txtBox4, strRChromSwap, false);
            Notebook.PrintLines(txtBox5, strRChromBin, false);

        }
    }
}
