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

            point[][] ptdPop = pop.PointPopulation(4, 0.0, 100.0, 0.0, 100.0, 50.0, 70.0);
            string[] pref = LagaTools.Prefix("Points chromosome ", 20);

            Notebook.PrintPopulation(txtdblPop, ptdPop, pref,  "//  ", 4, false);
        }
    }
}
