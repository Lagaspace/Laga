using System;
using UnityEngine;

namespace LagaUnity
{
    public class Utils
    {

        public int c;

        public void AddValues(int a, int b)
        {
            c = a + b;
        }

        public static int GenerateRandom(int min, int max)
        {
            System.Random rand = new System.Random();
            return rand.Next(min, max);
        }

        public void RenameObject(GameObject gameObject, string name)
        {
            gameObject.name = name;
        }
    }
}
