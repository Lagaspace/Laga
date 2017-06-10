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

            //other types of chromosomes...
            char[] chrChromBinary = allChromosomes.CharChromosomeBinary();
            char[] chrChromosome = allChromosomes.CharChromosome(65, 90);

            //parse the chromosomes to print.
            string[] strCharBinary = LagaTools.Parse(chrChromBinary);
            string[] strCharRand = LagaTools.Parse(chrChromosome);

            Notebook.PrintLines(txtBox, strCharBinary, false);
            Notebook.PrintLines(txtBox2, strCharRand, false);
        }
    }
}
