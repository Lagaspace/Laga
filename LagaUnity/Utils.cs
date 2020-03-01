using System;
using UnityEngine;

namespace LagaUnity
{
    public class Coords
    {

        private float x;
        private float y;
        private float z;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="X"></param>
        /// <param name="Y"></param>
        public Coords(float X, float Y)
        {
            x = X;
            y = Y;
            z = -1;
        }

        /// <summary>
        /// Print point coordinates
        /// </summary>
        /// <returns>string</returns>
        public override string ToString()
        {
            return "(" + x + "," + y + "," + z + ")";
        }

        /// <summary>
        /// Draw a point
        /// </summary>
        /// <param name="position"></param>
        /// <param name="width"></param>
        /// <param name="color"></param>
        static public void DrawPoint(Coords position, float width, Color color)
        {
            GameObject line = new GameObject("Point " + position.ToString());
            LineRenderer lineRenderer = line.AddComponent<LineRenderer>();
            lineRenderer.material = new Material(Shader.Find("Unlit/Color"));
            lineRenderer.material.color = color;
            lineRenderer.positionCount = 2;
            lineRenderer.SetPosition(0, new Vector3(position.x - width / 3.0f, position.y - width / 3.0f, position.z));
            lineRenderer.SetPosition(1, new Vector3(position.x + width / 3.0f, position.y + width / 3.0f, position.z));
            lineRenderer.startWidth = width;
            lineRenderer.endWidth = width;
        }

        /// <summary>
        /// Draw a line
        /// </summary>
        /// <param name="pointA"></param>
        /// <param name="pointB"></param>
        /// <param name="width"></param>
        /// <param name="color"></param>
        static public void DrawLine(Coords pointA, Coords pointB, float width, Color color)
        {
            GameObject line = new GameObject("Line " + pointA.ToString() + " - " + pointB.ToString());
            LineRenderer lineRenderer = line.AddComponent<LineRenderer>();
            lineRenderer.material = new Material(Shader.Find("Unlit/Color"));
            lineRenderer.material.color = color;
            lineRenderer.positionCount = 2;
            lineRenderer.SetPosition(0, new Vector3(pointA.x, pointA.y, pointA.z));
            lineRenderer.SetPosition(1, new Vector3(pointB.x, pointB.y, pointB.z));
            lineRenderer.startWidth = width; 
            lineRenderer.endWidth = width;
        }


    }
}
