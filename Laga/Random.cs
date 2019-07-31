﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Laga.Numbers
{
    /// <summary>
    /// Random number class
    /// </summary>
    public class Rand
    {
        /// <summary>
        /// Generate random numbers
        /// </summary>
        /// <param name="size">The amount of random values in the list</param>
        /// <param name="min">the minimum value</param>
        /// <param name="max">the maximum value</param>
        /// <returns>float[]</returns>
        public static float[] RandomNumbers(int size, float min, float max)
        {
            Random rnd = new Random();

            float[] arrN = new float[size];
            for (int i = 0; i < size; i++)
                arrN[i] = min + (float)rnd.NextDouble() * (max - min);

            return arrN;
        }
    }
}