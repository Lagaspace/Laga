id: Laga
language: CSharp
name:
  Default: Laga
qualifiedName:
  Default: Laga
type: Assembly
modifiers: {}
items:
- id: Laga.Graphics
  commentId: N:Laga.Graphics
  language: CSharp
  name:
    CSharp: Laga.Graphics
    VB: Laga.Graphics
  nameWithType:
    CSharp: Laga.Graphics
    VB: Laga.Graphics
  qualifiedName:
    CSharp: Laga.Graphics
    VB: Laga.Graphics
  type: Namespace
  assemblies:
  - Laga
  modifiers: {}
  items:
  - id: Laga.Graphics.BarChart
    commentId: T:Laga.Graphics.BarChart
    language: CSharp
    name:
      CSharp: BarChart
      VB: BarChart
    nameWithType:
      CSharp: BarChart
      VB: BarChart
    qualifiedName:
      CSharp: Laga.Graphics.BarChart
      VB: Laga.Graphics.BarChart
    type: Class
    assemblies:
    - Laga
    namespace: Laga.Graphics
    source:
      id: BarChart
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\BarChart.cs
      startLine: 14
    summary: "\nGraph Genetic algorithm performance.\n"
    example: []
    syntax:
      content:
        CSharp: public class BarChart
        VB: Public Class BarChart
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.Graphics.BarChart.#ctor(System.Windows.Controls.InkCanvas)
      commentId: M:Laga.Graphics.BarChart.#ctor(System.Windows.Controls.InkCanvas)
      language: CSharp
      name:
        CSharp: BarChart(InkCanvas)
        VB: BarChart(InkCanvas)
      nameWithType:
        CSharp: BarChart.BarChart(InkCanvas)
        VB: BarChart.BarChart(InkCanvas)
      qualifiedName:
        CSharp: Laga.Graphics.BarChart.BarChart(System.Windows.Controls.InkCanvas)
        VB: Laga.Graphics.BarChart.BarChart(System.Windows.Controls.InkCanvas)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.Graphics
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\BarChart.cs
        startLine: 24
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public BarChart(InkCanvas inkCanvas)
          VB: Public Sub New(inkCanvas As InkCanvas)
        parameters:
        - id: inkCanvas
          type: System.Windows.Controls.InkCanvas
          description: ''
      overload: Laga.Graphics.BarChart.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
  - id: Laga.Graphics.Notebook
    commentId: T:Laga.Graphics.Notebook
    language: CSharp
    name:
      CSharp: Notebook
      VB: Notebook
    nameWithType:
      CSharp: Notebook
      VB: Notebook
    qualifiedName:
      CSharp: Laga.Graphics.Notebook
      VB: Laga.Graphics.Notebook
    type: Class
    assemblies:
    - Laga
    namespace: Laga.Graphics
    source:
      id: Notebook
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\Notebook.cs
      startLine: 14
    summary: "\nTo print messages on a textbox.\n"
    example: []
    syntax:
      content:
        CSharp: public static class Notebook
        VB: Public Module Notebook
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - static
      - class
      VB:
      - Public
      - Module
    items:
    - id: Laga.Graphics.Notebook.PrintLines(System.Windows.Controls.TextBox,System.String[],System.Boolean)
      commentId: M:Laga.Graphics.Notebook.PrintLines(System.Windows.Controls.TextBox,System.String[],System.Boolean)
      language: CSharp
      name:
        CSharp: PrintLines(TextBox, String[], Boolean)
        VB: PrintLines(TextBox, String(), Boolean)
      nameWithType:
        CSharp: Notebook.PrintLines(TextBox, String[], Boolean)
        VB: Notebook.PrintLines(TextBox, String(), Boolean)
      qualifiedName:
        CSharp: Laga.Graphics.Notebook.PrintLines(System.Windows.Controls.TextBox, System.String[], System.Boolean)
        VB: Laga.Graphics.Notebook.PrintLines(System.Windows.Controls.TextBox, System.String(), System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.Graphics
      source:
        id: PrintLines
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Notebook.cs
        startLine: 24
      summary: "\nPrint line by line in a textbox. For appareance and other properties refer to xaml. \n"
      example: []
      syntax:
        content:
          CSharp: public static void PrintLines(TextBox textBox, string[] arrMessages, bool clear)
          VB: Public Shared Sub PrintLines(textBox As TextBox, arrMessages As String(), clear As Boolean)
        parameters:
        - id: textBox
          type: System.Windows.Controls.TextBox
          description: the textbox
        - id: arrMessages
          type: System.String[]
          description: array of strings
        - id: clear
          type: System.Boolean
          description: in case you want to clean the textbox before to write
      overload: Laga.Graphics.Notebook.PrintLines*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox,System.Double[][],System.String[],System.Char,System.String,System.Boolean)
      commentId: M:Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox,System.Double[][],System.String[],System.Char,System.String,System.Boolean)
      language: CSharp
      name:
        CSharp: PrintPopulation(TextBox, Double[][], String[], Char, String, Boolean)
        VB: PrintPopulation(TextBox, Double()(), String(), Char, String, Boolean)
      nameWithType:
        CSharp: Notebook.PrintPopulation(TextBox, Double[][], String[], Char, String, Boolean)
        VB: Notebook.PrintPopulation(TextBox, Double()(), String(), Char, String, Boolean)
      qualifiedName:
        CSharp: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox, System.Double[][], System.String[], System.Char, System.String, System.Boolean)
        VB: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox, System.Double()(), System.String(), System.Char, System.String, System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.Graphics
      source:
        id: PrintPopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Notebook.cs
        startLine: 51
      summary: "\nPrint line by line in a text box the content in a population. For appearence and other properties refer to xaml.\n"
      example: []
      syntax:
        content:
          CSharp: public static void PrintPopulation(TextBox textBox, double[][] population, string[] prefix, char inLine, string sep, bool clear)
          VB: Public Shared Sub PrintPopulation(textBox As TextBox, population As Double()(), prefix As String(), inLine As Char, sep As String, clear As Boolean)
        parameters:
        - id: textBox
          type: System.Windows.Controls.TextBox
          description: the textbox
        - id: population
          type: System.Double[][]
          description: the popupation to write
        - id: prefix
          type: System.String[]
          description: an array of prefixs between chromosomes in the population
        - id: inLine
          type: System.Char
          description: 'a char to define if you want to print in line: &apos;i&apos; or under line: any other char.'
        - id: sep
          type: System.String
          description: The string to use as a separator between genes in the chromosome
        - id: clear
          type: System.Boolean
          description: in case you want to clean the textbox before to write
      overload: Laga.Graphics.Notebook.PrintPopulation*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox,System.Single[][],System.String[],System.String,System.Boolean)
      commentId: M:Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox,System.Single[][],System.String[],System.String,System.Boolean)
      language: CSharp
      name:
        CSharp: PrintPopulation(TextBox, Single[][], String[], String, Boolean)
        VB: PrintPopulation(TextBox, Single()(), String(), String, Boolean)
      nameWithType:
        CSharp: Notebook.PrintPopulation(TextBox, Single[][], String[], String, Boolean)
        VB: Notebook.PrintPopulation(TextBox, Single()(), String(), String, Boolean)
      qualifiedName:
        CSharp: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox, System.Single[][], System.String[], System.String, System.Boolean)
        VB: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox, System.Single()(), System.String(), System.String, System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.Graphics
      source:
        id: PrintPopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Notebook.cs
        startLine: 105
      summary: "\nPrint line by line in a text box the content in a population. For appearence and other properties refer to xaml.\n"
      example: []
      syntax:
        content:
          CSharp: public static void PrintPopulation(TextBox textBox, float[][] population, string[] prefix, string sep, bool clear)
          VB: Public Shared Sub PrintPopulation(textBox As TextBox, population As Single()(), prefix As String(), sep As String, clear As Boolean)
        parameters:
        - id: textBox
          type: System.Windows.Controls.TextBox
          description: the textbox
        - id: population
          type: System.Single[][]
          description: the popupation to write
        - id: prefix
          type: System.String[]
          description: an array of prefixs between chromosomes in the population
        - id: sep
          type: System.String
          description: The string to use as a separator between genes in the chromosome
        - id: clear
          type: System.Boolean
          description: in case you want to clean the textbox before to write
      overload: Laga.Graphics.Notebook.PrintPopulation*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox,System.Int32[][],System.String[],System.String,System.Boolean)
      commentId: M:Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox,System.Int32[][],System.String[],System.String,System.Boolean)
      language: CSharp
      name:
        CSharp: PrintPopulation(TextBox, Int32[][], String[], String, Boolean)
        VB: PrintPopulation(TextBox, Int32()(), String(), String, Boolean)
      nameWithType:
        CSharp: Notebook.PrintPopulation(TextBox, Int32[][], String[], String, Boolean)
        VB: Notebook.PrintPopulation(TextBox, Int32()(), String(), String, Boolean)
      qualifiedName:
        CSharp: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox, System.Int32[][], System.String[], System.String, System.Boolean)
        VB: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox, System.Int32()(), System.String(), System.String, System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.Graphics
      source:
        id: PrintPopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Notebook.cs
        startLine: 147
      summary: "\nPrint line by line in a text box the content in a population. For appearence and other properties refer to xaml.\n"
      example: []
      syntax:
        content:
          CSharp: public static void PrintPopulation(TextBox textBox, int[][] population, string[] prefix, string sep, bool clear)
          VB: Public Shared Sub PrintPopulation(textBox As TextBox, population As Integer()(), prefix As String(), sep As String, clear As Boolean)
        parameters:
        - id: textBox
          type: System.Windows.Controls.TextBox
          description: the textbox
        - id: population
          type: System.Int32[][]
          description: the popupation to write
        - id: prefix
          type: System.String[]
          description: an array of prefixs between chromosomes in the population
        - id: sep
          type: System.String
          description: The string to use as a separator between genes in the chromosome
        - id: clear
          type: System.Boolean
          description: in case you want to clean the textbox before to write
      overload: Laga.Graphics.Notebook.PrintPopulation*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox,System.Char[][],System.String[],System.Char,System.String,System.Boolean)
      commentId: M:Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox,System.Char[][],System.String[],System.Char,System.String,System.Boolean)
      language: CSharp
      name:
        CSharp: PrintPopulation(TextBox, Char[][], String[], Char, String, Boolean)
        VB: PrintPopulation(TextBox, Char()(), String(), Char, String, Boolean)
      nameWithType:
        CSharp: Notebook.PrintPopulation(TextBox, Char[][], String[], Char, String, Boolean)
        VB: Notebook.PrintPopulation(TextBox, Char()(), String(), Char, String, Boolean)
      qualifiedName:
        CSharp: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox, System.Char[][], System.String[], System.Char, System.String, System.Boolean)
        VB: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox, System.Char()(), System.String(), System.Char, System.String, System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.Graphics
      source:
        id: PrintPopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Notebook.cs
        startLine: 190
      summary: "\nPrint line by line in a text box the content in a population. For appearence and other properties refer to xaml.\n"
      example: []
      syntax:
        content:
          CSharp: public static void PrintPopulation(TextBox textBox, char[][] population, string[] prefix, char inLine, string sep, bool clear)
          VB: Public Shared Sub PrintPopulation(textBox As TextBox, population As Char()(), prefix As String(), inLine As Char, sep As String, clear As Boolean)
        parameters:
        - id: textBox
          type: System.Windows.Controls.TextBox
          description: the textbox
        - id: population
          type: System.Char[][]
          description: the popupation to write
        - id: prefix
          type: System.String[]
          description: an array of prefixs between chromosomes in the population
        - id: inLine
          type: System.Char
          description: 'a char to define if you want to print in line: &apos;i&apos; or under line: any other char.'
        - id: sep
          type: System.String
          description: The string to use as a separator between genes in the chromosome
        - id: clear
          type: System.Boolean
          description: in case you want to clean the textbox before to write
      overload: Laga.Graphics.Notebook.PrintPopulation*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox,LagaUnity.Point[][],System.String[],System.String,System.Int32,System.Boolean)
      commentId: M:Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox,LagaUnity.Point[][],System.String[],System.String,System.Int32,System.Boolean)
      language: CSharp
      name:
        CSharp: PrintPopulation(TextBox, Point[][], String[], String, Int32, Boolean)
        VB: PrintPopulation(TextBox, Point()(), String(), String, Int32, Boolean)
      nameWithType:
        CSharp: Notebook.PrintPopulation(TextBox, Point[][], String[], String, Int32, Boolean)
        VB: Notebook.PrintPopulation(TextBox, Point()(), String(), String, Int32, Boolean)
      qualifiedName:
        CSharp: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox, LagaUnity.Point[][], System.String[], System.String, System.Int32, System.Boolean)
        VB: Laga.Graphics.Notebook.PrintPopulation(System.Windows.Controls.TextBox, LagaUnity.Point()(), System.String(), System.String, System.Int32, System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.Graphics
      source:
        id: PrintPopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Notebook.cs
        startLine: 245
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public static void PrintPopulation(TextBox textBox, Point[][] population, string[] prefix, string sep, int r, bool clear)
          VB: Public Shared Sub PrintPopulation(textBox As TextBox, population As Point()(), prefix As String(), sep As String, r As Integer, clear As Boolean)
        parameters:
        - id: textBox
          type: System.Windows.Controls.TextBox
          description: ''
        - id: population
          type: LagaUnity.Point[][]
          description: ''
        - id: prefix
          type: System.String[]
          description: ''
        - id: sep
          type: System.String
          description: ''
        - id: r
          type: System.Int32
          description: ''
        - id: clear
          type: System.Boolean
          description: ''
      overload: Laga.Graphics.Notebook.PrintPopulation*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
- id: Laga.GeneticAlgorithm
  commentId: N:Laga.GeneticAlgorithm
  language: CSharp
  name:
    CSharp: Laga.GeneticAlgorithm
    VB: Laga.GeneticAlgorithm
  nameWithType:
    CSharp: Laga.GeneticAlgorithm
    VB: Laga.GeneticAlgorithm
  qualifiedName:
    CSharp: Laga.GeneticAlgorithm
    VB: Laga.GeneticAlgorithm
  type: Namespace
  assemblies:
  - Laga
  modifiers: {}
  items:
  - id: Laga.GeneticAlgorithm.Chromosome`1
    commentId: T:Laga.GeneticAlgorithm.Chromosome`1
    language: CSharp
    name:
      CSharp: Chromosome<T>
      VB: Chromosome(Of T)
    nameWithType:
      CSharp: Chromosome<T>
      VB: Chromosome(Of T)
    qualifiedName:
      CSharp: Laga.GeneticAlgorithm.Chromosome<T>
      VB: Laga.GeneticAlgorithm.Chromosome(Of T)
    type: Class
    assemblies:
    - Laga
    namespace: Laga.GeneticAlgorithm
    source:
      id: Chromosome
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\Chromosome.cs
      startLine: 10
    summary: "\nCreate and manipulate Chromosomes\n"
    example: []
    syntax:
      content:
        CSharp: public class Chromosome<T>
        VB: Public Class Chromosome(Of T)
      typeParameters:
      - id: T
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.GeneticAlgorithm.Chromosome`1.Count
      commentId: P:Laga.GeneticAlgorithm.Chromosome`1.Count
      language: CSharp
      name:
        CSharp: Count
        VB: Count
      nameWithType:
        CSharp: Chromosome<T>.Count
        VB: Chromosome(Of T).Count
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Chromosome<T>.Count
        VB: Laga.GeneticAlgorithm.Chromosome(Of T).Count
      type: Property
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Count
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Chromosome.cs
        startLine: 18
      summary: "\nThe size of the chromosome\n"
      example: []
      syntax:
        content:
          CSharp: public int Count { get; }
          VB: Public ReadOnly Property Count As Integer
        parameters: []
        return:
          type: System.Int32
      overload: Laga.GeneticAlgorithm.Chromosome`1.Count*
      modifiers:
        CSharp:
        - public
        - get
        VB:
        - Public
        - ReadOnly
    - id: Laga.GeneticAlgorithm.Chromosome`1.chromosome
      commentId: P:Laga.GeneticAlgorithm.Chromosome`1.chromosome
      language: CSharp
      name:
        CSharp: chromosome
        VB: chromosome
      nameWithType:
        CSharp: Chromosome<T>.chromosome
        VB: Chromosome(Of T).chromosome
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Chromosome<T>.chromosome
        VB: Laga.GeneticAlgorithm.Chromosome(Of T).chromosome
      type: Property
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: chromosome
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Chromosome.cs
        startLine: 28
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public List<T> chromosome { get; set; }
          VB: Public Property chromosome As List(Of T)
        parameters: []
        return:
          type: System.Collections.Generic.List{{T}}
      overload: Laga.GeneticAlgorithm.Chromosome`1.chromosome*
      modifiers:
        CSharp:
        - public
        - get
        - set
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Chromosome`1.#ctor(System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Chromosome`1.#ctor(System.Int32)
      language: CSharp
      name:
        CSharp: Chromosome(Int32)
        VB: Chromosome(Int32)
      nameWithType:
        CSharp: Chromosome<T>.Chromosome(Int32)
        VB: Chromosome(Of T).Chromosome(Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Chromosome<T>.Chromosome(System.Int32)
        VB: Laga.GeneticAlgorithm.Chromosome(Of T).Chromosome(System.Int32)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Chromosome.cs
        startLine: 33
      summary: "\ncons 1\n"
      example: []
      syntax:
        content:
          CSharp: public Chromosome(int size)
          VB: Public Sub New(size As Integer)
        parameters:
        - id: size
          type: System.Int32
      overload: Laga.GeneticAlgorithm.Chromosome`1.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Chromosome`1.#ctor(System.Collections.Generic.List{`0})
      commentId: M:Laga.GeneticAlgorithm.Chromosome`1.#ctor(System.Collections.Generic.List{`0})
      language: CSharp
      name:
        CSharp: Chromosome(List<T>)
        VB: Chromosome(List(Of T))
      nameWithType:
        CSharp: Chromosome<T>.Chromosome(List<T>)
        VB: Chromosome(Of T).Chromosome(List(Of T))
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Chromosome<T>.Chromosome(System.Collections.Generic.List<T>)
        VB: Laga.GeneticAlgorithm.Chromosome(Of T).Chromosome(System.Collections.Generic.List(Of T))
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Chromosome.cs
        startLine: 42
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public Chromosome(List<T> ListDna)
          VB: Public Sub New(ListDna As List(Of T))
        parameters:
        - id: ListDna
          type: System.Collections.Generic.List{{T}}
          description: ''
      overload: Laga.GeneticAlgorithm.Chromosome`1.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Chromosome`1.#ctor
      commentId: M:Laga.GeneticAlgorithm.Chromosome`1.#ctor
      language: CSharp
      name:
        CSharp: Chromosome()
        VB: Chromosome()
      nameWithType:
        CSharp: Chromosome<T>.Chromosome()
        VB: Chromosome(Of T).Chromosome()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Chromosome<T>.Chromosome()
        VB: Laga.GeneticAlgorithm.Chromosome(Of T).Chromosome()
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Chromosome.cs
        startLine: 50
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public Chromosome()
          VB: Public Sub New
      overload: Laga.GeneticAlgorithm.Chromosome`1.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Chromosome`1.Fitness
      commentId: P:Laga.GeneticAlgorithm.Chromosome`1.Fitness
      language: CSharp
      name:
        CSharp: Fitness
        VB: Fitness
      nameWithType:
        CSharp: Chromosome<T>.Fitness
        VB: Chromosome(Of T).Fitness
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Chromosome<T>.Fitness
        VB: Laga.GeneticAlgorithm.Chromosome(Of T).Fitness
      type: Property
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Fitness
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Chromosome.cs
        startLine: 58
      summary: "\nGet and set the chromosome fitness\n"
      example: []
      syntax:
        content:
          CSharp: public double Fitness { get; set; }
          VB: Public Property Fitness As Double
        parameters: []
        return:
          type: System.Double
      overload: Laga.GeneticAlgorithm.Chromosome`1.Fitness*
      modifiers:
        CSharp:
        - public
        - get
        - set
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Chromosome`1.GetDNA(System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Chromosome`1.GetDNA(System.Int32)
      language: CSharp
      name:
        CSharp: GetDNA(Int32)
        VB: GetDNA(Int32)
      nameWithType:
        CSharp: Chromosome<T>.GetDNA(Int32)
        VB: Chromosome(Of T).GetDNA(Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Chromosome<T>.GetDNA(System.Int32)
        VB: Laga.GeneticAlgorithm.Chromosome(Of T).GetDNA(System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: GetDNA
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Chromosome.cs
        startLine: 75
      summary: "\nGet Dna Chromosome at specific index\n"
      example: []
      syntax:
        content:
          CSharp: public T GetDNA(int index)
          VB: Public Function GetDNA(index As Integer) As T
        parameters:
        - id: index
          type: System.Int32
          description: index
        return:
          type: '{T}'
          description: T
      overload: Laga.GeneticAlgorithm.Chromosome`1.GetDNA*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Chromosome`1.InsertDNA(System.Int32,`0)
      commentId: M:Laga.GeneticAlgorithm.Chromosome`1.InsertDNA(System.Int32,`0)
      language: CSharp
      name:
        CSharp: InsertDNA(Int32, T)
        VB: InsertDNA(Int32, T)
      nameWithType:
        CSharp: Chromosome<T>.InsertDNA(Int32, T)
        VB: Chromosome(Of T).InsertDNA(Int32, T)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Chromosome<T>.InsertDNA(System.Int32, T)
        VB: Laga.GeneticAlgorithm.Chromosome(Of T).InsertDNA(System.Int32, T)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: InsertDNA
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Chromosome.cs
        startLine: 85
      summary: "\nInsert DNA in a chromosome at specific Location\n"
      example: []
      syntax:
        content:
          CSharp: public void InsertDNA(int index, T DNA)
          VB: Public Sub InsertDNA(index As Integer, DNA As T)
        parameters:
        - id: index
          type: System.Int32
          description: The location in the chromosome
        - id: DNA
          type: '{T}'
          description: The DNA to insert
      overload: Laga.GeneticAlgorithm.Chromosome`1.InsertDNA*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Chromosome`1.Add(`0)
      commentId: M:Laga.GeneticAlgorithm.Chromosome`1.Add(`0)
      language: CSharp
      name:
        CSharp: Add(T)
        VB: Add(T)
      nameWithType:
        CSharp: Chromosome<T>.Add(T)
        VB: Chromosome(Of T).Add(T)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Chromosome<T>.Add(T)
        VB: Laga.GeneticAlgorithm.Chromosome(Of T).Add(T)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Add
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Chromosome.cs
        startLine: 94
      summary: "\nAdd DNA to the Chromosome\n"
      example: []
      syntax:
        content:
          CSharp: public void Add(T DNA)
          VB: Public Sub Add(DNA As T)
        parameters:
        - id: DNA
          type: '{T}'
          description: The DNA type
      overload: Laga.GeneticAlgorithm.Chromosome`1.Add*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Chromosome`1.Chr2Str(System.String)
      commentId: M:Laga.GeneticAlgorithm.Chromosome`1.Chr2Str(System.String)
      language: CSharp
      name:
        CSharp: Chr2Str(String)
        VB: Chr2Str(String)
      nameWithType:
        CSharp: Chromosome<T>.Chr2Str(String)
        VB: Chromosome(Of T).Chr2Str(String)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Chromosome<T>.Chr2Str(System.String)
        VB: Laga.GeneticAlgorithm.Chromosome(Of T).Chr2Str(System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Chr2Str
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Chromosome.cs
        startLine: 104
      summary: "\nConverts DNA Chromosome to a String\n"
      example: []
      syntax:
        content:
          CSharp: public string Chr2Str(string sep)
          VB: Public Function Chr2Str(sep As String) As String
        parameters:
        - id: sep
          type: System.String
          description: separation
        return:
          type: System.String
          description: string
      overload: Laga.GeneticAlgorithm.Chromosome`1.Chr2Str*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
  - id: Laga.GeneticAlgorithm.Crossover`1
    commentId: T:Laga.GeneticAlgorithm.Crossover`1
    language: CSharp
    name:
      CSharp: Crossover<T>
      VB: Crossover(Of T)
    nameWithType:
      CSharp: Crossover<T>
      VB: Crossover(Of T)
    qualifiedName:
      CSharp: Laga.GeneticAlgorithm.Crossover<T>
      VB: Laga.GeneticAlgorithm.Crossover(Of T)
    type: Class
    assemblies:
    - Laga
    namespace: Laga.GeneticAlgorithm
    source:
      id: Crossover
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\Crossover.cs
      startLine: 10
    summary: "\nDifferent crossover type operations\n"
    example: []
    syntax:
      content:
        CSharp: public class Crossover<T>
        VB: Public Class Crossover(Of T)
      typeParameters:
      - id: T
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.GeneticAlgorithm.Crossover`1.IndexParent
      commentId: P:Laga.GeneticAlgorithm.Crossover`1.IndexParent
      language: CSharp
      name:
        CSharp: IndexParent
        VB: IndexParent
      nameWithType:
        CSharp: Crossover<T>.IndexParent
        VB: Crossover(Of T).IndexParent
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Crossover<T>.IndexParent
        VB: Laga.GeneticAlgorithm.Crossover(Of T).IndexParent
      type: Property
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: IndexParent
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Crossover.cs
        startLine: 19
      summary: "\nget and set indexes for parents in crossover.\n"
      example: []
      syntax:
        content:
          CSharp: public int[] IndexParent { get; set; }
          VB: Public Property IndexParent As Integer()
        parameters: []
        return:
          type: System.Int32[]
      overload: Laga.GeneticAlgorithm.Crossover`1.IndexParent*
      modifiers:
        CSharp:
        - public
        - get
        - set
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Crossover`1.#ctor
      commentId: M:Laga.GeneticAlgorithm.Crossover`1.#ctor
      language: CSharp
      name:
        CSharp: Crossover()
        VB: Crossover()
      nameWithType:
        CSharp: Crossover<T>.Crossover()
        VB: Crossover(Of T).Crossover()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Crossover<T>.Crossover()
        VB: Laga.GeneticAlgorithm.Crossover(Of T).Crossover()
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Crossover.cs
        startLine: 31
      summary: "\nconstructor\n"
      example: []
      syntax:
        content:
          CSharp: public Crossover()
          VB: Public Sub New
      overload: Laga.GeneticAlgorithm.Crossover`1.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(Laga.GeneticAlgorithm.Population{`0},System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(Laga.GeneticAlgorithm.Population{`0},System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: SinglePointCrossover(Population<T>, Int32, Int32)
        VB: SinglePointCrossover(Population(Of T), Int32, Int32)
      nameWithType:
        CSharp: Crossover<T>.SinglePointCrossover(Population<T>, Int32, Int32)
        VB: Crossover(Of T).SinglePointCrossover(Population(Of T), Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Crossover<T>.SinglePointCrossover(Laga.GeneticAlgorithm.Population<T>, System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.Crossover(Of T).SinglePointCrossover(Laga.GeneticAlgorithm.Population(Of T), System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: SinglePointCrossover
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Crossover.cs
        startLine: 44
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public static Population<T> SinglePointCrossover(Population<T> matingPool, int PopSize, int cut)
          VB: Public Shared Function SinglePointCrossover(matingPool As Population(Of T), PopSize As Integer, cut As Integer) As Population(Of T)
        parameters:
        - id: matingPool
          type: Laga.GeneticAlgorithm.Population{{T}}
          description: ''
        - id: PopSize
          type: System.Int32
          description: ''
        - id: cut
          type: System.Int32
          description: ''
        return:
          type: Laga.GeneticAlgorithm.Population{{T}}
          description: ''
      overload: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.Crossover`1.RandomPointCrossover(Laga.GeneticAlgorithm.Population{`0},System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Crossover`1.RandomPointCrossover(Laga.GeneticAlgorithm.Population{`0},System.Int32)
      language: CSharp
      name:
        CSharp: RandomPointCrossover(Population<T>, Int32)
        VB: RandomPointCrossover(Population(Of T), Int32)
      nameWithType:
        CSharp: Crossover<T>.RandomPointCrossover(Population<T>, Int32)
        VB: Crossover(Of T).RandomPointCrossover(Population(Of T), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Crossover<T>.RandomPointCrossover(Laga.GeneticAlgorithm.Population<T>, System.Int32)
        VB: Laga.GeneticAlgorithm.Crossover(Of T).RandomPointCrossover(Laga.GeneticAlgorithm.Population(Of T), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RandomPointCrossover
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Crossover.cs
        startLine: 80
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public static Population<T> RandomPointCrossover(Population<T> matingPool, int populationSize)
          VB: Public Shared Function RandomPointCrossover(matingPool As Population(Of T), populationSize As Integer) As Population(Of T)
        parameters:
        - id: matingPool
          type: Laga.GeneticAlgorithm.Population{{T}}
          description: ''
        - id: populationSize
          type: System.Int32
          description: ''
        return:
          type: Laga.GeneticAlgorithm.Population{{T}}
          description: ''
      overload: Laga.GeneticAlgorithm.Crossover`1.RandomPointCrossover*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(Laga.GeneticAlgorithm.Chromosome{`0},Laga.GeneticAlgorithm.Chromosome{`0},System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(Laga.GeneticAlgorithm.Chromosome{`0},Laga.GeneticAlgorithm.Chromosome{`0},System.Int32)
      language: CSharp
      name:
        CSharp: SinglePointCrossover(Chromosome<T>, Chromosome<T>, Int32)
        VB: SinglePointCrossover(Chromosome(Of T), Chromosome(Of T), Int32)
      nameWithType:
        CSharp: Crossover<T>.SinglePointCrossover(Chromosome<T>, Chromosome<T>, Int32)
        VB: Crossover(Of T).SinglePointCrossover(Chromosome(Of T), Chromosome(Of T), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Crossover<T>.SinglePointCrossover(Laga.GeneticAlgorithm.Chromosome<T>, Laga.GeneticAlgorithm.Chromosome<T>, System.Int32)
        VB: Laga.GeneticAlgorithm.Crossover(Of T).SinglePointCrossover(Laga.GeneticAlgorithm.Chromosome(Of T), Laga.GeneticAlgorithm.Chromosome(Of T), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: SinglePointCrossover
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Crossover.cs
        startLine: 110
      summary: "\nSinngle Point Chrossover\n"
      example: []
      syntax:
        content:
          CSharp: public static Chromosome<T> SinglePointCrossover(Chromosome<T> chromosomeA, Chromosome<T> chromosomeB, int cut)
          VB: Public Shared Function SinglePointCrossover(chromosomeA As Chromosome(Of T), chromosomeB As Chromosome(Of T), cut As Integer) As Chromosome(Of T)
        parameters:
        - id: chromosomeA
          type: Laga.GeneticAlgorithm.Chromosome{{T}}
          description: Parent A
        - id: chromosomeB
          type: Laga.GeneticAlgorithm.Chromosome{{T}}
          description: Parent B
        - id: cut
          type: System.Int32
          description: Cutting location
        return:
          type: Laga.GeneticAlgorithm.Chromosome{{T}}
          description: Chromosome
      overload: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(System.Object[][],System.Single,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(System.Object[][],System.Single,System.Int32)
      language: CSharp
      name:
        CSharp: SinglePointCrossover(Object[][], Single, Int32)
        VB: SinglePointCrossover(Object()(), Single, Int32)
      nameWithType:
        CSharp: Crossover<T>.SinglePointCrossover(Object[][], Single, Int32)
        VB: Crossover(Of T).SinglePointCrossover(Object()(), Single, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Crossover<T>.SinglePointCrossover(System.Object[][], System.Single, System.Int32)
        VB: Laga.GeneticAlgorithm.Crossover(Of T).SinglePointCrossover(System.Object()(), System.Single, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: SinglePointCrossover
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Crossover.cs
        startLine: 139
      summary: "\nA crossover algorithm performed in a single point of the chromosome.\n"
      example: []
      syntax:
        content:
          CSharp: public object[][] SinglePointCrossover(object[][] population, float percent, int pointCutter)
          VB: Public Function SinglePointCrossover(population As Object()(), percent As Single, pointCutter As Integer) As Object()()
        parameters:
        - id: population
          type: System.Object[][]
          description: The population to perform the crossover
        - id: percent
          type: System.Single
          description: Which percent of chromosomes will be croosver
        - id: pointCutter
          type: System.Int32
          description: Where the crossover will be executed
        return:
          type: System.Object[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(System.Double[][],System.Single,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(System.Double[][],System.Single,System.Int32)
      language: CSharp
      name:
        CSharp: SinglePointCrossover(Double[][], Single, Int32)
        VB: SinglePointCrossover(Double()(), Single, Int32)
      nameWithType:
        CSharp: Crossover<T>.SinglePointCrossover(Double[][], Single, Int32)
        VB: Crossover(Of T).SinglePointCrossover(Double()(), Single, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Crossover<T>.SinglePointCrossover(System.Double[][], System.Single, System.Int32)
        VB: Laga.GeneticAlgorithm.Crossover(Of T).SinglePointCrossover(System.Double()(), System.Single, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: SinglePointCrossover
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Crossover.cs
        startLine: 205
      summary: "\nA crossover algorithm performed in a single point of the chromosome.\n"
      example: []
      syntax:
        content:
          CSharp: public double[][] SinglePointCrossover(double[][] population, float percent, int pointCutter)
          VB: Public Function SinglePointCrossover(population As Double()(), percent As Single, pointCutter As Integer) As Double()()
        parameters:
        - id: population
          type: System.Double[][]
          description: The population to perform the crossover
        - id: percent
          type: System.Single
          description: Which percent of chromosomes will be croosver
        - id: pointCutter
          type: System.Int32
          description: Where the crossover will be executed
        return:
          type: System.Double[][]
          description: double[][]
      overload: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(System.Single[][],System.Single,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(System.Single[][],System.Single,System.Int32)
      language: CSharp
      name:
        CSharp: SinglePointCrossover(Single[][], Single, Int32)
        VB: SinglePointCrossover(Single()(), Single, Int32)
      nameWithType:
        CSharp: Crossover<T>.SinglePointCrossover(Single[][], Single, Int32)
        VB: Crossover(Of T).SinglePointCrossover(Single()(), Single, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Crossover<T>.SinglePointCrossover(System.Single[][], System.Single, System.Int32)
        VB: Laga.GeneticAlgorithm.Crossover(Of T).SinglePointCrossover(System.Single()(), System.Single, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: SinglePointCrossover
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Crossover.cs
        startLine: 253
      summary: "\nA crossover algorithm performed in a single point of the chromosome.\n"
      example: []
      syntax:
        content:
          CSharp: public float[][] SinglePointCrossover(float[][] population, float percent, int pointCutter)
          VB: Public Function SinglePointCrossover(population As Single()(), percent As Single, pointCutter As Integer) As Single()()
        parameters:
        - id: population
          type: System.Single[][]
          description: The population to perform the crossover
        - id: percent
          type: System.Single
          description: Which percent of chromosomes will be croosver
        - id: pointCutter
          type: System.Int32
          description: Where the crossover will be executed
        return:
          type: System.Single[][]
          description: float[][]
      overload: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(System.Int32[][],System.Single,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(System.Int32[][],System.Single,System.Int32)
      language: CSharp
      name:
        CSharp: SinglePointCrossover(Int32[][], Single, Int32)
        VB: SinglePointCrossover(Int32()(), Single, Int32)
      nameWithType:
        CSharp: Crossover<T>.SinglePointCrossover(Int32[][], Single, Int32)
        VB: Crossover(Of T).SinglePointCrossover(Int32()(), Single, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Crossover<T>.SinglePointCrossover(System.Int32[][], System.Single, System.Int32)
        VB: Laga.GeneticAlgorithm.Crossover(Of T).SinglePointCrossover(System.Int32()(), System.Single, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: SinglePointCrossover
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Crossover.cs
        startLine: 300
      summary: "\nA crossover algorithm performed in a single point of the chromosome.\n"
      example: []
      syntax:
        content:
          CSharp: public int[][] SinglePointCrossover(int[][] population, float percent, int pointCutter)
          VB: Public Function SinglePointCrossover(population As Integer()(), percent As Single, pointCutter As Integer) As Integer()()
        parameters:
        - id: population
          type: System.Int32[][]
          description: The population to perform the crossover
        - id: percent
          type: System.Single
          description: Which percent of chromosomes will be croosver
        - id: pointCutter
          type: System.Int32
          description: Where the crossover will be executed
        return:
          type: System.Int32[][]
          description: int[][]
      overload: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(System.Char[][],System.Single,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover(System.Char[][],System.Single,System.Int32)
      language: CSharp
      name:
        CSharp: SinglePointCrossover(Char[][], Single, Int32)
        VB: SinglePointCrossover(Char()(), Single, Int32)
      nameWithType:
        CSharp: Crossover<T>.SinglePointCrossover(Char[][], Single, Int32)
        VB: Crossover(Of T).SinglePointCrossover(Char()(), Single, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Crossover<T>.SinglePointCrossover(System.Char[][], System.Single, System.Int32)
        VB: Laga.GeneticAlgorithm.Crossover(Of T).SinglePointCrossover(System.Char()(), System.Single, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: SinglePointCrossover
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Crossover.cs
        startLine: 386
      summary: "\nA crossover algorithm performed in a single point of the chromosome.\n"
      example:
      - "\n<pre><code>GenrPopulation pop = new GenrPopulation(6);\nchar[][] charPop = pop.CharPopulation(5, 97, 122);\nfloat[] rndFitness = Rand.RandomNumbers(6, 0f, 1f);\n\nsort:\nRankingSort rs = new RankingSort();\nrs.BidirectionalBubbleSort(charPop, rndFitness, false);\n\nCrossover cs = new Crossover();\nchar[][] croossovers = cs.SinglePointCrossover(srtPop, 0.8f, 2);\n\nresult:\nPOPULATION:\nvnqaw: 0.6631602\nsmzbu: 0.9322885\ncewwe: 0.8222669\njsxgr: 0.7555377\nujklr: 0.181477\nuqmvo: 0.6832687\n\nSORTED POPULATION:\nujklr: 0.181477\nvnqaw: 0.6631602\nuqmvo: 0.6832687\njsxgr: 0.7555377\ncewwe: 0.8222669\nsmzbu: 0.9322885\n\nCROSSOVER EXAMPLE: 80%\nsmwwe // smzbu - cewwe\ncezbu // cewwe - smzbu\njsklr // jsxgr - ujklr\nujxgr // ujklr - jsxgr</code></pre>\n"
      syntax:
        content:
          CSharp: public char[][] SinglePointCrossover(char[][] population, float percent, int pointCutter)
          VB: Public Function SinglePointCrossover(population As Char()(), percent As Single, pointCutter As Integer) As Char()()
        parameters:
        - id: population
          type: System.Char[][]
          description: The population to perform the crossover
        - id: percent
          type: System.Single
          description: Which percent of chromosomes will be croosver
        - id: pointCutter
          type: System.Int32
          description: Where the crossover will be executed
        return:
          type: System.Char[][]
          description: Char[][]
      overload: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
  - id: Laga.GeneticAlgorithm.GenrChromosome
    commentId: T:Laga.GeneticAlgorithm.GenrChromosome
    language: CSharp
    name:
      CSharp: GenrChromosome
      VB: GenrChromosome
    nameWithType:
      CSharp: GenrChromosome
      VB: GenrChromosome
    qualifiedName:
      CSharp: Laga.GeneticAlgorithm.GenrChromosome
      VB: Laga.GeneticAlgorithm.GenrChromosome
    type: Class
    assemblies:
    - Laga
    namespace: Laga.GeneticAlgorithm
    source:
      id: GenrChromosome
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrChromosome.cs
      startLine: 10
    summary: "\nGenerate different Chromosome types\n"
    example: []
    syntax:
      content:
        CSharp: public class GenrChromosome
        VB: Public Class GenrChromosome
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.GeneticAlgorithm.GenrChromosome.SizeChrom
      commentId: P:Laga.GeneticAlgorithm.GenrChromosome.SizeChrom
      language: CSharp
      name:
        CSharp: SizeChrom
        VB: SizeChrom
      nameWithType:
        CSharp: GenrChromosome.SizeChrom
        VB: GenrChromosome.SizeChrom
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrChromosome.SizeChrom
        VB: Laga.GeneticAlgorithm.GenrChromosome.SizeChrom
      type: Property
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: SizeChrom
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrChromosome.cs
        startLine: 17
      summary: "\nsize of the chromosome\n"
      example: []
      syntax:
        content:
          CSharp: public int SizeChrom { get; set; }
          VB: Public Property SizeChrom As Integer
        parameters: []
        return:
          type: System.Int32
      overload: Laga.GeneticAlgorithm.GenrChromosome.SizeChrom*
      modifiers:
        CSharp:
        - public
        - get
        - set
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrChromosome.#ctor(System.Int32)
      commentId: M:Laga.GeneticAlgorithm.GenrChromosome.#ctor(System.Int32)
      language: CSharp
      name:
        CSharp: GenrChromosome(Int32)
        VB: GenrChromosome(Int32)
      nameWithType:
        CSharp: GenrChromosome.GenrChromosome(Int32)
        VB: GenrChromosome.GenrChromosome(Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrChromosome.GenrChromosome(System.Int32)
        VB: Laga.GeneticAlgorithm.GenrChromosome.GenrChromosome(System.Int32)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrChromosome.cs
        startLine: 35
      summary: "\nConstructor:\n"
      example: []
      syntax:
        content:
          CSharp: public GenrChromosome(int Size)
          VB: Public Sub New(Size As Integer)
        parameters:
        - id: Size
          type: System.Int32
          description: The Lengthof the Chromosome
      overload: Laga.GeneticAlgorithm.GenrChromosome.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome(System.Double,System.Double)
      commentId: M:Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome(System.Double,System.Double)
      language: CSharp
      name:
        CSharp: NumberChromosome(Double, Double)
        VB: NumberChromosome(Double, Double)
      nameWithType:
        CSharp: GenrChromosome.NumberChromosome(Double, Double)
        VB: GenrChromosome.NumberChromosome(Double, Double)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome(System.Double, System.Double)
        VB: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome(System.Double, System.Double)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: NumberChromosome
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrChromosome.cs
        startLine: 67
      summary: "\nthe method generates a chromosome composed by random doubles\nbetween min and max.\n"
      example:
      - "How to implement this class:\n<pre><code>GenrChromosome chromosome = new GenrChromosome(5);\ndouble[] Chrom = chromosome.NumberChromosome(0.0, 1.0);\n\nresult:\n0.207198212485387, 0.253313632334263, 0.566322204920613, 0.735812343068334, 0.479827285036364\n\nfloat[] Chrom = chromosome.NumberChromosome(0.0f, 1.0f);\n\nresult:\n9.211745E+08, 1.134843E+09, 1.554793E+09, 1.223132E+09, 1.600176E+09\n\nint[] Chrom = chromosome.NumberChromosome(0, 10);\n\nresult: \n8, 3, 7, 2, 1</code></pre>\n"
      syntax:
        content:
          CSharp: public double[] NumberChromosome(double min, double max)
          VB: Public Function NumberChromosome(min As Double, max As Double) As Double()
        parameters:
        - id: min
          type: System.Double
          description: The min value in the chromosome
        - id: max
          type: System.Double
          description: The max value in the chromosome(exclusive upper bound)
        return:
          type: System.Double[]
          description: double[]
      overload: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome(System.Single,System.Single)
      commentId: M:Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome(System.Single,System.Single)
      language: CSharp
      name:
        CSharp: NumberChromosome(Single, Single)
        VB: NumberChromosome(Single, Single)
      nameWithType:
        CSharp: GenrChromosome.NumberChromosome(Single, Single)
        VB: GenrChromosome.NumberChromosome(Single, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome(System.Single, System.Single)
        VB: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome(System.Single, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: NumberChromosome
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrChromosome.cs
        startLine: 86
      summary: "\nthe method generates a chromosome composed by random floats\nbetween min and max.\n"
      example: []
      syntax:
        content:
          CSharp: public float[] NumberChromosome(float min, float max)
          VB: Public Function NumberChromosome(min As Single, max As Single) As Single()
        parameters:
        - id: min
          type: System.Single
          description: The min value in the chromosome
        - id: max
          type: System.Single
          description: The max value in the chromosome(exclusive upper bound)
        return:
          type: System.Single[]
          description: float[]
      overload: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome(System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome(System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: NumberChromosome(Int32, Int32)
        VB: NumberChromosome(Int32, Int32)
      nameWithType:
        CSharp: GenrChromosome.NumberChromosome(Int32, Int32)
        VB: GenrChromosome.NumberChromosome(Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome(System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome(System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: NumberChromosome
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrChromosome.cs
        startLine: 105
      summary: "\nthe method generates a chromosome composed by random integers\nbetween min and max.\n"
      example: []
      syntax:
        content:
          CSharp: public int[] NumberChromosome(int min, int max)
          VB: Public Function NumberChromosome(min As Integer, max As Integer) As Integer()
        parameters:
        - id: min
          type: System.Int32
          description: The min value in the chromosome
        - id: max
          type: System.Int32
          description: The max value in the chromosome(exclusive upper bound)
        return:
          type: System.Int32[]
          description: int[]
      overload: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeBinary
      commentId: M:Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeBinary
      language: CSharp
      name:
        CSharp: NumberChromosomeBinary()
        VB: NumberChromosomeBinary()
      nameWithType:
        CSharp: GenrChromosome.NumberChromosomeBinary()
        VB: GenrChromosome.NumberChromosomeBinary()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeBinary()
        VB: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeBinary()
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: NumberChromosomeBinary
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrChromosome.cs
        startLine: 131
      summary: "\ncreates a binary chromosome composed by 1s and 0s;\n"
      example:
      - "\n<pre><code>GenrChromosome chromosome = new GenrChromosome(5);\nint[] Chrom = chromosome.NumberChromosomeBinary();\n\nresult:\n1, 1, 0, 1, 1</code></pre>\n"
      syntax:
        content:
          CSharp: public int[] NumberChromosomeBinary()
          VB: Public Function NumberChromosomeBinary As Integer()
        return:
          type: System.Int32[]
          description: a random list of 1s and 0s
      overload: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeBinary*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeSwap(System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeSwap(System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: NumberChromosomeSwap(Int32, Int32)
        VB: NumberChromosomeSwap(Int32, Int32)
      nameWithType:
        CSharp: GenrChromosome.NumberChromosomeSwap(Int32, Int32)
        VB: GenrChromosome.NumberChromosomeSwap(Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeSwap(System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeSwap(System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: NumberChromosomeSwap
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrChromosome.cs
        startLine: 166
      summary: "\nthe method generate a number chromosome composed by non repeated numbers between start and start + size(not inclusive).\nthe method is based on integer numbers. this method is designed by combinatorial problems.\n"
      example:
      - "\n<pre><code>GenrChromosome chromosome = new GenrChromosome(5);\nchar[] Chrom = chromosome.NumberChromosomeSwap(0, 4);\n\nresults:\n4, 1, 0, 2, 3\n3, 1, 2, 0, 4</code></pre>\n"
      syntax:
        content:
          CSharp: public int[] NumberChromosomeSwap(int min, int max)
          VB: Public Function NumberChromosomeSwap(min As Integer, max As Integer) As Integer()
        parameters:
        - id: min
          type: System.Int32
          description: the minimum value in the sequence
        - id: max
          type: System.Int32
          description: the maximum value in the sequence
        return:
          type: System.Int32[]
          description: a non repeat random integer list
      overload: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeSwap*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrChromosome.CharChromosomeBinary
      commentId: M:Laga.GeneticAlgorithm.GenrChromosome.CharChromosomeBinary
      language: CSharp
      name:
        CSharp: CharChromosomeBinary()
        VB: CharChromosomeBinary()
      nameWithType:
        CSharp: GenrChromosome.CharChromosomeBinary()
        VB: GenrChromosome.CharChromosomeBinary()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrChromosome.CharChromosomeBinary()
        VB: Laga.GeneticAlgorithm.GenrChromosome.CharChromosomeBinary()
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: CharChromosomeBinary
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrChromosome.cs
        startLine: 191
      summary: "\nGenerates a binary chromosome of chars.\n"
      example:
      - "\n<pre><code>GenrChromosome chromosome = new GenrChromosome(5);\nchar[] Chrom = chromosome.CharChromosomeBinary();\n\nresult:\n0, 1, 0, 1, 0,</code></pre>\n"
      syntax:
        content:
          CSharp: public char[] CharChromosomeBinary()
          VB: Public Function CharChromosomeBinary As Char()
        return:
          type: System.Char[]
          description: a random char list of 1s and 0s
      overload: Laga.GeneticAlgorithm.GenrChromosome.CharChromosomeBinary*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrChromosome.CharChromosome(System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.GenrChromosome.CharChromosome(System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: CharChromosome(Int32, Int32)
        VB: CharChromosome(Int32, Int32)
      nameWithType:
        CSharp: GenrChromosome.CharChromosome(Int32, Int32)
        VB: GenrChromosome.CharChromosome(Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrChromosome.CharChromosome(System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.GenrChromosome.CharChromosome(System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: CharChromosome
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrChromosome.cs
        startLine: 230
      summary: "\nGenerates an random char chromosome composed by characters.\nSee <a href=\"http://www.asciitable.com/\">this link</a> for more information.\n"
      example:
      - "\n<pre><code>GenrChromosome chromosome = new GenrChromosome(25);\nchar[] Chrom = chromosome.CharChromosome(65, 90);\n\nresult:\nE, B, C, N, F, C, O, P, C, H, O, U, Q, U, G, L, K, Z, E, K, X, A, L, B, Q,\n\nchar[] Chrom = chromosome.CharChromosome(33, 47);\n\nresult\n,, -, !, /, -, &apos;, %, !, %, %, !, /, ,, +, ), *, ), /, |, /, ], +, (, !, +,\n\nchar[] Chrom = chromosome.CharChromosome(97, 122);\n\nresult\nq, a, h, k, j, d, u, o, d, l, w, b, d, i, l, l, h, c, n, c, s, d, k, r, h,</code></pre>\n"
      syntax:
        content:
          CSharp: public char[] CharChromosome(int start, int end)
          VB: Public Function CharChromosome(start As Integer, end As Integer) As Char()
        parameters:
        - id: start
          type: System.Int32
          description: the start number in the table, inclusive
        - id: end
          type: System.Int32
          description: the end number in the table, exclusive
        return:
          type: System.Char[]
          description: returns a random list of characters
      overload: Laga.GeneticAlgorithm.GenrChromosome.CharChromosome*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
  - id: Laga.GeneticAlgorithm.GenrPopulation
    commentId: T:Laga.GeneticAlgorithm.GenrPopulation
    language: CSharp
    name:
      CSharp: GenrPopulation
      VB: GenrPopulation
    nameWithType:
      CSharp: GenrPopulation
      VB: GenrPopulation
    qualifiedName:
      CSharp: Laga.GeneticAlgorithm.GenrPopulation
      VB: Laga.GeneticAlgorithm.GenrPopulation
    type: Class
    assemblies:
    - Laga
    namespace: Laga.GeneticAlgorithm
    source:
      id: GenrPopulation
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrPopulation.cs
      startLine: 10
    summary: "\nGenerate basic populations\n"
    example: []
    syntax:
      content:
        CSharp: public class GenrPopulation
        VB: Public Class GenrPopulation
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.GeneticAlgorithm.GenrPopulation.SizePop
      commentId: P:Laga.GeneticAlgorithm.GenrPopulation.SizePop
      language: CSharp
      name:
        CSharp: SizePop
        VB: SizePop
      nameWithType:
        CSharp: GenrPopulation.SizePop
        VB: GenrPopulation.SizePop
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrPopulation.SizePop
        VB: Laga.GeneticAlgorithm.GenrPopulation.SizePop
      type: Property
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: SizePop
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrPopulation.cs
        startLine: 18
      summary: "\nSizePopulation\n"
      example: []
      syntax:
        content:
          CSharp: public int SizePop { get; set; }
          VB: Public Property SizePop As Integer
        parameters: []
        return:
          type: System.Int32
      overload: Laga.GeneticAlgorithm.GenrPopulation.SizePop*
      modifiers:
        CSharp:
        - public
        - get
        - set
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrPopulation.#ctor(System.Int32)
      commentId: M:Laga.GeneticAlgorithm.GenrPopulation.#ctor(System.Int32)
      language: CSharp
      name:
        CSharp: GenrPopulation(Int32)
        VB: GenrPopulation(Int32)
      nameWithType:
        CSharp: GenrPopulation.GenrPopulation(Int32)
        VB: GenrPopulation.GenrPopulation(Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrPopulation.GenrPopulation(System.Int32)
        VB: Laga.GeneticAlgorithm.GenrPopulation.GenrPopulation(System.Int32)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrPopulation.cs
        startLine: 34
      summary: "\nConstructor:\n"
      example: []
      syntax:
        content:
          CSharp: public GenrPopulation(int SizePopulation)
          VB: Public Sub New(SizePopulation As Integer)
        parameters:
        - id: SizePopulation
          type: System.Int32
          description: The size of the Population
      overload: Laga.GeneticAlgorithm.GenrPopulation.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrPopulation.ObjectPopulationSwap(System.Object[],System.Single,System.Boolean)
      commentId: M:Laga.GeneticAlgorithm.GenrPopulation.ObjectPopulationSwap(System.Object[],System.Single,System.Boolean)
      language: CSharp
      name:
        CSharp: ObjectPopulationSwap(Object[], Single, Boolean)
        VB: ObjectPopulationSwap(Object(), Single, Boolean)
      nameWithType:
        CSharp: GenrPopulation.ObjectPopulationSwap(Object[], Single, Boolean)
        VB: GenrPopulation.ObjectPopulationSwap(Object(), Single, Boolean)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrPopulation.ObjectPopulationSwap(System.Object[], System.Single, System.Boolean)
        VB: Laga.GeneticAlgorithm.GenrPopulation.ObjectPopulationSwap(System.Object(), System.Single, System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ObjectPopulationSwap
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrPopulation.cs
        startLine: 146
      syntax:
        content:
          CSharp: public object[][] ObjectPopulationSwap(object[] SeedChromosome, float percent, bool InOut)
          VB: Public Function ObjectPopulationSwap(SeedChromosome As Object(), percent As Single, InOut As Boolean) As Object()()
        parameters:
        - id: SeedChromosome
          type: System.Object[]
        - id: percent
          type: System.Single
        - id: InOut
          type: System.Boolean
        return:
          type: System.Object[][]
      overload: Laga.GeneticAlgorithm.GenrPopulation.ObjectPopulationSwap*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation(System.Int32,System.Double,System.Double)
      commentId: M:Laga.GeneticAlgorithm.GenrPopulation.NumPopulation(System.Int32,System.Double,System.Double)
      language: CSharp
      name:
        CSharp: NumPopulation(Int32, Double, Double)
        VB: NumPopulation(Int32, Double, Double)
      nameWithType:
        CSharp: GenrPopulation.NumPopulation(Int32, Double, Double)
        VB: GenrPopulation.NumPopulation(Int32, Double, Double)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation(System.Int32, System.Double, System.Double)
        VB: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation(System.Int32, System.Double, System.Double)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: NumPopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrPopulation.cs
        startLine: 192
      summary: "\nGenr8 a Population of random double.\n"
      example:
      - "\n<pre><code>GenrPopulation pop = new GenrPopulation(5);\ndouble[][] dblPop = pop.NumPopulation(12, 0.00, 1.00);\n\nresult for double population\nChromosome: 0\n- 0.134, 0.623, 0.931, 0.896, 0.945, 0.599, 0.824, 0.837, 0.671, 0.081, 0.496, 0.027,\nChromosome: 1\n- 0.669, 0.725, 0.667, 0.651, 0.073, 0.215, 0.052, 0.92, 0.371, 0.122, 0.734, 0.535,\nChromosome: 2\n- 0.741, 0.056, 0.469, 0.699, 0.216, 0.727, 0.221, 0.322, 0.825, 0.301, 0.057, 0.775,\nChromosome: 3\n- 0.884, 0.257, 0.278, 0.461, 0.152, 0.24, 0.929, 0.364, 0.869, 0.415, 0.995, 0.776,\nChromosome: 4\n- 0.022, 0.403, 0.101, 0.041, 0.528, 0.667, 0.517, 0.012, 0.889, 0.395, 0.155, 0.888,</code></pre>\n"
      syntax:
        content:
          CSharp: public double[][] NumPopulation(int sizeChromosome, double min, double max)
          VB: Public Function NumPopulation(sizeChromosome As Integer, min As Double, max As Double) As Double()()
        parameters:
        - id: sizeChromosome
          type: System.Int32
          description: The size of the chromosome
        - id: min
          type: System.Double
          description: The minimum value in the chromosome, inclusive
        - id: max
          type: System.Double
          description: The maximum value in the chromosome, inclusive
        return:
          type: System.Double[][]
          description: Population double[][]
      overload: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation(System.Int32,System.Single,System.Single)
      commentId: M:Laga.GeneticAlgorithm.GenrPopulation.NumPopulation(System.Int32,System.Single,System.Single)
      language: CSharp
      name:
        CSharp: NumPopulation(Int32, Single, Single)
        VB: NumPopulation(Int32, Single, Single)
      nameWithType:
        CSharp: GenrPopulation.NumPopulation(Int32, Single, Single)
        VB: GenrPopulation.NumPopulation(Int32, Single, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation(System.Int32, System.Single, System.Single)
        VB: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation(System.Int32, System.Single, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: NumPopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrPopulation.cs
        startLine: 216
      summary: "\nGenr8 a Population of random float.\n"
      example: []
      syntax:
        content:
          CSharp: public float[][] NumPopulation(int sizeChromosome, float min, float max)
          VB: Public Function NumPopulation(sizeChromosome As Integer, min As Single, max As Single) As Single()()
        parameters:
        - id: sizeChromosome
          type: System.Int32
          description: The size of the chromosome
        - id: min
          type: System.Single
          description: The minimum value in the chromosome, inclusive
        - id: max
          type: System.Single
          description: The maximum value in the chromosome, inclusive
        return:
          type: System.Single[][]
          description: Population float[][]
      overload: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation(System.Int32,System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.GenrPopulation.NumPopulation(System.Int32,System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: NumPopulation(Int32, Int32, Int32)
        VB: NumPopulation(Int32, Int32, Int32)
      nameWithType:
        CSharp: GenrPopulation.NumPopulation(Int32, Int32, Int32)
        VB: GenrPopulation.NumPopulation(Int32, Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation(System.Int32, System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation(System.Int32, System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: NumPopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrPopulation.cs
        startLine: 240
      summary: "\nGenr8 a Population of random int.\n"
      example: []
      syntax:
        content:
          CSharp: public int[][] NumPopulation(int sizeChromosome, int min, int max)
          VB: Public Function NumPopulation(sizeChromosome As Integer, min As Integer, max As Integer) As Integer()()
        parameters:
        - id: sizeChromosome
          type: System.Int32
          description: The size of the chromosome
        - id: min
          type: System.Int32
          description: The minimum value in the chromosome, inclusive
        - id: max
          type: System.Int32
          description: The maximum value in the chromosome, inclusive
        return:
          type: System.Int32[][]
          description: Population int[][]
      overload: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrPopulation.NumPopulationSwap(System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.GenrPopulation.NumPopulationSwap(System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: NumPopulationSwap(Int32, Int32)
        VB: NumPopulationSwap(Int32, Int32)
      nameWithType:
        CSharp: GenrPopulation.NumPopulationSwap(Int32, Int32)
        VB: GenrPopulation.NumPopulationSwap(Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrPopulation.NumPopulationSwap(System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.GenrPopulation.NumPopulationSwap(System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: NumPopulationSwap
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrPopulation.cs
        startLine: 281
      summary: "\nGenr8 a Population of random integers, between min and max value.\n"
      example:
      - "\n<pre><code>GenrPopulation pop = new GenrPopulation(5);\nint[][] intPop = pop.NumPopulationSwap(0, 10);\n\nresults\nChromosome: 0\n- 1, 4, 8, 6, 2, 10, 9, 5, 0, 7, 3,\nChromosome: 1\n- 5, 4, 0, 1, 7, 6, 8, 10, 2, 3, 9,\n Chromosome: 2\n- 1, 6, 10, 7, 3, 5, 9, 2, 0, 8, 4,\nChromosome: 3\n- 9, 1, 4, 6, 10, 2, 7, 5, 8, 0, 3,\nChromosome: 4\n- 2, 5, 0, 7, 6, 1, 4, 3, 8, 9, 10,</code></pre>\n"
      syntax:
        content:
          CSharp: public int[][] NumPopulationSwap(int min, int max)
          VB: Public Function NumPopulationSwap(min As Integer, max As Integer) As Integer()()
        parameters:
        - id: min
          type: System.Int32
          description: The minimum value in the chromosome, inclusive
        - id: max
          type: System.Int32
          description: The maximum value in the chromosome, inclusive
        return:
          type: System.Int32[][]
          description: Population int[][]
      overload: Laga.GeneticAlgorithm.GenrPopulation.NumPopulationSwap*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationInt(System.Int32)
      commentId: M:Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationInt(System.Int32)
      language: CSharp
      name:
        CSharp: BinaryPopulationInt(Int32)
        VB: BinaryPopulationInt(Int32)
      nameWithType:
        CSharp: GenrPopulation.BinaryPopulationInt(Int32)
        VB: GenrPopulation.BinaryPopulationInt(Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationInt(System.Int32)
        VB: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationInt(System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BinaryPopulationInt
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrPopulation.cs
        startLine: 331
      summary: "\nGenr8 a binary Population 101011...\n"
      example:
      - "\n<pre><code>GenrPopulation pop = new GenrPopulation(5);\nint[][] intPop = pop.BinaryPopulationInt(20);\n\nresult:\nChromosome: 0\n- 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1,\nChromosome: 1\n- 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0,\nChromosome: 2\n- 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,\nChromosome: 3\n- 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1,\nChromosome: 4\n- 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0,</code></pre>\n"
      syntax:
        content:
          CSharp: public int[][] BinaryPopulationInt(int sizeChromosome)
          VB: Public Function BinaryPopulationInt(sizeChromosome As Integer) As Integer()()
        parameters:
        - id: sizeChromosome
          type: System.Int32
          description: The size of the chromosome
        return:
          type: System.Int32[][]
          description: Population int[][]
      overload: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationInt*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationChr(System.Int32)
      commentId: M:Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationChr(System.Int32)
      language: CSharp
      name:
        CSharp: BinaryPopulationChr(Int32)
        VB: BinaryPopulationChr(Int32)
      nameWithType:
        CSharp: GenrPopulation.BinaryPopulationChr(Int32)
        VB: GenrPopulation.BinaryPopulationChr(Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationChr(System.Int32)
        VB: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationChr(System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BinaryPopulationChr
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrPopulation.cs
        startLine: 378
      summary: "\nGenr8 a binary Population &apos;1&apos;,&apos;0&apos;,&apos;1&apos;,&apos;0&apos;,&apos;1&apos;,&apos;1&apos;...\n"
      example:
      - "\nGenrPopulation pop = new GenrPopulation(5);\n[][] charPop = pop.BinaryPopulationChr(10);\n\nresult:\n\nChromosome: 0\n- 0, 1, 1, 1, 0, 0, 1, 0, 1, 0,\nChromosome: 1\n- 1, 1, 1, 1, 0, 1, 0, 0, 0, 1,\nChromosome: 2\n- 1, 1, 0, 0, 0, 1, 0, 1, 0, 1,\nChromosome: 3\n- 0, 1, 0, 0, 1, 1, 1, 0, 1, 0,\nChromosome: 4\n- 1, 0, 0, 0, 1, 0, 1, 1, 1, 1,\n"
      syntax:
        content:
          CSharp: public char[][] BinaryPopulationChr(int sizeChromosome)
          VB: Public Function BinaryPopulationChr(sizeChromosome As Integer) As Char()()
        parameters:
        - id: sizeChromosome
          type: System.Int32
          description: The size of the chromosome
        return:
          type: System.Char[][]
          description: Population char[][]
      overload: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationChr*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrPopulation.CharPopulation(System.Int32,System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.GenrPopulation.CharPopulation(System.Int32,System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: CharPopulation(Int32, Int32, Int32)
        VB: CharPopulation(Int32, Int32, Int32)
      nameWithType:
        CSharp: GenrPopulation.CharPopulation(Int32, Int32, Int32)
        VB: GenrPopulation.CharPopulation(Int32, Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrPopulation.CharPopulation(System.Int32, System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.GenrPopulation.CharPopulation(System.Int32, System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: CharPopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrPopulation.cs
        startLine: 423
      summary: "\nGenr8 a Population composed by random chars.\nbased on this link: http://www.asciitable.com/\n"
      example:
      - "\n<pre><code> \nGenrPopulation pop = new GenrPopulation(5);\nchar[][] charPop = pop.CharPopulation(30, 50, 100);\n\n/// result:\nChromosome: 0\n- Q, 5, A, P, ^, \\, T, ^, F, ;, U, ?, Z, :, 5, E, B, ], S, H, A, L, I, =, _, ~, E, B, @, H\nChromosome: 1\n- C, 7, T, ], W, W, 7, ?, 4, b, 4, C, L, ], I, Z, J, 8, :, A, S, b, L, 9, a, 7, Q, 6, U, T\nChromosome: 2\n- H, C, O, b, ], O, M, a, H, C, @, 5, [, U, F, b, 2, P, X, 7, W, ?, :, d, Z, E, P, L, a, R\nChromosome: 3\n- 7, 3, N, E, L, U, Y, N, 2, ^, ?, M, U, \\, 3, O, 9, [, X, c, 7, 3, C, O, b, ;, ;, P, :, I\nChromosome: 4\n- d, 2, 2, Z, =, ?, L, H, ;, V, :, H, P, ^,], ;, O, B, b, [, @, Y, Y, b, L, 5, T, c, G</code></pre>\n"
      syntax:
        content:
          CSharp: public char[][] CharPopulation(int sizeChromosome, int start, int end)
          VB: Public Function CharPopulation(sizeChromosome As Integer, start As Integer, end As Integer) As Char()()
        parameters:
        - id: sizeChromosome
          type: System.Int32
          description: The size of the chromosome
        - id: start
          type: System.Int32
          description: 'the start number for the table, inclusive: Eg: 97'
        - id: end
          type: System.Int32
          description: 'the end number for the table, inclusive: Eg: 122'
        return:
          type: System.Char[][]
          description: Population char[][]
      overload: Laga.GeneticAlgorithm.GenrPopulation.CharPopulation*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.GenrPopulation.PointPopulation(System.Int32,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
      commentId: M:Laga.GeneticAlgorithm.GenrPopulation.PointPopulation(System.Int32,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
      language: CSharp
      name:
        CSharp: PointPopulation(Int32, Single, Single, Single, Single, Single, Single)
        VB: PointPopulation(Int32, Single, Single, Single, Single, Single, Single)
      nameWithType:
        CSharp: GenrPopulation.PointPopulation(Int32, Single, Single, Single, Single, Single, Single)
        VB: GenrPopulation.PointPopulation(Int32, Single, Single, Single, Single, Single, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.GenrPopulation.PointPopulation(System.Int32, System.Single, System.Single, System.Single, System.Single, System.Single, System.Single)
        VB: Laga.GeneticAlgorithm.GenrPopulation.PointPopulation(System.Int32, System.Single, System.Single, System.Single, System.Single, System.Single, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: PointPopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\GenrPopulation.cs
        startLine: 470
      summary: "\nGenr8 a Random population of points [x,y,z]\n"
      example:
      - "\n<pre><code>GenrPopulation pop = new GenrPopulation(5);\npoint[][] pntPop = pop.PointPopulation(4, 0, 100d, 0d, 100d, 0d, 100d);\n\nresult:\nChromosome: 0\n- (67.06, 80, 95.77), (82.34, 41.8, 81.37), (74.42, 12.58, 46.27), (46.76, 59.55, 56.52),\nChromosome: 1\n- (56.48, 17.73, 27.91), (10.31, 68.15, 57.53), (62.79, 51.99, 29.98), (58.98, 41.34, 11.13),\nChromosome: 2\n- (38.26, 63.32, 64.84), (22.49, 65.4, 86.53), (42.75, 16.47, 12.87), (72.12, 70.32, 48.68),\nChromosome: 3\n- (32.05, 66.44, 0.96), (84.8, 18.4, 99.88), (48.29, 60.83, 37.58), (78.45, 42.13, 16.48),\nChromosome: 4\n- (79.54, 62.78, 7.36), (84.51, 83.64, 69.42), (1.99, 8.09, 38.65), (84.64, 44.09, 78.47),</code></pre>\n"
      syntax:
        content:
          CSharp: public Point[][] PointPopulation(int SizeChromosome, float minX, float maxX, float minY, float maxY, float minZ, float maxZ)
          VB: Public Function PointPopulation(SizeChromosome As Integer, minX As Single, maxX As Single, minY As Single, maxY As Single, minZ As Single, maxZ As Single) As Point()()
        parameters:
        - id: SizeChromosome
          type: System.Int32
          description: The length of the chromosome
        - id: minX
          type: System.Single
          description: The minimum value for X coordinate
        - id: maxX
          type: System.Single
          description: The maximum value for X coordinate
        - id: minY
          type: System.Single
          description: The minimum value for Y coordinate
        - id: maxY
          type: System.Single
          description: The maximum value for Y coordinate
        - id: minZ
          type: System.Single
          description: The minimum value for Z coordinate
        - id: maxZ
          type: System.Single
          description: The maximum value for Z coordinate
        return:
          type: LagaUnity.Point[][]
          description: a population of points
      overload: Laga.GeneticAlgorithm.GenrPopulation.PointPopulation*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
  - id: Laga.GeneticAlgorithm.LagaTools
    commentId: T:Laga.GeneticAlgorithm.LagaTools
    language: CSharp
    name:
      CSharp: LagaTools
      VB: LagaTools
    nameWithType:
      CSharp: LagaTools
      VB: LagaTools
    qualifiedName:
      CSharp: Laga.GeneticAlgorithm.LagaTools
      VB: Laga.GeneticAlgorithm.LagaTools
    type: Class
    assemblies:
    - Laga
    namespace: Laga.GeneticAlgorithm
    source:
      id: LagaTools
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
      startLine: 10
    summary: "\nA collection of methods to operate on Genetic operators and lists.\n"
    example: []
    syntax:
      content:
        CSharp: public static class LagaTools
        VB: Public Module LagaTools
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - static
      - class
      VB:
      - Public
      - Module
    items:
    - isExtensionMethod: true
      id: Laga.GeneticAlgorithm.LagaTools.BinaryChromosomeToInteger``1(``0[])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.BinaryChromosomeToInteger``1(``0[])
      language: CSharp
      name:
        CSharp: BinaryChromosomeToInteger<T>(T[])
        VB: BinaryChromosomeToInteger(Of T)(T())
      nameWithType:
        CSharp: LagaTools.BinaryChromosomeToInteger<T>(T[])
        VB: LagaTools.BinaryChromosomeToInteger(Of T)(T())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.BinaryChromosomeToInteger<T>(T[])
        VB: Laga.GeneticAlgorithm.LagaTools.BinaryChromosomeToInteger(Of T)(T())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BinaryChromosomeToInteger
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 19
      summary: "\nConvert a binary chromosome to an integer, base of 2.\n"
      example: []
      syntax:
        content:
          CSharp: public static int BinaryChromosomeToInteger<T>(this T[] chromosome)
          VB: >-
            <ExtensionAttribute>

            Public Shared Function BinaryChromosomeToInteger(Of T)(chromosome As T()) As Integer
        parameters:
        - id: chromosome
          type: '{T}[]'
          description: your chromosome
        typeParameters:
        - id: T
          description: chromosome type
        return:
          type: System.Int32
          description: int
      overload: Laga.GeneticAlgorithm.LagaTools.BinaryChromosomeToInteger*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - isExtensionMethod: true
      id: Laga.GeneticAlgorithm.LagaTools.ExtractDNA``1(``0[],System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.LagaTools.ExtractDNA``1(``0[],System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: ExtractDNA<T>(T[], Int32, Int32)
        VB: ExtractDNA(Of T)(T(), Int32, Int32)
      nameWithType:
        CSharp: LagaTools.ExtractDNA<T>(T[], Int32, Int32)
        VB: LagaTools.ExtractDNA(Of T)(T(), Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.ExtractDNA<T>(T[], System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.LagaTools.ExtractDNA(Of T)(T(), System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ExtractDNA
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 40
      summary: "\nExtract part of the DNA from a chromosome. \n"
      example: []
      syntax:
        content:
          CSharp: public static T[] ExtractDNA<T>(this T[] chromosome, int index, int length)
          VB: >-
            <ExtensionAttribute>

            Public Shared Function ExtractDNA(Of T)(chromosome As T(), index As Integer, length As Integer) As T()
        parameters:
        - id: chromosome
          type: '{T}[]'
          description: the chromosome
        - id: index
          type: System.Int32
          description: start the extraction
        - id: length
          type: System.Int32
          description: length of the extraction
        typeParameters:
        - id: T
          description: Any chromosome type
        return:
          type: '{T}[]'
          description: T[] A DNA segment from the original chromosome
      overload: Laga.GeneticAlgorithm.LagaTools.ExtractDNA*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.MinMaxValue``1(``0[])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.MinMaxValue``1(``0[])
      language: CSharp
      name:
        CSharp: MinMaxValue<T>(T[])
        VB: MinMaxValue(Of T)(T())
      nameWithType:
        CSharp: LagaTools.MinMaxValue<T>(T[])
        VB: LagaTools.MinMaxValue(Of T)(T())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.MinMaxValue<T>(T[])
        VB: Laga.GeneticAlgorithm.LagaTools.MinMaxValue(Of T)(T())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: MinMaxValue
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 53
      summary: "\nReturn the Min and Max values from an Array.\n"
      example: []
      syntax:
        content:
          CSharp: public static T[] MinMaxValue<T>(T[] genArray)
          VB: Public Shared Function MinMaxValue(Of T)(genArray As T()) As T()
        parameters:
        - id: genArray
          type: '{T}[]'
          description: The array where to extract the values
        typeParameters:
        - id: T
          description: 'Any number type like: int, double, float...'
        return:
          type: '{T}[]'
          description: Generic Array
      overload: Laga.GeneticAlgorithm.LagaTools.MinMaxValue*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Char[][])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Char[][])
      language: CSharp
      name:
        CSharp: ReversePopulation(Char[][])
        VB: ReversePopulation(Char()())
      nameWithType:
        CSharp: LagaTools.ReversePopulation(Char[][])
        VB: LagaTools.ReversePopulation(Char()())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Char[][])
        VB: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Char()())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReversePopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 66
      summary: "\nReverse the original Population\n"
      example: []
      syntax:
        content:
          CSharp: public static void ReversePopulation(char[][] charPop)
          VB: Public Shared Sub ReversePopulation(charPop As Char()())
        parameters:
        - id: charPop
          type: System.Char[][]
          description: char[][]
      overload: Laga.GeneticAlgorithm.LagaTools.ReversePopulation*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Prefix(System.String,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Prefix(System.String,System.Int32)
      language: CSharp
      name:
        CSharp: Prefix(String, Int32)
        VB: Prefix(String, Int32)
      nameWithType:
        CSharp: LagaTools.Prefix(String, Int32)
        VB: LagaTools.Prefix(String, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Prefix(System.String, System.Int32)
        VB: Laga.GeneticAlgorithm.LagaTools.Prefix(System.String, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Prefix
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 84
      summary: "\nGenerate prefixs.\n"
      example: []
      syntax:
        content:
          CSharp: public static string[] Prefix(string prefix, int size)
          VB: Public Shared Function Prefix(prefix As String, size As Integer) As String()
        parameters:
        - id: prefix
          type: System.String
          description: string prefix
        - id: size
          type: System.Int32
          description: the length of prefix to generate
        return:
          type: System.String[]
          description: string[]
      overload: Laga.GeneticAlgorithm.LagaTools.Prefix*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Parse(LagaUnity.Point[],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Parse(LagaUnity.Point[],System.Int32)
      language: CSharp
      name:
        CSharp: Parse(Point[], Int32)
        VB: Parse(Point(), Int32)
      nameWithType:
        CSharp: LagaTools.Parse(Point[], Int32)
        VB: LagaTools.Parse(Point(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Parse(LagaUnity.Point[], System.Int32)
        VB: Laga.GeneticAlgorithm.LagaTools.Parse(LagaUnity.Point(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Parse
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 101
      summary: "\nRound the location of a laga point, based on the round number\n"
      example: []
      syntax:
        content:
          CSharp: public static string[] Parse(Point[] points, int round)
          VB: Public Shared Function Parse(points As Point(), round As Integer) As String()
        parameters:
        - id: points
          type: LagaUnity.Point[]
          description: The points to round coordinates
        - id: round
          type: System.Int32
          description: round number coordinates
        return:
          type: System.String[]
          description: string[]
      overload: Laga.GeneticAlgorithm.LagaTools.Parse*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Parse(System.Double[])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Parse(System.Double[])
      language: CSharp
      name:
        CSharp: Parse(Double[])
        VB: Parse(Double())
      nameWithType:
        CSharp: LagaTools.Parse(Double[])
        VB: LagaTools.Parse(Double())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Parse(System.Double[])
        VB: Laga.GeneticAlgorithm.LagaTools.Parse(System.Double())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Parse
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 122
      summary: "\nParse any Chromosome type to string Array\n"
      example: []
      syntax:
        content:
          CSharp: public static string[] Parse(double[] any)
          VB: Public Shared Function Parse(any As Double()) As String()
        parameters:
        - id: any
          type: System.Double[]
          description: double[]
        return:
          type: System.String[]
          description: string[]
      overload: Laga.GeneticAlgorithm.LagaTools.Parse*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Parse(System.Int32[])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Parse(System.Int32[])
      language: CSharp
      name:
        CSharp: Parse(Int32[])
        VB: Parse(Int32())
      nameWithType:
        CSharp: LagaTools.Parse(Int32[])
        VB: LagaTools.Parse(Int32())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Parse(System.Int32[])
        VB: Laga.GeneticAlgorithm.LagaTools.Parse(System.Int32())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Parse
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 133
      summary: "\nParse a list of integers into a list of strings\n"
      example: []
      syntax:
        content:
          CSharp: public static string[] Parse(int[] any)
          VB: Public Shared Function Parse(any As Integer()) As String()
        parameters:
        - id: any
          type: System.Int32[]
          description: int[]
        return:
          type: System.String[]
          description: string[]
      overload: Laga.GeneticAlgorithm.LagaTools.Parse*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Parse(System.Single[])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Parse(System.Single[])
      language: CSharp
      name:
        CSharp: Parse(Single[])
        VB: Parse(Single())
      nameWithType:
        CSharp: LagaTools.Parse(Single[])
        VB: LagaTools.Parse(Single())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Parse(System.Single[])
        VB: Laga.GeneticAlgorithm.LagaTools.Parse(System.Single())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Parse
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 145
      summary: "\nParse a list of floats into a list of strings\n"
      example: []
      syntax:
        content:
          CSharp: public static string[] Parse(float[] any)
          VB: Public Shared Function Parse(any As Single()) As String()
        parameters:
        - id: any
          type: System.Single[]
          description: float[]
        return:
          type: System.String[]
          description: string[]
      overload: Laga.GeneticAlgorithm.LagaTools.Parse*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Parse(System.Char[])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Parse(System.Char[])
      language: CSharp
      name:
        CSharp: Parse(Char[])
        VB: Parse(Char())
      nameWithType:
        CSharp: LagaTools.Parse(Char[])
        VB: LagaTools.Parse(Char())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Parse(System.Char[])
        VB: Laga.GeneticAlgorithm.LagaTools.Parse(System.Char())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Parse
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 156
      summary: "\nParse a list of char to a list of strings\n"
      example: []
      syntax:
        content:
          CSharp: public static string[] Parse(char[] any)
          VB: Public Shared Function Parse(any As Char()) As String()
        parameters:
        - id: any
          type: System.Char[]
          description: char[]
        return:
          type: System.String[]
          description: string[]
      overload: Laga.GeneticAlgorithm.LagaTools.Parse*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Reverse(System.Single[])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Reverse(System.Single[])
      language: CSharp
      name:
        CSharp: Reverse(Single[])
        VB: Reverse(Single())
      nameWithType:
        CSharp: LagaTools.Reverse(Single[])
        VB: LagaTools.Reverse(Single())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Reverse(System.Single[])
        VB: Laga.GeneticAlgorithm.LagaTools.Reverse(System.Single())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Reverse
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 166
      summary: "\nReverse the original array of floats.\n"
      example: []
      syntax:
        content:
          CSharp: public static void Reverse(float[] arrFloat)
          VB: Public Shared Sub Reverse(arrFloat As Single())
        parameters:
        - id: arrFloat
          type: System.Single[]
          description: float[]
      overload: Laga.GeneticAlgorithm.LagaTools.Reverse*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Reverse(System.Int32[])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Reverse(System.Int32[])
      language: CSharp
      name:
        CSharp: Reverse(Int32[])
        VB: Reverse(Int32())
      nameWithType:
        CSharp: LagaTools.Reverse(Int32[])
        VB: LagaTools.Reverse(Int32())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Reverse(System.Int32[])
        VB: Laga.GeneticAlgorithm.LagaTools.Reverse(System.Int32())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Reverse
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 181
      summary: "\nReverse the original array of integers\n"
      example: []
      syntax:
        content:
          CSharp: public static void Reverse(int[] arrInt)
          VB: Public Shared Sub Reverse(arrInt As Integer())
        parameters:
        - id: arrInt
          type: System.Int32[]
          description: int[]
      overload: Laga.GeneticAlgorithm.LagaTools.Reverse*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Reverse(System.Double[])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Reverse(System.Double[])
      language: CSharp
      name:
        CSharp: Reverse(Double[])
        VB: Reverse(Double())
      nameWithType:
        CSharp: LagaTools.Reverse(Double[])
        VB: LagaTools.Reverse(Double())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Reverse(System.Double[])
        VB: Laga.GeneticAlgorithm.LagaTools.Reverse(System.Double())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Reverse
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 196
      summary: "\nReverse the original array of doubles\n"
      example: []
      syntax:
        content:
          CSharp: public static void Reverse(double[] arrDbl)
          VB: Public Shared Sub Reverse(arrDbl As Double())
        parameters:
        - id: arrDbl
          type: System.Double[]
          description: double[]
      overload: Laga.GeneticAlgorithm.LagaTools.Reverse*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Int32[][])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Int32[][])
      language: CSharp
      name:
        CSharp: ReversePopulation(Int32[][])
        VB: ReversePopulation(Int32()())
      nameWithType:
        CSharp: LagaTools.ReversePopulation(Int32[][])
        VB: LagaTools.ReversePopulation(Int32()())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Int32[][])
        VB: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Int32()())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReversePopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 211
      summary: "\nReverse Original integer population\n"
      example: []
      syntax:
        content:
          CSharp: public static void ReversePopulation(int[][] intPop)
          VB: Public Shared Sub ReversePopulation(intPop As Integer()())
        parameters:
        - id: intPop
          type: System.Int32[][]
          description: int[][]
      overload: Laga.GeneticAlgorithm.LagaTools.ReversePopulation*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Double[][])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Double[][])
      language: CSharp
      name:
        CSharp: ReversePopulation(Double[][])
        VB: ReversePopulation(Double()())
      nameWithType:
        CSharp: LagaTools.ReversePopulation(Double[][])
        VB: LagaTools.ReversePopulation(Double()())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Double[][])
        VB: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Double()())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReversePopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 226
      summary: "\nReverse original double population\n"
      example: []
      syntax:
        content:
          CSharp: public static void ReversePopulation(double[][] dblPop)
          VB: Public Shared Sub ReversePopulation(dblPop As Double()())
        parameters:
        - id: dblPop
          type: System.Double[][]
          description: double[][]
      overload: Laga.GeneticAlgorithm.LagaTools.ReversePopulation*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Single[][])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Single[][])
      language: CSharp
      name:
        CSharp: ReversePopulation(Single[][])
        VB: ReversePopulation(Single()())
      nameWithType:
        CSharp: LagaTools.ReversePopulation(Single[][])
        VB: LagaTools.ReversePopulation(Single()())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Single[][])
        VB: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Single()())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReversePopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 241
      summary: "\nReverse original float population\n"
      example: []
      syntax:
        content:
          CSharp: public static void ReversePopulation(float[][] flPop)
          VB: Public Shared Sub ReversePopulation(flPop As Single()())
        parameters:
        - id: flPop
          type: System.Single[][]
          description: float[][]
      overload: Laga.GeneticAlgorithm.LagaTools.ReversePopulation*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Object[][])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Object[][])
      language: CSharp
      name:
        CSharp: ReversePopulation(Object[][])
        VB: ReversePopulation(Object()())
      nameWithType:
        CSharp: LagaTools.ReversePopulation(Object[][])
        VB: LagaTools.ReversePopulation(Object()())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Object[][])
        VB: Laga.GeneticAlgorithm.LagaTools.ReversePopulation(System.Object()())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReversePopulation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 256
      summary: "\nReverse original object population\n"
      example: []
      syntax:
        content:
          CSharp: public static void ReversePopulation(object[][] objPop)
          VB: Public Shared Sub ReversePopulation(objPop As Object()())
        parameters:
        - id: objPop
          type: System.Object[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.LagaTools.ReversePopulation*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates(System.Int32[])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Fisher_Yates(System.Int32[])
      language: CSharp
      name:
        CSharp: Fisher_Yates(Int32[])
        VB: Fisher_Yates(Int32())
      nameWithType:
        CSharp: LagaTools.Fisher_Yates(Int32[])
        VB: LagaTools.Fisher_Yates(Int32())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates(System.Int32[])
        VB: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates(System.Int32())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Fisher_Yates
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 273
      summary: "\nFisher-Yates Shuffle Algorithm for array of integers.\n"
      example: []
      syntax:
        content:
          CSharp: public static int[] Fisher_Yates(int[] arrInt)
          VB: Public Shared Function Fisher_Yates(arrInt As Integer()) As Integer()
        parameters:
        - id: arrInt
          type: System.Int32[]
          description: The array of integers to shuffle
        return:
          type: System.Int32[]
          description: ''
      overload: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - isExtensionMethod: true
      id: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates``1(``0[])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Fisher_Yates``1(``0[])
      language: CSharp
      name:
        CSharp: Fisher_Yates<T>(T[])
        VB: Fisher_Yates(Of T)(T())
      nameWithType:
        CSharp: LagaTools.Fisher_Yates<T>(T[])
        VB: LagaTools.Fisher_Yates(Of T)(T())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates<T>(T[])
        VB: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates(Of T)(T())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Fisher_Yates
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 296
      summary: "\nExperimental Fisher_Yates algorithm to shuffle the original array.\n"
      example: []
      syntax:
        content:
          CSharp: public static void Fisher_Yates<T>(this T[] arrData)
          VB: >-
            <ExtensionAttribute>

            Public Shared Sub Fisher_Yates(Of T)(arrData As T())
        parameters:
        - id: arrData
          type: '{T}[]'
          description: the array of data
        typeParameters:
        - id: T
          description: the type of data
      overload: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates(System.Object[])
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Fisher_Yates(System.Object[])
      language: CSharp
      name:
        CSharp: Fisher_Yates(Object[])
        VB: Fisher_Yates(Object())
      nameWithType:
        CSharp: LagaTools.Fisher_Yates(Object[])
        VB: LagaTools.Fisher_Yates(Object())
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates(System.Object[])
        VB: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates(System.Object())
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Fisher_Yates
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 314
      summary: "\nFisher-Yates Shuffle Algorithm for an array of objects.\n"
      example: []
      syntax:
        content:
          CSharp: public static object[] Fisher_Yates(object[] arrObj)
          VB: Public Shared Function Fisher_Yates(arrObj As Object()) As Object()
        parameters:
        - id: arrObj
          type: System.Object[]
          description: the array of objects to shuffle
        return:
          type: System.Object[]
          description: ''
      overload: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Fisher_YatesPercent(System.Object[],System.Single)
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Fisher_YatesPercent(System.Object[],System.Single)
      language: CSharp
      name:
        CSharp: Fisher_YatesPercent(Object[], Single)
        VB: Fisher_YatesPercent(Object(), Single)
      nameWithType:
        CSharp: LagaTools.Fisher_YatesPercent(Object[], Single)
        VB: LagaTools.Fisher_YatesPercent(Object(), Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Fisher_YatesPercent(System.Object[], System.Single)
        VB: Laga.GeneticAlgorithm.LagaTools.Fisher_YatesPercent(System.Object(), System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Fisher_YatesPercent
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 339
      summary: "\nFisher-Yates Shuffle Algorithm for an array of objects.\n"
      example: []
      syntax:
        content:
          CSharp: public static object[] Fisher_YatesPercent(object[] arrObj, float percent)
          VB: Public Shared Function Fisher_YatesPercent(arrObj As Object(), percent As Single) As Object()
        parameters:
        - id: arrObj
          type: System.Object[]
          description: the array of objects to shuffle
        - id: percent
          type: System.Single
          description: the percent to shuffle
        return:
          type: System.Object[]
          description: ''
      overload: Laga.GeneticAlgorithm.LagaTools.Fisher_YatesPercent*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.GetRandomNumber(System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.LagaTools.GetRandomNumber(System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: GetRandomNumber(Int32, Int32)
        VB: GetRandomNumber(Int32, Int32)
      nameWithType:
        CSharp: LagaTools.GetRandomNumber(Int32, Int32)
        VB: LagaTools.GetRandomNumber(Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.GetRandomNumber(System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.LagaTools.GetRandomNumber(System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: GetRandomNumber
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 371
      summary: "\nRandom integer number between range\n"
      example: []
      syntax:
        content:
          CSharp: public static int GetRandomNumber(int min, int max)
          VB: Public Shared Function GetRandomNumber(min As Integer, max As Integer) As Integer
        parameters:
        - id: min
          type: System.Int32
          description: int
        - id: max
          type: System.Int32
          description: int
        return:
          type: System.Int32
          description: int
      overload: Laga.GeneticAlgorithm.LagaTools.GetRandomNumber*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.GetRandomNumber
      commentId: M:Laga.GeneticAlgorithm.LagaTools.GetRandomNumber
      language: CSharp
      name:
        CSharp: GetRandomNumber()
        VB: GetRandomNumber()
      nameWithType:
        CSharp: LagaTools.GetRandomNumber()
        VB: LagaTools.GetRandomNumber()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.GetRandomNumber()
        VB: Laga.GeneticAlgorithm.LagaTools.GetRandomNumber()
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: GetRandomNumber
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 383
      summary: "\nRandom number\n"
      example: []
      syntax:
        content:
          CSharp: public static double GetRandomNumber()
          VB: Public Shared Function GetRandomNumber As Double
        return:
          type: System.Double
          description: ''
      overload: Laga.GeneticAlgorithm.LagaTools.GetRandomNumber*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.RandomCharBinary(System.Single)
      commentId: M:Laga.GeneticAlgorithm.LagaTools.RandomCharBinary(System.Single)
      language: CSharp
      name:
        CSharp: RandomCharBinary(Single)
        VB: RandomCharBinary(Single)
      nameWithType:
        CSharp: LagaTools.RandomCharBinary(Single)
        VB: LagaTools.RandomCharBinary(Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.RandomCharBinary(System.Single)
        VB: Laga.GeneticAlgorithm.LagaTools.RandomCharBinary(System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RandomCharBinary
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 396
      summary: "\nReturns a Char in the format 0 or 1\n"
      example: []
      syntax:
        content:
          CSharp: public static char RandomCharBinary(float thershold)
          VB: Public Shared Function RandomCharBinary(thershold As Single) As Char
        parameters:
        - id: thershold
          type: System.Single
          description: thershold parameter. 0.5 = 50%
        return:
          type: System.Char
          description: ''
      overload: Laga.GeneticAlgorithm.LagaTools.RandomCharBinary*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.RandomChar(System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.LagaTools.RandomChar(System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: RandomChar(Int32, Int32)
        VB: RandomChar(Int32, Int32)
      nameWithType:
        CSharp: LagaTools.RandomChar(Int32, Int32)
        VB: LagaTools.RandomChar(Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.RandomChar(System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.LagaTools.RandomChar(System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RandomChar
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 418
      summary: "\nGenerate a random char.\nbased on this link: http://www.asciitable.com/\n"
      example: []
      syntax:
        content:
          CSharp: public static char RandomChar(int start, int end)
          VB: Public Shared Function RandomChar(start As Integer, end As Integer) As Char
        parameters:
        - id: start
          type: System.Int32
          description: the start number for the table, inclusive
        - id: end
          type: System.Int32
          description: the end number for the table, inclusive
        return:
          type: System.Char
          description: char
      overload: Laga.GeneticAlgorithm.LagaTools.RandomChar*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.RandomInt(System.Int32,System.Int32,System.Single)
      commentId: M:Laga.GeneticAlgorithm.LagaTools.RandomInt(System.Int32,System.Int32,System.Single)
      language: CSharp
      name:
        CSharp: RandomInt(Int32, Int32, Single)
        VB: RandomInt(Int32, Int32, Single)
      nameWithType:
        CSharp: LagaTools.RandomInt(Int32, Int32, Single)
        VB: LagaTools.RandomInt(Int32, Int32, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.RandomInt(System.Int32, System.Int32, System.Single)
        VB: Laga.GeneticAlgorithm.LagaTools.RandomInt(System.Int32, System.Int32, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RandomInt
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 430
      summary: "\nReturn non repetead integers between a min max and percent.\n"
      example: []
      syntax:
        content:
          CSharp: public static int[] RandomInt(int min, int max, float percent)
          VB: Public Shared Function RandomInt(min As Integer, max As Integer, percent As Single) As Integer()
        parameters:
        - id: min
          type: System.Int32
          description: the minimum value
        - id: max
          type: System.Int32
          description: the maximum value
        - id: percent
          type: System.Single
          description: the percent of return, if 1f will return all the numbers.
        return:
          type: System.Int32[]
          description: array of integers if wrong array of 0
      overload: Laga.GeneticAlgorithm.LagaTools.RandomInt*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.LagaTools.Mom_Dad(System.Int32,System.Single)
      commentId: M:Laga.GeneticAlgorithm.LagaTools.Mom_Dad(System.Int32,System.Single)
      language: CSharp
      name:
        CSharp: Mom_Dad(Int32, Single)
        VB: Mom_Dad(Int32, Single)
      nameWithType:
        CSharp: LagaTools.Mom_Dad(Int32, Single)
        VB: LagaTools.Mom_Dad(Int32, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.LagaTools.Mom_Dad(System.Int32, System.Single)
        VB: Laga.GeneticAlgorithm.LagaTools.Mom_Dad(System.Int32, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Mom_Dad
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\LagaTools.cs
        startLine: 454
      summary: "\nNon repeated indexs.\n"
      example: []
      syntax:
        content:
          CSharp: public static int[] Mom_Dad(int lengthPop, float percent)
          VB: Public Shared Function Mom_Dad(lengthPop As Integer, percent As Single) As Integer()
        parameters:
        - id: lengthPop
          type: System.Int32
          description: the length of the population
        - id: percent
          type: System.Single
          description: the percent of mutation
        return:
          type: System.Int32[]
          description: array of indexs
      overload: Laga.GeneticAlgorithm.LagaTools.Mom_Dad*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
  - id: Laga.GeneticAlgorithm.Mutation
    commentId: T:Laga.GeneticAlgorithm.Mutation
    language: CSharp
    name:
      CSharp: Mutation
      VB: Mutation
    nameWithType:
      CSharp: Mutation
      VB: Mutation
    qualifiedName:
      CSharp: Laga.GeneticAlgorithm.Mutation
      VB: Laga.GeneticAlgorithm.Mutation
    type: Class
    assemblies:
    - Laga
    namespace: Laga.GeneticAlgorithm
    source:
      id: Mutation
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\Mutation.cs
      startLine: 8
    summary: "\nApply Mutations on the Population\n"
    example: []
    syntax:
      content:
        CSharp: public class Mutation
        VB: Public Class Mutation
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.GeneticAlgorithm.Mutation.#ctor(System.Single)
      commentId: M:Laga.GeneticAlgorithm.Mutation.#ctor(System.Single)
      language: CSharp
      name:
        CSharp: Mutation(Single)
        VB: Mutation(Single)
      nameWithType:
        CSharp: Mutation.Mutation(Single)
        VB: Mutation.Mutation(Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Mutation.Mutation(System.Single)
        VB: Laga.GeneticAlgorithm.Mutation.Mutation(System.Single)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Mutation.cs
        startLine: 20
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public Mutation(float MutationRate)
          VB: Public Sub New(MutationRate As Single)
        parameters:
        - id: MutationRate
          type: System.Single
          description: ''
      overload: Laga.GeneticAlgorithm.Mutation.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Mutation.CharMutation(Laga.GeneticAlgorithm.Population{System.Char},System.Single,System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Mutation.CharMutation(Laga.GeneticAlgorithm.Population{System.Char},System.Single,System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: CharMutation(Population<Char>, Single, Int32, Int32)
        VB: CharMutation(Population(Of Char), Single, Int32, Int32)
      nameWithType:
        CSharp: Mutation.CharMutation(Population<Char>, Single, Int32, Int32)
        VB: Mutation.CharMutation(Population(Of Char), Single, Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Mutation.CharMutation(Laga.GeneticAlgorithm.Population<System.Char>, System.Single, System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.Mutation.CharMutation(Laga.GeneticAlgorithm.Population(Of System.Char), System.Single, System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: CharMutation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Mutation.cs
        startLine: 34
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public static Population<char> CharMutation(Population<char> population, float percentChrom, int start, int end)
          VB: Public Shared Function CharMutation(population As Population(Of Char), percentChrom As Single, start As Integer, end As Integer) As Population(Of Char)
        parameters:
        - id: population
          type: Laga.GeneticAlgorithm.Population{System.Char}
          description: ''
        - id: percentChrom
          type: System.Single
          description: ''
        - id: start
          type: System.Int32
          description: ''
        - id: end
          type: System.Int32
          description: ''
        return:
          type: Laga.GeneticAlgorithm.Population{System.Char}
          description: ''
      overload: Laga.GeneticAlgorithm.Mutation.CharMutation*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.Mutation.Number(Laga.GeneticAlgorithm.Population{System.Double},System.Single,System.Double,System.Double)
      commentId: M:Laga.GeneticAlgorithm.Mutation.Number(Laga.GeneticAlgorithm.Population{System.Double},System.Single,System.Double,System.Double)
      language: CSharp
      name:
        CSharp: Number(Population<Double>, Single, Double, Double)
        VB: Number(Population(Of Double), Single, Double, Double)
      nameWithType:
        CSharp: Mutation.Number(Population<Double>, Single, Double, Double)
        VB: Mutation.Number(Population(Of Double), Single, Double, Double)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Mutation.Number(Laga.GeneticAlgorithm.Population<System.Double>, System.Single, System.Double, System.Double)
        VB: Laga.GeneticAlgorithm.Mutation.Number(Laga.GeneticAlgorithm.Population(Of System.Double), System.Single, System.Double, System.Double)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Number
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Mutation.cs
        startLine: 59
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public static Population<double> Number(Population<double> population, float MutationRate, double min, double max)
          VB: Public Shared Function Number(population As Population(Of Double), MutationRate As Single, min As Double, max As Double) As Population(Of Double)
        parameters:
        - id: population
          type: Laga.GeneticAlgorithm.Population{System.Double}
          description: ''
        - id: MutationRate
          type: System.Single
          description: ''
        - id: min
          type: System.Double
          description: ''
        - id: max
          type: System.Double
          description: ''
        return:
          type: Laga.GeneticAlgorithm.Population{System.Double}
          description: ''
      overload: Laga.GeneticAlgorithm.Mutation.Number*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.Mutation.MutationSwap(System.Object[][],System.Single)
      commentId: M:Laga.GeneticAlgorithm.Mutation.MutationSwap(System.Object[][],System.Single)
      language: CSharp
      name:
        CSharp: MutationSwap(Object[][], Single)
        VB: MutationSwap(Object()(), Single)
      nameWithType:
        CSharp: Mutation.MutationSwap(Object[][], Single)
        VB: Mutation.MutationSwap(Object()(), Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Mutation.MutationSwap(System.Object[][], System.Single)
        VB: Laga.GeneticAlgorithm.Mutation.MutationSwap(System.Object()(), System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: MutationSwap
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Mutation.cs
        startLine: 85
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public object[][] MutationSwap(object[][] pop, float percentChrom)
          VB: Public Function MutationSwap(pop As Object()(), percentChrom As Single) As Object()()
        parameters:
        - id: pop
          type: System.Object[][]
          description: ''
        - id: percentChrom
          type: System.Single
          description: ''
        return:
          type: System.Object[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Mutation.MutationSwap*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Mutation.NumbMutation(System.Double[][],System.Double,System.Double,System.Single)
      commentId: M:Laga.GeneticAlgorithm.Mutation.NumbMutation(System.Double[][],System.Double,System.Double,System.Single)
      language: CSharp
      name:
        CSharp: NumbMutation(Double[][], Double, Double, Single)
        VB: NumbMutation(Double()(), Double, Double, Single)
      nameWithType:
        CSharp: Mutation.NumbMutation(Double[][], Double, Double, Single)
        VB: Mutation.NumbMutation(Double()(), Double, Double, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Mutation.NumbMutation(System.Double[][], System.Double, System.Double, System.Single)
        VB: Laga.GeneticAlgorithm.Mutation.NumbMutation(System.Double()(), System.Double, System.Double, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: NumbMutation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Mutation.cs
        startLine: 142
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public double[][] NumbMutation(double[][] pop, double min, double max, float percentChrom)
          VB: Public Function NumbMutation(pop As Double()(), min As Double, max As Double, percentChrom As Single) As Double()()
        parameters:
        - id: pop
          type: System.Double[][]
          description: ''
        - id: min
          type: System.Double
          description: ''
        - id: max
          type: System.Double
          description: ''
        - id: percentChrom
          type: System.Single
          description: ''
        return:
          type: System.Double[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Mutation.NumbMutation*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Mutation.NumbMutation(System.Single[][],System.Single,System.Single,System.Single)
      commentId: M:Laga.GeneticAlgorithm.Mutation.NumbMutation(System.Single[][],System.Single,System.Single,System.Single)
      language: CSharp
      name:
        CSharp: NumbMutation(Single[][], Single, Single, Single)
        VB: NumbMutation(Single()(), Single, Single, Single)
      nameWithType:
        CSharp: Mutation.NumbMutation(Single[][], Single, Single, Single)
        VB: Mutation.NumbMutation(Single()(), Single, Single, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Mutation.NumbMutation(System.Single[][], System.Single, System.Single, System.Single)
        VB: Laga.GeneticAlgorithm.Mutation.NumbMutation(System.Single()(), System.Single, System.Single, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: NumbMutation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Mutation.cs
        startLine: 192
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public float[][] NumbMutation(float[][] pop, float min, float max, float percentChrom)
          VB: Public Function NumbMutation(pop As Single()(), min As Single, max As Single, percentChrom As Single) As Single()()
        parameters:
        - id: pop
          type: System.Single[][]
          description: ''
        - id: min
          type: System.Single
          description: ''
        - id: max
          type: System.Single
          description: ''
        - id: percentChrom
          type: System.Single
          description: ''
        return:
          type: System.Single[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Mutation.NumbMutation*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Mutation.NumbMutation(System.Int32[][],System.Int32,System.Int32,System.Single)
      commentId: M:Laga.GeneticAlgorithm.Mutation.NumbMutation(System.Int32[][],System.Int32,System.Int32,System.Single)
      language: CSharp
      name:
        CSharp: NumbMutation(Int32[][], Int32, Int32, Single)
        VB: NumbMutation(Int32()(), Int32, Int32, Single)
      nameWithType:
        CSharp: Mutation.NumbMutation(Int32[][], Int32, Int32, Single)
        VB: Mutation.NumbMutation(Int32()(), Int32, Int32, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Mutation.NumbMutation(System.Int32[][], System.Int32, System.Int32, System.Single)
        VB: Laga.GeneticAlgorithm.Mutation.NumbMutation(System.Int32()(), System.Int32, System.Int32, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: NumbMutation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Mutation.cs
        startLine: 239
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public int[][] NumbMutation(int[][] pop, int min, int max, float percentChrom)
          VB: Public Function NumbMutation(pop As Integer()(), min As Integer, max As Integer, percentChrom As Single) As Integer()()
        parameters:
        - id: pop
          type: System.Int32[][]
          description: ''
        - id: min
          type: System.Int32
          description: ''
        - id: max
          type: System.Int32
          description: ''
        - id: percentChrom
          type: System.Single
          description: ''
        return:
          type: System.Int32[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Mutation.NumbMutation*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Mutation.BinaryCharMutation(System.Char[][],System.Single)
      commentId: M:Laga.GeneticAlgorithm.Mutation.BinaryCharMutation(System.Char[][],System.Single)
      language: CSharp
      name:
        CSharp: BinaryCharMutation(Char[][], Single)
        VB: BinaryCharMutation(Char()(), Single)
      nameWithType:
        CSharp: Mutation.BinaryCharMutation(Char[][], Single)
        VB: Mutation.BinaryCharMutation(Char()(), Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Mutation.BinaryCharMutation(System.Char[][], System.Single)
        VB: Laga.GeneticAlgorithm.Mutation.BinaryCharMutation(System.Char()(), System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BinaryCharMutation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Mutation.cs
        startLine: 285
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public char[][] BinaryCharMutation(char[][] pop, float ChroPercent)
          VB: Public Function BinaryCharMutation(pop As Char()(), ChroPercent As Single) As Char()()
        parameters:
        - id: pop
          type: System.Char[][]
          description: ''
        - id: ChroPercent
          type: System.Single
          description: ''
        return:
          type: System.Char[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Mutation.BinaryCharMutation*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Mutation.CharMutation(System.Char[][],System.Single,System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Mutation.CharMutation(System.Char[][],System.Single,System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: CharMutation(Char[][], Single, Int32, Int32)
        VB: CharMutation(Char()(), Single, Int32, Int32)
      nameWithType:
        CSharp: Mutation.CharMutation(Char[][], Single, Int32, Int32)
        VB: Mutation.CharMutation(Char()(), Single, Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Mutation.CharMutation(System.Char[][], System.Single, System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.Mutation.CharMutation(System.Char()(), System.Single, System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: CharMutation
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Mutation.cs
        startLine: 321
      summary: "\nA Mutation Algorithm\n"
      example: []
      syntax:
        content:
          CSharp: public char[][] CharMutation(char[][] pop, float ChroPercent, int start, int end)
          VB: Public Function CharMutation(pop As Char()(), ChroPercent As Single, start As Integer, end As Integer) As Char()()
        parameters:
        - id: pop
          type: System.Char[][]
          description: The population to perform the mutation
        - id: ChroPercent
          type: System.Single
          description: the percent of mutation in the chromosome
        - id: start
          type: System.Int32
          description: 'the start number for the table, inclusive: Eg: 97'
        - id: end
          type: System.Int32
          description: 'the end number for the table, inclusive: Eg: 122'
        return:
          type: System.Char[][]
          description: char[][]
      overload: Laga.GeneticAlgorithm.Mutation.CharMutation*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
  - id: Laga.GeneticAlgorithm.NaturalSelection`1
    commentId: T:Laga.GeneticAlgorithm.NaturalSelection`1
    language: CSharp
    name:
      CSharp: NaturalSelection<T>
      VB: NaturalSelection(Of T)
    nameWithType:
      CSharp: NaturalSelection<T>
      VB: NaturalSelection(Of T)
    qualifiedName:
      CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>
      VB: Laga.GeneticAlgorithm.NaturalSelection(Of T)
    type: Class
    assemblies:
    - Laga
    namespace: Laga.GeneticAlgorithm
    source:
      id: NaturalSelection
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
      startLine: 9
    summary: "\nNatural selection class\n"
    example: []
    syntax:
      content:
        CSharp: public class NaturalSelection<T>
        VB: Public Class NaturalSelection(Of T)
      typeParameters:
      - id: T
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.#ctor
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.#ctor
      language: CSharp
      name:
        CSharp: NaturalSelection()
        VB: NaturalSelection()
      nameWithType:
        CSharp: NaturalSelection<T>.NaturalSelection()
        VB: NaturalSelection(Of T).NaturalSelection()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.NaturalSelection()
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).NaturalSelection()
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 14
      summary: "\nThe class to select and operates on populations\n"
      example: []
      syntax:
        content:
          CSharp: public NaturalSelection()
          VB: Public Sub New
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin(Laga.GeneticAlgorithm.Population{`0},System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin(Laga.GeneticAlgorithm.Population{`0},System.Int32)
      language: CSharp
      name:
        CSharp: RouletteWheelNonPolinomicMin(Population<T>, Int32)
        VB: RouletteWheelNonPolinomicMin(Population(Of T), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheelNonPolinomicMin(Population<T>, Int32)
        VB: NaturalSelection(Of T).RouletteWheelNonPolinomicMin(Population(Of T), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheelNonPolinomicMin(Laga.GeneticAlgorithm.Population<T>, System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheelNonPolinomicMin(Laga.GeneticAlgorithm.Population(Of T), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheelNonPolinomicMin
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 58
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public static Population<T> RouletteWheelNonPolinomicMin(Population<T> population, int maxItem)
          VB: Public Shared Function RouletteWheelNonPolinomicMin(population As Population(Of T), maxItem As Integer) As Population(Of T)
        parameters:
        - id: population
          type: Laga.GeneticAlgorithm.Population{{T}}
          description: ''
        - id: maxItem
          type: System.Int32
          description: ''
        return:
          type: Laga.GeneticAlgorithm.Population{{T}}
          description: ''
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.Elitism(System.Object[][],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.Elitism(System.Object[][],System.Int32)
      language: CSharp
      name:
        CSharp: Elitism(Object[][], Int32)
        VB: Elitism(Object()(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.Elitism(Object[][], Int32)
        VB: NaturalSelection(Of T).Elitism(Object()(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.Elitism(System.Object[][], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).Elitism(System.Object()(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Elitism
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 128
      summary: "\nselect the number of the best individual in the population.\n"
      example: []
      syntax:
        content:
          CSharp: public object[][] Elitism(object[][] srtPopulation, int count)
          VB: Public Function Elitism(srtPopulation As Object()(), count As Integer) As Object()()
        parameters:
        - id: srtPopulation
          type: System.Object[][]
          description: The sorted population
        - id: count
          type: System.Int32
          description: The number of individuals to select
        return:
          type: System.Object[][]
          description: objec[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.Elitism*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.Elitism(System.Double[][],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.Elitism(System.Double[][],System.Int32)
      language: CSharp
      name:
        CSharp: Elitism(Double[][], Int32)
        VB: Elitism(Double()(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.Elitism(Double[][], Int32)
        VB: NaturalSelection(Of T).Elitism(Double()(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.Elitism(System.Double[][], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).Elitism(System.Double()(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Elitism
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 151
      summary: "\nselect the number of the best individual in the population.\n"
      example: []
      syntax:
        content:
          CSharp: public double[][] Elitism(double[][] srtPopulation, int count)
          VB: Public Function Elitism(srtPopulation As Double()(), count As Integer) As Double()()
        parameters:
        - id: srtPopulation
          type: System.Double[][]
          description: The sorted population
        - id: count
          type: System.Int32
          description: the number of individuals to select
        return:
          type: System.Double[][]
          description: double[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.Elitism*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.Elitism(System.Single[][],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.Elitism(System.Single[][],System.Int32)
      language: CSharp
      name:
        CSharp: Elitism(Single[][], Int32)
        VB: Elitism(Single()(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.Elitism(Single[][], Int32)
        VB: NaturalSelection(Of T).Elitism(Single()(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.Elitism(System.Single[][], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).Elitism(System.Single()(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Elitism
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 170
      summary: "\nselect the number of the best individual in the population.\n"
      example: []
      syntax:
        content:
          CSharp: public float[][] Elitism(float[][] srtPopulation, int count)
          VB: Public Function Elitism(srtPopulation As Single()(), count As Integer) As Single()()
        parameters:
        - id: srtPopulation
          type: System.Single[][]
          description: The sorted population
        - id: count
          type: System.Int32
          description: The number of individuals to select
        return:
          type: System.Single[][]
          description: float[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.Elitism*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.Elitism(System.Int32[][],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.Elitism(System.Int32[][],System.Int32)
      language: CSharp
      name:
        CSharp: Elitism(Int32[][], Int32)
        VB: Elitism(Int32()(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.Elitism(Int32[][], Int32)
        VB: NaturalSelection(Of T).Elitism(Int32()(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.Elitism(System.Int32[][], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).Elitism(System.Int32()(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Elitism
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 191
      summary: "\nselect the number of the best individual in the population.\n"
      example: []
      syntax:
        content:
          CSharp: public int[][] Elitism(int[][] srtPopulation, int count)
          VB: Public Function Elitism(srtPopulation As Integer()(), count As Integer) As Integer()()
        parameters:
        - id: srtPopulation
          type: System.Int32[][]
          description: The sorted population
        - id: count
          type: System.Int32
          description: The number of individuals to select
        return:
          type: System.Int32[][]
          description: int[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.Elitism*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.Elitism(System.Char[][],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.Elitism(System.Char[][],System.Int32)
      language: CSharp
      name:
        CSharp: Elitism(Char[][], Int32)
        VB: Elitism(Char()(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.Elitism(Char[][], Int32)
        VB: NaturalSelection(Of T).Elitism(Char()(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.Elitism(System.Char[][], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).Elitism(System.Char()(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Elitism
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 230
      summary: "\nselect the number of the best individual in the population.\n"
      example:
      - "\n<pre><code>GenrPopulation pop = new GenrPopulation(20);\nchar[][] charPop = pop.CharPopulation(5, 97, 122);\nfloat[] rndFitness = Rand.RandomNumbers(20, 0f, 1f);\nRankingSort rs = new RankingSort();\nrs.BidirectionalBubbleSort(charPop, rndFitness, false);\n\nNaturalSelection ns = new NaturalSelection();\nchar[][] nsPop = ns.Elitism(charPop, 5);</code></pre>\n"
      syntax:
        content:
          CSharp: public char[][] Elitism(char[][] srtPopulation, int count)
          VB: Public Function Elitism(srtPopulation As Char()(), count As Integer) As Char()()
        parameters:
        - id: srtPopulation
          type: System.Char[][]
          description: The sorted population
        - id: count
          type: System.Int32
          description: ''
        return:
          type: System.Char[][]
          description: char[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.Elitism*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin(System.Object[][],System.Int32[],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin(System.Object[][],System.Int32[],System.Int32)
      language: CSharp
      name:
        CSharp: RouletteWheelNonPolinomicMin(Object[][], Int32[], Int32)
        VB: RouletteWheelNonPolinomicMin(Object()(), Int32(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheelNonPolinomicMin(Object[][], Int32[], Int32)
        VB: NaturalSelection(Of T).RouletteWheelNonPolinomicMin(Object()(), Int32(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheelNonPolinomicMin(System.Object[][], System.Int32[], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheelNonPolinomicMin(System.Object()(), System.Int32(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheelNonPolinomicMin
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 258
      summary: "\nThe best ranked individuals have more chance to be selected than worst based in a non-polinomic curve (y = 1 / x)\n"
      example: []
      syntax:
        content:
          CSharp: public object[][] RouletteWheelNonPolinomicMin(object[][] srtPopulation, int[] results, int maxItem)
          VB: Public Function RouletteWheelNonPolinomicMin(srtPopulation As Object()(), results As Integer(), maxItem As Integer) As Object()()
        parameters:
        - id: srtPopulation
          type: System.Object[][]
          description: The sorted population
        - id: results
          type: System.Int32[]
          description: The result array from the evaluation
        - id: maxItem
          type: System.Int32
          description: Maximum number of selected individuals
        return:
          type: System.Object[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin(System.Double[][],System.Single[],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin(System.Double[][],System.Single[],System.Int32)
      language: CSharp
      name:
        CSharp: RouletteWheelNonPolinomicMin(Double[][], Single[], Int32)
        VB: RouletteWheelNonPolinomicMin(Double()(), Single(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheelNonPolinomicMin(Double[][], Single[], Int32)
        VB: NaturalSelection(Of T).RouletteWheelNonPolinomicMin(Double()(), Single(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheelNonPolinomicMin(System.Double[][], System.Single[], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheelNonPolinomicMin(System.Double()(), System.Single(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheelNonPolinomicMin
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 302
      summary: "\nThe best ranked individuals have more chance to be selected than worst based in a non-polinomic curve (y = 1 / x)\n"
      example: []
      syntax:
        content:
          CSharp: public double[][] RouletteWheelNonPolinomicMin(double[][] srtPopulation, float[] results, int maxItem)
          VB: Public Function RouletteWheelNonPolinomicMin(srtPopulation As Double()(), results As Single(), maxItem As Integer) As Double()()
        parameters:
        - id: srtPopulation
          type: System.Double[][]
          description: The sorted population
        - id: results
          type: System.Single[]
          description: The result array from the evaluation
        - id: maxItem
          type: System.Int32
          description: Maximum number of selected individuals
        return:
          type: System.Double[][]
          description: double[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin(System.Char[][],System.Single[],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin(System.Char[][],System.Single[],System.Int32)
      language: CSharp
      name:
        CSharp: RouletteWheelNonPolinomicMin(Char[][], Single[], Int32)
        VB: RouletteWheelNonPolinomicMin(Char()(), Single(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheelNonPolinomicMin(Char[][], Single[], Int32)
        VB: NaturalSelection(Of T).RouletteWheelNonPolinomicMin(Char()(), Single(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheelNonPolinomicMin(System.Char[][], System.Single[], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheelNonPolinomicMin(System.Char()(), System.Single(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheelNonPolinomicMin
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 356
      summary: "\nThe best ranked individuals have more chance to be selected than worst based in a non-polinomic curve (y = 1 / x)\n"
      example:
      - "\n<pre><code>GenrPopulation pop = new GenrPopulation(20);\nchar[][] charPop = pop.CharPopulation(5, 97, 122);\nfloat[] rndFitness = Rand.RandomNumbers(20, 0f, 1f);\nRankingSort rs = new RankingSort();\nrs.BidirectionalBubbleSort(charPop, rndFitness, false);\n\nNaturalSelection ns = new NaturalSelection();\nchar[][] nsPop = ns.RouletteWheelNonPolinomicMin(charPop, rndFitness, 10);</code></pre>\n"
      syntax:
        content:
          CSharp: public char[][] RouletteWheelNonPolinomicMin(char[][] srtPopulation, float[] results, int maxItem)
          VB: Public Function RouletteWheelNonPolinomicMin(srtPopulation As Char()(), results As Single(), maxItem As Integer) As Char()()
        parameters:
        - id: srtPopulation
          type: System.Char[][]
          description: The sorted population
        - id: results
          type: System.Single[]
          description: The result array from the evaluation
        - id: maxItem
          type: System.Int32
          description: Maximum number of selected individuals
        return:
          type: System.Char[][]
          description: char[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Object[][],System.Single[],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Object[][],System.Single[],System.Int32)
      language: CSharp
      name:
        CSharp: RouletteWheel(Object[][], Single[], Int32)
        VB: RouletteWheel(Object()(), Single(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheel(Object[][], Single[], Int32)
        VB: NaturalSelection(Of T).RouletteWheel(Object()(), Single(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheel(System.Object[][], System.Single[], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheel(System.Object()(), System.Single(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheel
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 400
      summary: "\nThe individual fitness is proportional to the possibilities of being selected.\n"
      example: []
      syntax:
        content:
          CSharp: public object[][] RouletteWheel(object[][] srtPopulation, float[] results, int maxItem)
          VB: Public Function RouletteWheel(srtPopulation As Object()(), results As Single(), maxItem As Integer) As Object()()
        parameters:
        - id: srtPopulation
          type: System.Object[][]
          description: The sorted population
        - id: results
          type: System.Single[]
          description: The result array from the evaluation
        - id: maxItem
          type: System.Int32
          description: Maximum number of selected individuals
        return:
          type: System.Object[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Double[][],System.Int32[],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Double[][],System.Int32[],System.Int32)
      language: CSharp
      name:
        CSharp: RouletteWheel(Double[][], Int32[], Int32)
        VB: RouletteWheel(Double()(), Int32(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheel(Double[][], Int32[], Int32)
        VB: NaturalSelection(Of T).RouletteWheel(Double()(), Int32(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheel(System.Double[][], System.Int32[], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheel(System.Double()(), System.Int32(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheel
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 442
      summary: "\nThe individual fitness is proportional to the possibilities of being selected.\n"
      example: []
      syntax:
        content:
          CSharp: public double[][] RouletteWheel(double[][] srtPopulation, int[] results, int maxItem)
          VB: Public Function RouletteWheel(srtPopulation As Double()(), results As Integer(), maxItem As Integer) As Double()()
        parameters:
        - id: srtPopulation
          type: System.Double[][]
          description: The sorted population
        - id: results
          type: System.Int32[]
          description: The result array from the evaluation
        - id: maxItem
          type: System.Int32
          description: Maximum number of selected individuals
        return:
          type: System.Double[][]
          description: double[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Single[][],System.Single[],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Single[][],System.Single[],System.Int32)
      language: CSharp
      name:
        CSharp: RouletteWheel(Single[][], Single[], Int32)
        VB: RouletteWheel(Single()(), Single(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheel(Single[][], Single[], Int32)
        VB: NaturalSelection(Of T).RouletteWheel(Single()(), Single(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheel(System.Single[][], System.Single[], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheel(System.Single()(), System.Single(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheel
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 484
      summary: "\nThe individual fitness is proportional to the possibilities of being selected.\n"
      example: []
      syntax:
        content:
          CSharp: public float[][] RouletteWheel(float[][] srtPopulation, float[] results, int maxItem)
          VB: Public Function RouletteWheel(srtPopulation As Single()(), results As Single(), maxItem As Integer) As Single()()
        parameters:
        - id: srtPopulation
          type: System.Single[][]
          description: The sorted population
        - id: results
          type: System.Single[]
          description: The result array from the evaluation
        - id: maxItem
          type: System.Int32
          description: Maximum number of selected individuals
        return:
          type: System.Single[][]
          description: float[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Single[][],System.Int32[],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Single[][],System.Int32[],System.Int32)
      language: CSharp
      name:
        CSharp: RouletteWheel(Single[][], Int32[], Int32)
        VB: RouletteWheel(Single()(), Int32(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheel(Single[][], Int32[], Int32)
        VB: NaturalSelection(Of T).RouletteWheel(Single()(), Int32(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheel(System.Single[][], System.Int32[], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheel(System.Single()(), System.Int32(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheel
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 526
      summary: "\nThe individual fitness is proportional to the possibilities of being selected.\n"
      example: []
      syntax:
        content:
          CSharp: public float[][] RouletteWheel(float[][] srtPopulation, int[] results, int maxItem)
          VB: Public Function RouletteWheel(srtPopulation As Single()(), results As Integer(), maxItem As Integer) As Single()()
        parameters:
        - id: srtPopulation
          type: System.Single[][]
          description: The sorted population
        - id: results
          type: System.Int32[]
          description: The result array from the evaluation
        - id: maxItem
          type: System.Int32
          description: Maximum number of selected individuals
        return:
          type: System.Single[][]
          description: float[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Int32[][],System.Single[],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Int32[][],System.Single[],System.Int32)
      language: CSharp
      name:
        CSharp: RouletteWheel(Int32[][], Single[], Int32)
        VB: RouletteWheel(Int32()(), Single(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheel(Int32[][], Single[], Int32)
        VB: NaturalSelection(Of T).RouletteWheel(Int32()(), Single(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheel(System.Int32[][], System.Single[], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheel(System.Int32()(), System.Single(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheel
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 568
      summary: "\nThe individual fitness is proportional to the possibilities of being selected.\n"
      example: []
      syntax:
        content:
          CSharp: public int[][] RouletteWheel(int[][] srtPopulation, float[] results, int maxItem)
          VB: Public Function RouletteWheel(srtPopulation As Integer()(), results As Single(), maxItem As Integer) As Integer()()
        parameters:
        - id: srtPopulation
          type: System.Int32[][]
          description: The sorted population
        - id: results
          type: System.Single[]
          description: The result array from the evaluation
        - id: maxItem
          type: System.Int32
          description: Maximum number of selected individuals
        return:
          type: System.Int32[][]
          description: int[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Char[][],System.Single[],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Char[][],System.Single[],System.Int32)
      language: CSharp
      name:
        CSharp: RouletteWheel(Char[][], Single[], Int32)
        VB: RouletteWheel(Char()(), Single(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheel(Char[][], Single[], Int32)
        VB: NaturalSelection(Of T).RouletteWheel(Char()(), Single(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheel(System.Char[][], System.Single[], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheel(System.Char()(), System.Single(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheel
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 610
      summary: "\nThe individual fitness is proportional to the possibilities of being selected.\n"
      example: []
      syntax:
        content:
          CSharp: public char[][] RouletteWheel(char[][] srtPopulation, float[] results, int maxItem)
          VB: Public Function RouletteWheel(srtPopulation As Char()(), results As Single(), maxItem As Integer) As Char()()
        parameters:
        - id: srtPopulation
          type: System.Char[][]
          description: The sorted population
        - id: results
          type: System.Single[]
          description: The result array from the evaluation
        - id: maxItem
          type: System.Int32
          description: Maximum number of selected individuals
        return:
          type: System.Char[][]
          description: char[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Char[][],System.Int32[],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel(System.Char[][],System.Int32[],System.Int32)
      language: CSharp
      name:
        CSharp: RouletteWheel(Char[][], Int32[], Int32)
        VB: RouletteWheel(Char()(), Int32(), Int32)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheel(Char[][], Int32[], Int32)
        VB: NaturalSelection(Of T).RouletteWheel(Char()(), Int32(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheel(System.Char[][], System.Int32[], System.Int32)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheel(System.Char()(), System.Int32(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheel
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 664
      summary: "\nThe individual fitness is proportional to the possibilities of being selected.\n"
      example:
      - "\n<pre><code>GenrPopulation pop = new GenrPopulation(20);\nchar[][] charPop = pop.CharPopulation(5, 97, 122);\nfloat[] rndFitness = Rand.RandomNumbers(20, 0f, 1f);\nRankingSort rs = new RankingSort();\nrs.BidirectionalBubbleSort(charPop, rndFitness, false);\n\nNaturalSelection ns = new NaturalSelection();\nchar[][] nsPop = ns.RouletteWheel(charPop, rndFitness, 5);</code></pre>\n"
      syntax:
        content:
          CSharp: public char[][] RouletteWheel(char[][] srtPopulation, int[] results, int maxItem)
          VB: Public Function RouletteWheel(srtPopulation As Char()(), results As Integer(), maxItem As Integer) As Char()()
        parameters:
        - id: srtPopulation
          type: System.Char[][]
          description: The sorted population
        - id: results
          type: System.Int32[]
          description: The result array from the evaluation
        - id: maxItem
          type: System.Int32
          description: Maximum number of selected individuals
        return:
          type: System.Char[][]
          description: char[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal(System.Object[][],System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Single)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal(System.Object[][],System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Single)
      language: CSharp
      name:
        CSharp: RouletteWheelSigmoidal(Object[][], Int32, Int32, Int32, Int32, Int32, Single)
        VB: RouletteWheelSigmoidal(Object()(), Int32, Int32, Int32, Int32, Int32, Single)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheelSigmoidal(Object[][], Int32, Int32, Int32, Int32, Int32, Single)
        VB: NaturalSelection(Of T).RouletteWheelSigmoidal(Object()(), Int32, Int32, Int32, Int32, Int32, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheelSigmoidal(System.Object[][], System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Single)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheelSigmoidal(System.Object()(), System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheelSigmoidal
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 715
      summary: "\nA roulette wheel selection distributed on a sigmoid curve \n"
      example: []
      syntax:
        content:
          CSharp: public object[][] RouletteWheelSigmoidal(object[][] srtPopulation, int sizeRoulette, int A1, int A2, int B1, int B2, float s)
          VB: Public Function RouletteWheelSigmoidal(srtPopulation As Object()(), sizeRoulette As Integer, A1 As Integer, A2 As Integer, B1 As Integer, B2 As Integer, s As Single) As Object()()
        parameters:
        - id: srtPopulation
          type: System.Object[][]
          description: The sorted population
        - id: sizeRoulette
          type: System.Int32
          description: Number of individuals selected
        - id: A1
          type: System.Int32
          description: The maximum number of selected individuals in the roulette wheel
        - id: A2
          type: System.Int32
          description: The minimum number of selected individuals in the roulette wheel
        - id: B1
          type: System.Int32
          description: The start index in the population. 1 is the second individual
        - id: B2
          type: System.Int32
          description: The last index in the population. 5 is the sixth individual
        - id: s
          type: System.Single
          description: the factor decay, values between 0.00 and 1.00
        return:
          type: System.Object[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal(System.Double[][],System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Single)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal(System.Double[][],System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Single)
      language: CSharp
      name:
        CSharp: RouletteWheelSigmoidal(Double[][], Int32, Int32, Int32, Int32, Int32, Single)
        VB: RouletteWheelSigmoidal(Double()(), Int32, Int32, Int32, Int32, Int32, Single)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheelSigmoidal(Double[][], Int32, Int32, Int32, Int32, Int32, Single)
        VB: NaturalSelection(Of T).RouletteWheelSigmoidal(Double()(), Int32, Int32, Int32, Int32, Int32, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheelSigmoidal(System.Double[][], System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Single)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheelSigmoidal(System.Double()(), System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheelSigmoidal
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 755
      summary: "\nA roulette wheel selection distributed on a sigmoid curve \n"
      example: []
      syntax:
        content:
          CSharp: public double[][] RouletteWheelSigmoidal(double[][] srtPopulation, int sizeRoulette, int A1, int A2, int B1, int B2, float s)
          VB: Public Function RouletteWheelSigmoidal(srtPopulation As Double()(), sizeRoulette As Integer, A1 As Integer, A2 As Integer, B1 As Integer, B2 As Integer, s As Single) As Double()()
        parameters:
        - id: srtPopulation
          type: System.Double[][]
          description: The sorted population
        - id: sizeRoulette
          type: System.Int32
          description: Number of individuals selected
        - id: A1
          type: System.Int32
          description: The maximum number of selected individuals in the roulette wheel
        - id: A2
          type: System.Int32
          description: The minimum number of selected individuals in the roulette wheel
        - id: B1
          type: System.Int32
          description: The start index in the population. 1 is the second individual
        - id: B2
          type: System.Int32
          description: The last index in the population. 5 is the sixth individual
        - id: s
          type: System.Single
          description: the factor decay, values between 0.00 and 1.00
        return:
          type: System.Double[][]
          description: double[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal(System.Single[][],System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Single)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal(System.Single[][],System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Single)
      language: CSharp
      name:
        CSharp: RouletteWheelSigmoidal(Single[][], Int32, Int32, Int32, Int32, Int32, Single)
        VB: RouletteWheelSigmoidal(Single()(), Int32, Int32, Int32, Int32, Int32, Single)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheelSigmoidal(Single[][], Int32, Int32, Int32, Int32, Int32, Single)
        VB: NaturalSelection(Of T).RouletteWheelSigmoidal(Single()(), Int32, Int32, Int32, Int32, Int32, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheelSigmoidal(System.Single[][], System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Single)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheelSigmoidal(System.Single()(), System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheelSigmoidal
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 795
      summary: "\nA roulette wheel selection distributed on a sigmoid curve \n"
      example: []
      syntax:
        content:
          CSharp: public float[][] RouletteWheelSigmoidal(float[][] srtPopulation, int sizeRoulette, int A1, int A2, int B1, int B2, float s)
          VB: Public Function RouletteWheelSigmoidal(srtPopulation As Single()(), sizeRoulette As Integer, A1 As Integer, A2 As Integer, B1 As Integer, B2 As Integer, s As Single) As Single()()
        parameters:
        - id: srtPopulation
          type: System.Single[][]
          description: The sorted population
        - id: sizeRoulette
          type: System.Int32
          description: Number of individuals selected
        - id: A1
          type: System.Int32
          description: The maximum number of selected individuals in the roulette wheel
        - id: A2
          type: System.Int32
          description: The minimum number of selected individuals in the roulette wheel
        - id: B1
          type: System.Int32
          description: The start index in the population. 1 is the second individual
        - id: B2
          type: System.Int32
          description: The last index in the population. 5 is the sixth individual
        - id: s
          type: System.Single
          description: the factor decay, values between 0.00 and 1.00
        return:
          type: System.Single[][]
          description: float[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal(System.Char[][],System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Single)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal(System.Char[][],System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Single)
      language: CSharp
      name:
        CSharp: RouletteWheelSigmoidal(Char[][], Int32, Int32, Int32, Int32, Int32, Single)
        VB: RouletteWheelSigmoidal(Char()(), Int32, Int32, Int32, Int32, Int32, Single)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheelSigmoidal(Char[][], Int32, Int32, Int32, Int32, Int32, Single)
        VB: NaturalSelection(Of T).RouletteWheelSigmoidal(Char()(), Int32, Int32, Int32, Int32, Int32, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheelSigmoidal(System.Char[][], System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Single)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheelSigmoidal(System.Char()(), System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheelSigmoidal
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 835
      summary: "\nA roulette wheel selection distributed on a sigmoid curve \n"
      example: []
      syntax:
        content:
          CSharp: public char[][] RouletteWheelSigmoidal(char[][] srtPopulation, int sizeRoulette, int A1, int A2, int B1, int B2, float s)
          VB: Public Function RouletteWheelSigmoidal(srtPopulation As Char()(), sizeRoulette As Integer, A1 As Integer, A2 As Integer, B1 As Integer, B2 As Integer, s As Single) As Char()()
        parameters:
        - id: srtPopulation
          type: System.Char[][]
          description: The sorted population
        - id: sizeRoulette
          type: System.Int32
          description: Number of individuals selected
        - id: A1
          type: System.Int32
          description: The maximum number of selected individuals in the roulette wheel
        - id: A2
          type: System.Int32
          description: The minimum number of selected individuals in the roulette wheel
        - id: B1
          type: System.Int32
          description: The start index in the population. 1 is the second individual
        - id: B2
          type: System.Int32
          description: The last index in the population. 5 is the sixth individual
        - id: s
          type: System.Single
          description: the factor decay, values between 0.00 and 1.00
        return:
          type: System.Char[][]
          description: char[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal(System.Int32[][],System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Single)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal(System.Int32[][],System.Int32,System.Int32,System.Int32,System.Int32,System.Int32,System.Single)
      language: CSharp
      name:
        CSharp: RouletteWheelSigmoidal(Int32[][], Int32, Int32, Int32, Int32, Int32, Single)
        VB: RouletteWheelSigmoidal(Int32()(), Int32, Int32, Int32, Int32, Int32, Single)
      nameWithType:
        CSharp: NaturalSelection<T>.RouletteWheelSigmoidal(Int32[][], Int32, Int32, Int32, Int32, Int32, Single)
        VB: NaturalSelection(Of T).RouletteWheelSigmoidal(Int32()(), Int32, Int32, Int32, Int32, Int32, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheelSigmoidal(System.Int32[][], System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Single)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheelSigmoidal(System.Int32()(), System.Int32, System.Int32, System.Int32, System.Int32, System.Int32, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: RouletteWheelSigmoidal
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 875
      summary: "\nA roulette wheel selection distributed on a sigmoid curve \n"
      example: []
      syntax:
        content:
          CSharp: public int[][] RouletteWheelSigmoidal(int[][] srtPopulation, int sizeRoulette, int A1, int A2, int B1, int B2, float s)
          VB: Public Function RouletteWheelSigmoidal(srtPopulation As Integer()(), sizeRoulette As Integer, A1 As Integer, A2 As Integer, B1 As Integer, B2 As Integer, s As Single) As Integer()()
        parameters:
        - id: srtPopulation
          type: System.Int32[][]
          description: The sorted population
        - id: sizeRoulette
          type: System.Int32
          description: Number of individuals selected
        - id: A1
          type: System.Int32
          description: The maximum number of selected individuals in the roulette wheel
        - id: A2
          type: System.Int32
          description: The minimum number of selected individuals in the roulette wheel
        - id: B1
          type: System.Int32
          description: The start index in the population. 1 is the second individual
        - id: B2
          type: System.Int32
          description: The last index in the population. 5 is the sixth individual
        - id: s
          type: System.Single
          description: the factor decay, values between 0.00 and 1.00
        return:
          type: System.Int32[][]
          description: int[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Object[][],System.Int32[],System.Int32,System.Int32,System.String)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Object[][],System.Int32[],System.Int32,System.Int32,System.String)
      language: CSharp
      name:
        CSharp: TournamentSelection(Object[][], Int32[], Int32, Int32, String)
        VB: TournamentSelection(Object()(), Int32(), Int32, Int32, String)
      nameWithType:
        CSharp: NaturalSelection<T>.TournamentSelection(Object[][], Int32[], Int32, Int32, String)
        VB: NaturalSelection(Of T).TournamentSelection(Object()(), Int32(), Int32, Int32, String)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.TournamentSelection(System.Object[][], System.Int32[], System.Int32, System.Int32, System.String)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).TournamentSelection(System.Object()(), System.Int32(), System.Int32, System.Int32, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: TournamentSelection
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 917
      summary: "\nAs medieval tournament, the individuals have to compete in a tournament, \nthe tournament winner is selected.\n"
      example: []
      syntax:
        content:
          CSharp: public object[][] TournamentSelection(object[][] srtPopulation, int[] results, int numbTour, int preasure, string type)
          VB: Public Function TournamentSelection(srtPopulation As Object()(), results As Integer(), numbTour As Integer, preasure As Integer, type As String) As Object()()
        parameters:
        - id: srtPopulation
          type: System.Object[][]
          description: The sorted population
        - id: results
          type: System.Int32[]
          description: The result array from the evaluation
        - id: numbTour
          type: System.Int32
          description: Number of tournaments
        - id: preasure
          type: System.Int32
          description: Number of individuals in the tournament
        - id: type
          type: System.String
          description: if is &quot;min&quot; the smallest fitness is selected, otherwise the highest
        return:
          type: System.Object[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Object[][],System.Single[],System.Int32,System.Int32,System.String)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Object[][],System.Single[],System.Int32,System.Int32,System.String)
      language: CSharp
      name:
        CSharp: TournamentSelection(Object[][], Single[], Int32, Int32, String)
        VB: TournamentSelection(Object()(), Single(), Int32, Int32, String)
      nameWithType:
        CSharp: NaturalSelection<T>.TournamentSelection(Object[][], Single[], Int32, Int32, String)
        VB: NaturalSelection(Of T).TournamentSelection(Object()(), Single(), Int32, Int32, String)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.TournamentSelection(System.Object[][], System.Single[], System.Int32, System.Int32, System.String)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).TournamentSelection(System.Object()(), System.Single(), System.Int32, System.Int32, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: TournamentSelection
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 951
      summary: "\nAs medieval tournament, the individuals have to compete in a tournament, \nthe tournament winner is selected.\n"
      example: []
      syntax:
        content:
          CSharp: public object[][] TournamentSelection(object[][] srtPopulation, float[] results, int numbTour, int preasure, string type)
          VB: Public Function TournamentSelection(srtPopulation As Object()(), results As Single(), numbTour As Integer, preasure As Integer, type As String) As Object()()
        parameters:
        - id: srtPopulation
          type: System.Object[][]
          description: The sorted population
        - id: results
          type: System.Single[]
          description: The result array from the evaluation
        - id: numbTour
          type: System.Int32
          description: Number of tournaments
        - id: preasure
          type: System.Int32
          description: Number of individuals in the tournament
        - id: type
          type: System.String
          description: if is &quot;min&quot; the smallest fitness is selected, otherwise the highest
        return:
          type: System.Object[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Double[][],System.Single[],System.Int32,System.Int32,System.String)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Double[][],System.Single[],System.Int32,System.Int32,System.String)
      language: CSharp
      name:
        CSharp: TournamentSelection(Double[][], Single[], Int32, Int32, String)
        VB: TournamentSelection(Double()(), Single(), Int32, Int32, String)
      nameWithType:
        CSharp: NaturalSelection<T>.TournamentSelection(Double[][], Single[], Int32, Int32, String)
        VB: NaturalSelection(Of T).TournamentSelection(Double()(), Single(), Int32, Int32, String)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.TournamentSelection(System.Double[][], System.Single[], System.Int32, System.Int32, System.String)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).TournamentSelection(System.Double()(), System.Single(), System.Int32, System.Int32, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: TournamentSelection
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 986
      summary: "\nAs medieval tournament, the individuals have to compete in a tournament, \nthe tournament winner is selected.\n"
      example: []
      syntax:
        content:
          CSharp: public double[][] TournamentSelection(double[][] srtPopulation, float[] results, int numbTour, int preasure, string type)
          VB: Public Function TournamentSelection(srtPopulation As Double()(), results As Single(), numbTour As Integer, preasure As Integer, type As String) As Double()()
        parameters:
        - id: srtPopulation
          type: System.Double[][]
          description: The sorted population
        - id: results
          type: System.Single[]
          description: The result array from the evaluation
        - id: numbTour
          type: System.Int32
          description: Number of tournaments
        - id: preasure
          type: System.Int32
          description: Number of individuals in the tournament
        - id: type
          type: System.String
          description: if is &quot;min&quot; the smallest fitness is selected, otherwise the highest
        return:
          type: System.Double[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Double[][],System.Int32[],System.Int32,System.Int32,System.String)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Double[][],System.Int32[],System.Int32,System.Int32,System.String)
      language: CSharp
      name:
        CSharp: TournamentSelection(Double[][], Int32[], Int32, Int32, String)
        VB: TournamentSelection(Double()(), Int32(), Int32, Int32, String)
      nameWithType:
        CSharp: NaturalSelection<T>.TournamentSelection(Double[][], Int32[], Int32, Int32, String)
        VB: NaturalSelection(Of T).TournamentSelection(Double()(), Int32(), Int32, Int32, String)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.TournamentSelection(System.Double[][], System.Int32[], System.Int32, System.Int32, System.String)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).TournamentSelection(System.Double()(), System.Int32(), System.Int32, System.Int32, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: TournamentSelection
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 1020
      summary: "\nAs medieval tournament, the individuals have to compete in a tournament, \nthe tournament winner is selected.\n"
      example: []
      syntax:
        content:
          CSharp: public double[][] TournamentSelection(double[][] srtPopulation, int[] results, int numbTour, int preasure, string type)
          VB: Public Function TournamentSelection(srtPopulation As Double()(), results As Integer(), numbTour As Integer, preasure As Integer, type As String) As Double()()
        parameters:
        - id: srtPopulation
          type: System.Double[][]
          description: The sorted population
        - id: results
          type: System.Int32[]
          description: The result array from the evaluation
        - id: numbTour
          type: System.Int32
          description: Number of tournaments
        - id: preasure
          type: System.Int32
          description: Number of individuals in the tournament
        - id: type
          type: System.String
          description: if is &quot;min&quot; the smallest fitness is selected, otherwise the highest
        return:
          type: System.Double[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Single[][],System.Single[],System.Int32,System.Int32,System.String)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Single[][],System.Single[],System.Int32,System.Int32,System.String)
      language: CSharp
      name:
        CSharp: TournamentSelection(Single[][], Single[], Int32, Int32, String)
        VB: TournamentSelection(Single()(), Single(), Int32, Int32, String)
      nameWithType:
        CSharp: NaturalSelection<T>.TournamentSelection(Single[][], Single[], Int32, Int32, String)
        VB: NaturalSelection(Of T).TournamentSelection(Single()(), Single(), Int32, Int32, String)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.TournamentSelection(System.Single[][], System.Single[], System.Int32, System.Int32, System.String)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).TournamentSelection(System.Single()(), System.Single(), System.Int32, System.Int32, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: TournamentSelection
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 1054
      summary: "\nAs medieval tournament, the individuals have to compete in a tournament, \nthe tournament winner is selected.\n"
      example: []
      syntax:
        content:
          CSharp: public float[][] TournamentSelection(float[][] srtPopulation, float[] results, int numbTour, int preasure, string type)
          VB: Public Function TournamentSelection(srtPopulation As Single()(), results As Single(), numbTour As Integer, preasure As Integer, type As String) As Single()()
        parameters:
        - id: srtPopulation
          type: System.Single[][]
          description: The sorted population
        - id: results
          type: System.Single[]
          description: The result array from the evaluation
        - id: numbTour
          type: System.Int32
          description: Number of tournaments
        - id: preasure
          type: System.Int32
          description: Number of individuals in the tournament
        - id: type
          type: System.String
          description: if is &quot;min&quot; the smallest fitness is selected, otherwise the highest
        return:
          type: System.Single[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Single[][],System.Int32[],System.Int32,System.Int32,System.String)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Single[][],System.Int32[],System.Int32,System.Int32,System.String)
      language: CSharp
      name:
        CSharp: TournamentSelection(Single[][], Int32[], Int32, Int32, String)
        VB: TournamentSelection(Single()(), Int32(), Int32, Int32, String)
      nameWithType:
        CSharp: NaturalSelection<T>.TournamentSelection(Single[][], Int32[], Int32, Int32, String)
        VB: NaturalSelection(Of T).TournamentSelection(Single()(), Int32(), Int32, Int32, String)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.TournamentSelection(System.Single[][], System.Int32[], System.Int32, System.Int32, System.String)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).TournamentSelection(System.Single()(), System.Int32(), System.Int32, System.Int32, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: TournamentSelection
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 1088
      summary: "\nAs medieval tournament, the individuals have to compete in a tournament, \nthe tournament winner is selected.\n"
      example: []
      syntax:
        content:
          CSharp: public float[][] TournamentSelection(float[][] srtPopulation, int[] results, int numbTour, int preasure, string type)
          VB: Public Function TournamentSelection(srtPopulation As Single()(), results As Integer(), numbTour As Integer, preasure As Integer, type As String) As Single()()
        parameters:
        - id: srtPopulation
          type: System.Single[][]
          description: The sorted population
        - id: results
          type: System.Int32[]
          description: The result array from the evaluation
        - id: numbTour
          type: System.Int32
          description: Number of tournaments
        - id: preasure
          type: System.Int32
          description: Number of individuals in the tournament
        - id: type
          type: System.String
          description: if is &quot;min&quot; the smallest fitness is selected, otherwise the highest
        return:
          type: System.Single[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Int32[][],System.Single[],System.Int32,System.Int32,System.String)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Int32[][],System.Single[],System.Int32,System.Int32,System.String)
      language: CSharp
      name:
        CSharp: TournamentSelection(Int32[][], Single[], Int32, Int32, String)
        VB: TournamentSelection(Int32()(), Single(), Int32, Int32, String)
      nameWithType:
        CSharp: NaturalSelection<T>.TournamentSelection(Int32[][], Single[], Int32, Int32, String)
        VB: NaturalSelection(Of T).TournamentSelection(Int32()(), Single(), Int32, Int32, String)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.TournamentSelection(System.Int32[][], System.Single[], System.Int32, System.Int32, System.String)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).TournamentSelection(System.Int32()(), System.Single(), System.Int32, System.Int32, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: TournamentSelection
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 1122
      summary: "\nAs medieval tournament, the individuals have to compete in a tournament, \nthe tournament winner is selected.\n"
      example: []
      syntax:
        content:
          CSharp: public int[][] TournamentSelection(int[][] srtPopulation, float[] results, int numbTour, int preasure, string type)
          VB: Public Function TournamentSelection(srtPopulation As Integer()(), results As Single(), numbTour As Integer, preasure As Integer, type As String) As Integer()()
        parameters:
        - id: srtPopulation
          type: System.Int32[][]
          description: The sorted population
        - id: results
          type: System.Single[]
          description: The result array from the evaluation
        - id: numbTour
          type: System.Int32
          description: Number of tournaments
        - id: preasure
          type: System.Int32
          description: Number of individuals in the tournament
        - id: type
          type: System.String
          description: if is &quot;min&quot; the smallest fitness is selected, otherwise the highest
        return:
          type: System.Int32[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Int32[][],System.Int32[],System.Int32,System.Int32,System.String)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Int32[][],System.Int32[],System.Int32,System.Int32,System.String)
      language: CSharp
      name:
        CSharp: TournamentSelection(Int32[][], Int32[], Int32, Int32, String)
        VB: TournamentSelection(Int32()(), Int32(), Int32, Int32, String)
      nameWithType:
        CSharp: NaturalSelection<T>.TournamentSelection(Int32[][], Int32[], Int32, Int32, String)
        VB: NaturalSelection(Of T).TournamentSelection(Int32()(), Int32(), Int32, Int32, String)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.TournamentSelection(System.Int32[][], System.Int32[], System.Int32, System.Int32, System.String)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).TournamentSelection(System.Int32()(), System.Int32(), System.Int32, System.Int32, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: TournamentSelection
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 1156
      summary: "\nAs medieval tournament, the individuals have to compete in a tournament, \nthe tournament winner is selected.\n"
      example: []
      syntax:
        content:
          CSharp: public int[][] TournamentSelection(int[][] srtPopulation, int[] results, int numbTour, int preasure, string type)
          VB: Public Function TournamentSelection(srtPopulation As Integer()(), results As Integer(), numbTour As Integer, preasure As Integer, type As String) As Integer()()
        parameters:
        - id: srtPopulation
          type: System.Int32[][]
          description: The sorted population
        - id: results
          type: System.Int32[]
          description: The result array from the evaluation
        - id: numbTour
          type: System.Int32
          description: Number of tournaments
        - id: preasure
          type: System.Int32
          description: Number of individuals in the tournament
        - id: type
          type: System.String
          description: if is &quot;min&quot; the smallest fitness is selected, otherwise the highest
        return:
          type: System.Int32[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Char[][],System.Single[],System.Int32,System.Int32,System.String)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Char[][],System.Single[],System.Int32,System.Int32,System.String)
      language: CSharp
      name:
        CSharp: TournamentSelection(Char[][], Single[], Int32, Int32, String)
        VB: TournamentSelection(Char()(), Single(), Int32, Int32, String)
      nameWithType:
        CSharp: NaturalSelection<T>.TournamentSelection(Char[][], Single[], Int32, Int32, String)
        VB: NaturalSelection(Of T).TournamentSelection(Char()(), Single(), Int32, Int32, String)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.TournamentSelection(System.Char[][], System.Single[], System.Int32, System.Int32, System.String)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).TournamentSelection(System.Char()(), System.Single(), System.Int32, System.Int32, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: TournamentSelection
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 1190
      summary: "\nAs medieval tournament, the individuals have to compete in a tournament, \nthe tournament winner is selected.\n"
      example: []
      syntax:
        content:
          CSharp: public char[][] TournamentSelection(char[][] srtPopulation, float[] results, int numbTour, int preasure, string type)
          VB: Public Function TournamentSelection(srtPopulation As Char()(), results As Single(), numbTour As Integer, preasure As Integer, type As String) As Char()()
        parameters:
        - id: srtPopulation
          type: System.Char[][]
          description: The sorted population
        - id: results
          type: System.Single[]
          description: The result array from the evaluation
        - id: numbTour
          type: System.Int32
          description: Number of tournaments
        - id: preasure
          type: System.Int32
          description: Number of individuals in the tournament
        - id: type
          type: System.String
          description: if is &quot;min&quot; the smallest fitness is selected, otherwise the highest
        return:
          type: System.Char[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Char[][],System.Int32[],System.Int32,System.Int32,System.String)
      commentId: M:Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection(System.Char[][],System.Int32[],System.Int32,System.Int32,System.String)
      language: CSharp
      name:
        CSharp: TournamentSelection(Char[][], Int32[], Int32, Int32, String)
        VB: TournamentSelection(Char()(), Int32(), Int32, Int32, String)
      nameWithType:
        CSharp: NaturalSelection<T>.TournamentSelection(Char[][], Int32[], Int32, Int32, String)
        VB: NaturalSelection(Of T).TournamentSelection(Char()(), Int32(), Int32, Int32, String)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.NaturalSelection<T>.TournamentSelection(System.Char[][], System.Int32[], System.Int32, System.Int32, System.String)
        VB: Laga.GeneticAlgorithm.NaturalSelection(Of T).TournamentSelection(System.Char()(), System.Int32(), System.Int32, System.Int32, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: TournamentSelection
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\NaturalSelection.cs
        startLine: 1224
      summary: "\nAs medieval tournament, the individuals have to compete in a tournament, \nthe tournament winner is selected.\n"
      example: []
      syntax:
        content:
          CSharp: public char[][] TournamentSelection(char[][] srtPopulation, int[] results, int numbTour, int preasure, string type)
          VB: Public Function TournamentSelection(srtPopulation As Char()(), results As Integer(), numbTour As Integer, preasure As Integer, type As String) As Char()()
        parameters:
        - id: srtPopulation
          type: System.Char[][]
          description: The sorted population
        - id: results
          type: System.Int32[]
          description: The result array from the evaluation
        - id: numbTour
          type: System.Int32
          description: Number of tournaments
        - id: preasure
          type: System.Int32
          description: Number of individuals in the tournament
        - id: type
          type: System.String
          description: if is &quot;min&quot; the smallest fitness is selected, otherwise the highest
        return:
          type: System.Char[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
  - id: Laga.GeneticAlgorithm.Population`1
    commentId: T:Laga.GeneticAlgorithm.Population`1
    language: CSharp
    name:
      CSharp: Population<T>
      VB: Population(Of T)
    nameWithType:
      CSharp: Population<T>
      VB: Population(Of T)
    qualifiedName:
      CSharp: Laga.GeneticAlgorithm.Population<T>
      VB: Laga.GeneticAlgorithm.Population(Of T)
    type: Class
    assemblies:
    - Laga
    namespace: Laga.GeneticAlgorithm
    source:
      id: Population
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\Population.cs
      startLine: 12
    summary: "\nCreate and Manipulate Populations\n"
    example: []
    syntax:
      content:
        CSharp: 'public class Population<T> : IEnumerable'
        VB: >-
          Public Class Population(Of T)

              Implements IEnumerable
      typeParameters:
      - id: T
        description: ''
    inheritance:
    - System.Object
    implements:
    - System.Collections.IEnumerable
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.GeneticAlgorithm.Population`1.#ctor(System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Population`1.#ctor(System.Int32)
      language: CSharp
      name:
        CSharp: Population(Int32)
        VB: Population(Int32)
      nameWithType:
        CSharp: Population<T>.Population(Int32)
        VB: Population(Of T).Population(Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Population<T>.Population(System.Int32)
        VB: Laga.GeneticAlgorithm.Population(Of T).Population(System.Int32)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Population.cs
        startLine: 19
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public Population(int SizePopulation)
          VB: Public Sub New(SizePopulation As Integer)
        parameters:
        - id: SizePopulation
          type: System.Int32
          description: ''
      overload: Laga.GeneticAlgorithm.Population`1.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Population`1.#ctor
      commentId: M:Laga.GeneticAlgorithm.Population`1.#ctor
      language: CSharp
      name:
        CSharp: Population()
        VB: Population()
      nameWithType:
        CSharp: Population<T>.Population()
        VB: Population(Of T).Population()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Population<T>.Population()
        VB: Laga.GeneticAlgorithm.Population(Of T).Population()
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Population.cs
        startLine: 27
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public Population()
          VB: Public Sub New
      overload: Laga.GeneticAlgorithm.Population`1.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Population`1.Count
      commentId: P:Laga.GeneticAlgorithm.Population`1.Count
      language: CSharp
      name:
        CSharp: Count
        VB: Count
      nameWithType:
        CSharp: Population<T>.Count
        VB: Population(Of T).Count
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Population<T>.Count
        VB: Laga.GeneticAlgorithm.Population(Of T).Count
      type: Property
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Count
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Population.cs
        startLine: 37
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public int Count { get; }
          VB: Public ReadOnly Property Count As Integer
        parameters: []
        return:
          type: System.Int32
      overload: Laga.GeneticAlgorithm.Population`1.Count*
      modifiers:
        CSharp:
        - public
        - get
        VB:
        - Public
        - ReadOnly
    - id: Laga.GeneticAlgorithm.Population`1.Higher
      commentId: M:Laga.GeneticAlgorithm.Population`1.Higher
      language: CSharp
      name:
        CSharp: Higher()
        VB: Higher()
      nameWithType:
        CSharp: Population<T>.Higher()
        VB: Population(Of T).Higher()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Population<T>.Higher()
        VB: Laga.GeneticAlgorithm.Population(Of T).Higher()
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Higher
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Population.cs
        startLine: 49
      summary: "\nReturn the Higher Ranked Chromosome based on the fitness evaluation\n"
      example: []
      syntax:
        content:
          CSharp: public Chromosome<T> Higher()
          VB: Public Function Higher As Chromosome(Of T)
        return:
          type: Laga.GeneticAlgorithm.Chromosome{{T}}
          description: ''
      overload: Laga.GeneticAlgorithm.Population`1.Higher*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Population`1.Add(Laga.GeneticAlgorithm.Chromosome{`0})
      commentId: M:Laga.GeneticAlgorithm.Population`1.Add(Laga.GeneticAlgorithm.Chromosome{`0})
      language: CSharp
      name:
        CSharp: Add(Chromosome<T>)
        VB: Add(Chromosome(Of T))
      nameWithType:
        CSharp: Population<T>.Add(Chromosome<T>)
        VB: Population(Of T).Add(Chromosome(Of T))
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Population<T>.Add(Laga.GeneticAlgorithm.Chromosome<T>)
        VB: Laga.GeneticAlgorithm.Population(Of T).Add(Laga.GeneticAlgorithm.Chromosome(Of T))
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Add
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Population.cs
        startLine: 59
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public void Add(Chromosome<T> chromosome)
          VB: Public Sub Add(chromosome As Chromosome(Of T))
        parameters:
        - id: chromosome
          type: Laga.GeneticAlgorithm.Chromosome{{T}}
          description: ''
      overload: Laga.GeneticAlgorithm.Population`1.Add*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Population`1.Delete(System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Population`1.Delete(System.Int32)
      language: CSharp
      name:
        CSharp: Delete(Int32)
        VB: Delete(Int32)
      nameWithType:
        CSharp: Population<T>.Delete(Int32)
        VB: Population(Of T).Delete(Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Population<T>.Delete(System.Int32)
        VB: Laga.GeneticAlgorithm.Population(Of T).Delete(System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Delete
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Population.cs
        startLine: 68
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public void Delete(int index)
          VB: Public Sub Delete(index As Integer)
        parameters:
        - id: index
          type: System.Int32
          description: ''
      overload: Laga.GeneticAlgorithm.Population`1.Delete*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Population`1.Lower
      commentId: M:Laga.GeneticAlgorithm.Population`1.Lower
      language: CSharp
      name:
        CSharp: Lower()
        VB: Lower()
      nameWithType:
        CSharp: Population<T>.Lower()
        VB: Population(Of T).Lower()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Population<T>.Lower()
        VB: Laga.GeneticAlgorithm.Population(Of T).Lower()
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: Lower
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Population.cs
        startLine: 76
      summary: "\nReturn the Lower ranked chromosome based on the fitness evaluation\n"
      example: []
      syntax:
        content:
          CSharp: public Chromosome<T> Lower()
          VB: Public Function Lower As Chromosome(Of T)
        return:
          type: Laga.GeneticAlgorithm.Chromosome{{T}}
          description: ''
      overload: Laga.GeneticAlgorithm.Population`1.Lower*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Population`1.GetChromosome(System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Population`1.GetChromosome(System.Int32)
      language: CSharp
      name:
        CSharp: GetChromosome(Int32)
        VB: GetChromosome(Int32)
      nameWithType:
        CSharp: Population<T>.GetChromosome(Int32)
        VB: Population(Of T).GetChromosome(Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Population<T>.GetChromosome(System.Int32)
        VB: Laga.GeneticAlgorithm.Population(Of T).GetChromosome(System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: GetChromosome
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Population.cs
        startLine: 86
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public Chromosome<T> GetChromosome(int index)
          VB: Public Function GetChromosome(index As Integer) As Chromosome(Of T)
        parameters:
        - id: index
          type: System.Int32
          description: ''
        return:
          type: Laga.GeneticAlgorithm.Chromosome{{T}}
          description: ''
      overload: Laga.GeneticAlgorithm.Population`1.GetChromosome*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Population`1.FitnessAverage
      commentId: M:Laga.GeneticAlgorithm.Population`1.FitnessAverage
      language: CSharp
      name:
        CSharp: FitnessAverage()
        VB: FitnessAverage()
      nameWithType:
        CSharp: Population<T>.FitnessAverage()
        VB: Population(Of T).FitnessAverage()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Population<T>.FitnessAverage()
        VB: Laga.GeneticAlgorithm.Population(Of T).FitnessAverage()
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: FitnessAverage
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Population.cs
        startLine: 95
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public double FitnessAverage()
          VB: Public Function FitnessAverage As Double
        return:
          type: System.Double
          description: ''
      overload: Laga.GeneticAlgorithm.Population`1.FitnessAverage*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Population`1.GetEnumerator
      commentId: M:Laga.GeneticAlgorithm.Population`1.GetEnumerator
      language: CSharp
      name:
        CSharp: GetEnumerator()
        VB: GetEnumerator()
      nameWithType:
        CSharp: Population<T>.GetEnumerator()
        VB: Population(Of T).GetEnumerator()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Population<T>.GetEnumerator()
        VB: Laga.GeneticAlgorithm.Population(Of T).GetEnumerator()
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: GetEnumerator
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Population.cs
        startLine: 111
      summary: "\nIEnumerator\n"
      example: []
      syntax:
        content:
          CSharp: public IEnumerator GetEnumerator()
          VB: Public Function GetEnumerator As IEnumerator
        return:
          type: System.Collections.IEnumerator
          description: ''
      overload: Laga.GeneticAlgorithm.Population`1.GetEnumerator*
      implements:
      - System.Collections.IEnumerable.GetEnumerator
      modifiers:
        CSharp:
        - public
        VB:
        - Public
  - id: Laga.GeneticAlgorithm.RankingSort
    commentId: T:Laga.GeneticAlgorithm.RankingSort
    language: CSharp
    name:
      CSharp: RankingSort
      VB: RankingSort
    nameWithType:
      CSharp: RankingSort
      VB: RankingSort
    qualifiedName:
      CSharp: Laga.GeneticAlgorithm.RankingSort
      VB: Laga.GeneticAlgorithm.RankingSort
    type: Class
    assemblies:
    - Laga
    namespace: Laga.GeneticAlgorithm
    source:
      id: RankingSort
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\RankingSort.cs
      startLine: 9
    summary: "\nTo sort chromosomes in populations according to fitness evaluation.\n"
    example: []
    syntax:
      content:
        CSharp: public class RankingSort
        VB: Public Class RankingSort
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.GeneticAlgorithm.RankingSort.#ctor
      commentId: M:Laga.GeneticAlgorithm.RankingSort.#ctor
      language: CSharp
      name:
        CSharp: RankingSort()
        VB: RankingSort()
      nameWithType:
        CSharp: RankingSort.RankingSort()
        VB: RankingSort.RankingSort()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.RankingSort.RankingSort()
        VB: Laga.GeneticAlgorithm.RankingSort.RankingSort()
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\RankingSort.cs
        startLine: 24
      summary: "\nconstructor\n"
      example: []
      syntax:
        content:
          CSharp: public RankingSort()
          VB: Public Sub New
      overload: Laga.GeneticAlgorithm.RankingSort.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Object[][],System.Single[],System.Boolean)
      commentId: M:Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Object[][],System.Single[],System.Boolean)
      language: CSharp
      name:
        CSharp: BidirectionalBubbleSort(Object[][], Single[], Boolean)
        VB: BidirectionalBubbleSort(Object()(), Single(), Boolean)
      nameWithType:
        CSharp: RankingSort.BidirectionalBubbleSort(Object[][], Single[], Boolean)
        VB: RankingSort.BidirectionalBubbleSort(Object()(), Single(), Boolean)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Object[][], System.Single[], System.Boolean)
        VB: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Object()(), System.Single(), System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BidirectionalBubbleSort
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\RankingSort.cs
        startLine: 35
      summary: "\nSort the individuals in the population by fitness value.\n"
      example: []
      syntax:
        content:
          CSharp: public void BidirectionalBubbleSort(object[][] population, float[] arrResults, bool minmax)
          VB: Public Sub BidirectionalBubbleSort(population As Object()(), arrResults As Single(), minmax As Boolean)
        parameters:
        - id: population
          type: System.Object[][]
          description: population to sort
        - id: arrResults
          type: System.Single[]
          description: 'Array of fitness in the population. Only two flavors are supported: int[] and float[]'
        - id: minmax
          type: System.Boolean
          description: if is true the sort is by min to max, else max to min
      overload: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Object[][],System.Int32[],System.Boolean)
      commentId: M:Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Object[][],System.Int32[],System.Boolean)
      language: CSharp
      name:
        CSharp: BidirectionalBubbleSort(Object[][], Int32[], Boolean)
        VB: BidirectionalBubbleSort(Object()(), Int32(), Boolean)
      nameWithType:
        CSharp: RankingSort.BidirectionalBubbleSort(Object[][], Int32[], Boolean)
        VB: RankingSort.BidirectionalBubbleSort(Object()(), Int32(), Boolean)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Object[][], System.Int32[], System.Boolean)
        VB: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Object()(), System.Int32(), System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BidirectionalBubbleSort
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\RankingSort.cs
        startLine: 88
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public void BidirectionalBubbleSort(object[][] population, int[] arrResults, bool minmax)
          VB: Public Sub BidirectionalBubbleSort(population As Object()(), arrResults As Integer(), minmax As Boolean)
        parameters:
        - id: population
          type: System.Object[][]
          description: ''
        - id: arrResults
          type: System.Int32[]
          description: ''
        - id: minmax
          type: System.Boolean
          description: ''
      overload: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Double[][],System.Single[],System.Boolean)
      commentId: M:Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Double[][],System.Single[],System.Boolean)
      language: CSharp
      name:
        CSharp: BidirectionalBubbleSort(Double[][], Single[], Boolean)
        VB: BidirectionalBubbleSort(Double()(), Single(), Boolean)
      nameWithType:
        CSharp: RankingSort.BidirectionalBubbleSort(Double[][], Single[], Boolean)
        VB: RankingSort.BidirectionalBubbleSort(Double()(), Single(), Boolean)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Double[][], System.Single[], System.Boolean)
        VB: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Double()(), System.Single(), System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BidirectionalBubbleSort
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\RankingSort.cs
        startLine: 141
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public void BidirectionalBubbleSort(double[][] population, float[] arrResults, bool minmax)
          VB: Public Sub BidirectionalBubbleSort(population As Double()(), arrResults As Single(), minmax As Boolean)
        parameters:
        - id: population
          type: System.Double[][]
          description: ''
        - id: arrResults
          type: System.Single[]
          description: ''
        - id: minmax
          type: System.Boolean
          description: ''
      overload: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Double[][],System.Int32[],System.Boolean)
      commentId: M:Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Double[][],System.Int32[],System.Boolean)
      language: CSharp
      name:
        CSharp: BidirectionalBubbleSort(Double[][], Int32[], Boolean)
        VB: BidirectionalBubbleSort(Double()(), Int32(), Boolean)
      nameWithType:
        CSharp: RankingSort.BidirectionalBubbleSort(Double[][], Int32[], Boolean)
        VB: RankingSort.BidirectionalBubbleSort(Double()(), Int32(), Boolean)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Double[][], System.Int32[], System.Boolean)
        VB: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Double()(), System.Int32(), System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BidirectionalBubbleSort
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\RankingSort.cs
        startLine: 195
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public void BidirectionalBubbleSort(double[][] population, int[] arrResults, bool minmax)
          VB: Public Sub BidirectionalBubbleSort(population As Double()(), arrResults As Integer(), minmax As Boolean)
        parameters:
        - id: population
          type: System.Double[][]
          description: ''
        - id: arrResults
          type: System.Int32[]
          description: ''
        - id: minmax
          type: System.Boolean
          description: ''
      overload: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Single[][],System.Single[],System.Boolean)
      commentId: M:Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Single[][],System.Single[],System.Boolean)
      language: CSharp
      name:
        CSharp: BidirectionalBubbleSort(Single[][], Single[], Boolean)
        VB: BidirectionalBubbleSort(Single()(), Single(), Boolean)
      nameWithType:
        CSharp: RankingSort.BidirectionalBubbleSort(Single[][], Single[], Boolean)
        VB: RankingSort.BidirectionalBubbleSort(Single()(), Single(), Boolean)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Single[][], System.Single[], System.Boolean)
        VB: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Single()(), System.Single(), System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BidirectionalBubbleSort
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\RankingSort.cs
        startLine: 250
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public void BidirectionalBubbleSort(float[][] population, float[] arrResults, bool minmax)
          VB: Public Sub BidirectionalBubbleSort(population As Single()(), arrResults As Single(), minmax As Boolean)
        parameters:
        - id: population
          type: System.Single[][]
          description: ''
        - id: arrResults
          type: System.Single[]
          description: ''
        - id: minmax
          type: System.Boolean
          description: ''
      overload: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Single[][],System.Int32[],System.Boolean)
      commentId: M:Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Single[][],System.Int32[],System.Boolean)
      language: CSharp
      name:
        CSharp: BidirectionalBubbleSort(Single[][], Int32[], Boolean)
        VB: BidirectionalBubbleSort(Single()(), Int32(), Boolean)
      nameWithType:
        CSharp: RankingSort.BidirectionalBubbleSort(Single[][], Int32[], Boolean)
        VB: RankingSort.BidirectionalBubbleSort(Single()(), Int32(), Boolean)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Single[][], System.Int32[], System.Boolean)
        VB: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Single()(), System.Int32(), System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BidirectionalBubbleSort
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\RankingSort.cs
        startLine: 303
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public void BidirectionalBubbleSort(float[][] population, int[] arrResults, bool minmax)
          VB: Public Sub BidirectionalBubbleSort(population As Single()(), arrResults As Integer(), minmax As Boolean)
        parameters:
        - id: population
          type: System.Single[][]
          description: ''
        - id: arrResults
          type: System.Int32[]
          description: ''
        - id: minmax
          type: System.Boolean
          description: ''
      overload: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Int32[][],System.Single[],System.Boolean)
      commentId: M:Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Int32[][],System.Single[],System.Boolean)
      language: CSharp
      name:
        CSharp: BidirectionalBubbleSort(Int32[][], Single[], Boolean)
        VB: BidirectionalBubbleSort(Int32()(), Single(), Boolean)
      nameWithType:
        CSharp: RankingSort.BidirectionalBubbleSort(Int32[][], Single[], Boolean)
        VB: RankingSort.BidirectionalBubbleSort(Int32()(), Single(), Boolean)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Int32[][], System.Single[], System.Boolean)
        VB: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Int32()(), System.Single(), System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BidirectionalBubbleSort
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\RankingSort.cs
        startLine: 356
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public void BidirectionalBubbleSort(int[][] population, float[] arrResults, bool minmax)
          VB: Public Sub BidirectionalBubbleSort(population As Integer()(), arrResults As Single(), minmax As Boolean)
        parameters:
        - id: population
          type: System.Int32[][]
          description: ''
        - id: arrResults
          type: System.Single[]
          description: ''
        - id: minmax
          type: System.Boolean
          description: ''
      overload: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Int32[][],System.Int32[],System.Boolean)
      commentId: M:Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Int32[][],System.Int32[],System.Boolean)
      language: CSharp
      name:
        CSharp: BidirectionalBubbleSort(Int32[][], Int32[], Boolean)
        VB: BidirectionalBubbleSort(Int32()(), Int32(), Boolean)
      nameWithType:
        CSharp: RankingSort.BidirectionalBubbleSort(Int32[][], Int32[], Boolean)
        VB: RankingSort.BidirectionalBubbleSort(Int32()(), Int32(), Boolean)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Int32[][], System.Int32[], System.Boolean)
        VB: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Int32()(), System.Int32(), System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BidirectionalBubbleSort
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\RankingSort.cs
        startLine: 409
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public void BidirectionalBubbleSort(int[][] population, int[] arrResults, bool minmax)
          VB: Public Sub BidirectionalBubbleSort(population As Integer()(), arrResults As Integer(), minmax As Boolean)
        parameters:
        - id: population
          type: System.Int32[][]
          description: ''
        - id: arrResults
          type: System.Int32[]
          description: ''
        - id: minmax
          type: System.Boolean
          description: ''
      overload: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Char[][],System.Single[],System.Boolean)
      commentId: M:Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Char[][],System.Single[],System.Boolean)
      language: CSharp
      name:
        CSharp: BidirectionalBubbleSort(Char[][], Single[], Boolean)
        VB: BidirectionalBubbleSort(Char()(), Single(), Boolean)
      nameWithType:
        CSharp: RankingSort.BidirectionalBubbleSort(Char[][], Single[], Boolean)
        VB: RankingSort.BidirectionalBubbleSort(Char()(), Single(), Boolean)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Char[][], System.Single[], System.Boolean)
        VB: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Char()(), System.Single(), System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BidirectionalBubbleSort
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\RankingSort.cs
        startLine: 462
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public void BidirectionalBubbleSort(char[][] population, float[] arrResults, bool minmax)
          VB: Public Sub BidirectionalBubbleSort(population As Char()(), arrResults As Single(), minmax As Boolean)
        parameters:
        - id: population
          type: System.Char[][]
          description: ''
        - id: arrResults
          type: System.Single[]
          description: ''
        - id: minmax
          type: System.Boolean
          description: ''
      overload: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Char[][],System.Int32[],System.Boolean)
      commentId: M:Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Char[][],System.Int32[],System.Boolean)
      language: CSharp
      name:
        CSharp: BidirectionalBubbleSort(Char[][], Int32[], Boolean)
        VB: BidirectionalBubbleSort(Char()(), Int32(), Boolean)
      nameWithType:
        CSharp: RankingSort.BidirectionalBubbleSort(Char[][], Int32[], Boolean)
        VB: RankingSort.BidirectionalBubbleSort(Char()(), Int32(), Boolean)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Char[][], System.Int32[], System.Boolean)
        VB: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort(System.Char()(), System.Int32(), System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BidirectionalBubbleSort
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\RankingSort.cs
        startLine: 515
      summary: "\nAn optimised BidirectionalBubbleSort method. Sort the individuals in the population by fitness value.\n"
      example: []
      syntax:
        content:
          CSharp: public void BidirectionalBubbleSort(char[][] population, int[] arrResults, bool minmax)
          VB: Public Sub BidirectionalBubbleSort(population As Char()(), arrResults As Integer(), minmax As Boolean)
        parameters:
        - id: population
          type: System.Char[][]
          description: population to sort
        - id: arrResults
          type: System.Int32[]
          description: 'Array of fitness in the population. Only 2 flavors are supported: int[] and float[]'
        - id: minmax
          type: System.Boolean
          description: if is true the sort is by min to max, else max to min
      overload: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
  - id: Laga.GeneticAlgorithm.Replacement
    commentId: T:Laga.GeneticAlgorithm.Replacement
    language: CSharp
    name:
      CSharp: Replacement
      VB: Replacement
    nameWithType:
      CSharp: Replacement
      VB: Replacement
    qualifiedName:
      CSharp: Laga.GeneticAlgorithm.Replacement
      VB: Laga.GeneticAlgorithm.Replacement
    type: Class
    assemblies:
    - Laga
    namespace: Laga.GeneticAlgorithm
    source:
      id: Replacement
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
      startLine: 9
    summary: "\nTo replace old populations with new populations\n"
    example: []
    syntax:
      content:
        CSharp: public class Replacement
        VB: Public Class Replacement
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.GeneticAlgorithm.Replacement.#ctor
      commentId: M:Laga.GeneticAlgorithm.Replacement.#ctor
      language: CSharp
      name:
        CSharp: Replacement()
        VB: Replacement()
      nameWithType:
        CSharp: Replacement.Replacement()
        VB: Replacement.Replacement()
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.Replacement()
        VB: Laga.GeneticAlgorithm.Replacement.Replacement()
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 14
      summary: "\nReplacement class\n"
      example: []
      syntax:
        content:
          CSharp: public Replacement()
          VB: Public Sub New
      overload: Laga.GeneticAlgorithm.Replacement.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Object[][],System.Object[][],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Object[][],System.Object[][],System.Int32)
      language: CSharp
      name:
        CSharp: ReplaceInheritance(Object[][], Object[][], Int32)
        VB: ReplaceInheritance(Object()(), Object()(), Int32)
      nameWithType:
        CSharp: Replacement.ReplaceInheritance(Object[][], Object[][], Int32)
        VB: Replacement.ReplaceInheritance(Object()(), Object()(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Object[][], System.Object[][], System.Int32)
        VB: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Object()(), System.Object()(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReplaceInheritance
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 26
      summary: "\nThis replace method is ideal for combinatorial problems with objects types in chromsome. and where is not possible generate new data in the replacement population.\n"
      example: []
      syntax:
        content:
          CSharp: public object[][] ReplaceInheritance(object[][] sonMutPopulation, object[][] ParentsPopulation, int sizePopulation)
          VB: Public Function ReplaceInheritance(sonMutPopulation As Object()(), ParentsPopulation As Object()(), sizePopulation As Integer) As Object()()
        parameters:
        - id: sonMutPopulation
          type: System.Object[][]
          description: the son mutated population
        - id: ParentsPopulation
          type: System.Object[][]
          description: the parents population
        - id: sizePopulation
          type: System.Int32
          description: the size of the population
        return:
          type: System.Object[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Object[][],System.Single,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Object[][],System.Single,System.Int32)
      language: CSharp
      name:
        CSharp: ReplaceRandom(Object[][], Single, Int32)
        VB: ReplaceRandom(Object()(), Single, Int32)
      nameWithType:
        CSharp: Replacement.ReplaceRandom(Object[][], Single, Int32)
        VB: Replacement.ReplaceRandom(Object()(), Single, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Object[][], System.Single, System.Int32)
        VB: Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Object()(), System.Single, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReplaceRandom
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 67
      summary: "\nCreates a new population using the mutated inheritance and new random chromosomes.\n"
      example: []
      syntax:
        content:
          CSharp: public object[][] ReplaceRandom(object[][] sonMutPopulation, float percent, int sizePopulation)
          VB: Public Function ReplaceRandom(sonMutPopulation As Object()(), percent As Single, sizePopulation As Integer) As Object()()
        parameters:
        - id: sonMutPopulation
          type: System.Object[][]
          description: Object[][]
        - id: percent
          type: System.Single
          description: float
        - id: sizePopulation
          type: System.Int32
          description: int
        return:
          type: System.Object[][]
          description: object[][]
      overload: Laga.GeneticAlgorithm.Replacement.ReplaceRandom*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Object[][],System.Object[][],System.Int32,System.Single)
      commentId: M:Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Object[][],System.Object[][],System.Int32,System.Single)
      language: CSharp
      name:
        CSharp: ReplaceInheritanceRandom(Object[][], Object[][], Int32, Single)
        VB: ReplaceInheritanceRandom(Object()(), Object()(), Int32, Single)
      nameWithType:
        CSharp: Replacement.ReplaceInheritanceRandom(Object[][], Object[][], Int32, Single)
        VB: Replacement.ReplaceInheritanceRandom(Object()(), Object()(), Int32, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Object[][], System.Object[][], System.Int32, System.Single)
        VB: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Object()(), System.Object()(), System.Int32, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReplaceInheritanceRandom
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 121
      summary: "\nthis replace method is based in a mix between inheritance and random method, the percentInherit, determines how many individuals will(parents) and how many new ones will be created for the new population.\n"
      example: []
      syntax:
        content:
          CSharp: public object[][] ReplaceInheritanceRandom(object[][] sonMutPopulation, object[][] ParentsPopulation, int sizePopulation, float percentInherit)
          VB: Public Function ReplaceInheritanceRandom(sonMutPopulation As Object()(), ParentsPopulation As Object()(), sizePopulation As Integer, percentInherit As Single) As Object()()
        parameters:
        - id: sonMutPopulation
          type: System.Object[][]
          description: the son mutated population
        - id: ParentsPopulation
          type: System.Object[][]
          description: the parents population
        - id: sizePopulation
          type: System.Int32
          description: the size of the population
        - id: percentInherit
          type: System.Single
          description: percentInherit
        return:
          type: System.Object[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Double[][],System.Double[][],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Double[][],System.Double[][],System.Int32)
      language: CSharp
      name:
        CSharp: ReplaceInheritance(Double[][], Double[][], Int32)
        VB: ReplaceInheritance(Double()(), Double()(), Int32)
      nameWithType:
        CSharp: Replacement.ReplaceInheritance(Double[][], Double[][], Int32)
        VB: Replacement.ReplaceInheritance(Double()(), Double()(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Double[][], System.Double[][], System.Int32)
        VB: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Double()(), System.Double()(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReplaceInheritance
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 190
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public double[][] ReplaceInheritance(double[][] sonMutPopulation, double[][] ParentsPopulation, int sizePopulation)
          VB: Public Function ReplaceInheritance(sonMutPopulation As Double()(), ParentsPopulation As Double()(), sizePopulation As Integer) As Double()()
        parameters:
        - id: sonMutPopulation
          type: System.Double[][]
          description: ''
        - id: ParentsPopulation
          type: System.Double[][]
          description: ''
        - id: sizePopulation
          type: System.Int32
          description: ''
        return:
          type: System.Double[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Double[][],System.Int32,System.Double,System.Double)
      commentId: M:Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Double[][],System.Int32,System.Double,System.Double)
      language: CSharp
      name:
        CSharp: ReplaceRandom(Double[][], Int32, Double, Double)
        VB: ReplaceRandom(Double()(), Int32, Double, Double)
      nameWithType:
        CSharp: Replacement.ReplaceRandom(Double[][], Int32, Double, Double)
        VB: Replacement.ReplaceRandom(Double()(), Int32, Double, Double)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Double[][], System.Int32, System.Double, System.Double)
        VB: Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Double()(), System.Int32, System.Double, System.Double)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReplaceRandom
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 246
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public double[][] ReplaceRandom(double[][] sonMutPopulation, int sizePopulation, double min, double max)
          VB: Public Function ReplaceRandom(sonMutPopulation As Double()(), sizePopulation As Integer, min As Double, max As Double) As Double()()
        parameters:
        - id: sonMutPopulation
          type: System.Double[][]
          description: ''
        - id: sizePopulation
          type: System.Int32
          description: ''
        - id: min
          type: System.Double
          description: ''
        - id: max
          type: System.Double
          description: ''
        return:
          type: System.Double[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Replacement.ReplaceRandom*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Double[][],System.Double[][],System.Int32,System.Double,System.Double,System.Single)
      commentId: M:Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Double[][],System.Double[][],System.Int32,System.Double,System.Double,System.Single)
      language: CSharp
      name:
        CSharp: ReplaceInheritanceRandom(Double[][], Double[][], Int32, Double, Double, Single)
        VB: ReplaceInheritanceRandom(Double()(), Double()(), Int32, Double, Double, Single)
      nameWithType:
        CSharp: Replacement.ReplaceInheritanceRandom(Double[][], Double[][], Int32, Double, Double, Single)
        VB: Replacement.ReplaceInheritanceRandom(Double()(), Double()(), Int32, Double, Double, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Double[][], System.Double[][], System.Int32, System.Double, System.Double, System.Single)
        VB: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Double()(), System.Double()(), System.Int32, System.Double, System.Double, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReplaceInheritanceRandom
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 303
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public double[][] ReplaceInheritanceRandom(double[][] sonMutPopulation, double[][] ParentsPopulation, int sizePopulation, double min, double max, float percentInherit)
          VB: Public Function ReplaceInheritanceRandom(sonMutPopulation As Double()(), ParentsPopulation As Double()(), sizePopulation As Integer, min As Double, max As Double, percentInherit As Single) As Double()()
        parameters:
        - id: sonMutPopulation
          type: System.Double[][]
          description: ''
        - id: ParentsPopulation
          type: System.Double[][]
          description: ''
        - id: sizePopulation
          type: System.Int32
          description: ''
        - id: min
          type: System.Double
          description: ''
        - id: max
          type: System.Double
          description: ''
        - id: percentInherit
          type: System.Single
          description: ''
        return:
          type: System.Double[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Single[][],System.Single[][],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Single[][],System.Single[][],System.Int32)
      language: CSharp
      name:
        CSharp: ReplaceInheritance(Single[][], Single[][], Int32)
        VB: ReplaceInheritance(Single()(), Single()(), Int32)
      nameWithType:
        CSharp: Replacement.ReplaceInheritance(Single[][], Single[][], Int32)
        VB: Replacement.ReplaceInheritance(Single()(), Single()(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Single[][], System.Single[][], System.Int32)
        VB: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Single()(), System.Single()(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReplaceInheritance
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 374
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public float[][] ReplaceInheritance(float[][] sonMutPopulation, float[][] ParentsPopulation, int sizePopulation)
          VB: Public Function ReplaceInheritance(sonMutPopulation As Single()(), ParentsPopulation As Single()(), sizePopulation As Integer) As Single()()
        parameters:
        - id: sonMutPopulation
          type: System.Single[][]
          description: ''
        - id: ParentsPopulation
          type: System.Single[][]
          description: ''
        - id: sizePopulation
          type: System.Int32
          description: ''
        return:
          type: System.Single[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Single[][],System.Int32,System.Single,System.Single)
      commentId: M:Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Single[][],System.Int32,System.Single,System.Single)
      language: CSharp
      name:
        CSharp: ReplaceRandom(Single[][], Int32, Single, Single)
        VB: ReplaceRandom(Single()(), Int32, Single, Single)
      nameWithType:
        CSharp: Replacement.ReplaceRandom(Single[][], Int32, Single, Single)
        VB: Replacement.ReplaceRandom(Single()(), Int32, Single, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Single[][], System.Int32, System.Single, System.Single)
        VB: Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Single()(), System.Int32, System.Single, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReplaceRandom
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 429
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public float[][] ReplaceRandom(float[][] sonMutPopulation, int sizePopulation, float min, float max)
          VB: Public Function ReplaceRandom(sonMutPopulation As Single()(), sizePopulation As Integer, min As Single, max As Single) As Single()()
        parameters:
        - id: sonMutPopulation
          type: System.Single[][]
          description: ''
        - id: sizePopulation
          type: System.Int32
          description: ''
        - id: min
          type: System.Single
          description: ''
        - id: max
          type: System.Single
          description: ''
        return:
          type: System.Single[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Replacement.ReplaceRandom*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Single[][],System.Single[][],System.Int32,System.Single,System.Single,System.Single)
      commentId: M:Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Single[][],System.Single[][],System.Int32,System.Single,System.Single,System.Single)
      language: CSharp
      name:
        CSharp: ReplaceInheritanceRandom(Single[][], Single[][], Int32, Single, Single, Single)
        VB: ReplaceInheritanceRandom(Single()(), Single()(), Int32, Single, Single, Single)
      nameWithType:
        CSharp: Replacement.ReplaceInheritanceRandom(Single[][], Single[][], Int32, Single, Single, Single)
        VB: Replacement.ReplaceInheritanceRandom(Single()(), Single()(), Int32, Single, Single, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Single[][], System.Single[][], System.Int32, System.Single, System.Single, System.Single)
        VB: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Single()(), System.Single()(), System.Int32, System.Single, System.Single, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReplaceInheritanceRandom
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 486
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public float[][] ReplaceInheritanceRandom(float[][] sonMutPopulation, float[][] ParentsPopulation, int sizePopulation, float min, float max, float percentInherit)
          VB: Public Function ReplaceInheritanceRandom(sonMutPopulation As Single()(), ParentsPopulation As Single()(), sizePopulation As Integer, min As Single, max As Single, percentInherit As Single) As Single()()
        parameters:
        - id: sonMutPopulation
          type: System.Single[][]
          description: ''
        - id: ParentsPopulation
          type: System.Single[][]
          description: ''
        - id: sizePopulation
          type: System.Int32
          description: ''
        - id: min
          type: System.Single
          description: ''
        - id: max
          type: System.Single
          description: ''
        - id: percentInherit
          type: System.Single
          description: ''
        return:
          type: System.Single[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Int32[][],System.Int32[][],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Int32[][],System.Int32[][],System.Int32)
      language: CSharp
      name:
        CSharp: ReplaceInheritance(Int32[][], Int32[][], Int32)
        VB: ReplaceInheritance(Int32()(), Int32()(), Int32)
      nameWithType:
        CSharp: Replacement.ReplaceInheritance(Int32[][], Int32[][], Int32)
        VB: Replacement.ReplaceInheritance(Int32()(), Int32()(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Int32[][], System.Int32[][], System.Int32)
        VB: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance(System.Int32()(), System.Int32()(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReplaceInheritance
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 556
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public int[][] ReplaceInheritance(int[][] sonMutPopulation, int[][] ParentsPopulation, int sizePopulation)
          VB: Public Function ReplaceInheritance(sonMutPopulation As Integer()(), ParentsPopulation As Integer()(), sizePopulation As Integer) As Integer()()
        parameters:
        - id: sonMutPopulation
          type: System.Int32[][]
          description: ''
        - id: ParentsPopulation
          type: System.Int32[][]
          description: ''
        - id: sizePopulation
          type: System.Int32
          description: ''
        return:
          type: System.Int32[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Int32[][],System.Int32,System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Int32[][],System.Int32,System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: ReplaceRandom(Int32[][], Int32, Int32, Int32)
        VB: ReplaceRandom(Int32()(), Int32, Int32, Int32)
      nameWithType:
        CSharp: Replacement.ReplaceRandom(Int32[][], Int32, Int32, Int32)
        VB: Replacement.ReplaceRandom(Int32()(), Int32, Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Int32[][], System.Int32, System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.Replacement.ReplaceRandom(System.Int32()(), System.Int32, System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReplaceRandom
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 611
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public int[][] ReplaceRandom(int[][] sonMutPopulation, int sizePopulation, int min, int max)
          VB: Public Function ReplaceRandom(sonMutPopulation As Integer()(), sizePopulation As Integer, min As Integer, max As Integer) As Integer()()
        parameters:
        - id: sonMutPopulation
          type: System.Int32[][]
          description: ''
        - id: sizePopulation
          type: System.Int32
          description: ''
        - id: min
          type: System.Int32
          description: ''
        - id: max
          type: System.Int32
          description: ''
        return:
          type: System.Int32[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Replacement.ReplaceRandom*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Int32[][],System.Int32[][],System.Int32,System.Int32,System.Double,System.Single)
      commentId: M:Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Int32[][],System.Int32[][],System.Int32,System.Int32,System.Double,System.Single)
      language: CSharp
      name:
        CSharp: ReplaceInheritanceRandom(Int32[][], Int32[][], Int32, Int32, Double, Single)
        VB: ReplaceInheritanceRandom(Int32()(), Int32()(), Int32, Int32, Double, Single)
      nameWithType:
        CSharp: Replacement.ReplaceInheritanceRandom(Int32[][], Int32[][], Int32, Int32, Double, Single)
        VB: Replacement.ReplaceInheritanceRandom(Int32()(), Int32()(), Int32, Int32, Double, Single)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Int32[][], System.Int32[][], System.Int32, System.Int32, System.Double, System.Single)
        VB: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom(System.Int32()(), System.Int32()(), System.Int32, System.Int32, System.Double, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: ReplaceInheritanceRandom
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 669
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public int[][] ReplaceInheritanceRandom(int[][] sonMutPopulation, int[][] ParentsPopulation, int sizePopulation, int min, double max, float percentInherit)
          VB: Public Function ReplaceInheritanceRandom(sonMutPopulation As Integer()(), ParentsPopulation As Integer()(), sizePopulation As Integer, min As Integer, max As Double, percentInherit As Single) As Integer()()
        parameters:
        - id: sonMutPopulation
          type: System.Int32[][]
          description: ''
        - id: ParentsPopulation
          type: System.Int32[][]
          description: ''
        - id: sizePopulation
          type: System.Int32
          description: ''
        - id: min
          type: System.Int32
          description: ''
        - id: max
          type: System.Double
          description: ''
        - id: percentInherit
          type: System.Single
          description: ''
        return:
          type: System.Int32[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.BinaryCharRandomReplace(System.Char[][],System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Replacement.BinaryCharRandomReplace(System.Char[][],System.Int32)
      language: CSharp
      name:
        CSharp: BinaryCharRandomReplace(Char[][], Int32)
        VB: BinaryCharRandomReplace(Char()(), Int32)
      nameWithType:
        CSharp: Replacement.BinaryCharRandomReplace(Char[][], Int32)
        VB: Replacement.BinaryCharRandomReplace(Char()(), Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.BinaryCharRandomReplace(System.Char[][], System.Int32)
        VB: Laga.GeneticAlgorithm.Replacement.BinaryCharRandomReplace(System.Char()(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: BinaryCharRandomReplace
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 735
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public char[][] BinaryCharRandomReplace(char[][] newPartOfPopulation, int sizePopulation)
          VB: Public Function BinaryCharRandomReplace(newPartOfPopulation As Char()(), sizePopulation As Integer) As Char()()
        parameters:
        - id: newPartOfPopulation
          type: System.Char[][]
          description: ''
        - id: sizePopulation
          type: System.Int32
          description: ''
        return:
          type: System.Char[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Replacement.BinaryCharRandomReplace*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.GeneticAlgorithm.Replacement.CharRandomReplace(System.Char[][],System.Int32,System.Int32,System.Int32)
      commentId: M:Laga.GeneticAlgorithm.Replacement.CharRandomReplace(System.Char[][],System.Int32,System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: CharRandomReplace(Char[][], Int32, Int32, Int32)
        VB: CharRandomReplace(Char()(), Int32, Int32, Int32)
      nameWithType:
        CSharp: Replacement.CharRandomReplace(Char[][], Int32, Int32, Int32)
        VB: Replacement.CharRandomReplace(Char()(), Int32, Int32, Int32)
      qualifiedName:
        CSharp: Laga.GeneticAlgorithm.Replacement.CharRandomReplace(System.Char[][], System.Int32, System.Int32, System.Int32)
        VB: Laga.GeneticAlgorithm.Replacement.CharRandomReplace(System.Char()(), System.Int32, System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.GeneticAlgorithm
      source:
        id: CharRandomReplace
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Replacement.cs
        startLine: 775
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public char[][] CharRandomReplace(char[][] newPartOfPopulation, int sizePopulation, int start, int end)
          VB: Public Function CharRandomReplace(newPartOfPopulation As Char()(), sizePopulation As Integer, start As Integer, end As Integer) As Char()()
        parameters:
        - id: newPartOfPopulation
          type: System.Char[][]
          description: ''
        - id: sizePopulation
          type: System.Int32
          description: ''
        - id: start
          type: System.Int32
          description: ''
        - id: end
          type: System.Int32
          description: ''
        return:
          type: System.Char[][]
          description: ''
      overload: Laga.GeneticAlgorithm.Replacement.CharRandomReplace*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
- id: Laga.IO
  commentId: N:Laga.IO
  language: CSharp
  name:
    CSharp: Laga.IO
    VB: Laga.IO
  nameWithType:
    CSharp: Laga.IO
    VB: Laga.IO
  qualifiedName:
    CSharp: Laga.IO
    VB: Laga.IO
  type: Namespace
  assemblies:
  - Laga
  modifiers: {}
  items:
  - id: Laga.IO.IOTextData
    commentId: T:Laga.IO.IOTextData
    language: CSharp
    name:
      CSharp: IOTextData
      VB: IOTextData
    nameWithType:
      CSharp: IOTextData
      VB: IOTextData
    qualifiedName:
      CSharp: Laga.IO.IOTextData
      VB: Laga.IO.IOTextData
    type: Class
    assemblies:
    - Laga
    namespace: Laga.IO
    source:
      id: IOTextData
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
      startLine: 12
    summary: "\nRead and process text from a txt file\n"
    example: []
    syntax:
      content:
        CSharp: public class IOTextData
        VB: Public Class IOTextData
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.IO.IOTextData.SourceEncoding
      commentId: P:Laga.IO.IOTextData.SourceEncoding
      language: CSharp
      name:
        CSharp: SourceEncoding
        VB: SourceEncoding
      nameWithType:
        CSharp: IOTextData.SourceEncoding
        VB: IOTextData.SourceEncoding
      qualifiedName:
        CSharp: Laga.IO.IOTextData.SourceEncoding
        VB: Laga.IO.IOTextData.SourceEncoding
      type: Property
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: SourceEncoding
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 73
      summary: "\nGet the Encoding Source from the Text File\n"
      example: []
      syntax:
        content:
          CSharp: public Encoding SourceEncoding { get; }
          VB: Public ReadOnly Property SourceEncoding As Encoding
        parameters: []
        return:
          type: System.Text.Encoding
      overload: Laga.IO.IOTextData.SourceEncoding*
      modifiers:
        CSharp:
        - public
        - get
        VB:
        - Public
        - ReadOnly
    - id: Laga.IO.IOTextData.DataText
      commentId: P:Laga.IO.IOTextData.DataText
      language: CSharp
      name:
        CSharp: DataText
        VB: DataText
      nameWithType:
        CSharp: IOTextData.DataText
        VB: IOTextData.DataText
      qualifiedName:
        CSharp: Laga.IO.IOTextData.DataText
        VB: Laga.IO.IOTextData.DataText
      type: Property
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: DataText
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 81
      summary: "\nGet the Data Text as a string\n"
      example: []
      syntax:
        content:
          CSharp: public string DataText { get; }
          VB: Public ReadOnly Property DataText As String
        parameters: []
        return:
          type: System.String
      overload: Laga.IO.IOTextData.DataText*
      modifiers:
        CSharp:
        - public
        - get
        VB:
        - Public
        - ReadOnly
    - id: Laga.IO.IOTextData.DataTextLine
      commentId: P:Laga.IO.IOTextData.DataTextLine
      language: CSharp
      name:
        CSharp: DataTextLine
        VB: DataTextLine
      nameWithType:
        CSharp: IOTextData.DataTextLine
        VB: IOTextData.DataTextLine
      qualifiedName:
        CSharp: Laga.IO.IOTextData.DataTextLine
        VB: Laga.IO.IOTextData.DataTextLine
      type: Property
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: DataTextLine
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 93
      summary: "\nGet the Data Text as a list of strings\n"
      example: []
      syntax:
        content:
          CSharp: public List<string> DataTextLine { get; }
          VB: Public ReadOnly Property DataTextLine As List(Of String)
        parameters: []
        return:
          type: System.Collections.Generic.List{System.String}
      overload: Laga.IO.IOTextData.DataTextLine*
      modifiers:
        CSharp:
        - public
        - get
        VB:
        - Public
        - ReadOnly
    - id: Laga.IO.IOTextData.#ctor(System.String)
      commentId: M:Laga.IO.IOTextData.#ctor(System.String)
      language: CSharp
      name:
        CSharp: IOTextData(String)
        VB: IOTextData(String)
      nameWithType:
        CSharp: IOTextData.IOTextData(String)
        VB: IOTextData.IOTextData(String)
      qualifiedName:
        CSharp: Laga.IO.IOTextData.IOTextData(System.String)
        VB: Laga.IO.IOTextData.IOTextData(System.String)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 136
      summary: "\nConstruct the class to operate txt files.\n"
      example: []
      syntax:
        content:
          CSharp: public IOTextData(string TextFileName)
          VB: Public Sub New(TextFileName As String)
        parameters:
        - id: TextFileName
          type: System.String
          description: The text file name
      overload: Laga.IO.IOTextData.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOTextData.ConvertFileEncoding(System.String,Laga.IO.IOTextData.EncodingType)
      commentId: M:Laga.IO.IOTextData.ConvertFileEncoding(System.String,Laga.IO.IOTextData.EncodingType)
      language: CSharp
      name:
        CSharp: ConvertFileEncoding(String, IOTextData.EncodingType)
        VB: ConvertFileEncoding(String, IOTextData.EncodingType)
      nameWithType:
        CSharp: IOTextData.ConvertFileEncoding(String, IOTextData.EncodingType)
        VB: IOTextData.ConvertFileEncoding(String, IOTextData.EncodingType)
      qualifiedName:
        CSharp: Laga.IO.IOTextData.ConvertFileEncoding(System.String, Laga.IO.IOTextData.EncodingType)
        VB: Laga.IO.IOTextData.ConvertFileEncoding(System.String, Laga.IO.IOTextData.EncodingType)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: ConvertFileEncoding
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 148
      summary: "\nConvert a file from one Encoding type to another encoding type\n"
      example: []
      syntax:
        content:
          CSharp: public string ConvertFileEncoding(string FileName, IOTextData.EncodingType encodingType)
          VB: Public Function ConvertFileEncoding(FileName As String, encodingType As IOTextData.EncodingType) As String
        parameters:
        - id: FileName
          type: System.String
          description: the full file name to convert
        - id: encodingType
          type: Laga.IO.IOTextData.EncodingType
          description: the Encoding type
        return:
          type: System.String
      overload: Laga.IO.IOTextData.ConvertFileEncoding*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOTextData.CreateFile(System.Collections.Generic.List{System.String},System.String,System.String)
      commentId: M:Laga.IO.IOTextData.CreateFile(System.Collections.Generic.List{System.String},System.String,System.String)
      language: CSharp
      name:
        CSharp: CreateFile(List<String>, String, String)
        VB: CreateFile(List(Of String), String, String)
      nameWithType:
        CSharp: IOTextData.CreateFile(List<String>, String, String)
        VB: IOTextData.CreateFile(List(Of String), String, String)
      qualifiedName:
        CSharp: Laga.IO.IOTextData.CreateFile(System.Collections.Generic.List<System.String>, System.String, System.String)
        VB: Laga.IO.IOTextData.CreateFile(System.Collections.Generic.List(Of System.String), System.String, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: CreateFile
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 207
      summary: "\nCreates a text file based on a list of strings\n"
      example: []
      syntax:
        content:
          CSharp: public static bool CreateFile(List<string> strList, string directory, string fileName)
          VB: Public Shared Function CreateFile(strList As List(Of String), directory As String, fileName As String) As Boolean
        parameters:
        - id: strList
          type: System.Collections.Generic.List{System.String}
          description: the content for the file
        - id: directory
          type: System.String
          description: the path to the directory to save the file
        - id: fileName
          type: System.String
          description: name of the txt file
        return:
          type: System.Boolean
          description: bool
      overload: Laga.IO.IOTextData.CreateFile*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.IO.IOTextData.CountWordsTopN(System.String,System.Int32)
      commentId: M:Laga.IO.IOTextData.CountWordsTopN(System.String,System.Int32)
      language: CSharp
      name:
        CSharp: CountWordsTopN(String, Int32)
        VB: CountWordsTopN(String, Int32)
      nameWithType:
        CSharp: IOTextData.CountWordsTopN(String, Int32)
        VB: IOTextData.CountWordsTopN(String, Int32)
      qualifiedName:
        CSharp: Laga.IO.IOTextData.CountWordsTopN(System.String, System.Int32)
        VB: Laga.IO.IOTextData.CountWordsTopN(System.String, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: CountWordsTopN
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 229
      summary: "\nReturn the n most frequently occuring words in the string\n"
      example: []
      syntax:
        content:
          CSharp: public static Dictionary<string, int> CountWordsTopN(string strMessage, int topN)
          VB: Public Shared Function CountWordsTopN(strMessage As String, topN As Integer) As Dictionary(Of String, Integer)
        parameters:
        - id: strMessage
          type: System.String
          description: the string
        - id: topN
          type: System.Int32
          description: Top N Numbers to return
        return:
          type: System.Collections.Generic.Dictionary{System.String,System.Int32}
          description: Dictionary
      overload: Laga.IO.IOTextData.CountWordsTopN*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.IO.IOTextData.GetWords(System.String)
      commentId: M:Laga.IO.IOTextData.GetWords(System.String)
      language: CSharp
      name:
        CSharp: GetWords(String)
        VB: GetWords(String)
      nameWithType:
        CSharp: IOTextData.GetWords(String)
        VB: IOTextData.GetWords(String)
      qualifiedName:
        CSharp: Laga.IO.IOTextData.GetWords(System.String)
        VB: Laga.IO.IOTextData.GetWords(System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: GetWords
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 268
      summary: "\nGet The words from a string\n"
      example: []
      syntax:
        content:
          CSharp: public static string[] GetWords(string strMessage)
          VB: Public Shared Function GetWords(strMessage As String) As String()
        parameters:
        - id: strMessage
          type: System.String
          description: The string to operate
        return:
          type: System.String[]
          description: string[]
      overload: Laga.IO.IOTextData.GetWords*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.IO.IOTextData.RemoveDiacritics(System.String)
      commentId: M:Laga.IO.IOTextData.RemoveDiacritics(System.String)
      language: CSharp
      name:
        CSharp: RemoveDiacritics(String)
        VB: RemoveDiacritics(String)
      nameWithType:
        CSharp: IOTextData.RemoveDiacritics(String)
        VB: IOTextData.RemoveDiacritics(String)
      qualifiedName:
        CSharp: Laga.IO.IOTextData.RemoveDiacritics(System.String)
        VB: Laga.IO.IOTextData.RemoveDiacritics(System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: RemoveDiacritics
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 279
      summary: "\nRemove Diacritcs from string\n"
      example: []
      syntax:
        content:
          CSharp: public static string RemoveDiacritics(string strMessage)
          VB: Public Shared Function RemoveDiacritics(strMessage As String) As String
        parameters:
        - id: strMessage
          type: System.String
          description: The string to clean
        return:
          type: System.String
          description: string
      overload: Laga.IO.IOTextData.RemoveDiacritics*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.IO.IOTextData.RemoveByLength(System.String[],System.Int32)
      commentId: M:Laga.IO.IOTextData.RemoveByLength(System.String[],System.Int32)
      language: CSharp
      name:
        CSharp: RemoveByLength(String[], Int32)
        VB: RemoveByLength(String(), Int32)
      nameWithType:
        CSharp: IOTextData.RemoveByLength(String[], Int32)
        VB: IOTextData.RemoveByLength(String(), Int32)
      qualifiedName:
        CSharp: Laga.IO.IOTextData.RemoveByLength(System.String[], System.Int32)
        VB: Laga.IO.IOTextData.RemoveByLength(System.String(), System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: RemoveByLength
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 302
      summary: "\nRemove strings according to a specific Length\n"
      example: []
      syntax:
        content:
          CSharp: public static string[] RemoveByLength(string[] strMessages, int Length)
          VB: Public Shared Function RemoveByLength(strMessages As String(), Length As Integer) As String()
        parameters:
        - id: strMessages
          type: System.String[]
          description: the Array of strings to make the operations
        - id: Length
          type: System.Int32
          description: The minimum string length
        return:
          type: System.String[]
          description: string[]
      overload: Laga.IO.IOTextData.RemoveByLength*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.IO.IOTextData.RemoveByLength(System.String,System.Int32,System.String)
      commentId: M:Laga.IO.IOTextData.RemoveByLength(System.String,System.Int32,System.String)
      language: CSharp
      name:
        CSharp: RemoveByLength(String, Int32, String)
        VB: RemoveByLength(String, Int32, String)
      nameWithType:
        CSharp: IOTextData.RemoveByLength(String, Int32, String)
        VB: IOTextData.RemoveByLength(String, Int32, String)
      qualifiedName:
        CSharp: Laga.IO.IOTextData.RemoveByLength(System.String, System.Int32, System.String)
        VB: Laga.IO.IOTextData.RemoveByLength(System.String, System.Int32, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: RemoveByLength
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 323
      summary: "\nRemove the words according to a specific length from a string\n"
      example: []
      syntax:
        content:
          CSharp: public static string RemoveByLength(string strMessage, int Length, string separator)
          VB: Public Shared Function RemoveByLength(strMessage As String, Length As Integer, separator As String) As String
        parameters:
        - id: strMessage
          type: System.String
          description: The string to make the operation
        - id: Length
          type: System.Int32
          description: The minimum word length in the string
        - id: separator
          type: System.String
          description: 'A string to specify how combine the new string chain. eg: &quot; &quot;'
        return:
          type: System.String
          description: string
      overload: Laga.IO.IOTextData.RemoveByLength*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
  - id: Laga.IO.IOTextData.EncodingType
    commentId: T:Laga.IO.IOTextData.EncodingType
    language: CSharp
    name:
      CSharp: IOTextData.EncodingType
      VB: IOTextData.EncodingType
    nameWithType:
      CSharp: IOTextData.EncodingType
      VB: IOTextData.EncodingType
    qualifiedName:
      CSharp: Laga.IO.IOTextData.EncodingType
      VB: Laga.IO.IOTextData.EncodingType
    type: Enum
    assemblies:
    - Laga
    namespace: Laga.IO
    source:
      id: EncodingType
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
      startLine: 108
    summary: "\nEncoding types Supported\n"
    example: []
    syntax:
      content:
        CSharp: public enum EncodingType
        VB: Public Enum EncodingType
    modifiers:
      CSharp:
      - public
      - enum
      VB:
      - Public
      - Enum
    items:
    - id: Laga.IO.IOTextData.EncodingType.UTF7
      commentId: F:Laga.IO.IOTextData.EncodingType.UTF7
      language: CSharp
      name:
        CSharp: UTF7
        VB: UTF7
      nameWithType:
        CSharp: IOTextData.EncodingType.UTF7
        VB: IOTextData.EncodingType.UTF7
      qualifiedName:
        CSharp: Laga.IO.IOTextData.EncodingType.UTF7
        VB: Laga.IO.IOTextData.EncodingType.UTF7
      type: Field
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: UTF7
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 113
      summary: "\nUTF7 Encoding\n"
      example: []
      syntax:
        content:
          CSharp: UTF7 = 0
          VB: UTF7 = 0
        return:
          type: Laga.IO.IOTextData.EncodingType
      modifiers:
        CSharp:
        - public
        - const
        VB:
        - Public
        - Const
    - id: Laga.IO.IOTextData.EncodingType.UTF8
      commentId: F:Laga.IO.IOTextData.EncodingType.UTF8
      language: CSharp
      name:
        CSharp: UTF8
        VB: UTF8
      nameWithType:
        CSharp: IOTextData.EncodingType.UTF8
        VB: IOTextData.EncodingType.UTF8
      qualifiedName:
        CSharp: Laga.IO.IOTextData.EncodingType.UTF8
        VB: Laga.IO.IOTextData.EncodingType.UTF8
      type: Field
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: UTF8
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 117
      summary: "\nUTF8 Encoding\n"
      example: []
      syntax:
        content:
          CSharp: UTF8 = 1
          VB: UTF8 = 1
        return:
          type: Laga.IO.IOTextData.EncodingType
      modifiers:
        CSharp:
        - public
        - const
        VB:
        - Public
        - Const
    - id: Laga.IO.IOTextData.EncodingType.ASCII
      commentId: F:Laga.IO.IOTextData.EncodingType.ASCII
      language: CSharp
      name:
        CSharp: ASCII
        VB: ASCII
      nameWithType:
        CSharp: IOTextData.EncodingType.ASCII
        VB: IOTextData.EncodingType.ASCII
      qualifiedName:
        CSharp: Laga.IO.IOTextData.EncodingType.ASCII
        VB: Laga.IO.IOTextData.EncodingType.ASCII
      type: Field
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: ASCII
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 121
      summary: "\nASCII Encoding\n"
      example: []
      syntax:
        content:
          CSharp: ASCII = 2
          VB: ASCII = 2
        return:
          type: Laga.IO.IOTextData.EncodingType
      modifiers:
        CSharp:
        - public
        - const
        VB:
        - Public
        - Const
    - id: Laga.IO.IOTextData.EncodingType.Unicode
      commentId: F:Laga.IO.IOTextData.EncodingType.Unicode
      language: CSharp
      name:
        CSharp: Unicode
        VB: Unicode
      nameWithType:
        CSharp: IOTextData.EncodingType.Unicode
        VB: IOTextData.EncodingType.Unicode
      qualifiedName:
        CSharp: Laga.IO.IOTextData.EncodingType.Unicode
        VB: Laga.IO.IOTextData.EncodingType.Unicode
      type: Field
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: Unicode
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 125
      summary: "\nUnicode Encoding\n"
      example: []
      syntax:
        content:
          CSharp: Unicode = 3
          VB: Unicode = 3
        return:
          type: Laga.IO.IOTextData.EncodingType
      modifiers:
        CSharp:
        - public
        - const
        VB:
        - Public
        - Const
    - id: Laga.IO.IOTextData.EncodingType.Default
      commentId: F:Laga.IO.IOTextData.EncodingType.Default
      language: CSharp
      name:
        CSharp: Default
        VB: Default
      nameWithType:
        CSharp: IOTextData.EncodingType.Default
        VB: IOTextData.EncodingType.Default
      qualifiedName:
        CSharp: Laga.IO.IOTextData.EncodingType.Default
        VB: Laga.IO.IOTextData.EncodingType.Default
      type: Field
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: Default
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOTextData.cs
        startLine: 129
      summary: "\nDefault Encoding\n"
      example: []
      syntax:
        content:
          CSharp: Default = 4
          VB: Default = 4
        return:
          type: Laga.IO.IOTextData.EncodingType
      modifiers:
        CSharp:
        - public
        - const
        VB:
        - Public
        - Const
  - id: Laga.IO.IOExcelRead
    commentId: T:Laga.IO.IOExcelRead
    language: CSharp
    name:
      CSharp: IOExcelRead
      VB: IOExcelRead
    nameWithType:
      CSharp: IOExcelRead
      VB: IOExcelRead
    qualifiedName:
      CSharp: Laga.IO.IOExcelRead
      VB: Laga.IO.IOExcelRead
    type: Class
    assemblies:
    - Laga
    namespace: Laga.IO
    source:
      id: IOExcelRead
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
      startLine: 11
    summary: "\nRead excel files\n"
    example: []
    syntax:
      content:
        CSharp: public class IOExcelRead
        VB: Public Class IOExcelRead
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.IO.IOExcelRead.MatrixDataExcel
      commentId: P:Laga.IO.IOExcelRead.MatrixDataExcel
      language: CSharp
      name:
        CSharp: MatrixDataExcel
        VB: MatrixDataExcel
      nameWithType:
        CSharp: IOExcelRead.MatrixDataExcel
        VB: IOExcelRead.MatrixDataExcel
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.MatrixDataExcel
        VB: Laga.IO.IOExcelRead.MatrixDataExcel
      type: Property
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: MatrixDataExcel
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 29
      summary: "\nget the data by list format, use this to get the data from excel\n"
      example: []
      syntax:
        content:
          CSharp: public List<List<string>> MatrixDataExcel { get; }
          VB: Public ReadOnly Property MatrixDataExcel As List(Of List(Of String))
        parameters: []
        return:
          type: System.Collections.Generic.List{System.Collections.Generic.List{System.String}}
      overload: Laga.IO.IOExcelRead.MatrixDataExcel*
      modifiers:
        CSharp:
        - public
        - get
        VB:
        - Public
        - ReadOnly
    - id: Laga.IO.IOExcelRead.SheetNum
      commentId: P:Laga.IO.IOExcelRead.SheetNum
      language: CSharp
      name:
        CSharp: SheetNum
        VB: SheetNum
      nameWithType:
        CSharp: IOExcelRead.SheetNum
        VB: IOExcelRead.SheetNum
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.SheetNum
        VB: Laga.IO.IOExcelRead.SheetNum
      type: Property
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: SheetNum
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 41
      summary: "\nGet Excel sheet number.\n"
      example: []
      syntax:
        content:
          CSharp: public int SheetNum { get; }
          VB: Public ReadOnly Property SheetNum As Integer
        parameters: []
        return:
          type: System.Int32
      overload: Laga.IO.IOExcelRead.SheetNum*
      modifiers:
        CSharp:
        - public
        - get
        VB:
        - Public
        - ReadOnly
    - id: Laga.IO.IOExcelRead.#ctor(System.String)
      commentId: M:Laga.IO.IOExcelRead.#ctor(System.String)
      language: CSharp
      name:
        CSharp: IOExcelRead(String)
        VB: IOExcelRead(String)
      nameWithType:
        CSharp: IOExcelRead.IOExcelRead(String)
        VB: IOExcelRead.IOExcelRead(String)
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.IOExcelRead(System.String)
        VB: Laga.IO.IOExcelRead.IOExcelRead(System.String)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 57
      summary: "\nThe simpliest constructor\n"
      example: []
      syntax:
        content:
          CSharp: public IOExcelRead(string FilePath)
          VB: Public Sub New(FilePath As String)
        parameters:
        - id: FilePath
          type: System.String
          description: string, the path to the file
      overload: Laga.IO.IOExcelRead.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelRead.#ctor(System.String,System.Int32)
      commentId: M:Laga.IO.IOExcelRead.#ctor(System.String,System.Int32)
      language: CSharp
      name:
        CSharp: IOExcelRead(String, Int32)
        VB: IOExcelRead(String, Int32)
      nameWithType:
        CSharp: IOExcelRead.IOExcelRead(String, Int32)
        VB: IOExcelRead.IOExcelRead(String, Int32)
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.IOExcelRead(System.String, System.Int32)
        VB: Laga.IO.IOExcelRead.IOExcelRead(System.String, System.Int32)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 69
      summary: "\nConstructor for IOExcel most flexible constructor.\ntherfore you have to deal with all operations:\nopen, read or write and close.\n"
      example: []
      syntax:
        content:
          CSharp: public IOExcelRead(string FilePath, int SheetNumber)
          VB: Public Sub New(FilePath As String, SheetNumber As Integer)
        parameters:
        - id: FilePath
          type: System.String
          description: String, the Path to the file
        - id: SheetNumber
          type: System.Int32
          description: Integer, the index sheet in the excel book
      overload: Laga.IO.IOExcelRead.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelRead.#ctor(System.String,System.Int32,System.String)
      commentId: M:Laga.IO.IOExcelRead.#ctor(System.String,System.Int32,System.String)
      language: CSharp
      name:
        CSharp: IOExcelRead(String, Int32, String)
        VB: IOExcelRead(String, Int32, String)
      nameWithType:
        CSharp: IOExcelRead.IOExcelRead(String, Int32, String)
        VB: IOExcelRead.IOExcelRead(String, Int32, String)
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.IOExcelRead(System.String, System.Int32, System.String)
        VB: Laga.IO.IOExcelRead.IOExcelRead(System.String, System.Int32, System.String)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 82
      summary: "\nSimple constructor to read data straightforward from excel\nthe simpliest and faster option\n"
      example: []
      syntax:
        content:
          CSharp: public IOExcelRead(string FilePath, int SheetNumber, string XlsxRange)
          VB: Public Sub New(FilePath As String, SheetNumber As Integer, XlsxRange As String)
        parameters:
        - id: FilePath
          type: System.String
          description: string, the Path to the file
        - id: SheetNumber
          type: System.Int32
          description: integer, the index sheet in the excel book
        - id: XlsxRange
          type: System.String
          description: string, the excel range to read the data
      overload: Laga.IO.IOExcelRead.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelRead.IOReadRange(System.String)
      commentId: M:Laga.IO.IOExcelRead.IOReadRange(System.String)
      language: CSharp
      name:
        CSharp: IOReadRange(String)
        VB: IOReadRange(String)
      nameWithType:
        CSharp: IOExcelRead.IOReadRange(String)
        VB: IOExcelRead.IOReadRange(String)
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.IOReadRange(System.String)
        VB: Laga.IO.IOExcelRead.IOReadRange(System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IOReadRange
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 101
      summary: "\nread the cells range specified in the parameter.\n"
      example: []
      syntax:
        content:
          CSharp: public List<List<string>> IOReadRange(string strXlRange)
          VB: Public Function IOReadRange(strXlRange As String) As List(Of List(Of String))
        parameters:
        - id: strXlRange
          type: System.String
          description: the range to read the excel, format &quot;A1:B2&quot; if is empty (&quot;&quot;) will return the whole data in the workbook
        return:
          type: System.Collections.Generic.List{System.Collections.Generic.List{System.String}}
      overload: Laga.IO.IOExcelRead.IOReadRange*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelRead.IOReadCell(System.String)
      commentId: M:Laga.IO.IOExcelRead.IOReadCell(System.String)
      language: CSharp
      name:
        CSharp: IOReadCell(String)
        VB: IOReadCell(String)
      nameWithType:
        CSharp: IOExcelRead.IOReadCell(String)
        VB: IOExcelRead.IOReadCell(String)
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.IOReadCell(System.String)
        VB: Laga.IO.IOExcelRead.IOReadCell(System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IOReadCell
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 129
      summary: "\nRead a specific excel cell.\n"
      example: []
      syntax:
        content:
          CSharp: public string IOReadCell(string strXlCell)
          VB: Public Function IOReadCell(strXlCell As String) As String
        parameters:
        - id: strXlCell
          type: System.String
          description: The cell to read in excel, format &quot;A1&quot;
        return:
          type: System.String
      overload: Laga.IO.IOExcelRead.IOReadCell*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelRead.IORead_SetActiveSheet(System.Int32,System.Boolean)
      commentId: M:Laga.IO.IOExcelRead.IORead_SetActiveSheet(System.Int32,System.Boolean)
      language: CSharp
      name:
        CSharp: IORead_SetActiveSheet(Int32, Boolean)
        VB: IORead_SetActiveSheet(Int32, Boolean)
      nameWithType:
        CSharp: IOExcelRead.IORead_SetActiveSheet(Int32, Boolean)
        VB: IOExcelRead.IORead_SetActiveSheet(Int32, Boolean)
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.IORead_SetActiveSheet(System.Int32, System.Boolean)
        VB: Laga.IO.IOExcelRead.IORead_SetActiveSheet(System.Int32, System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IORead_SetActiveSheet
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 147
      summary: "\nActivates a specific Excel sheet to read.\n"
      example: []
      syntax:
        content:
          CSharp: public void IORead_SetActiveSheet(int pos, bool display)
          VB: Public Sub IORead_SetActiveSheet(pos As Integer, display As Boolean)
        parameters:
        - id: pos
          type: System.Int32
          description: The position of the excel sheet in the document.
        - id: display
          type: System.Boolean
          description: decide to visualize the excel sheet.
      overload: Laga.IO.IOExcelRead.IORead_SetActiveSheet*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelRead.TestExcelOpen
      commentId: M:Laga.IO.IOExcelRead.TestExcelOpen
      language: CSharp
      name:
        CSharp: TestExcelOpen()
        VB: TestExcelOpen()
      nameWithType:
        CSharp: IOExcelRead.TestExcelOpen()
        VB: IOExcelRead.TestExcelOpen()
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.TestExcelOpen()
        VB: Laga.IO.IOExcelRead.TestExcelOpen()
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: TestExcelOpen
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 160
      summary: "\nTest if excel application is open.\n"
      example: []
      syntax:
        content:
          CSharp: public bool TestExcelOpen()
          VB: Public Function TestExcelOpen As Boolean
        return:
          type: System.Boolean
      overload: Laga.IO.IOExcelRead.TestExcelOpen*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelRead.IORead_ExcelWorksheetNames
      commentId: M:Laga.IO.IOExcelRead.IORead_ExcelWorksheetNames
      language: CSharp
      name:
        CSharp: IORead_ExcelWorksheetNames()
        VB: IORead_ExcelWorksheetNames()
      nameWithType:
        CSharp: IOExcelRead.IORead_ExcelWorksheetNames()
        VB: IOExcelRead.IORead_ExcelWorksheetNames()
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.IORead_ExcelWorksheetNames()
        VB: Laga.IO.IOExcelRead.IORead_ExcelWorksheetNames()
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IORead_ExcelWorksheetNames
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 182
      summary: "\nOpen the App\nreturn all the excel sheet names.\nClose the App, release the Marshalls.\n"
      example: []
      syntax:
        content:
          CSharp: public List<string> IORead_ExcelWorksheetNames()
          VB: Public Function IORead_ExcelWorksheetNames As List(Of String)
        return:
          type: System.Collections.Generic.List{System.String}
      overload: Laga.IO.IOExcelRead.IORead_ExcelWorksheetNames*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelRead.IORead_OpenExcelApp
      commentId: M:Laga.IO.IOExcelRead.IORead_OpenExcelApp
      language: CSharp
      name:
        CSharp: IORead_OpenExcelApp()
        VB: IORead_OpenExcelApp()
      nameWithType:
        CSharp: IOExcelRead.IORead_OpenExcelApp()
        VB: IOExcelRead.IORead_OpenExcelApp()
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.IORead_OpenExcelApp()
        VB: Laga.IO.IOExcelRead.IORead_OpenExcelApp()
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IORead_OpenExcelApp
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 199
      summary: "\nOpen excel app based on the constructor.\n"
      example: []
      syntax:
        content:
          CSharp: public void IORead_OpenExcelApp()
          VB: Public Sub IORead_OpenExcelApp
      overload: Laga.IO.IOExcelRead.IORead_OpenExcelApp*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelRead.IORead_OpenExcelApp(System.Boolean)
      commentId: M:Laga.IO.IOExcelRead.IORead_OpenExcelApp(System.Boolean)
      language: CSharp
      name:
        CSharp: IORead_OpenExcelApp(Boolean)
        VB: IORead_OpenExcelApp(Boolean)
      nameWithType:
        CSharp: IOExcelRead.IORead_OpenExcelApp(Boolean)
        VB: IOExcelRead.IORead_OpenExcelApp(Boolean)
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.IORead_OpenExcelApp(System.Boolean)
        VB: Laga.IO.IOExcelRead.IORead_OpenExcelApp(System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IORead_OpenExcelApp
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 210
      summary: "\nOpen excel app based on the constructor.\n"
      example: []
      syntax:
        content:
          CSharp: public void IORead_OpenExcelApp(bool display)
          VB: Public Sub IORead_OpenExcelApp(display As Boolean)
        parameters:
        - id: display
          type: System.Boolean
          description: if is true, show the excel&quot;
      overload: Laga.IO.IOExcelRead.IORead_OpenExcelApp*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelRead.CloseExcelApp
      commentId: M:Laga.IO.IOExcelRead.CloseExcelApp
      language: CSharp
      name:
        CSharp: CloseExcelApp()
        VB: CloseExcelApp()
      nameWithType:
        CSharp: IOExcelRead.CloseExcelApp()
        VB: IOExcelRead.CloseExcelApp()
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.CloseExcelApp()
        VB: Laga.IO.IOExcelRead.CloseExcelApp()
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: CloseExcelApp
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 235
      summary: "\nClean all the marshalls and kill excel.\n"
      example: []
      syntax:
        content:
          CSharp: public void CloseExcelApp()
          VB: Public Sub CloseExcelApp
      overload: Laga.IO.IOExcelRead.CloseExcelApp*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelRead.CloseExcelApp(System.Boolean)
      commentId: M:Laga.IO.IOExcelRead.CloseExcelApp(System.Boolean)
      language: CSharp
      name:
        CSharp: CloseExcelApp(Boolean)
        VB: CloseExcelApp(Boolean)
      nameWithType:
        CSharp: IOExcelRead.CloseExcelApp(Boolean)
        VB: IOExcelRead.CloseExcelApp(Boolean)
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.CloseExcelApp(System.Boolean)
        VB: Laga.IO.IOExcelRead.CloseExcelApp(System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: CloseExcelApp
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 255
      summary: "\nclean all the marshalls and close - save the excel.\n"
      example: []
      syntax:
        content:
          CSharp: public void CloseExcelApp(bool saveFile)
          VB: Public Sub CloseExcelApp(saveFile As Boolean)
        parameters:
        - id: saveFile
          type: System.Boolean
          description: if is true, will save the file
      overload: Laga.IO.IOExcelRead.CloseExcelApp*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelRead.CloseExcelApp(System.Boolean,System.String,System.String)
      commentId: M:Laga.IO.IOExcelRead.CloseExcelApp(System.Boolean,System.String,System.String)
      language: CSharp
      name:
        CSharp: CloseExcelApp(Boolean, String, String)
        VB: CloseExcelApp(Boolean, String, String)
      nameWithType:
        CSharp: IOExcelRead.CloseExcelApp(Boolean, String, String)
        VB: IOExcelRead.CloseExcelApp(Boolean, String, String)
      qualifiedName:
        CSharp: Laga.IO.IOExcelRead.CloseExcelApp(System.Boolean, System.String, System.String)
        VB: Laga.IO.IOExcelRead.CloseExcelApp(System.Boolean, System.String, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: CloseExcelApp
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelRead.cs
        startLine: 287
      summary: "\nsave and close the excel.\n"
      example: []
      syntax:
        content:
          CSharp: public void CloseExcelApp(bool saveFile, string fileName, string directory)
          VB: Public Sub CloseExcelApp(saveFile As Boolean, fileName As String, directory As String)
        parameters:
        - id: saveFile
          type: System.Boolean
          description: if is true, will save the file
        - id: fileName
          type: System.String
          description: string, the file name of the excel file
        - id: directory
          type: System.String
          description: string, the address where to save the excel
      overload: Laga.IO.IOExcelRead.CloseExcelApp*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
  - id: Laga.IO.IOExcelWrite
    commentId: T:Laga.IO.IOExcelWrite
    language: CSharp
    name:
      CSharp: IOExcelWrite
      VB: IOExcelWrite
    nameWithType:
      CSharp: IOExcelWrite
      VB: IOExcelWrite
    qualifiedName:
      CSharp: Laga.IO.IOExcelWrite
      VB: Laga.IO.IOExcelWrite
    type: Class
    assemblies:
    - Laga
    namespace: Laga.IO
    source:
      id: IOExcelWrite
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
      startLine: 13
    summary: "\nWrite data in excel\n"
    example: []
    syntax:
      content:
        CSharp: public class IOExcelWrite
        VB: Public Class IOExcelWrite
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.IO.IOExcelWrite.XlRange
      commentId: P:Laga.IO.IOExcelWrite.XlRange
      language: CSharp
      name:
        CSharp: XlRange
        VB: XlRange
      nameWithType:
        CSharp: IOExcelWrite.XlRange
        VB: IOExcelWrite.XlRange
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.XlRange
        VB: Laga.IO.IOExcelWrite.XlRange
      type: Property
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: XlRange
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 32
      summary: "\nGet and set the excel range.\n"
      example: []
      syntax:
        content:
          CSharp: public Office.Interop.Excel.Range XlRange { get; set; }
          VB: Public Property XlRange As Office.Interop.Excel.Range
        parameters: []
        return:
          type: Microsoft.Office.Interop.Excel.Range
      overload: Laga.IO.IOExcelWrite.XlRange*
      modifiers:
        CSharp:
        - public
        - get
        - set
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.SheetNum
      commentId: P:Laga.IO.IOExcelWrite.SheetNum
      language: CSharp
      name:
        CSharp: SheetNum
        VB: SheetNum
      nameWithType:
        CSharp: IOExcelWrite.SheetNum
        VB: IOExcelWrite.SheetNum
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.SheetNum
        VB: Laga.IO.IOExcelWrite.SheetNum
      type: Property
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: SheetNum
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 47
      summary: "\nget the sheet number \n"
      example: []
      syntax:
        content:
          CSharp: public int SheetNum { get; }
          VB: Public ReadOnly Property SheetNum As Integer
        parameters: []
        return:
          type: System.Int32
      overload: Laga.IO.IOExcelWrite.SheetNum*
      modifiers:
        CSharp:
        - public
        - get
        VB:
        - Public
        - ReadOnly
    - id: Laga.IO.IOExcelWrite.MatrixDataExcel
      commentId: P:Laga.IO.IOExcelWrite.MatrixDataExcel
      language: CSharp
      name:
        CSharp: MatrixDataExcel
        VB: MatrixDataExcel
      nameWithType:
        CSharp: IOExcelWrite.MatrixDataExcel
        VB: IOExcelWrite.MatrixDataExcel
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.MatrixDataExcel
        VB: Laga.IO.IOExcelWrite.MatrixDataExcel
      type: Property
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: MatrixDataExcel
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 58
      summary: "\nSet a nested list of strings.\n"
      example: []
      syntax:
        content:
          CSharp: public List<List<string>> MatrixDataExcel { set; }
          VB: Public WriteOnly Property MatrixDataExcel As List(Of List(Of String))
        parameters: []
        return:
          type: System.Collections.Generic.List{System.Collections.Generic.List{System.String}}
      overload: Laga.IO.IOExcelWrite.MatrixDataExcel*
      modifiers:
        CSharp:
        - public
        - set
        VB:
        - Public
        - WriteOnly
    - id: Laga.IO.IOExcelWrite.ListDataExcel
      commentId: P:Laga.IO.IOExcelWrite.ListDataExcel
      language: CSharp
      name:
        CSharp: ListDataExcel
        VB: ListDataExcel
      nameWithType:
        CSharp: IOExcelWrite.ListDataExcel
        VB: IOExcelWrite.ListDataExcel
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.ListDataExcel
        VB: Laga.IO.IOExcelWrite.ListDataExcel
      type: Property
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: ListDataExcel
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 69
      summary: "\nSet a nested list of strings.\n"
      example: []
      syntax:
        content:
          CSharp: public List<string> ListDataExcel { set; }
          VB: Public WriteOnly Property ListDataExcel As List(Of String)
        parameters: []
        return:
          type: System.Collections.Generic.List{System.String}
      overload: Laga.IO.IOExcelWrite.ListDataExcel*
      modifiers:
        CSharp:
        - public
        - set
        VB:
        - Public
        - WriteOnly
    - id: Laga.IO.IOExcelWrite.CheckExcelFile(System.String)
      commentId: M:Laga.IO.IOExcelWrite.CheckExcelFile(System.String)
      language: CSharp
      name:
        CSharp: CheckExcelFile(String)
        VB: CheckExcelFile(String)
      nameWithType:
        CSharp: IOExcelWrite.CheckExcelFile(String)
        VB: IOExcelWrite.CheckExcelFile(String)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.CheckExcelFile(System.String)
        VB: Laga.IO.IOExcelWrite.CheckExcelFile(System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: CheckExcelFile
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 82
      summary: "\ncheck if the file exists.\n"
      example: []
      syntax:
        content:
          CSharp: public static bool CheckExcelFile(string path)
          VB: Public Shared Function CheckExcelFile(path As String) As Boolean
        parameters:
        - id: path
          type: System.String
          description: the path to the excel file
        return:
          type: System.Boolean
          description: bool
      overload: Laga.IO.IOExcelWrite.CheckExcelFile*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.IO.IOExcelWrite.#ctor(System.String,System.Int32)
      commentId: M:Laga.IO.IOExcelWrite.#ctor(System.String,System.Int32)
      language: CSharp
      name:
        CSharp: IOExcelWrite(String, Int32)
        VB: IOExcelWrite(String, Int32)
      nameWithType:
        CSharp: IOExcelWrite.IOExcelWrite(String, Int32)
        VB: IOExcelWrite.IOExcelWrite(String, Int32)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.IOExcelWrite(System.String, System.Int32)
        VB: Laga.IO.IOExcelWrite.IOExcelWrite(System.String, System.Int32)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 97
      summary: "\nSets the basic data to write in excel.\ndo not forget call the open and close.\n"
      example: []
      syntax:
        content:
          CSharp: public IOExcelWrite(string FilePath, int SheetNumber)
          VB: Public Sub New(FilePath As String, SheetNumber As Integer)
        parameters:
        - id: FilePath
          type: System.String
          description: the direction to the file
        - id: SheetNumber
          type: System.Int32
          description: the number of the sheet to open
      overload: Laga.IO.IOExcelWrite.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.#ctor(System.Boolean)
      commentId: M:Laga.IO.IOExcelWrite.#ctor(System.Boolean)
      language: CSharp
      name:
        CSharp: IOExcelWrite(Boolean)
        VB: IOExcelWrite(Boolean)
      nameWithType:
        CSharp: IOExcelWrite.IOExcelWrite(Boolean)
        VB: IOExcelWrite.IOExcelWrite(Boolean)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.IOExcelWrite(System.Boolean)
        VB: Laga.IO.IOExcelWrite.IOExcelWrite(System.Boolean)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 108
      summary: "\nCreates and excel workbook.\ndo not forget call the open and close.\n"
      example: []
      syntax:
        content:
          CSharp: public IOExcelWrite(bool display)
          VB: Public Sub New(display As Boolean)
        parameters:
        - id: display
          type: System.Boolean
          description: true, will display the workboook
      overload: Laga.IO.IOExcelWrite.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.#ctor(System.String)
      commentId: M:Laga.IO.IOExcelWrite.#ctor(System.String)
      language: CSharp
      name:
        CSharp: IOExcelWrite(String)
        VB: IOExcelWrite(String)
      nameWithType:
        CSharp: IOExcelWrite.IOExcelWrite(String)
        VB: IOExcelWrite.IOExcelWrite(String)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.IOExcelWrite(System.String)
        VB: Laga.IO.IOExcelWrite.IOExcelWrite(System.String)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 118
      summary: "\nSets the basic data to write in excel.\ndo not forget call the open and close.\n"
      example: []
      syntax:
        content:
          CSharp: public IOExcelWrite(string FilePath)
          VB: Public Sub New(FilePath As String)
        parameters:
        - id: FilePath
          type: System.String
          description: adress to the file
      overload: Laga.IO.IOExcelWrite.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.IOWrite_NewExcelSheet(System.Int32,System.String)
      commentId: M:Laga.IO.IOExcelWrite.IOWrite_NewExcelSheet(System.Int32,System.String)
      language: CSharp
      name:
        CSharp: IOWrite_NewExcelSheet(Int32, String)
        VB: IOWrite_NewExcelSheet(Int32, String)
      nameWithType:
        CSharp: IOExcelWrite.IOWrite_NewExcelSheet(Int32, String)
        VB: IOExcelWrite.IOWrite_NewExcelSheet(Int32, String)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.IOWrite_NewExcelSheet(System.Int32, System.String)
        VB: Laga.IO.IOExcelWrite.IOWrite_NewExcelSheet(System.Int32, System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IOWrite_NewExcelSheet
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 129
      summary: "\nCreates and excel sheet to write on.\n"
      example: []
      syntax:
        content:
          CSharp: public void IOWrite_NewExcelSheet(int pos, string name)
          VB: Public Sub IOWrite_NewExcelSheet(pos As Integer, name As String)
        parameters:
        - id: pos
          type: System.Int32
          description: The sheet position number
        - id: name
          type: System.String
          description: The sheet name name
      overload: Laga.IO.IOExcelWrite.IOWrite_NewExcelSheet*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.IOWrite_SetActiveSheet(System.Int32)
      commentId: M:Laga.IO.IOExcelWrite.IOWrite_SetActiveSheet(System.Int32)
      language: CSharp
      name:
        CSharp: IOWrite_SetActiveSheet(Int32)
        VB: IOWrite_SetActiveSheet(Int32)
      nameWithType:
        CSharp: IOExcelWrite.IOWrite_SetActiveSheet(Int32)
        VB: IOExcelWrite.IOWrite_SetActiveSheet(Int32)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.IOWrite_SetActiveSheet(System.Int32)
        VB: Laga.IO.IOExcelWrite.IOWrite_SetActiveSheet(System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IOWrite_SetActiveSheet
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 140
      summary: "\nActivates a specific Excel sheet to write on.\n"
      example: []
      syntax:
        content:
          CSharp: public void IOWrite_SetActiveSheet(int pos)
          VB: Public Sub IOWrite_SetActiveSheet(pos As Integer)
        parameters:
        - id: pos
          type: System.Int32
          description: The position of the excel sheet in the document.
      overload: Laga.IO.IOExcelWrite.IOWrite_SetActiveSheet*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.IOWriteItem(System.String,System.Int32,System.Int32)
      commentId: M:Laga.IO.IOExcelWrite.IOWriteItem(System.String,System.Int32,System.Int32)
      language: CSharp
      name:
        CSharp: IOWriteItem(String, Int32, Int32)
        VB: IOWriteItem(String, Int32, Int32)
      nameWithType:
        CSharp: IOExcelWrite.IOWriteItem(String, Int32, Int32)
        VB: IOExcelWrite.IOWriteItem(String, Int32, Int32)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.IOWriteItem(System.String, System.Int32, System.Int32)
        VB: Laga.IO.IOExcelWrite.IOWriteItem(System.String, System.Int32, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IOWriteItem
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 155
      summary: "\nWrite a single item to Excel...\n"
      example: []
      syntax:
        content:
          CSharp: public void IOWriteItem(string strItem, int Row, int Col)
          VB: Public Sub IOWriteItem(strItem As String, Row As Integer, Col As Integer)
        parameters:
        - id: strItem
          type: System.String
          description: the item to write in excel
        - id: Row
          type: System.Int32
          description: The row position
        - id: Col
          type: System.Int32
          description: The column position
      overload: Laga.IO.IOExcelWrite.IOWriteItem*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.IOWriteList(System.Collections.Generic.List{System.String},System.Int32,System.Int32,System.Char)
      commentId: M:Laga.IO.IOExcelWrite.IOWriteList(System.Collections.Generic.List{System.String},System.Int32,System.Int32,System.Char)
      language: CSharp
      name:
        CSharp: IOWriteList(List<String>, Int32, Int32, Char)
        VB: IOWriteList(List(Of String), Int32, Int32, Char)
      nameWithType:
        CSharp: IOExcelWrite.IOWriteList(List<String>, Int32, Int32, Char)
        VB: IOExcelWrite.IOWriteList(List(Of String), Int32, Int32, Char)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.IOWriteList(System.Collections.Generic.List<System.String>, System.Int32, System.Int32, System.Char)
        VB: Laga.IO.IOExcelWrite.IOWriteList(System.Collections.Generic.List(Of System.String), System.Int32, System.Int32, System.Char)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IOWriteList
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 167
      summary: "\nWrite a list of strings in excel. the list length is calculated automatically.\n"
      example: []
      syntax:
        content:
          CSharp: public void IOWriteList(List<string> lstString, int Row, int Col, char dir)
          VB: Public Sub IOWriteList(lstString As List(Of String), Row As Integer, Col As Integer, dir As Char)
        parameters:
        - id: lstString
          type: System.Collections.Generic.List{System.String}
          description: The list of strings to write
        - id: Row
          type: System.Int32
          description: The row position
        - id: Col
          type: System.Int32
          description: The column position
        - id: dir
          type: System.Char
          description: The writing direction, &apos;c&apos; for top-down or &apos;r&apos; for left-right
      overload: Laga.IO.IOExcelWrite.IOWriteList*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.IOWriteMatrix(System.Collections.Generic.List{System.Collections.Generic.List{System.String}},System.Int32,System.Int32,System.Boolean)
      commentId: M:Laga.IO.IOExcelWrite.IOWriteMatrix(System.Collections.Generic.List{System.Collections.Generic.List{System.String}},System.Int32,System.Int32,System.Boolean)
      language: CSharp
      name:
        CSharp: IOWriteMatrix(List<List<String>>, Int32, Int32, Boolean)
        VB: IOWriteMatrix(List(Of List(Of String)), Int32, Int32, Boolean)
      nameWithType:
        CSharp: IOExcelWrite.IOWriteMatrix(List<List<String>>, Int32, Int32, Boolean)
        VB: IOExcelWrite.IOWriteMatrix(List(Of List(Of String)), Int32, Int32, Boolean)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.IOWriteMatrix(System.Collections.Generic.List<System.Collections.Generic.List<System.String>>, System.Int32, System.Int32, System.Boolean)
        VB: Laga.IO.IOExcelWrite.IOWriteMatrix(System.Collections.Generic.List(Of System.Collections.Generic.List(Of System.String)), System.Int32, System.Int32, System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IOWriteMatrix
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 195
      summary: "\nWrite a nested list of strings in excel. The list length is calculated automatically.\n"
      example: []
      syntax:
        content:
          CSharp: public void IOWriteMatrix(List<List<string>> matData, int Row, int Col, bool swap)
          VB: Public Sub IOWriteMatrix(matData As List(Of List(Of String)), Row As Integer, Col As Integer, swap As Boolean)
        parameters:
        - id: matData
          type: System.Collections.Generic.List{System.Collections.Generic.List{System.String}}
          description: The nested list of strings to write
        - id: Row
          type: System.Int32
          description: The row position
        - id: Col
          type: System.Int32
          description: The column position
        - id: swap
          type: System.Boolean
          description: If true, write first the row, if false write first the column
      overload: Laga.IO.IOExcelWrite.IOWriteMatrix*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp
      commentId: M:Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp
      language: CSharp
      name:
        CSharp: IOWrite_OpenExcelApp()
        VB: IOWrite_OpenExcelApp()
      nameWithType:
        CSharp: IOExcelWrite.IOWrite_OpenExcelApp()
        VB: IOExcelWrite.IOWrite_OpenExcelApp()
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp()
        VB: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp()
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IOWrite_OpenExcelApp
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 236
      summary: "\nOpen an Excel document and display the document.\n"
      example: []
      syntax:
        content:
          CSharp: public void IOWrite_OpenExcelApp()
          VB: Public Sub IOWrite_OpenExcelApp
      overload: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp(System.Boolean,System.Int32)
      commentId: M:Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp(System.Boolean,System.Int32)
      language: CSharp
      name:
        CSharp: IOWrite_OpenExcelApp(Boolean, Int32)
        VB: IOWrite_OpenExcelApp(Boolean, Int32)
      nameWithType:
        CSharp: IOExcelWrite.IOWrite_OpenExcelApp(Boolean, Int32)
        VB: IOExcelWrite.IOWrite_OpenExcelApp(Boolean, Int32)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp(System.Boolean, System.Int32)
        VB: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp(System.Boolean, System.Int32)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IOWrite_OpenExcelApp
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 248
      summary: "\nOpen an Excel document based on the constructor.\n"
      example: []
      syntax:
        content:
          CSharp: public void IOWrite_OpenExcelApp(bool display, int sheetNum)
          VB: Public Sub IOWrite_OpenExcelApp(display As Boolean, sheetNum As Integer)
        parameters:
        - id: display
          type: System.Boolean
          description: Show the app
        - id: sheetNum
          type: System.Int32
          description: open the sheetnumber
      overload: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp(System.Boolean)
      commentId: M:Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp(System.Boolean)
      language: CSharp
      name:
        CSharp: IOWrite_OpenExcelApp(Boolean)
        VB: IOWrite_OpenExcelApp(Boolean)
      nameWithType:
        CSharp: IOExcelWrite.IOWrite_OpenExcelApp(Boolean)
        VB: IOExcelWrite.IOWrite_OpenExcelApp(Boolean)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp(System.Boolean)
        VB: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp(System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: IOWrite_OpenExcelApp
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 275
      summary: "\nOpen an Excel document based on the constructor.\n"
      example: []
      syntax:
        content:
          CSharp: public void IOWrite_OpenExcelApp(bool display)
          VB: Public Sub IOWrite_OpenExcelApp(display As Boolean)
        parameters:
        - id: display
          type: System.Boolean
          description: if is true, show the excel&quot;
      overload: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.SaveCloseExcelApp(System.String)
      commentId: M:Laga.IO.IOExcelWrite.SaveCloseExcelApp(System.String)
      language: CSharp
      name:
        CSharp: SaveCloseExcelApp(String)
        VB: SaveCloseExcelApp(String)
      nameWithType:
        CSharp: IOExcelWrite.SaveCloseExcelApp(String)
        VB: IOExcelWrite.SaveCloseExcelApp(String)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.SaveCloseExcelApp(System.String)
        VB: Laga.IO.IOExcelWrite.SaveCloseExcelApp(System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: SaveCloseExcelApp
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 311
      summary: "\nSave the Excel file and close safely the Excel application.\n"
      example: []
      syntax:
        content:
          CSharp: public void SaveCloseExcelApp(string Path)
          VB: Public Sub SaveCloseExcelApp(Path As String)
        parameters:
        - id: Path
          type: System.String
          description: The file name
      overload: Laga.IO.IOExcelWrite.SaveCloseExcelApp*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IOExcelWrite.CloseExcelApp(System.Boolean)
      commentId: M:Laga.IO.IOExcelWrite.CloseExcelApp(System.Boolean)
      language: CSharp
      name:
        CSharp: CloseExcelApp(Boolean)
        VB: CloseExcelApp(Boolean)
      nameWithType:
        CSharp: IOExcelWrite.CloseExcelApp(Boolean)
        VB: IOExcelWrite.CloseExcelApp(Boolean)
      qualifiedName:
        CSharp: Laga.IO.IOExcelWrite.CloseExcelApp(System.Boolean)
        VB: Laga.IO.IOExcelWrite.CloseExcelApp(System.Boolean)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: CloseExcelApp
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IOExcelWrite.cs
        startLine: 342
      summary: "\nClose safely the Excel application and decide to save or not.\n"
      example: []
      syntax:
        content:
          CSharp: public void CloseExcelApp(bool saveFile)
          VB: Public Sub CloseExcelApp(saveFile As Boolean)
        parameters:
        - id: saveFile
          type: System.Boolean
          description: If true, the Excel file is saved.
      overload: Laga.IO.IOExcelWrite.CloseExcelApp*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
  - id: Laga.IO.IODataFolder
    commentId: T:Laga.IO.IODataFolder
    language: CSharp
    name:
      CSharp: IODataFolder
      VB: IODataFolder
    nameWithType:
      CSharp: IODataFolder
      VB: IODataFolder
    qualifiedName:
      CSharp: Laga.IO.IODataFolder
      VB: Laga.IO.IODataFolder
    type: Class
    assemblies:
    - Laga
    namespace: Laga.IO
    source:
      id: IODataFolder
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\IODataFolder.cs
      startLine: 13
    summary: "\nGet Data files information from a folder directory\n"
    example: []
    syntax:
      content:
        CSharp: public class IODataFolder
        VB: Public Class IODataFolder
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.IO.IODataFolder.RootFolder
      commentId: P:Laga.IO.IODataFolder.RootFolder
      language: CSharp
      name:
        CSharp: RootFolder
        VB: RootFolder
      nameWithType:
        CSharp: IODataFolder.RootFolder
        VB: IODataFolder.RootFolder
      qualifiedName:
        CSharp: Laga.IO.IODataFolder.RootFolder
        VB: Laga.IO.IODataFolder.RootFolder
      type: Property
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: RootFolder
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IODataFolder.cs
        startLine: 22
      summary: "\nThe Roof folder with the files\n"
      example: []
      syntax:
        content:
          CSharp: public string RootFolder { get; set; }
          VB: Public Property RootFolder As String
        parameters: []
        return:
          type: System.String
      overload: Laga.IO.IODataFolder.RootFolder*
      modifiers:
        CSharp:
        - public
        - get
        - set
        VB:
        - Public
    - id: Laga.IO.IODataFolder.ListPathFileNames
      commentId: P:Laga.IO.IODataFolder.ListPathFileNames
      language: CSharp
      name:
        CSharp: ListPathFileNames
        VB: ListPathFileNames
      nameWithType:
        CSharp: IODataFolder.ListPathFileNames
        VB: IODataFolder.ListPathFileNames
      qualifiedName:
        CSharp: Laga.IO.IODataFolder.ListPathFileNames
        VB: Laga.IO.IODataFolder.ListPathFileNames
      type: Property
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: ListPathFileNames
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IODataFolder.cs
        startLine: 44
      summary: "\nThe List of file names including the path\n"
      example: []
      syntax:
        content:
          CSharp: public string[] ListPathFileNames { get; }
          VB: Public ReadOnly Property ListPathFileNames As String()
        parameters: []
        return:
          type: System.String[]
      overload: Laga.IO.IODataFolder.ListPathFileNames*
      modifiers:
        CSharp:
        - public
        - get
        VB:
        - Public
        - ReadOnly
    - id: Laga.IO.IODataFolder.ListFileNames
      commentId: P:Laga.IO.IODataFolder.ListFileNames
      language: CSharp
      name:
        CSharp: ListFileNames
        VB: ListFileNames
      nameWithType:
        CSharp: IODataFolder.ListFileNames
        VB: IODataFolder.ListFileNames
      qualifiedName:
        CSharp: Laga.IO.IODataFolder.ListFileNames
        VB: Laga.IO.IODataFolder.ListFileNames
      type: Property
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: ListFileNames
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IODataFolder.cs
        startLine: 55
      summary: "\nThe list of file names without extension\n"
      example: []
      syntax:
        content:
          CSharp: public string[] ListFileNames { get; }
          VB: Public ReadOnly Property ListFileNames As String()
        parameters: []
        return:
          type: System.String[]
      overload: Laga.IO.IODataFolder.ListFileNames*
      modifiers:
        CSharp:
        - public
        - get
        VB:
        - Public
        - ReadOnly
    - id: Laga.IO.IODataFolder.#ctor(System.String)
      commentId: M:Laga.IO.IODataFolder.#ctor(System.String)
      language: CSharp
      name:
        CSharp: IODataFolder(String)
        VB: IODataFolder(String)
      nameWithType:
        CSharp: IODataFolder.IODataFolder(String)
        VB: IODataFolder.IODataFolder(String)
      qualifiedName:
        CSharp: Laga.IO.IODataFolder.IODataFolder(System.String)
        VB: Laga.IO.IODataFolder.IODataFolder(System.String)
      type: Constructor
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: .ctor
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IODataFolder.cs
        startLine: 67
      summary: "\nThe Object to extract data from the folder\n"
      example: []
      syntax:
        content:
          CSharp: public IODataFolder(string PathFolder)
          VB: Public Sub New(PathFolder As String)
        parameters:
        - id: PathFolder
          type: System.String
          description: The folders path to analize
      overload: Laga.IO.IODataFolder.#ctor*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
    - id: Laga.IO.IODataFolder.ReadSelectiveData(System.String)
      commentId: M:Laga.IO.IODataFolder.ReadSelectiveData(System.String)
      language: CSharp
      name:
        CSharp: ReadSelectiveData(String)
        VB: ReadSelectiveData(String)
      nameWithType:
        CSharp: IODataFolder.ReadSelectiveData(String)
        VB: IODataFolder.ReadSelectiveData(String)
      qualifiedName:
        CSharp: Laga.IO.IODataFolder.ReadSelectiveData(System.String)
        VB: Laga.IO.IODataFolder.ReadSelectiveData(System.String)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.IO
      source:
        id: ReadSelectiveData
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\IODataFolder.cs
        startLine: 90
      summary: "\nThe List of files according to the specified extension\n"
      example: []
      syntax:
        content:
          CSharp: public List<string> ReadSelectiveData(string extension)
          VB: Public Function ReadSelectiveData(extension As String) As List(Of String)
        parameters:
        - id: extension
          type: System.String
          description: 'The extension file to filter: &quot;.txt&quot;'
        return:
          type: System.Collections.Generic.List{System.String}
          description: List
      overload: Laga.IO.IODataFolder.ReadSelectiveData*
      modifiers:
        CSharp:
        - public
        VB:
        - Public
- id: Laga.Numbers
  commentId: N:Laga.Numbers
  language: CSharp
  name:
    CSharp: Laga.Numbers
    VB: Laga.Numbers
  nameWithType:
    CSharp: Laga.Numbers
    VB: Laga.Numbers
  qualifiedName:
    CSharp: Laga.Numbers
    VB: Laga.Numbers
  type: Namespace
  assemblies:
  - Laga
  modifiers: {}
  items:
  - id: Laga.Numbers.Maths
    commentId: T:Laga.Numbers.Maths
    language: CSharp
    name:
      CSharp: Maths
      VB: Maths
    nameWithType:
      CSharp: Maths
      VB: Maths
    qualifiedName:
      CSharp: Laga.Numbers.Maths
      VB: Laga.Numbers.Maths
    type: Class
    assemblies:
    - Laga
    namespace: Laga.Numbers
    source:
      id: Maths
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\Maths.cs
      startLine: 10
    summary: "\nMathematics and statistics operations\n"
    example: []
    syntax:
      content:
        CSharp: public class Maths
        VB: Public Class Maths
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.Numbers.Maths.Deg2Rad(System.Double)
      commentId: M:Laga.Numbers.Maths.Deg2Rad(System.Double)
      language: CSharp
      name:
        CSharp: Deg2Rad(Double)
        VB: Deg2Rad(Double)
      nameWithType:
        CSharp: Maths.Deg2Rad(Double)
        VB: Maths.Deg2Rad(Double)
      qualifiedName:
        CSharp: Laga.Numbers.Maths.Deg2Rad(System.Double)
        VB: Laga.Numbers.Maths.Deg2Rad(System.Double)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.Numbers
      source:
        id: Deg2Rad
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Maths.cs
        startLine: 18
      summary: "\nDegrees to Radians\n"
      example: []
      syntax:
        content:
          CSharp: public static double Deg2Rad(double degrees)
          VB: Public Shared Function Deg2Rad(degrees As Double) As Double
        parameters:
        - id: degrees
          type: System.Double
          description: ''
        return:
          type: System.Double
          description: double
      overload: Laga.Numbers.Maths.Deg2Rad*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.Numbers.Maths.Rad2Deg(System.Double)
      commentId: M:Laga.Numbers.Maths.Rad2Deg(System.Double)
      language: CSharp
      name:
        CSharp: Rad2Deg(Double)
        VB: Rad2Deg(Double)
      nameWithType:
        CSharp: Maths.Rad2Deg(Double)
        VB: Maths.Rad2Deg(Double)
      qualifiedName:
        CSharp: Laga.Numbers.Maths.Rad2Deg(System.Double)
        VB: Laga.Numbers.Maths.Rad2Deg(System.Double)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.Numbers
      source:
        id: Rad2Deg
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Maths.cs
        startLine: 29
      summary: "\nRadians to Degree\n"
      example: []
      syntax:
        content:
          CSharp: public static double Rad2Deg(double radians)
          VB: Public Shared Function Rad2Deg(radians As Double) As Double
        parameters:
        - id: radians
          type: System.Double
          description: ''
        return:
          type: System.Double
          description: double
      overload: Laga.Numbers.Maths.Rad2Deg*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
  - id: Laga.Numbers.Rand
    commentId: T:Laga.Numbers.Rand
    language: CSharp
    name:
      CSharp: Rand
      VB: Rand
    nameWithType:
      CSharp: Rand
      VB: Rand
    qualifiedName:
      CSharp: Laga.Numbers.Rand
      VB: Laga.Numbers.Rand
    type: Class
    assemblies:
    - Laga
    namespace: Laga.Numbers
    source:
      id: Rand
      path: C:\Users\delab\Documents\GitHub\Laga\Laga\Random.cs
      startLine: 10
    summary: "\nRandom number class\n"
    example: []
    syntax:
      content:
        CSharp: public class Rand
        VB: Public Class Rand
    inheritance:
    - System.Object
    inheritedMembers:
    - System.Object.ToString
    - System.Object.Equals(System.Object)
    - System.Object.Equals(System.Object,System.Object)
    - System.Object.ReferenceEquals(System.Object,System.Object)
    - System.Object.GetHashCode
    - System.Object.GetType
    - System.Object.MemberwiseClone
    modifiers:
      CSharp:
      - public
      - class
      VB:
      - Public
      - Class
    items:
    - id: Laga.Numbers.Rand.RandomNumbers(System.Int32,System.Single,System.Single)
      commentId: M:Laga.Numbers.Rand.RandomNumbers(System.Int32,System.Single,System.Single)
      language: CSharp
      name:
        CSharp: RandomNumbers(Int32, Single, Single)
        VB: RandomNumbers(Int32, Single, Single)
      nameWithType:
        CSharp: Rand.RandomNumbers(Int32, Single, Single)
        VB: Rand.RandomNumbers(Int32, Single, Single)
      qualifiedName:
        CSharp: Laga.Numbers.Rand.RandomNumbers(System.Int32, System.Single, System.Single)
        VB: Laga.Numbers.Rand.RandomNumbers(System.Int32, System.Single, System.Single)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.Numbers
      source:
        id: RandomNumbers
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Random.cs
        startLine: 20
      summary: "\nGenerate random numbers\n"
      example: []
      syntax:
        content:
          CSharp: public static float[] RandomNumbers(int size, float min, float max)
          VB: Public Shared Function RandomNumbers(size As Integer, min As Single, max As Single) As Single()
        parameters:
        - id: size
          type: System.Int32
          description: The amount of random values in the list
        - id: min
          type: System.Single
          description: the minimum value
        - id: max
          type: System.Single
          description: the maximum value
        return:
          type: System.Single[]
          description: float[]
      overload: Laga.Numbers.Rand.RandomNumbers*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
    - id: Laga.Numbers.Rand.RandomNumbers(System.Int32,System.Double,System.Double)
      commentId: M:Laga.Numbers.Rand.RandomNumbers(System.Int32,System.Double,System.Double)
      language: CSharp
      name:
        CSharp: RandomNumbers(Int32, Double, Double)
        VB: RandomNumbers(Int32, Double, Double)
      nameWithType:
        CSharp: Rand.RandomNumbers(Int32, Double, Double)
        VB: Rand.RandomNumbers(Int32, Double, Double)
      qualifiedName:
        CSharp: Laga.Numbers.Rand.RandomNumbers(System.Int32, System.Double, System.Double)
        VB: Laga.Numbers.Rand.RandomNumbers(System.Int32, System.Double, System.Double)
      type: Method
      assemblies:
      - Laga
      namespace: Laga.Numbers
      source:
        id: RandomNumbers
        path: C:\Users\delab\Documents\GitHub\Laga\Laga\Random.cs
        startLine: 38
      summary: "\n\n"
      example: []
      syntax:
        content:
          CSharp: public static List<double> RandomNumbers(int size, double min, double max)
          VB: Public Shared Function RandomNumbers(size As Integer, min As Double, max As Double) As List(Of Double)
        parameters:
        - id: size
          type: System.Int32
          description: ''
        - id: min
          type: System.Double
          description: ''
        - id: max
          type: System.Double
          description: ''
        return:
          type: System.Collections.Generic.List{System.Double}
          description: ''
      overload: Laga.Numbers.Rand.RandomNumbers*
      modifiers:
        CSharp:
        - public
        - static
        VB:
        - Public
        - Shared
references:
  System:
    name:
      CSharp:
      - name: System
        nameWithType: System
        qualifiedName: System
        isExternal: true
      VB:
      - name: System
        nameWithType: System
        qualifiedName: System
    isDefinition: true
    commentId: N:System
  System.Object:
    name:
      CSharp:
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      VB:
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
    isDefinition: true
    parent: System
    commentId: T:System.Object
  System.Object.ToString:
    name:
      CSharp:
      - id: System.Object.ToString
        name: ToString
        nameWithType: Object.ToString
        qualifiedName: System.Object.ToString
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - name: )
        nameWithType: )
        qualifiedName: )
      VB:
      - id: System.Object.ToString
        name: ToString
        nameWithType: Object.ToString
        qualifiedName: System.Object.ToString
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    parent: System.Object
    commentId: M:System.Object.ToString
  System.Object.Equals(System.Object):
    name:
      CSharp:
      - id: System.Object.Equals(System.Object)
        name: Equals
        nameWithType: Object.Equals
        qualifiedName: System.Object.Equals
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: )
        nameWithType: )
        qualifiedName: )
      VB:
      - id: System.Object.Equals(System.Object)
        name: Equals
        nameWithType: Object.Equals
        qualifiedName: System.Object.Equals
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    parent: System.Object
    commentId: M:System.Object.Equals(System.Object)
  System.Object.Equals(System.Object,System.Object):
    name:
      CSharp:
      - id: System.Object.Equals(System.Object,System.Object)
        name: Equals
        nameWithType: Object.Equals
        qualifiedName: System.Object.Equals
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: ', '
        nameWithType: ', '
        qualifiedName: ', '
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: )
        nameWithType: )
        qualifiedName: )
      VB:
      - id: System.Object.Equals(System.Object,System.Object)
        name: Equals
        nameWithType: Object.Equals
        qualifiedName: System.Object.Equals
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: ', '
        nameWithType: ', '
        qualifiedName: ', '
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    parent: System.Object
    commentId: M:System.Object.Equals(System.Object,System.Object)
  System.Object.ReferenceEquals(System.Object,System.Object):
    name:
      CSharp:
      - id: System.Object.ReferenceEquals(System.Object,System.Object)
        name: ReferenceEquals
        nameWithType: Object.ReferenceEquals
        qualifiedName: System.Object.ReferenceEquals
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: ', '
        nameWithType: ', '
        qualifiedName: ', '
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: )
        nameWithType: )
        qualifiedName: )
      VB:
      - id: System.Object.ReferenceEquals(System.Object,System.Object)
        name: ReferenceEquals
        nameWithType: Object.ReferenceEquals
        qualifiedName: System.Object.ReferenceEquals
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: ', '
        nameWithType: ', '
        qualifiedName: ', '
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    parent: System.Object
    commentId: M:System.Object.ReferenceEquals(System.Object,System.Object)
  System.Object.GetHashCode:
    name:
      CSharp:
      - id: System.Object.GetHashCode
        name: GetHashCode
        nameWithType: Object.GetHashCode
        qualifiedName: System.Object.GetHashCode
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - name: )
        nameWithType: )
        qualifiedName: )
      VB:
      - id: System.Object.GetHashCode
        name: GetHashCode
        nameWithType: Object.GetHashCode
        qualifiedName: System.Object.GetHashCode
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    parent: System.Object
    commentId: M:System.Object.GetHashCode
  System.Object.GetType:
    name:
      CSharp:
      - id: System.Object.GetType
        name: GetType
        nameWithType: Object.GetType
        qualifiedName: System.Object.GetType
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - name: )
        nameWithType: )
        qualifiedName: )
      VB:
      - id: System.Object.GetType
        name: GetType
        nameWithType: Object.GetType
        qualifiedName: System.Object.GetType
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    parent: System.Object
    commentId: M:System.Object.GetType
  System.Object.MemberwiseClone:
    name:
      CSharp:
      - id: System.Object.MemberwiseClone
        name: MemberwiseClone
        nameWithType: Object.MemberwiseClone
        qualifiedName: System.Object.MemberwiseClone
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - name: )
        nameWithType: )
        qualifiedName: )
      VB:
      - id: System.Object.MemberwiseClone
        name: MemberwiseClone
        nameWithType: Object.MemberwiseClone
        qualifiedName: System.Object.MemberwiseClone
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    parent: System.Object
    commentId: M:System.Object.MemberwiseClone
  System.Windows.Controls:
    name:
      CSharp:
      - name: System.Windows.Controls
        nameWithType: System.Windows.Controls
        qualifiedName: System.Windows.Controls
        isExternal: true
      VB:
      - name: System.Windows.Controls
        nameWithType: System.Windows.Controls
        qualifiedName: System.Windows.Controls
    isDefinition: true
    commentId: N:System.Windows.Controls
  System.Windows.Controls.InkCanvas:
    name:
      CSharp:
      - id: System.Windows.Controls.InkCanvas
        name: InkCanvas
        nameWithType: InkCanvas
        qualifiedName: System.Windows.Controls.InkCanvas
        isExternal: true
      VB:
      - id: System.Windows.Controls.InkCanvas
        name: InkCanvas
        nameWithType: InkCanvas
        qualifiedName: System.Windows.Controls.InkCanvas
        isExternal: true
    isDefinition: true
    parent: System.Windows.Controls
    commentId: T:System.Windows.Controls.InkCanvas
  Laga.Graphics.BarChart.#ctor*:
    name:
      CSharp:
      - id: Laga.Graphics.BarChart.#ctor*
        name: BarChart
        nameWithType: BarChart.BarChart
        qualifiedName: Laga.Graphics.BarChart.BarChart
      VB:
      - id: Laga.Graphics.BarChart.#ctor*
        name: BarChart
        nameWithType: BarChart.BarChart
        qualifiedName: Laga.Graphics.BarChart.BarChart
    isDefinition: true
    commentId: Overload:Laga.Graphics.BarChart.#ctor
  Laga.Graphics.BarChart:
    name:
      CSharp:
      - id: Laga.Graphics.BarChart
        name: BarChart
        nameWithType: BarChart
        qualifiedName: Laga.Graphics.BarChart
      VB:
      - id: Laga.Graphics.BarChart
        name: BarChart
        nameWithType: BarChart
        qualifiedName: Laga.Graphics.BarChart
    isDefinition: true
    commentId: T:Laga.Graphics.BarChart
  System.Windows.Controls.TextBox:
    name:
      CSharp:
      - id: System.Windows.Controls.TextBox
        name: TextBox
        nameWithType: TextBox
        qualifiedName: System.Windows.Controls.TextBox
        isExternal: true
      VB:
      - id: System.Windows.Controls.TextBox
        name: TextBox
        nameWithType: TextBox
        qualifiedName: System.Windows.Controls.TextBox
        isExternal: true
    isDefinition: true
    parent: System.Windows.Controls
    commentId: T:System.Windows.Controls.TextBox
  System.String[]:
    name:
      CSharp:
      - id: System.String
        name: String
        nameWithType: String
        qualifiedName: System.String
        isExternal: true
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: System.String
        name: String
        nameWithType: String
        qualifiedName: System.String
        isExternal: true
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  System.Boolean:
    name:
      CSharp:
      - id: System.Boolean
        name: Boolean
        nameWithType: Boolean
        qualifiedName: System.Boolean
        isExternal: true
      VB:
      - id: System.Boolean
        name: Boolean
        nameWithType: Boolean
        qualifiedName: System.Boolean
        isExternal: true
    isDefinition: true
    parent: System
    commentId: T:System.Boolean
  Laga.Graphics.Notebook.PrintLines*:
    name:
      CSharp:
      - id: Laga.Graphics.Notebook.PrintLines*
        name: PrintLines
        nameWithType: Notebook.PrintLines
        qualifiedName: Laga.Graphics.Notebook.PrintLines
      VB:
      - id: Laga.Graphics.Notebook.PrintLines*
        name: PrintLines
        nameWithType: Notebook.PrintLines
        qualifiedName: Laga.Graphics.Notebook.PrintLines
    isDefinition: true
    commentId: Overload:Laga.Graphics.Notebook.PrintLines
  System.Double[][]:
    name:
      CSharp:
      - id: System.Double
        name: Double
        nameWithType: Double
        qualifiedName: System.Double
        isExternal: true
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: System.Double
        name: Double
        nameWithType: Double
        qualifiedName: System.Double
        isExternal: true
      - name: ()
        nameWithType: ()
        qualifiedName: ()
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  System.Char:
    name:
      CSharp:
      - id: System.Char
        name: Char
        nameWithType: Char
        qualifiedName: System.Char
        isExternal: true
      VB:
      - id: System.Char
        name: Char
        nameWithType: Char
        qualifiedName: System.Char
        isExternal: true
    isDefinition: true
    parent: System
    commentId: T:System.Char
  System.String:
    name:
      CSharp:
      - id: System.String
        name: String
        nameWithType: String
        qualifiedName: System.String
        isExternal: true
      VB:
      - id: System.String
        name: String
        nameWithType: String
        qualifiedName: System.String
        isExternal: true
    isDefinition: true
    parent: System
    commentId: T:System.String
  Laga.Graphics.Notebook.PrintPopulation*:
    name:
      CSharp:
      - id: Laga.Graphics.Notebook.PrintPopulation*
        name: PrintPopulation
        nameWithType: Notebook.PrintPopulation
        qualifiedName: Laga.Graphics.Notebook.PrintPopulation
      VB:
      - id: Laga.Graphics.Notebook.PrintPopulation*
        name: PrintPopulation
        nameWithType: Notebook.PrintPopulation
        qualifiedName: Laga.Graphics.Notebook.PrintPopulation
    isDefinition: true
    commentId: Overload:Laga.Graphics.Notebook.PrintPopulation
  System.Single[][]:
    name:
      CSharp:
      - id: System.Single
        name: Single
        nameWithType: Single
        qualifiedName: System.Single
        isExternal: true
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: System.Single
        name: Single
        nameWithType: Single
        qualifiedName: System.Single
        isExternal: true
      - name: ()
        nameWithType: ()
        qualifiedName: ()
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  System.Int32[][]:
    name:
      CSharp:
      - id: System.Int32
        name: Int32
        nameWithType: Int32
        qualifiedName: System.Int32
        isExternal: true
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: System.Int32
        name: Int32
        nameWithType: Int32
        qualifiedName: System.Int32
        isExternal: true
      - name: ()
        nameWithType: ()
        qualifiedName: ()
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  System.Char[][]:
    name:
      CSharp:
      - id: System.Char
        name: Char
        nameWithType: Char
        qualifiedName: System.Char
        isExternal: true
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: System.Char
        name: Char
        nameWithType: Char
        qualifiedName: System.Char
        isExternal: true
      - name: ()
        nameWithType: ()
        qualifiedName: ()
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  LagaUnity.Point[][]:
    name:
      CSharp:
      - id: LagaUnity.Point
        name: Point
        nameWithType: Point
        qualifiedName: LagaUnity.Point
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: LagaUnity.Point
        name: Point
        nameWithType: Point
        qualifiedName: LagaUnity.Point
      - name: ()
        nameWithType: ()
        qualifiedName: ()
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  System.Int32:
    name:
      CSharp:
      - id: System.Int32
        name: Int32
        nameWithType: Int32
        qualifiedName: System.Int32
        isExternal: true
      VB:
      - id: System.Int32
        name: Int32
        nameWithType: Int32
        qualifiedName: System.Int32
        isExternal: true
    isDefinition: true
    parent: System
    commentId: T:System.Int32
  Laga.Graphics.Notebook:
    name:
      CSharp:
      - id: Laga.Graphics.Notebook
        name: Notebook
        nameWithType: Notebook
        qualifiedName: Laga.Graphics.Notebook
      VB:
      - id: Laga.Graphics.Notebook
        name: Notebook
        nameWithType: Notebook
        qualifiedName: Laga.Graphics.Notebook
    isDefinition: true
    commentId: T:Laga.Graphics.Notebook
  Laga.Graphics:
    name:
      CSharp:
      - name: Laga.Graphics
        nameWithType: Laga.Graphics
        qualifiedName: Laga.Graphics
      VB:
      - name: Laga.Graphics
        nameWithType: Laga.Graphics
        qualifiedName: Laga.Graphics
    isDefinition: true
    commentId: N:Laga.Graphics
  Laga.GeneticAlgorithm.Chromosome`1.Count*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Chromosome`1.Count*
        name: Count
        nameWithType: Chromosome<T>.Count
        qualifiedName: Laga.GeneticAlgorithm.Chromosome<T>.Count
      VB:
      - id: Laga.GeneticAlgorithm.Chromosome`1.Count*
        name: Count
        nameWithType: Chromosome(Of T).Count
        qualifiedName: Laga.GeneticAlgorithm.Chromosome(Of T).Count
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Chromosome`1.Count
  System.Collections.Generic.List`1:
    name:
      CSharp:
      - id: System.Collections.Generic.List`1
        name: List
        nameWithType: List
        qualifiedName: System.Collections.Generic.List
        isExternal: true
      - name: <
        nameWithType: <
        qualifiedName: <
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: System.Collections.Generic.List`1
        name: List
        nameWithType: List
        qualifiedName: System.Collections.Generic.List
        isExternal: true
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    commentId: T:System.Collections.Generic.List`1
  System.Collections.Generic:
    name:
      CSharp:
      - name: System.Collections.Generic
        nameWithType: System.Collections.Generic
        qualifiedName: System.Collections.Generic
        isExternal: true
      VB:
      - name: System.Collections.Generic
        nameWithType: System.Collections.Generic
        qualifiedName: System.Collections.Generic
    isDefinition: true
    commentId: N:System.Collections.Generic
  System.Collections.Generic.List{{T}}:
    name:
      CSharp:
      - id: System.Collections.Generic.List`1
        name: List
        nameWithType: List
        qualifiedName: System.Collections.Generic.List
        isExternal: true
      - name: <
        nameWithType: <
        qualifiedName: <
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: System.Collections.Generic.List`1
        name: List
        nameWithType: List
        qualifiedName: System.Collections.Generic.List
        isExternal: true
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: false
    definition: System.Collections.Generic.List`1
    parent: System.Collections.Generic
    commentId: T:System.Collections.Generic.List{`0}
  Laga.GeneticAlgorithm.Chromosome`1.chromosome*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Chromosome`1.chromosome*
        name: chromosome
        nameWithType: Chromosome<T>.chromosome
        qualifiedName: Laga.GeneticAlgorithm.Chromosome<T>.chromosome
      VB:
      - id: Laga.GeneticAlgorithm.Chromosome`1.chromosome*
        name: chromosome
        nameWithType: Chromosome(Of T).chromosome
        qualifiedName: Laga.GeneticAlgorithm.Chromosome(Of T).chromosome
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Chromosome`1.chromosome
  Laga.GeneticAlgorithm.Chromosome`1.#ctor*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Chromosome`1.#ctor*
        name: Chromosome
        nameWithType: Chromosome<T>.Chromosome
        qualifiedName: Laga.GeneticAlgorithm.Chromosome<T>.Chromosome
      VB:
      - id: Laga.GeneticAlgorithm.Chromosome`1.#ctor*
        name: Chromosome
        nameWithType: Chromosome(Of T).Chromosome
        qualifiedName: Laga.GeneticAlgorithm.Chromosome(Of T).Chromosome
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Chromosome`1.#ctor
  System.Double:
    name:
      CSharp:
      - id: System.Double
        name: Double
        nameWithType: Double
        qualifiedName: System.Double
        isExternal: true
      VB:
      - id: System.Double
        name: Double
        nameWithType: Double
        qualifiedName: System.Double
        isExternal: true
    isDefinition: true
    parent: System
    commentId: T:System.Double
  Laga.GeneticAlgorithm.Chromosome`1.Fitness*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Chromosome`1.Fitness*
        name: Fitness
        nameWithType: Chromosome<T>.Fitness
        qualifiedName: Laga.GeneticAlgorithm.Chromosome<T>.Fitness
      VB:
      - id: Laga.GeneticAlgorithm.Chromosome`1.Fitness*
        name: Fitness
        nameWithType: Chromosome(Of T).Fitness
        qualifiedName: Laga.GeneticAlgorithm.Chromosome(Of T).Fitness
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Chromosome`1.Fitness
  T:
    name:
      CSharp:
      - name: T
        nameWithType: T
        qualifiedName: T
      VB:
      - name: T
        nameWithType: T
        qualifiedName: T
    isDefinition: true
  '{T}':
    name:
      CSharp:
      - name: T
        nameWithType: T
        qualifiedName: T
      VB:
      - name: T
        nameWithType: T
        qualifiedName: T
    isDefinition: false
    definition: T
    commentId: '!:T'
  Laga.GeneticAlgorithm.Chromosome`1.GetDNA*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Chromosome`1.GetDNA*
        name: GetDNA
        nameWithType: Chromosome<T>.GetDNA
        qualifiedName: Laga.GeneticAlgorithm.Chromosome<T>.GetDNA
      VB:
      - id: Laga.GeneticAlgorithm.Chromosome`1.GetDNA*
        name: GetDNA
        nameWithType: Chromosome(Of T).GetDNA
        qualifiedName: Laga.GeneticAlgorithm.Chromosome(Of T).GetDNA
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Chromosome`1.GetDNA
  Laga.GeneticAlgorithm.Chromosome`1.InsertDNA*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Chromosome`1.InsertDNA*
        name: InsertDNA
        nameWithType: Chromosome<T>.InsertDNA
        qualifiedName: Laga.GeneticAlgorithm.Chromosome<T>.InsertDNA
      VB:
      - id: Laga.GeneticAlgorithm.Chromosome`1.InsertDNA*
        name: InsertDNA
        nameWithType: Chromosome(Of T).InsertDNA
        qualifiedName: Laga.GeneticAlgorithm.Chromosome(Of T).InsertDNA
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Chromosome`1.InsertDNA
  Laga.GeneticAlgorithm.Chromosome`1.Add*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Chromosome`1.Add*
        name: Add
        nameWithType: Chromosome<T>.Add
        qualifiedName: Laga.GeneticAlgorithm.Chromosome<T>.Add
      VB:
      - id: Laga.GeneticAlgorithm.Chromosome`1.Add*
        name: Add
        nameWithType: Chromosome(Of T).Add
        qualifiedName: Laga.GeneticAlgorithm.Chromosome(Of T).Add
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Chromosome`1.Add
  Laga.GeneticAlgorithm.Chromosome`1.Chr2Str*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Chromosome`1.Chr2Str*
        name: Chr2Str
        nameWithType: Chromosome<T>.Chr2Str
        qualifiedName: Laga.GeneticAlgorithm.Chromosome<T>.Chr2Str
      VB:
      - id: Laga.GeneticAlgorithm.Chromosome`1.Chr2Str*
        name: Chr2Str
        nameWithType: Chromosome(Of T).Chr2Str
        qualifiedName: Laga.GeneticAlgorithm.Chromosome(Of T).Chr2Str
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Chromosome`1.Chr2Str
  Laga.GeneticAlgorithm.Chromosome`1:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Chromosome`1
        name: Chromosome
        nameWithType: Chromosome
        qualifiedName: Laga.GeneticAlgorithm.Chromosome
      - name: <
        nameWithType: <
        qualifiedName: <
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: Laga.GeneticAlgorithm.Chromosome`1
        name: Chromosome
        nameWithType: Chromosome
        qualifiedName: Laga.GeneticAlgorithm.Chromosome
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    commentId: T:Laga.GeneticAlgorithm.Chromosome`1
  System.Int32[]:
    name:
      CSharp:
      - id: System.Int32
        name: Int32
        nameWithType: Int32
        qualifiedName: System.Int32
        isExternal: true
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: System.Int32
        name: Int32
        nameWithType: Int32
        qualifiedName: System.Int32
        isExternal: true
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  Laga.GeneticAlgorithm.Crossover`1.IndexParent*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Crossover`1.IndexParent*
        name: IndexParent
        nameWithType: Crossover<T>.IndexParent
        qualifiedName: Laga.GeneticAlgorithm.Crossover<T>.IndexParent
      VB:
      - id: Laga.GeneticAlgorithm.Crossover`1.IndexParent*
        name: IndexParent
        nameWithType: Crossover(Of T).IndexParent
        qualifiedName: Laga.GeneticAlgorithm.Crossover(Of T).IndexParent
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Crossover`1.IndexParent
  Laga.GeneticAlgorithm.Crossover`1.#ctor*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Crossover`1.#ctor*
        name: Crossover
        nameWithType: Crossover<T>.Crossover
        qualifiedName: Laga.GeneticAlgorithm.Crossover<T>.Crossover
      VB:
      - id: Laga.GeneticAlgorithm.Crossover`1.#ctor*
        name: Crossover
        nameWithType: Crossover(Of T).Crossover
        qualifiedName: Laga.GeneticAlgorithm.Crossover(Of T).Crossover
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Crossover`1.#ctor
  Laga.GeneticAlgorithm.Population`1:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1
        name: Population
        nameWithType: Population
        qualifiedName: Laga.GeneticAlgorithm.Population
      - name: <
        nameWithType: <
        qualifiedName: <
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: Laga.GeneticAlgorithm.Population`1
        name: Population
        nameWithType: Population
        qualifiedName: Laga.GeneticAlgorithm.Population
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    commentId: T:Laga.GeneticAlgorithm.Population`1
  Laga.GeneticAlgorithm:
    name:
      CSharp:
      - name: Laga.GeneticAlgorithm
        nameWithType: Laga.GeneticAlgorithm
        qualifiedName: Laga.GeneticAlgorithm
      VB:
      - name: Laga.GeneticAlgorithm
        nameWithType: Laga.GeneticAlgorithm
        qualifiedName: Laga.GeneticAlgorithm
    isDefinition: true
    commentId: N:Laga.GeneticAlgorithm
  Laga.GeneticAlgorithm.Population{{T}}:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1
        name: Population
        nameWithType: Population
        qualifiedName: Laga.GeneticAlgorithm.Population
      - name: <
        nameWithType: <
        qualifiedName: <
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: Laga.GeneticAlgorithm.Population`1
        name: Population
        nameWithType: Population
        qualifiedName: Laga.GeneticAlgorithm.Population
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: false
    definition: Laga.GeneticAlgorithm.Population`1
    parent: Laga.GeneticAlgorithm
    commentId: T:Laga.GeneticAlgorithm.Population{`0}
  Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover*
        name: SinglePointCrossover
        nameWithType: Crossover<T>.SinglePointCrossover
        qualifiedName: Laga.GeneticAlgorithm.Crossover<T>.SinglePointCrossover
      VB:
      - id: Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover*
        name: SinglePointCrossover
        nameWithType: Crossover(Of T).SinglePointCrossover
        qualifiedName: Laga.GeneticAlgorithm.Crossover(Of T).SinglePointCrossover
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Crossover`1.SinglePointCrossover
  Laga.GeneticAlgorithm.Crossover`1.RandomPointCrossover*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Crossover`1.RandomPointCrossover*
        name: RandomPointCrossover
        nameWithType: Crossover<T>.RandomPointCrossover
        qualifiedName: Laga.GeneticAlgorithm.Crossover<T>.RandomPointCrossover
      VB:
      - id: Laga.GeneticAlgorithm.Crossover`1.RandomPointCrossover*
        name: RandomPointCrossover
        nameWithType: Crossover(Of T).RandomPointCrossover
        qualifiedName: Laga.GeneticAlgorithm.Crossover(Of T).RandomPointCrossover
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Crossover`1.RandomPointCrossover
  Laga.GeneticAlgorithm.Chromosome{{T}}:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Chromosome`1
        name: Chromosome
        nameWithType: Chromosome
        qualifiedName: Laga.GeneticAlgorithm.Chromosome
      - name: <
        nameWithType: <
        qualifiedName: <
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: Laga.GeneticAlgorithm.Chromosome`1
        name: Chromosome
        nameWithType: Chromosome
        qualifiedName: Laga.GeneticAlgorithm.Chromosome
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: false
    definition: Laga.GeneticAlgorithm.Chromosome`1
    parent: Laga.GeneticAlgorithm
    commentId: T:Laga.GeneticAlgorithm.Chromosome{`0}
  System.Object[][]:
    name:
      CSharp:
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: ()
        nameWithType: ()
        qualifiedName: ()
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  System.Single:
    name:
      CSharp:
      - id: System.Single
        name: Single
        nameWithType: Single
        qualifiedName: System.Single
        isExternal: true
      VB:
      - id: System.Single
        name: Single
        nameWithType: Single
        qualifiedName: System.Single
        isExternal: true
    isDefinition: true
    parent: System
    commentId: T:System.Single
  Laga.GeneticAlgorithm.Crossover`1:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Crossover`1
        name: Crossover
        nameWithType: Crossover
        qualifiedName: Laga.GeneticAlgorithm.Crossover
      - name: <
        nameWithType: <
        qualifiedName: <
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: Laga.GeneticAlgorithm.Crossover`1
        name: Crossover
        nameWithType: Crossover
        qualifiedName: Laga.GeneticAlgorithm.Crossover
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    commentId: T:Laga.GeneticAlgorithm.Crossover`1
  Laga.GeneticAlgorithm.GenrChromosome.SizeChrom*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrChromosome.SizeChrom*
        name: SizeChrom
        nameWithType: GenrChromosome.SizeChrom
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.SizeChrom
      VB:
      - id: Laga.GeneticAlgorithm.GenrChromosome.SizeChrom*
        name: SizeChrom
        nameWithType: GenrChromosome.SizeChrom
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.SizeChrom
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrChromosome.SizeChrom
  Laga.GeneticAlgorithm.GenrChromosome.#ctor*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrChromosome.#ctor*
        name: GenrChromosome
        nameWithType: GenrChromosome.GenrChromosome
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.GenrChromosome
      VB:
      - id: Laga.GeneticAlgorithm.GenrChromosome.#ctor*
        name: GenrChromosome
        nameWithType: GenrChromosome.GenrChromosome
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.GenrChromosome
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrChromosome.#ctor
  System.Double[]:
    name:
      CSharp:
      - id: System.Double
        name: Double
        nameWithType: Double
        qualifiedName: System.Double
        isExternal: true
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: System.Double
        name: Double
        nameWithType: Double
        qualifiedName: System.Double
        isExternal: true
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome*
        name: NumberChromosome
        nameWithType: GenrChromosome.NumberChromosome
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome
      VB:
      - id: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome*
        name: NumberChromosome
        nameWithType: GenrChromosome.NumberChromosome
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrChromosome.NumberChromosome
  System.Single[]:
    name:
      CSharp:
      - id: System.Single
        name: Single
        nameWithType: Single
        qualifiedName: System.Single
        isExternal: true
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: System.Single
        name: Single
        nameWithType: Single
        qualifiedName: System.Single
        isExternal: true
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeBinary*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeBinary*
        name: NumberChromosomeBinary
        nameWithType: GenrChromosome.NumberChromosomeBinary
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeBinary
      VB:
      - id: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeBinary*
        name: NumberChromosomeBinary
        nameWithType: GenrChromosome.NumberChromosomeBinary
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeBinary
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeBinary
  Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeSwap*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeSwap*
        name: NumberChromosomeSwap
        nameWithType: GenrChromosome.NumberChromosomeSwap
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeSwap
      VB:
      - id: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeSwap*
        name: NumberChromosomeSwap
        nameWithType: GenrChromosome.NumberChromosomeSwap
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeSwap
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrChromosome.NumberChromosomeSwap
  System.Char[]:
    name:
      CSharp:
      - id: System.Char
        name: Char
        nameWithType: Char
        qualifiedName: System.Char
        isExternal: true
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: System.Char
        name: Char
        nameWithType: Char
        qualifiedName: System.Char
        isExternal: true
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  Laga.GeneticAlgorithm.GenrChromosome.CharChromosomeBinary*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrChromosome.CharChromosomeBinary*
        name: CharChromosomeBinary
        nameWithType: GenrChromosome.CharChromosomeBinary
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.CharChromosomeBinary
      VB:
      - id: Laga.GeneticAlgorithm.GenrChromosome.CharChromosomeBinary*
        name: CharChromosomeBinary
        nameWithType: GenrChromosome.CharChromosomeBinary
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.CharChromosomeBinary
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrChromosome.CharChromosomeBinary
  Laga.GeneticAlgorithm.GenrChromosome.CharChromosome*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrChromosome.CharChromosome*
        name: CharChromosome
        nameWithType: GenrChromosome.CharChromosome
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.CharChromosome
      VB:
      - id: Laga.GeneticAlgorithm.GenrChromosome.CharChromosome*
        name: CharChromosome
        nameWithType: GenrChromosome.CharChromosome
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome.CharChromosome
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrChromosome.CharChromosome
  Laga.GeneticAlgorithm.GenrChromosome:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrChromosome
        name: GenrChromosome
        nameWithType: GenrChromosome
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome
      VB:
      - id: Laga.GeneticAlgorithm.GenrChromosome
        name: GenrChromosome
        nameWithType: GenrChromosome
        qualifiedName: Laga.GeneticAlgorithm.GenrChromosome
    isDefinition: true
    commentId: T:Laga.GeneticAlgorithm.GenrChromosome
  Laga.GeneticAlgorithm.GenrPopulation.SizePop*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrPopulation.SizePop*
        name: SizePop
        nameWithType: GenrPopulation.SizePop
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.SizePop
      VB:
      - id: Laga.GeneticAlgorithm.GenrPopulation.SizePop*
        name: SizePop
        nameWithType: GenrPopulation.SizePop
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.SizePop
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrPopulation.SizePop
  Laga.GeneticAlgorithm.GenrPopulation.#ctor*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrPopulation.#ctor*
        name: GenrPopulation
        nameWithType: GenrPopulation.GenrPopulation
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.GenrPopulation
      VB:
      - id: Laga.GeneticAlgorithm.GenrPopulation.#ctor*
        name: GenrPopulation
        nameWithType: GenrPopulation.GenrPopulation
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.GenrPopulation
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrPopulation.#ctor
  System.Object[]:
    name:
      CSharp:
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: System.Object
        name: Object
        nameWithType: Object
        qualifiedName: System.Object
        isExternal: true
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  Laga.GeneticAlgorithm.GenrPopulation.ObjectPopulationSwap*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrPopulation.ObjectPopulationSwap*
        name: ObjectPopulationSwap
        nameWithType: GenrPopulation.ObjectPopulationSwap
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.ObjectPopulationSwap
      VB:
      - id: Laga.GeneticAlgorithm.GenrPopulation.ObjectPopulationSwap*
        name: ObjectPopulationSwap
        nameWithType: GenrPopulation.ObjectPopulationSwap
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.ObjectPopulationSwap
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrPopulation.ObjectPopulationSwap
  Laga.GeneticAlgorithm.GenrPopulation.NumPopulation*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation*
        name: NumPopulation
        nameWithType: GenrPopulation.NumPopulation
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation
      VB:
      - id: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation*
        name: NumPopulation
        nameWithType: GenrPopulation.NumPopulation
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.NumPopulation
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrPopulation.NumPopulation
  Laga.GeneticAlgorithm.GenrPopulation.NumPopulationSwap*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrPopulation.NumPopulationSwap*
        name: NumPopulationSwap
        nameWithType: GenrPopulation.NumPopulationSwap
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.NumPopulationSwap
      VB:
      - id: Laga.GeneticAlgorithm.GenrPopulation.NumPopulationSwap*
        name: NumPopulationSwap
        nameWithType: GenrPopulation.NumPopulationSwap
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.NumPopulationSwap
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrPopulation.NumPopulationSwap
  Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationInt*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationInt*
        name: BinaryPopulationInt
        nameWithType: GenrPopulation.BinaryPopulationInt
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationInt
      VB:
      - id: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationInt*
        name: BinaryPopulationInt
        nameWithType: GenrPopulation.BinaryPopulationInt
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationInt
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationInt
  Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationChr*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationChr*
        name: BinaryPopulationChr
        nameWithType: GenrPopulation.BinaryPopulationChr
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationChr
      VB:
      - id: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationChr*
        name: BinaryPopulationChr
        nameWithType: GenrPopulation.BinaryPopulationChr
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationChr
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrPopulation.BinaryPopulationChr
  Laga.GeneticAlgorithm.GenrPopulation.CharPopulation*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrPopulation.CharPopulation*
        name: CharPopulation
        nameWithType: GenrPopulation.CharPopulation
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.CharPopulation
      VB:
      - id: Laga.GeneticAlgorithm.GenrPopulation.CharPopulation*
        name: CharPopulation
        nameWithType: GenrPopulation.CharPopulation
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.CharPopulation
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrPopulation.CharPopulation
  Laga.GeneticAlgorithm.GenrPopulation.PointPopulation*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrPopulation.PointPopulation*
        name: PointPopulation
        nameWithType: GenrPopulation.PointPopulation
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.PointPopulation
      VB:
      - id: Laga.GeneticAlgorithm.GenrPopulation.PointPopulation*
        name: PointPopulation
        nameWithType: GenrPopulation.PointPopulation
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation.PointPopulation
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.GenrPopulation.PointPopulation
  Laga.GeneticAlgorithm.GenrPopulation:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.GenrPopulation
        name: GenrPopulation
        nameWithType: GenrPopulation
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation
      VB:
      - id: Laga.GeneticAlgorithm.GenrPopulation
        name: GenrPopulation
        nameWithType: GenrPopulation
        qualifiedName: Laga.GeneticAlgorithm.GenrPopulation
    isDefinition: true
    commentId: T:Laga.GeneticAlgorithm.GenrPopulation
  '{T}[]':
    name:
      CSharp:
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  Laga.GeneticAlgorithm.LagaTools.BinaryChromosomeToInteger*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.BinaryChromosomeToInteger*
        name: BinaryChromosomeToInteger
        nameWithType: LagaTools.BinaryChromosomeToInteger
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.BinaryChromosomeToInteger
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.BinaryChromosomeToInteger*
        name: BinaryChromosomeToInteger
        nameWithType: LagaTools.BinaryChromosomeToInteger
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.BinaryChromosomeToInteger
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.BinaryChromosomeToInteger
  Laga.GeneticAlgorithm.LagaTools.ExtractDNA*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.ExtractDNA*
        name: ExtractDNA
        nameWithType: LagaTools.ExtractDNA
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.ExtractDNA
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.ExtractDNA*
        name: ExtractDNA
        nameWithType: LagaTools.ExtractDNA
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.ExtractDNA
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.ExtractDNA
  Laga.GeneticAlgorithm.LagaTools.MinMaxValue*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.MinMaxValue*
        name: MinMaxValue
        nameWithType: LagaTools.MinMaxValue
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.MinMaxValue
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.MinMaxValue*
        name: MinMaxValue
        nameWithType: LagaTools.MinMaxValue
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.MinMaxValue
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.MinMaxValue
  Laga.GeneticAlgorithm.LagaTools.ReversePopulation*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.ReversePopulation*
        name: ReversePopulation
        nameWithType: LagaTools.ReversePopulation
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.ReversePopulation
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.ReversePopulation*
        name: ReversePopulation
        nameWithType: LagaTools.ReversePopulation
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.ReversePopulation
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.ReversePopulation
  Laga.GeneticAlgorithm.LagaTools.Prefix*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.Prefix*
        name: Prefix
        nameWithType: LagaTools.Prefix
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.Prefix
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.Prefix*
        name: Prefix
        nameWithType: LagaTools.Prefix
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.Prefix
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.Prefix
  LagaUnity.Point[]:
    name:
      CSharp:
      - id: LagaUnity.Point
        name: Point
        nameWithType: Point
        qualifiedName: LagaUnity.Point
      - name: '[]'
        nameWithType: '[]'
        qualifiedName: '[]'
      VB:
      - id: LagaUnity.Point
        name: Point
        nameWithType: Point
        qualifiedName: LagaUnity.Point
      - name: ()
        nameWithType: ()
        qualifiedName: ()
    isDefinition: false
  Laga.GeneticAlgorithm.LagaTools.Parse*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.Parse*
        name: Parse
        nameWithType: LagaTools.Parse
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.Parse
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.Parse*
        name: Parse
        nameWithType: LagaTools.Parse
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.Parse
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.Parse
  Laga.GeneticAlgorithm.LagaTools.Reverse*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.Reverse*
        name: Reverse
        nameWithType: LagaTools.Reverse
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.Reverse
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.Reverse*
        name: Reverse
        nameWithType: LagaTools.Reverse
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.Reverse
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.Reverse
  Laga.GeneticAlgorithm.LagaTools.Fisher_Yates*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates*
        name: Fisher_Yates
        nameWithType: LagaTools.Fisher_Yates
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates*
        name: Fisher_Yates
        nameWithType: LagaTools.Fisher_Yates
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.Fisher_Yates
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.Fisher_Yates
  Laga.GeneticAlgorithm.LagaTools.Fisher_YatesPercent*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.Fisher_YatesPercent*
        name: Fisher_YatesPercent
        nameWithType: LagaTools.Fisher_YatesPercent
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.Fisher_YatesPercent
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.Fisher_YatesPercent*
        name: Fisher_YatesPercent
        nameWithType: LagaTools.Fisher_YatesPercent
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.Fisher_YatesPercent
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.Fisher_YatesPercent
  Laga.GeneticAlgorithm.LagaTools.GetRandomNumber*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.GetRandomNumber*
        name: GetRandomNumber
        nameWithType: LagaTools.GetRandomNumber
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.GetRandomNumber
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.GetRandomNumber*
        name: GetRandomNumber
        nameWithType: LagaTools.GetRandomNumber
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.GetRandomNumber
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.GetRandomNumber
  Laga.GeneticAlgorithm.LagaTools.RandomCharBinary*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.RandomCharBinary*
        name: RandomCharBinary
        nameWithType: LagaTools.RandomCharBinary
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.RandomCharBinary
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.RandomCharBinary*
        name: RandomCharBinary
        nameWithType: LagaTools.RandomCharBinary
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.RandomCharBinary
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.RandomCharBinary
  Laga.GeneticAlgorithm.LagaTools.RandomChar*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.RandomChar*
        name: RandomChar
        nameWithType: LagaTools.RandomChar
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.RandomChar
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.RandomChar*
        name: RandomChar
        nameWithType: LagaTools.RandomChar
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.RandomChar
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.RandomChar
  Laga.GeneticAlgorithm.LagaTools.RandomInt*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.RandomInt*
        name: RandomInt
        nameWithType: LagaTools.RandomInt
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.RandomInt
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.RandomInt*
        name: RandomInt
        nameWithType: LagaTools.RandomInt
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.RandomInt
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.RandomInt
  Laga.GeneticAlgorithm.LagaTools.Mom_Dad*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools.Mom_Dad*
        name: Mom_Dad
        nameWithType: LagaTools.Mom_Dad
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.Mom_Dad
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools.Mom_Dad*
        name: Mom_Dad
        nameWithType: LagaTools.Mom_Dad
        qualifiedName: Laga.GeneticAlgorithm.LagaTools.Mom_Dad
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.LagaTools.Mom_Dad
  Laga.GeneticAlgorithm.LagaTools:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.LagaTools
        name: LagaTools
        nameWithType: LagaTools
        qualifiedName: Laga.GeneticAlgorithm.LagaTools
      VB:
      - id: Laga.GeneticAlgorithm.LagaTools
        name: LagaTools
        nameWithType: LagaTools
        qualifiedName: Laga.GeneticAlgorithm.LagaTools
    isDefinition: true
    commentId: T:Laga.GeneticAlgorithm.LagaTools
  Laga.GeneticAlgorithm.Mutation.#ctor*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Mutation.#ctor*
        name: Mutation
        nameWithType: Mutation.Mutation
        qualifiedName: Laga.GeneticAlgorithm.Mutation.Mutation
      VB:
      - id: Laga.GeneticAlgorithm.Mutation.#ctor*
        name: Mutation
        nameWithType: Mutation.Mutation
        qualifiedName: Laga.GeneticAlgorithm.Mutation.Mutation
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Mutation.#ctor
  Laga.GeneticAlgorithm.Population{System.Char}:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1
        name: Population
        nameWithType: Population
        qualifiedName: Laga.GeneticAlgorithm.Population
      - name: <
        nameWithType: <
        qualifiedName: <
      - id: System.Char
        name: Char
        nameWithType: Char
        qualifiedName: System.Char
        isExternal: true
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: Laga.GeneticAlgorithm.Population`1
        name: Population
        nameWithType: Population
        qualifiedName: Laga.GeneticAlgorithm.Population
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - id: System.Char
        name: Char
        nameWithType: Char
        qualifiedName: System.Char
        isExternal: true
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: false
    definition: Laga.GeneticAlgorithm.Population`1
    parent: Laga.GeneticAlgorithm
    commentId: T:Laga.GeneticAlgorithm.Population{System.Char}
  Laga.GeneticAlgorithm.Mutation.CharMutation*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Mutation.CharMutation*
        name: CharMutation
        nameWithType: Mutation.CharMutation
        qualifiedName: Laga.GeneticAlgorithm.Mutation.CharMutation
      VB:
      - id: Laga.GeneticAlgorithm.Mutation.CharMutation*
        name: CharMutation
        nameWithType: Mutation.CharMutation
        qualifiedName: Laga.GeneticAlgorithm.Mutation.CharMutation
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Mutation.CharMutation
  Laga.GeneticAlgorithm.Population{System.Double}:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1
        name: Population
        nameWithType: Population
        qualifiedName: Laga.GeneticAlgorithm.Population
      - name: <
        nameWithType: <
        qualifiedName: <
      - id: System.Double
        name: Double
        nameWithType: Double
        qualifiedName: System.Double
        isExternal: true
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: Laga.GeneticAlgorithm.Population`1
        name: Population
        nameWithType: Population
        qualifiedName: Laga.GeneticAlgorithm.Population
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - id: System.Double
        name: Double
        nameWithType: Double
        qualifiedName: System.Double
        isExternal: true
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: false
    definition: Laga.GeneticAlgorithm.Population`1
    parent: Laga.GeneticAlgorithm
    commentId: T:Laga.GeneticAlgorithm.Population{System.Double}
  Laga.GeneticAlgorithm.Mutation.Number*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Mutation.Number*
        name: Number
        nameWithType: Mutation.Number
        qualifiedName: Laga.GeneticAlgorithm.Mutation.Number
      VB:
      - id: Laga.GeneticAlgorithm.Mutation.Number*
        name: Number
        nameWithType: Mutation.Number
        qualifiedName: Laga.GeneticAlgorithm.Mutation.Number
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Mutation.Number
  Laga.GeneticAlgorithm.Mutation.MutationSwap*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Mutation.MutationSwap*
        name: MutationSwap
        nameWithType: Mutation.MutationSwap
        qualifiedName: Laga.GeneticAlgorithm.Mutation.MutationSwap
      VB:
      - id: Laga.GeneticAlgorithm.Mutation.MutationSwap*
        name: MutationSwap
        nameWithType: Mutation.MutationSwap
        qualifiedName: Laga.GeneticAlgorithm.Mutation.MutationSwap
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Mutation.MutationSwap
  Laga.GeneticAlgorithm.Mutation.NumbMutation*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Mutation.NumbMutation*
        name: NumbMutation
        nameWithType: Mutation.NumbMutation
        qualifiedName: Laga.GeneticAlgorithm.Mutation.NumbMutation
      VB:
      - id: Laga.GeneticAlgorithm.Mutation.NumbMutation*
        name: NumbMutation
        nameWithType: Mutation.NumbMutation
        qualifiedName: Laga.GeneticAlgorithm.Mutation.NumbMutation
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Mutation.NumbMutation
  Laga.GeneticAlgorithm.Mutation.BinaryCharMutation*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Mutation.BinaryCharMutation*
        name: BinaryCharMutation
        nameWithType: Mutation.BinaryCharMutation
        qualifiedName: Laga.GeneticAlgorithm.Mutation.BinaryCharMutation
      VB:
      - id: Laga.GeneticAlgorithm.Mutation.BinaryCharMutation*
        name: BinaryCharMutation
        nameWithType: Mutation.BinaryCharMutation
        qualifiedName: Laga.GeneticAlgorithm.Mutation.BinaryCharMutation
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Mutation.BinaryCharMutation
  Laga.GeneticAlgorithm.Mutation:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Mutation
        name: Mutation
        nameWithType: Mutation
        qualifiedName: Laga.GeneticAlgorithm.Mutation
      VB:
      - id: Laga.GeneticAlgorithm.Mutation
        name: Mutation
        nameWithType: Mutation
        qualifiedName: Laga.GeneticAlgorithm.Mutation
    isDefinition: true
    commentId: T:Laga.GeneticAlgorithm.Mutation
  Laga.GeneticAlgorithm.NaturalSelection`1.#ctor*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1.#ctor*
        name: NaturalSelection
        nameWithType: NaturalSelection<T>.NaturalSelection
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection<T>.NaturalSelection
      VB:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1.#ctor*
        name: NaturalSelection
        nameWithType: NaturalSelection(Of T).NaturalSelection
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection(Of T).NaturalSelection
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.NaturalSelection`1.#ctor
  Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin*
        name: RouletteWheelNonPolinomicMin
        nameWithType: NaturalSelection<T>.RouletteWheelNonPolinomicMin
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheelNonPolinomicMin
      VB:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin*
        name: RouletteWheelNonPolinomicMin
        nameWithType: NaturalSelection(Of T).RouletteWheelNonPolinomicMin
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheelNonPolinomicMin
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelNonPolinomicMin
  Laga.GeneticAlgorithm.NaturalSelection`1.Elitism*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1.Elitism*
        name: Elitism
        nameWithType: NaturalSelection<T>.Elitism
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection<T>.Elitism
      VB:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1.Elitism*
        name: Elitism
        nameWithType: NaturalSelection(Of T).Elitism
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection(Of T).Elitism
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.NaturalSelection`1.Elitism
  Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel*
        name: RouletteWheel
        nameWithType: NaturalSelection<T>.RouletteWheel
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheel
      VB:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel*
        name: RouletteWheel
        nameWithType: NaturalSelection(Of T).RouletteWheel
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheel
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheel
  Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal*
        name: RouletteWheelSigmoidal
        nameWithType: NaturalSelection<T>.RouletteWheelSigmoidal
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection<T>.RouletteWheelSigmoidal
      VB:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal*
        name: RouletteWheelSigmoidal
        nameWithType: NaturalSelection(Of T).RouletteWheelSigmoidal
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection(Of T).RouletteWheelSigmoidal
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.NaturalSelection`1.RouletteWheelSigmoidal
  Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*
        name: TournamentSelection
        nameWithType: NaturalSelection<T>.TournamentSelection
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection<T>.TournamentSelection
      VB:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection*
        name: TournamentSelection
        nameWithType: NaturalSelection(Of T).TournamentSelection
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection(Of T).TournamentSelection
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.NaturalSelection`1.TournamentSelection
  Laga.GeneticAlgorithm.NaturalSelection`1:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1
        name: NaturalSelection
        nameWithType: NaturalSelection
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection
      - name: <
        nameWithType: <
        qualifiedName: <
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: Laga.GeneticAlgorithm.NaturalSelection`1
        name: NaturalSelection
        nameWithType: NaturalSelection
        qualifiedName: Laga.GeneticAlgorithm.NaturalSelection
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - name: T
        nameWithType: T
        qualifiedName: T
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    commentId: T:Laga.GeneticAlgorithm.NaturalSelection`1
  System.Collections:
    name:
      CSharp:
      - name: System.Collections
        nameWithType: System.Collections
        qualifiedName: System.Collections
        isExternal: true
      VB:
      - name: System.Collections
        nameWithType: System.Collections
        qualifiedName: System.Collections
    isDefinition: true
    commentId: N:System.Collections
  System.Collections.IEnumerable:
    name:
      CSharp:
      - id: System.Collections.IEnumerable
        name: IEnumerable
        nameWithType: IEnumerable
        qualifiedName: System.Collections.IEnumerable
        isExternal: true
      VB:
      - id: System.Collections.IEnumerable
        name: IEnumerable
        nameWithType: IEnumerable
        qualifiedName: System.Collections.IEnumerable
        isExternal: true
    isDefinition: true
    parent: System.Collections
    commentId: T:System.Collections.IEnumerable
  Laga.GeneticAlgorithm.Population`1.#ctor*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1.#ctor*
        name: Population
        nameWithType: Population<T>.Population
        qualifiedName: Laga.GeneticAlgorithm.Population<T>.Population
      VB:
      - id: Laga.GeneticAlgorithm.Population`1.#ctor*
        name: Population
        nameWithType: Population(Of T).Population
        qualifiedName: Laga.GeneticAlgorithm.Population(Of T).Population
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Population`1.#ctor
  Laga.GeneticAlgorithm.Population`1.Count*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1.Count*
        name: Count
        nameWithType: Population<T>.Count
        qualifiedName: Laga.GeneticAlgorithm.Population<T>.Count
      VB:
      - id: Laga.GeneticAlgorithm.Population`1.Count*
        name: Count
        nameWithType: Population(Of T).Count
        qualifiedName: Laga.GeneticAlgorithm.Population(Of T).Count
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Population`1.Count
  Laga.GeneticAlgorithm.Population`1.Higher*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1.Higher*
        name: Higher
        nameWithType: Population<T>.Higher
        qualifiedName: Laga.GeneticAlgorithm.Population<T>.Higher
      VB:
      - id: Laga.GeneticAlgorithm.Population`1.Higher*
        name: Higher
        nameWithType: Population(Of T).Higher
        qualifiedName: Laga.GeneticAlgorithm.Population(Of T).Higher
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Population`1.Higher
  Laga.GeneticAlgorithm.Population`1.Add*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1.Add*
        name: Add
        nameWithType: Population<T>.Add
        qualifiedName: Laga.GeneticAlgorithm.Population<T>.Add
      VB:
      - id: Laga.GeneticAlgorithm.Population`1.Add*
        name: Add
        nameWithType: Population(Of T).Add
        qualifiedName: Laga.GeneticAlgorithm.Population(Of T).Add
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Population`1.Add
  Laga.GeneticAlgorithm.Population`1.Delete*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1.Delete*
        name: Delete
        nameWithType: Population<T>.Delete
        qualifiedName: Laga.GeneticAlgorithm.Population<T>.Delete
      VB:
      - id: Laga.GeneticAlgorithm.Population`1.Delete*
        name: Delete
        nameWithType: Population(Of T).Delete
        qualifiedName: Laga.GeneticAlgorithm.Population(Of T).Delete
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Population`1.Delete
  Laga.GeneticAlgorithm.Population`1.Lower*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1.Lower*
        name: Lower
        nameWithType: Population<T>.Lower
        qualifiedName: Laga.GeneticAlgorithm.Population<T>.Lower
      VB:
      - id: Laga.GeneticAlgorithm.Population`1.Lower*
        name: Lower
        nameWithType: Population(Of T).Lower
        qualifiedName: Laga.GeneticAlgorithm.Population(Of T).Lower
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Population`1.Lower
  Laga.GeneticAlgorithm.Population`1.GetChromosome*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1.GetChromosome*
        name: GetChromosome
        nameWithType: Population<T>.GetChromosome
        qualifiedName: Laga.GeneticAlgorithm.Population<T>.GetChromosome
      VB:
      - id: Laga.GeneticAlgorithm.Population`1.GetChromosome*
        name: GetChromosome
        nameWithType: Population(Of T).GetChromosome
        qualifiedName: Laga.GeneticAlgorithm.Population(Of T).GetChromosome
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Population`1.GetChromosome
  Laga.GeneticAlgorithm.Population`1.FitnessAverage*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1.FitnessAverage*
        name: FitnessAverage
        nameWithType: Population<T>.FitnessAverage
        qualifiedName: Laga.GeneticAlgorithm.Population<T>.FitnessAverage
      VB:
      - id: Laga.GeneticAlgorithm.Population`1.FitnessAverage*
        name: FitnessAverage
        nameWithType: Population(Of T).FitnessAverage
        qualifiedName: Laga.GeneticAlgorithm.Population(Of T).FitnessAverage
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Population`1.FitnessAverage
  System.Collections.IEnumerator:
    name:
      CSharp:
      - id: System.Collections.IEnumerator
        name: IEnumerator
        nameWithType: IEnumerator
        qualifiedName: System.Collections.IEnumerator
        isExternal: true
      VB:
      - id: System.Collections.IEnumerator
        name: IEnumerator
        nameWithType: IEnumerator
        qualifiedName: System.Collections.IEnumerator
        isExternal: true
    isDefinition: true
    parent: System.Collections
    commentId: T:System.Collections.IEnumerator
  Laga.GeneticAlgorithm.Population`1.GetEnumerator*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Population`1.GetEnumerator*
        name: GetEnumerator
        nameWithType: Population<T>.GetEnumerator
        qualifiedName: Laga.GeneticAlgorithm.Population<T>.GetEnumerator
      VB:
      - id: Laga.GeneticAlgorithm.Population`1.GetEnumerator*
        name: GetEnumerator
        nameWithType: Population(Of T).GetEnumerator
        qualifiedName: Laga.GeneticAlgorithm.Population(Of T).GetEnumerator
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Population`1.GetEnumerator
  System.Collections.IEnumerable.GetEnumerator:
    name:
      CSharp:
      - id: System.Collections.IEnumerable.GetEnumerator
        name: GetEnumerator
        nameWithType: IEnumerable.GetEnumerator
        qualifiedName: System.Collections.IEnumerable.GetEnumerator
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - name: )
        nameWithType: )
        qualifiedName: )
      VB:
      - id: System.Collections.IEnumerable.GetEnumerator
        name: GetEnumerator
        nameWithType: IEnumerable.GetEnumerator
        qualifiedName: System.Collections.IEnumerable.GetEnumerator
        isExternal: true
      - name: (
        nameWithType: (
        qualifiedName: (
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    parent: System.Collections.IEnumerable
    commentId: M:System.Collections.IEnumerable.GetEnumerator
  Laga.GeneticAlgorithm.RankingSort.#ctor*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.RankingSort.#ctor*
        name: RankingSort
        nameWithType: RankingSort.RankingSort
        qualifiedName: Laga.GeneticAlgorithm.RankingSort.RankingSort
      VB:
      - id: Laga.GeneticAlgorithm.RankingSort.#ctor*
        name: RankingSort
        nameWithType: RankingSort.RankingSort
        qualifiedName: Laga.GeneticAlgorithm.RankingSort.RankingSort
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.RankingSort.#ctor
  Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*
        name: BidirectionalBubbleSort
        nameWithType: RankingSort.BidirectionalBubbleSort
        qualifiedName: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort
      VB:
      - id: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort*
        name: BidirectionalBubbleSort
        nameWithType: RankingSort.BidirectionalBubbleSort
        qualifiedName: Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.RankingSort.BidirectionalBubbleSort
  Laga.GeneticAlgorithm.RankingSort:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.RankingSort
        name: RankingSort
        nameWithType: RankingSort
        qualifiedName: Laga.GeneticAlgorithm.RankingSort
      VB:
      - id: Laga.GeneticAlgorithm.RankingSort
        name: RankingSort
        nameWithType: RankingSort
        qualifiedName: Laga.GeneticAlgorithm.RankingSort
    isDefinition: true
    commentId: T:Laga.GeneticAlgorithm.RankingSort
  Laga.GeneticAlgorithm.Replacement.#ctor*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Replacement.#ctor*
        name: Replacement
        nameWithType: Replacement.Replacement
        qualifiedName: Laga.GeneticAlgorithm.Replacement.Replacement
      VB:
      - id: Laga.GeneticAlgorithm.Replacement.#ctor*
        name: Replacement
        nameWithType: Replacement.Replacement
        qualifiedName: Laga.GeneticAlgorithm.Replacement.Replacement
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Replacement.#ctor
  Laga.GeneticAlgorithm.Replacement.ReplaceInheritance*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance*
        name: ReplaceInheritance
        nameWithType: Replacement.ReplaceInheritance
        qualifiedName: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance
      VB:
      - id: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance*
        name: ReplaceInheritance
        nameWithType: Replacement.ReplaceInheritance
        qualifiedName: Laga.GeneticAlgorithm.Replacement.ReplaceInheritance
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Replacement.ReplaceInheritance
  Laga.GeneticAlgorithm.Replacement.ReplaceRandom*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Replacement.ReplaceRandom*
        name: ReplaceRandom
        nameWithType: Replacement.ReplaceRandom
        qualifiedName: Laga.GeneticAlgorithm.Replacement.ReplaceRandom
      VB:
      - id: Laga.GeneticAlgorithm.Replacement.ReplaceRandom*
        name: ReplaceRandom
        nameWithType: Replacement.ReplaceRandom
        qualifiedName: Laga.GeneticAlgorithm.Replacement.ReplaceRandom
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Replacement.ReplaceRandom
  Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom*
        name: ReplaceInheritanceRandom
        nameWithType: Replacement.ReplaceInheritanceRandom
        qualifiedName: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom
      VB:
      - id: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom*
        name: ReplaceInheritanceRandom
        nameWithType: Replacement.ReplaceInheritanceRandom
        qualifiedName: Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Replacement.ReplaceInheritanceRandom
  Laga.GeneticAlgorithm.Replacement.BinaryCharRandomReplace*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Replacement.BinaryCharRandomReplace*
        name: BinaryCharRandomReplace
        nameWithType: Replacement.BinaryCharRandomReplace
        qualifiedName: Laga.GeneticAlgorithm.Replacement.BinaryCharRandomReplace
      VB:
      - id: Laga.GeneticAlgorithm.Replacement.BinaryCharRandomReplace*
        name: BinaryCharRandomReplace
        nameWithType: Replacement.BinaryCharRandomReplace
        qualifiedName: Laga.GeneticAlgorithm.Replacement.BinaryCharRandomReplace
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Replacement.BinaryCharRandomReplace
  Laga.GeneticAlgorithm.Replacement.CharRandomReplace*:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Replacement.CharRandomReplace*
        name: CharRandomReplace
        nameWithType: Replacement.CharRandomReplace
        qualifiedName: Laga.GeneticAlgorithm.Replacement.CharRandomReplace
      VB:
      - id: Laga.GeneticAlgorithm.Replacement.CharRandomReplace*
        name: CharRandomReplace
        nameWithType: Replacement.CharRandomReplace
        qualifiedName: Laga.GeneticAlgorithm.Replacement.CharRandomReplace
    isDefinition: true
    commentId: Overload:Laga.GeneticAlgorithm.Replacement.CharRandomReplace
  Laga.GeneticAlgorithm.Replacement:
    name:
      CSharp:
      - id: Laga.GeneticAlgorithm.Replacement
        name: Replacement
        nameWithType: Replacement
        qualifiedName: Laga.GeneticAlgorithm.Replacement
      VB:
      - id: Laga.GeneticAlgorithm.Replacement
        name: Replacement
        nameWithType: Replacement
        qualifiedName: Laga.GeneticAlgorithm.Replacement
    isDefinition: true
    commentId: T:Laga.GeneticAlgorithm.Replacement
  System.Text:
    name:
      CSharp:
      - name: System.Text
        nameWithType: System.Text
        qualifiedName: System.Text
        isExternal: true
      VB:
      - name: System.Text
        nameWithType: System.Text
        qualifiedName: System.Text
    isDefinition: true
    commentId: N:System.Text
  System.Text.Encoding:
    name:
      CSharp:
      - id: System.Text.Encoding
        name: Encoding
        nameWithType: Encoding
        qualifiedName: System.Text.Encoding
        isExternal: true
      VB:
      - id: System.Text.Encoding
        name: Encoding
        nameWithType: Encoding
        qualifiedName: System.Text.Encoding
        isExternal: true
    isDefinition: true
    parent: System.Text
    commentId: T:System.Text.Encoding
  Laga.IO.IOTextData.SourceEncoding*:
    name:
      CSharp:
      - id: Laga.IO.IOTextData.SourceEncoding*
        name: SourceEncoding
        nameWithType: IOTextData.SourceEncoding
        qualifiedName: Laga.IO.IOTextData.SourceEncoding
      VB:
      - id: Laga.IO.IOTextData.SourceEncoding*
        name: SourceEncoding
        nameWithType: IOTextData.SourceEncoding
        qualifiedName: Laga.IO.IOTextData.SourceEncoding
    isDefinition: true
    commentId: Overload:Laga.IO.IOTextData.SourceEncoding
  Laga.IO.IOTextData.DataText*:
    name:
      CSharp:
      - id: Laga.IO.IOTextData.DataText*
        name: DataText
        nameWithType: IOTextData.DataText
        qualifiedName: Laga.IO.IOTextData.DataText
      VB:
      - id: Laga.IO.IOTextData.DataText*
        name: DataText
        nameWithType: IOTextData.DataText
        qualifiedName: Laga.IO.IOTextData.DataText
    isDefinition: true
    commentId: Overload:Laga.IO.IOTextData.DataText
  System.Collections.Generic.List{System.String}:
    name:
      CSharp:
      - id: System.Collections.Generic.List`1
        name: List
        nameWithType: List
        qualifiedName: System.Collections.Generic.List
        isExternal: true
      - name: <
        nameWithType: <
        qualifiedName: <
      - id: System.String
        name: String
        nameWithType: String
        qualifiedName: System.String
        isExternal: true
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: System.Collections.Generic.List`1
        name: List
        nameWithType: List
        qualifiedName: System.Collections.Generic.List
        isExternal: true
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - id: System.String
        name: String
        nameWithType: String
        qualifiedName: System.String
        isExternal: true
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: false
    definition: System.Collections.Generic.List`1
    parent: System.Collections.Generic
    commentId: T:System.Collections.Generic.List{System.String}
  Laga.IO.IOTextData.DataTextLine*:
    name:
      CSharp:
      - id: Laga.IO.IOTextData.DataTextLine*
        name: DataTextLine
        nameWithType: IOTextData.DataTextLine
        qualifiedName: Laga.IO.IOTextData.DataTextLine
      VB:
      - id: Laga.IO.IOTextData.DataTextLine*
        name: DataTextLine
        nameWithType: IOTextData.DataTextLine
        qualifiedName: Laga.IO.IOTextData.DataTextLine
    isDefinition: true
    commentId: Overload:Laga.IO.IOTextData.DataTextLine
  Laga.IO.IOTextData.#ctor*:
    name:
      CSharp:
      - id: Laga.IO.IOTextData.#ctor*
        name: IOTextData
        nameWithType: IOTextData.IOTextData
        qualifiedName: Laga.IO.IOTextData.IOTextData
      VB:
      - id: Laga.IO.IOTextData.#ctor*
        name: IOTextData
        nameWithType: IOTextData.IOTextData
        qualifiedName: Laga.IO.IOTextData.IOTextData
    isDefinition: true
    commentId: Overload:Laga.IO.IOTextData.#ctor
  Laga.IO:
    name:
      CSharp:
      - name: Laga.IO
        nameWithType: Laga.IO
        qualifiedName: Laga.IO
      VB:
      - name: Laga.IO
        nameWithType: Laga.IO
        qualifiedName: Laga.IO
    isDefinition: true
    commentId: N:Laga.IO
  Laga.IO.IOTextData.EncodingType:
    name:
      CSharp:
      - id: Laga.IO.IOTextData.EncodingType
        name: IOTextData.EncodingType
        nameWithType: IOTextData.EncodingType
        qualifiedName: Laga.IO.IOTextData.EncodingType
      VB:
      - id: Laga.IO.IOTextData.EncodingType
        name: IOTextData.EncodingType
        nameWithType: IOTextData.EncodingType
        qualifiedName: Laga.IO.IOTextData.EncodingType
    isDefinition: true
    parent: Laga.IO
    commentId: T:Laga.IO.IOTextData.EncodingType
  Laga.IO.IOTextData.ConvertFileEncoding*:
    name:
      CSharp:
      - id: Laga.IO.IOTextData.ConvertFileEncoding*
        name: ConvertFileEncoding
        nameWithType: IOTextData.ConvertFileEncoding
        qualifiedName: Laga.IO.IOTextData.ConvertFileEncoding
      VB:
      - id: Laga.IO.IOTextData.ConvertFileEncoding*
        name: ConvertFileEncoding
        nameWithType: IOTextData.ConvertFileEncoding
        qualifiedName: Laga.IO.IOTextData.ConvertFileEncoding
    isDefinition: true
    commentId: Overload:Laga.IO.IOTextData.ConvertFileEncoding
  Laga.IO.IOTextData.CreateFile*:
    name:
      CSharp:
      - id: Laga.IO.IOTextData.CreateFile*
        name: CreateFile
        nameWithType: IOTextData.CreateFile
        qualifiedName: Laga.IO.IOTextData.CreateFile
      VB:
      - id: Laga.IO.IOTextData.CreateFile*
        name: CreateFile
        nameWithType: IOTextData.CreateFile
        qualifiedName: Laga.IO.IOTextData.CreateFile
    isDefinition: true
    commentId: Overload:Laga.IO.IOTextData.CreateFile
  System.Collections.Generic.Dictionary`2:
    name:
      CSharp:
      - id: System.Collections.Generic.Dictionary`2
        name: Dictionary
        nameWithType: Dictionary
        qualifiedName: System.Collections.Generic.Dictionary
        isExternal: true
      - name: <
        nameWithType: <
        qualifiedName: <
      - name: TKey
        nameWithType: TKey
        qualifiedName: TKey
      - name: ', '
        nameWithType: ', '
        qualifiedName: ', '
      - name: TValue
        nameWithType: TValue
        qualifiedName: TValue
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: System.Collections.Generic.Dictionary`2
        name: Dictionary
        nameWithType: Dictionary
        qualifiedName: System.Collections.Generic.Dictionary
        isExternal: true
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - name: TKey
        nameWithType: TKey
        qualifiedName: TKey
      - name: ', '
        nameWithType: ', '
        qualifiedName: ', '
      - name: TValue
        nameWithType: TValue
        qualifiedName: TValue
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: true
    commentId: T:System.Collections.Generic.Dictionary`2
  System.Collections.Generic.Dictionary{System.String,System.Int32}:
    name:
      CSharp:
      - id: System.Collections.Generic.Dictionary`2
        name: Dictionary
        nameWithType: Dictionary
        qualifiedName: System.Collections.Generic.Dictionary
        isExternal: true
      - name: <
        nameWithType: <
        qualifiedName: <
      - id: System.String
        name: String
        nameWithType: String
        qualifiedName: System.String
        isExternal: true
      - name: ', '
        nameWithType: ', '
        qualifiedName: ', '
      - id: System.Int32
        name: Int32
        nameWithType: Int32
        qualifiedName: System.Int32
        isExternal: true
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: System.Collections.Generic.Dictionary`2
        name: Dictionary
        nameWithType: Dictionary
        qualifiedName: System.Collections.Generic.Dictionary
        isExternal: true
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - id: System.String
        name: String
        nameWithType: String
        qualifiedName: System.String
        isExternal: true
      - name: ', '
        nameWithType: ', '
        qualifiedName: ', '
      - id: System.Int32
        name: Int32
        nameWithType: Int32
        qualifiedName: System.Int32
        isExternal: true
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: false
    definition: System.Collections.Generic.Dictionary`2
    parent: System.Collections.Generic
    commentId: T:System.Collections.Generic.Dictionary{System.String,System.Int32}
  Laga.IO.IOTextData.CountWordsTopN*:
    name:
      CSharp:
      - id: Laga.IO.IOTextData.CountWordsTopN*
        name: CountWordsTopN
        nameWithType: IOTextData.CountWordsTopN
        qualifiedName: Laga.IO.IOTextData.CountWordsTopN
      VB:
      - id: Laga.IO.IOTextData.CountWordsTopN*
        name: CountWordsTopN
        nameWithType: IOTextData.CountWordsTopN
        qualifiedName: Laga.IO.IOTextData.CountWordsTopN
    isDefinition: true
    commentId: Overload:Laga.IO.IOTextData.CountWordsTopN
  Laga.IO.IOTextData.GetWords*:
    name:
      CSharp:
      - id: Laga.IO.IOTextData.GetWords*
        name: GetWords
        nameWithType: IOTextData.GetWords
        qualifiedName: Laga.IO.IOTextData.GetWords
      VB:
      - id: Laga.IO.IOTextData.GetWords*
        name: GetWords
        nameWithType: IOTextData.GetWords
        qualifiedName: Laga.IO.IOTextData.GetWords
    isDefinition: true
    commentId: Overload:Laga.IO.IOTextData.GetWords
  Laga.IO.IOTextData.RemoveDiacritics*:
    name:
      CSharp:
      - id: Laga.IO.IOTextData.RemoveDiacritics*
        name: RemoveDiacritics
        nameWithType: IOTextData.RemoveDiacritics
        qualifiedName: Laga.IO.IOTextData.RemoveDiacritics
      VB:
      - id: Laga.IO.IOTextData.RemoveDiacritics*
        name: RemoveDiacritics
        nameWithType: IOTextData.RemoveDiacritics
        qualifiedName: Laga.IO.IOTextData.RemoveDiacritics
    isDefinition: true
    commentId: Overload:Laga.IO.IOTextData.RemoveDiacritics
  Laga.IO.IOTextData.RemoveByLength*:
    name:
      CSharp:
      - id: Laga.IO.IOTextData.RemoveByLength*
        name: RemoveByLength
        nameWithType: IOTextData.RemoveByLength
        qualifiedName: Laga.IO.IOTextData.RemoveByLength
      VB:
      - id: Laga.IO.IOTextData.RemoveByLength*
        name: RemoveByLength
        nameWithType: IOTextData.RemoveByLength
        qualifiedName: Laga.IO.IOTextData.RemoveByLength
    isDefinition: true
    commentId: Overload:Laga.IO.IOTextData.RemoveByLength
  Laga.IO.IOTextData:
    name:
      CSharp:
      - id: Laga.IO.IOTextData
        name: IOTextData
        nameWithType: IOTextData
        qualifiedName: Laga.IO.IOTextData
      VB:
      - id: Laga.IO.IOTextData
        name: IOTextData
        nameWithType: IOTextData
        qualifiedName: Laga.IO.IOTextData
    isDefinition: true
    commentId: T:Laga.IO.IOTextData
  System.Collections.Generic.List{System.Collections.Generic.List{System.String}}:
    name:
      CSharp:
      - id: System.Collections.Generic.List`1
        name: List
        nameWithType: List
        qualifiedName: System.Collections.Generic.List
        isExternal: true
      - name: <
        nameWithType: <
        qualifiedName: <
      - id: System.Collections.Generic.List`1
        name: List
        nameWithType: List
        qualifiedName: System.Collections.Generic.List
        isExternal: true
      - name: <
        nameWithType: <
        qualifiedName: <
      - id: System.String
        name: String
        nameWithType: String
        qualifiedName: System.String
        isExternal: true
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: System.Collections.Generic.List`1
        name: List
        nameWithType: List
        qualifiedName: System.Collections.Generic.List
        isExternal: true
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - id: System.Collections.Generic.List`1
        name: List
        nameWithType: List
        qualifiedName: System.Collections.Generic.List
        isExternal: true
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - id: System.String
        name: String
        nameWithType: String
        qualifiedName: System.String
        isExternal: true
      - name: )
        nameWithType: )
        qualifiedName: )
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: false
    definition: System.Collections.Generic.List`1
    parent: System.Collections.Generic
    commentId: T:System.Collections.Generic.List{System.Collections.Generic.List{System.String}}
  Laga.IO.IOExcelRead.MatrixDataExcel*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelRead.MatrixDataExcel*
        name: MatrixDataExcel
        nameWithType: IOExcelRead.MatrixDataExcel
        qualifiedName: Laga.IO.IOExcelRead.MatrixDataExcel
      VB:
      - id: Laga.IO.IOExcelRead.MatrixDataExcel*
        name: MatrixDataExcel
        nameWithType: IOExcelRead.MatrixDataExcel
        qualifiedName: Laga.IO.IOExcelRead.MatrixDataExcel
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelRead.MatrixDataExcel
  Laga.IO.IOExcelRead.SheetNum*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelRead.SheetNum*
        name: SheetNum
        nameWithType: IOExcelRead.SheetNum
        qualifiedName: Laga.IO.IOExcelRead.SheetNum
      VB:
      - id: Laga.IO.IOExcelRead.SheetNum*
        name: SheetNum
        nameWithType: IOExcelRead.SheetNum
        qualifiedName: Laga.IO.IOExcelRead.SheetNum
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelRead.SheetNum
  Laga.IO.IOExcelRead.#ctor*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelRead.#ctor*
        name: IOExcelRead
        nameWithType: IOExcelRead.IOExcelRead
        qualifiedName: Laga.IO.IOExcelRead.IOExcelRead
      VB:
      - id: Laga.IO.IOExcelRead.#ctor*
        name: IOExcelRead
        nameWithType: IOExcelRead.IOExcelRead
        qualifiedName: Laga.IO.IOExcelRead.IOExcelRead
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelRead.#ctor
  Laga.IO.IOExcelRead.IOReadRange*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelRead.IOReadRange*
        name: IOReadRange
        nameWithType: IOExcelRead.IOReadRange
        qualifiedName: Laga.IO.IOExcelRead.IOReadRange
      VB:
      - id: Laga.IO.IOExcelRead.IOReadRange*
        name: IOReadRange
        nameWithType: IOExcelRead.IOReadRange
        qualifiedName: Laga.IO.IOExcelRead.IOReadRange
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelRead.IOReadRange
  Laga.IO.IOExcelRead.IOReadCell*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelRead.IOReadCell*
        name: IOReadCell
        nameWithType: IOExcelRead.IOReadCell
        qualifiedName: Laga.IO.IOExcelRead.IOReadCell
      VB:
      - id: Laga.IO.IOExcelRead.IOReadCell*
        name: IOReadCell
        nameWithType: IOExcelRead.IOReadCell
        qualifiedName: Laga.IO.IOExcelRead.IOReadCell
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelRead.IOReadCell
  Laga.IO.IOExcelRead.IORead_SetActiveSheet*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelRead.IORead_SetActiveSheet*
        name: IORead_SetActiveSheet
        nameWithType: IOExcelRead.IORead_SetActiveSheet
        qualifiedName: Laga.IO.IOExcelRead.IORead_SetActiveSheet
      VB:
      - id: Laga.IO.IOExcelRead.IORead_SetActiveSheet*
        name: IORead_SetActiveSheet
        nameWithType: IOExcelRead.IORead_SetActiveSheet
        qualifiedName: Laga.IO.IOExcelRead.IORead_SetActiveSheet
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelRead.IORead_SetActiveSheet
  Laga.IO.IOExcelRead.TestExcelOpen*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelRead.TestExcelOpen*
        name: TestExcelOpen
        nameWithType: IOExcelRead.TestExcelOpen
        qualifiedName: Laga.IO.IOExcelRead.TestExcelOpen
      VB:
      - id: Laga.IO.IOExcelRead.TestExcelOpen*
        name: TestExcelOpen
        nameWithType: IOExcelRead.TestExcelOpen
        qualifiedName: Laga.IO.IOExcelRead.TestExcelOpen
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelRead.TestExcelOpen
  Laga.IO.IOExcelRead.IORead_ExcelWorksheetNames*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelRead.IORead_ExcelWorksheetNames*
        name: IORead_ExcelWorksheetNames
        nameWithType: IOExcelRead.IORead_ExcelWorksheetNames
        qualifiedName: Laga.IO.IOExcelRead.IORead_ExcelWorksheetNames
      VB:
      - id: Laga.IO.IOExcelRead.IORead_ExcelWorksheetNames*
        name: IORead_ExcelWorksheetNames
        nameWithType: IOExcelRead.IORead_ExcelWorksheetNames
        qualifiedName: Laga.IO.IOExcelRead.IORead_ExcelWorksheetNames
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelRead.IORead_ExcelWorksheetNames
  Laga.IO.IOExcelRead.IORead_OpenExcelApp*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelRead.IORead_OpenExcelApp*
        name: IORead_OpenExcelApp
        nameWithType: IOExcelRead.IORead_OpenExcelApp
        qualifiedName: Laga.IO.IOExcelRead.IORead_OpenExcelApp
      VB:
      - id: Laga.IO.IOExcelRead.IORead_OpenExcelApp*
        name: IORead_OpenExcelApp
        nameWithType: IOExcelRead.IORead_OpenExcelApp
        qualifiedName: Laga.IO.IOExcelRead.IORead_OpenExcelApp
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelRead.IORead_OpenExcelApp
  Laga.IO.IOExcelRead.CloseExcelApp*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelRead.CloseExcelApp*
        name: CloseExcelApp
        nameWithType: IOExcelRead.CloseExcelApp
        qualifiedName: Laga.IO.IOExcelRead.CloseExcelApp
      VB:
      - id: Laga.IO.IOExcelRead.CloseExcelApp*
        name: CloseExcelApp
        nameWithType: IOExcelRead.CloseExcelApp
        qualifiedName: Laga.IO.IOExcelRead.CloseExcelApp
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelRead.CloseExcelApp
  Laga.IO.IOExcelRead:
    name:
      CSharp:
      - id: Laga.IO.IOExcelRead
        name: IOExcelRead
        nameWithType: IOExcelRead
        qualifiedName: Laga.IO.IOExcelRead
      VB:
      - id: Laga.IO.IOExcelRead
        name: IOExcelRead
        nameWithType: IOExcelRead
        qualifiedName: Laga.IO.IOExcelRead
    isDefinition: true
    commentId: T:Laga.IO.IOExcelRead
  Microsoft.Office.Interop.Excel.Range:
    name:
      CSharp:
      - id: Microsoft.Office.Interop.Excel.Range
        name: Office.Interop.Excel.Range
        nameWithType: Office.Interop.Excel.Range
        qualifiedName: Microsoft.Office.Interop.Excel.Range
        isExternal: true
      VB:
      - id: Microsoft.Office.Interop.Excel.Range
        name: Office.Interop.Excel.Range
        nameWithType: Office.Interop.Excel.Range
        qualifiedName: Microsoft.Office.Interop.Excel.Range
        isExternal: true
    isDefinition: true
    commentId: '!:Microsoft.Office.Interop.Excel.Range'
  Laga.IO.IOExcelWrite.XlRange*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.XlRange*
        name: XlRange
        nameWithType: IOExcelWrite.XlRange
        qualifiedName: Laga.IO.IOExcelWrite.XlRange
      VB:
      - id: Laga.IO.IOExcelWrite.XlRange*
        name: XlRange
        nameWithType: IOExcelWrite.XlRange
        qualifiedName: Laga.IO.IOExcelWrite.XlRange
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.XlRange
  Laga.IO.IOExcelWrite.SheetNum*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.SheetNum*
        name: SheetNum
        nameWithType: IOExcelWrite.SheetNum
        qualifiedName: Laga.IO.IOExcelWrite.SheetNum
      VB:
      - id: Laga.IO.IOExcelWrite.SheetNum*
        name: SheetNum
        nameWithType: IOExcelWrite.SheetNum
        qualifiedName: Laga.IO.IOExcelWrite.SheetNum
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.SheetNum
  Laga.IO.IOExcelWrite.MatrixDataExcel*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.MatrixDataExcel*
        name: MatrixDataExcel
        nameWithType: IOExcelWrite.MatrixDataExcel
        qualifiedName: Laga.IO.IOExcelWrite.MatrixDataExcel
      VB:
      - id: Laga.IO.IOExcelWrite.MatrixDataExcel*
        name: MatrixDataExcel
        nameWithType: IOExcelWrite.MatrixDataExcel
        qualifiedName: Laga.IO.IOExcelWrite.MatrixDataExcel
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.MatrixDataExcel
  Laga.IO.IOExcelWrite.ListDataExcel*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.ListDataExcel*
        name: ListDataExcel
        nameWithType: IOExcelWrite.ListDataExcel
        qualifiedName: Laga.IO.IOExcelWrite.ListDataExcel
      VB:
      - id: Laga.IO.IOExcelWrite.ListDataExcel*
        name: ListDataExcel
        nameWithType: IOExcelWrite.ListDataExcel
        qualifiedName: Laga.IO.IOExcelWrite.ListDataExcel
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.ListDataExcel
  Laga.IO.IOExcelWrite.CheckExcelFile*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.CheckExcelFile*
        name: CheckExcelFile
        nameWithType: IOExcelWrite.CheckExcelFile
        qualifiedName: Laga.IO.IOExcelWrite.CheckExcelFile
      VB:
      - id: Laga.IO.IOExcelWrite.CheckExcelFile*
        name: CheckExcelFile
        nameWithType: IOExcelWrite.CheckExcelFile
        qualifiedName: Laga.IO.IOExcelWrite.CheckExcelFile
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.CheckExcelFile
  Laga.IO.IOExcelWrite.#ctor*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.#ctor*
        name: IOExcelWrite
        nameWithType: IOExcelWrite.IOExcelWrite
        qualifiedName: Laga.IO.IOExcelWrite.IOExcelWrite
      VB:
      - id: Laga.IO.IOExcelWrite.#ctor*
        name: IOExcelWrite
        nameWithType: IOExcelWrite.IOExcelWrite
        qualifiedName: Laga.IO.IOExcelWrite.IOExcelWrite
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.#ctor
  Laga.IO.IOExcelWrite.IOWrite_NewExcelSheet*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.IOWrite_NewExcelSheet*
        name: IOWrite_NewExcelSheet
        nameWithType: IOExcelWrite.IOWrite_NewExcelSheet
        qualifiedName: Laga.IO.IOExcelWrite.IOWrite_NewExcelSheet
      VB:
      - id: Laga.IO.IOExcelWrite.IOWrite_NewExcelSheet*
        name: IOWrite_NewExcelSheet
        nameWithType: IOExcelWrite.IOWrite_NewExcelSheet
        qualifiedName: Laga.IO.IOExcelWrite.IOWrite_NewExcelSheet
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.IOWrite_NewExcelSheet
  Laga.IO.IOExcelWrite.IOWrite_SetActiveSheet*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.IOWrite_SetActiveSheet*
        name: IOWrite_SetActiveSheet
        nameWithType: IOExcelWrite.IOWrite_SetActiveSheet
        qualifiedName: Laga.IO.IOExcelWrite.IOWrite_SetActiveSheet
      VB:
      - id: Laga.IO.IOExcelWrite.IOWrite_SetActiveSheet*
        name: IOWrite_SetActiveSheet
        nameWithType: IOExcelWrite.IOWrite_SetActiveSheet
        qualifiedName: Laga.IO.IOExcelWrite.IOWrite_SetActiveSheet
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.IOWrite_SetActiveSheet
  Laga.IO.IOExcelWrite.IOWriteItem*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.IOWriteItem*
        name: IOWriteItem
        nameWithType: IOExcelWrite.IOWriteItem
        qualifiedName: Laga.IO.IOExcelWrite.IOWriteItem
      VB:
      - id: Laga.IO.IOExcelWrite.IOWriteItem*
        name: IOWriteItem
        nameWithType: IOExcelWrite.IOWriteItem
        qualifiedName: Laga.IO.IOExcelWrite.IOWriteItem
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.IOWriteItem
  Laga.IO.IOExcelWrite.IOWriteList*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.IOWriteList*
        name: IOWriteList
        nameWithType: IOExcelWrite.IOWriteList
        qualifiedName: Laga.IO.IOExcelWrite.IOWriteList
      VB:
      - id: Laga.IO.IOExcelWrite.IOWriteList*
        name: IOWriteList
        nameWithType: IOExcelWrite.IOWriteList
        qualifiedName: Laga.IO.IOExcelWrite.IOWriteList
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.IOWriteList
  Laga.IO.IOExcelWrite.IOWriteMatrix*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.IOWriteMatrix*
        name: IOWriteMatrix
        nameWithType: IOExcelWrite.IOWriteMatrix
        qualifiedName: Laga.IO.IOExcelWrite.IOWriteMatrix
      VB:
      - id: Laga.IO.IOExcelWrite.IOWriteMatrix*
        name: IOWriteMatrix
        nameWithType: IOExcelWrite.IOWriteMatrix
        qualifiedName: Laga.IO.IOExcelWrite.IOWriteMatrix
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.IOWriteMatrix
  Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp*
        name: IOWrite_OpenExcelApp
        nameWithType: IOExcelWrite.IOWrite_OpenExcelApp
        qualifiedName: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp
      VB:
      - id: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp*
        name: IOWrite_OpenExcelApp
        nameWithType: IOExcelWrite.IOWrite_OpenExcelApp
        qualifiedName: Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.IOWrite_OpenExcelApp
  Laga.IO.IOExcelWrite.SaveCloseExcelApp*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.SaveCloseExcelApp*
        name: SaveCloseExcelApp
        nameWithType: IOExcelWrite.SaveCloseExcelApp
        qualifiedName: Laga.IO.IOExcelWrite.SaveCloseExcelApp
      VB:
      - id: Laga.IO.IOExcelWrite.SaveCloseExcelApp*
        name: SaveCloseExcelApp
        nameWithType: IOExcelWrite.SaveCloseExcelApp
        qualifiedName: Laga.IO.IOExcelWrite.SaveCloseExcelApp
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.SaveCloseExcelApp
  Laga.IO.IOExcelWrite.CloseExcelApp*:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite.CloseExcelApp*
        name: CloseExcelApp
        nameWithType: IOExcelWrite.CloseExcelApp
        qualifiedName: Laga.IO.IOExcelWrite.CloseExcelApp
      VB:
      - id: Laga.IO.IOExcelWrite.CloseExcelApp*
        name: CloseExcelApp
        nameWithType: IOExcelWrite.CloseExcelApp
        qualifiedName: Laga.IO.IOExcelWrite.CloseExcelApp
    isDefinition: true
    commentId: Overload:Laga.IO.IOExcelWrite.CloseExcelApp
  Laga.IO.IOExcelWrite:
    name:
      CSharp:
      - id: Laga.IO.IOExcelWrite
        name: IOExcelWrite
        nameWithType: IOExcelWrite
        qualifiedName: Laga.IO.IOExcelWrite
      VB:
      - id: Laga.IO.IOExcelWrite
        name: IOExcelWrite
        nameWithType: IOExcelWrite
        qualifiedName: Laga.IO.IOExcelWrite
    isDefinition: true
    commentId: T:Laga.IO.IOExcelWrite
  Laga.IO.IODataFolder.RootFolder*:
    name:
      CSharp:
      - id: Laga.IO.IODataFolder.RootFolder*
        name: RootFolder
        nameWithType: IODataFolder.RootFolder
        qualifiedName: Laga.IO.IODataFolder.RootFolder
      VB:
      - id: Laga.IO.IODataFolder.RootFolder*
        name: RootFolder
        nameWithType: IODataFolder.RootFolder
        qualifiedName: Laga.IO.IODataFolder.RootFolder
    isDefinition: true
    commentId: Overload:Laga.IO.IODataFolder.RootFolder
  Laga.IO.IODataFolder.ListPathFileNames*:
    name:
      CSharp:
      - id: Laga.IO.IODataFolder.ListPathFileNames*
        name: ListPathFileNames
        nameWithType: IODataFolder.ListPathFileNames
        qualifiedName: Laga.IO.IODataFolder.ListPathFileNames
      VB:
      - id: Laga.IO.IODataFolder.ListPathFileNames*
        name: ListPathFileNames
        nameWithType: IODataFolder.ListPathFileNames
        qualifiedName: Laga.IO.IODataFolder.ListPathFileNames
    isDefinition: true
    commentId: Overload:Laga.IO.IODataFolder.ListPathFileNames
  Laga.IO.IODataFolder.ListFileNames*:
    name:
      CSharp:
      - id: Laga.IO.IODataFolder.ListFileNames*
        name: ListFileNames
        nameWithType: IODataFolder.ListFileNames
        qualifiedName: Laga.IO.IODataFolder.ListFileNames
      VB:
      - id: Laga.IO.IODataFolder.ListFileNames*
        name: ListFileNames
        nameWithType: IODataFolder.ListFileNames
        qualifiedName: Laga.IO.IODataFolder.ListFileNames
    isDefinition: true
    commentId: Overload:Laga.IO.IODataFolder.ListFileNames
  Laga.IO.IODataFolder.#ctor*:
    name:
      CSharp:
      - id: Laga.IO.IODataFolder.#ctor*
        name: IODataFolder
        nameWithType: IODataFolder.IODataFolder
        qualifiedName: Laga.IO.IODataFolder.IODataFolder
      VB:
      - id: Laga.IO.IODataFolder.#ctor*
        name: IODataFolder
        nameWithType: IODataFolder.IODataFolder
        qualifiedName: Laga.IO.IODataFolder.IODataFolder
    isDefinition: true
    commentId: Overload:Laga.IO.IODataFolder.#ctor
  Laga.IO.IODataFolder.ReadSelectiveData*:
    name:
      CSharp:
      - id: Laga.IO.IODataFolder.ReadSelectiveData*
        name: ReadSelectiveData
        nameWithType: IODataFolder.ReadSelectiveData
        qualifiedName: Laga.IO.IODataFolder.ReadSelectiveData
      VB:
      - id: Laga.IO.IODataFolder.ReadSelectiveData*
        name: ReadSelectiveData
        nameWithType: IODataFolder.ReadSelectiveData
        qualifiedName: Laga.IO.IODataFolder.ReadSelectiveData
    isDefinition: true
    commentId: Overload:Laga.IO.IODataFolder.ReadSelectiveData
  Laga.IO.IODataFolder:
    name:
      CSharp:
      - id: Laga.IO.IODataFolder
        name: IODataFolder
        nameWithType: IODataFolder
        qualifiedName: Laga.IO.IODataFolder
      VB:
      - id: Laga.IO.IODataFolder
        name: IODataFolder
        nameWithType: IODataFolder
        qualifiedName: Laga.IO.IODataFolder
    isDefinition: true
    commentId: T:Laga.IO.IODataFolder
  Laga.Numbers.Maths.Deg2Rad*:
    name:
      CSharp:
      - id: Laga.Numbers.Maths.Deg2Rad*
        name: Deg2Rad
        nameWithType: Maths.Deg2Rad
        qualifiedName: Laga.Numbers.Maths.Deg2Rad
      VB:
      - id: Laga.Numbers.Maths.Deg2Rad*
        name: Deg2Rad
        nameWithType: Maths.Deg2Rad
        qualifiedName: Laga.Numbers.Maths.Deg2Rad
    isDefinition: true
    commentId: Overload:Laga.Numbers.Maths.Deg2Rad
  Laga.Numbers.Maths.Rad2Deg*:
    name:
      CSharp:
      - id: Laga.Numbers.Maths.Rad2Deg*
        name: Rad2Deg
        nameWithType: Maths.Rad2Deg
        qualifiedName: Laga.Numbers.Maths.Rad2Deg
      VB:
      - id: Laga.Numbers.Maths.Rad2Deg*
        name: Rad2Deg
        nameWithType: Maths.Rad2Deg
        qualifiedName: Laga.Numbers.Maths.Rad2Deg
    isDefinition: true
    commentId: Overload:Laga.Numbers.Maths.Rad2Deg
  Laga.Numbers.Maths:
    name:
      CSharp:
      - id: Laga.Numbers.Maths
        name: Maths
        nameWithType: Maths
        qualifiedName: Laga.Numbers.Maths
      VB:
      - id: Laga.Numbers.Maths
        name: Maths
        nameWithType: Maths
        qualifiedName: Laga.Numbers.Maths
    isDefinition: true
    commentId: T:Laga.Numbers.Maths
  Laga.Numbers.Rand.RandomNumbers*:
    name:
      CSharp:
      - id: Laga.Numbers.Rand.RandomNumbers*
        name: RandomNumbers
        nameWithType: Rand.RandomNumbers
        qualifiedName: Laga.Numbers.Rand.RandomNumbers
      VB:
      - id: Laga.Numbers.Rand.RandomNumbers*
        name: RandomNumbers
        nameWithType: Rand.RandomNumbers
        qualifiedName: Laga.Numbers.Rand.RandomNumbers
    isDefinition: true
    commentId: Overload:Laga.Numbers.Rand.RandomNumbers
  System.Collections.Generic.List{System.Double}:
    name:
      CSharp:
      - id: System.Collections.Generic.List`1
        name: List
        nameWithType: List
        qualifiedName: System.Collections.Generic.List
        isExternal: true
      - name: <
        nameWithType: <
        qualifiedName: <
      - id: System.Double
        name: Double
        nameWithType: Double
        qualifiedName: System.Double
        isExternal: true
      - name: '>'
        nameWithType: '>'
        qualifiedName: '>'
      VB:
      - id: System.Collections.Generic.List`1
        name: List
        nameWithType: List
        qualifiedName: System.Collections.Generic.List
        isExternal: true
      - name: '(Of '
        nameWithType: '(Of '
        qualifiedName: '(Of '
      - id: System.Double
        name: Double
        nameWithType: Double
        qualifiedName: System.Double
        isExternal: true
      - name: )
        nameWithType: )
        qualifiedName: )
    isDefinition: false
    definition: System.Collections.Generic.List`1
    parent: System.Collections.Generic
    commentId: T:System.Collections.Generic.List{System.Double}
  Laga.Numbers.Rand:
    name:
      CSharp:
      - id: Laga.Numbers.Rand
        name: Rand
        nameWithType: Rand
        qualifiedName: Laga.Numbers.Rand
      VB:
      - id: Laga.Numbers.Rand
        name: Rand
        nameWithType: Rand
        qualifiedName: Laga.Numbers.Rand
    isDefinition: true
    commentId: T:Laga.Numbers.Rand
  Laga.Numbers:
    name:
      CSharp:
      - name: Laga.Numbers
        nameWithType: Laga.Numbers
        qualifiedName: Laga.Numbers
      VB:
      - name: Laga.Numbers
        nameWithType: Laga.Numbers
        qualifiedName: Laga.Numbers
    isDefinition: true
    commentId: N:Laga.Numbers
