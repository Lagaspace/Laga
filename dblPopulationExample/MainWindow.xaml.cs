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

namespace dblPopulationExample
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

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            GenrPopulation pop = new GenrPopulation(20);

            double[][] dblPop = pop.NumPopulation(6, 0.0, 10.00); //dbl population
            int[][] intPoprand = pop.NumPopulationSwap(0, 40); //int population
            int[][] intPopBinary = pop.BinaryPopulationInt(40); //binary population

            string[] pref = LagaTools.Prefix("Chromosome: ", 20);

            Notebook.PrintPopulation(txtdblPop, dblPop, pref, "- //// -", false);
            Notebook.PrintPopulation(inttextBox, intPoprand, pref, "-", false);
            Notebook.PrintPopulation(binarytextBox, intPopBinary, pref, " / ", false);
        }
    }
}
