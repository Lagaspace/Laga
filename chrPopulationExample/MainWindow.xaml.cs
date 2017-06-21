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

            char[][] charPop = pop.CharPopulation(20, 65, 90); //chr population
            char[][] charBin = pop.BinaryPopulationChr(20); //int population

            string[] pref = LagaTools.Prefix("Char chromosome ", 20);

            Notebook.PrintPopulation(txtdblPop, charPop, pref, ", ", false);
            Notebook.PrintPopulation(inttextBox, charBin, pref, ", ", false);
        }
    }
}
